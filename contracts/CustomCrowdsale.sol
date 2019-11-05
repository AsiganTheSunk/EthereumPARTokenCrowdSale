// Current Solidity Version
pragma solidity >=0.5.0 <0.6.0;

/*
 * @title Imports
 * Import CustomToken Module from CustomToken.sol
 * Import Ownable Module from cannonical-weth Library
 * Import SafeMath Module from openzeppelin Library
 */
import "./tokens/CustomToken.sol";
import "canonical-weth/contracts/WETH9.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * @title CustomCrowdsale Params
 * rate - Value Defining the Current Rate for the CustomCrowdsale
 * cap - Value Defining the Current Cap for the CustomCrowdsale
 * WETH9 - Value Defining the Current WETH9 Token for the CustomCrowdsale
 * CustomToken - Value Defining the Current CustomToken for the CustomCrowdsale
 * contributionGoal - Value Defining the Current Goal for the CustomCrowdsale
 * currentContribution - Value Defining currentContribution status for the CustomCrowdsale
 * startingTime - Value Defining the startingTime for the CustomCrowdsale
 * closingTime - Value Defining the closingTime for CustomCrowdsale
 * releaseTime - Value Defining the releaseTime for CustomCrowdsale
 * ICOCompleted - Value Defining the Open/Close status for CustomCrowdsale
 * ICOGoalReached - Value Defining the status for the contributionGoal in CustomCrowdsale
 * contributions - Value Defining the every buy until claim in CustomCrowdsale
 */
contract CustomCrowdsale is Ownable {
    using SafeMath for uint;

    // Tokens To Exchange during the CustomCrowdsale
    WETH9 public weth9;
    CustomToken public token;

    // Caracteristics of the CustomCrowdsale
    uint public rate;
    uint public cap;
    uint public contributionGoal;
    uint public currentContribution = 0 ether;

    // Time Constraint Variables for the CustomCrowdsale
    uint public startingTime;
    uint public closingTime;
    uint public releaseTime;

    // Current Status for the CustomCrowdsale
    bool public ICOCompleted = false;
    bool public ICOGoalReached = false;

    // Mapping of the Contributions for the CustomCrowdsale
    mapping (address => uint) public contributions;

    /**
      * Events to track during CustomCrowsale operations
      */
    event Contribution(address _from, uint _amount);
    event ClaimContribution(address _from, uint _amount);
    event CloseCrowdsale(address _from, uint time);
    event claimContributionPreTx(address _sender, uint _claimedTokens, uint _balance);

    //event claimContributionPostTx();
    //event openCrowdsale();

    // Setting Up Modifiers evaluating the status Open/Close for the CustomCrowdsale
    modifier whenICOCompleted {
        require(ICOCompleted, 'CustomCrowdsale Not Completed');
        require(now >= releaseTime, 'CustomCrowdsale releases the CustomTokens 2min after');
        _;
    }

    modifier whenICONOtCompleted {
        require(!ICOCompleted, 'CustomCrowdsale Not Completed');
        require(closingTime >= now, 'CustomCrowdsale releases the CustomTokens 2min after');
        _;
    }

    // Close function, only the owner of the CustomCrowdsale can call this function
    function closeICO() public onlyOwner returns (bool) {
        ICOCompleted = true;
        emit CloseCrowdsale(msg.sender, now);
        return true;
    }

    // Contract Constructor for CustomCrowdsale
    // NOTE: Only a contracts with fallback function needs address playable. deposit()
    constructor(uint _rate, uint _cap, uint _contributionGoal, address payable _wethAddr, address _tokenAddr, uint _staringTime, uint _closingTime, uint _releaseTime) public {
        rate = _rate;
        cap = _cap;
        contributionGoal = _contributionGoal;
        weth9 = WETH9(_wethAddr);
        token = CustomToken(_tokenAddr);
        startingTime = _staringTime;
        closingTime = _closingTime;
        releaseTime = _releaseTime;

        /**
          * Requirements Time constraints, cap, contributionGoal for the Constructor of the CustomCrowdsale
          */
        // Requirement startingTime must be after than Now
        require(startingTime > now, 'StaringTime before Now');
        // Requirement closingTime must be after startingTime
        require(closingTime > startingTime, 'StaringTime time after ClosingTime');
        // Requirement for the Cap constraint
        require(cap > 0, 'Cap Value must be above 0');
        // Requirement contributionGoal must be higher than 0
        require(contributionGoal > 0, 'Goal Value must be above 0');
        // Requirement contributionGoal must be higher than the Cap
        require(contributionGoal > cap, 'Goal value must be above cap Value');
    }

    // hace falta añadir una funcion de fallback para poder cambiar imagino el msg.sender cuando se llama a la funcion.
    function() external payable {
        buyToken();
    }

    // Buy Funtion for the CustomCrowdsale
    function buyToken() public whenICONOtCompleted payable returns (bool) {
            uint _contribution = msg.value;
            // Requirement contribution must be less than the Cap
            require(_contribution < cap, 'CustomCrowdsaled buyToken() has exceed the cap');
            // Requirement currentContribution must be less than the contributionGoal
            require(currentContribution < contributionGoal, 'CustomCrowdsale has succeed in the pursue of the contributionGoal');
            // Requirement contribution must be higher than 0 in the CustomCrowdsale
            require(_contribution >= 0,'contribution parameter must be above 0');

            uint aux = 0;
            aux.add(_contribution);
            aux.add(currentContribution);
            // If the current buy does not exceed the cap but overreaches the actual contributionGoal, the tokens left would be sold instead
            if (aux > contributionGoal) {
                _contribution = contributionGoal.sub(currentContribution);
                ICOGoalReached = true;
            }
            // Requirement transferForm must be successful
            require(weth9.transferFrom(msg.sender, address(this), _contribution), "transferFrom() Wether has Failed");
            currentContribution = currentContribution.add(_contribution);
            contributions[msg.sender] = contributions[msg.sender].add(_contribution);
            // Emit Current Status Post BuyToken
            emit Contribution(msg.sender, _contribution);
            return true;
    }

    // Claim Function for the CustomCrowdsale
    function claimContribution() public whenICOCompleted returns (uint) {
        // Calculate the Exchange Rate
        uint claimedTokens = contributions[msg.sender].mul(rate);
        //token.amount = token.amount.sub(claimedTokens);
        // Emit Current Status Pre Claim
        emit claimContributionPreTx(msg.sender, claimedTokens, contributions[msg.sender]);
        if(contributions[msg.sender] != 0) {
            // Requirement transfer must be successful
            //require(token.transfer(msg.sender, claimedTokens), "transfer() CustomTokens has Failed");
            require(token.transferFrom(address(this), msg.sender, claimedTokens), "transferFrom() CTC has Failed");
            // Emit Current Status Post Claim
            emit ClaimContribution(msg.sender, claimedTokens);
            // Set the contribution of the sender to 0
            contributions[msg.sender] = 0;
            return claimedTokens;
        }
        return 0;
    }

    /**
     * GETTERS
     */

    // Total Tokens held in the CustomCrowdsale
    function getTokenTotalSupply() public view returns(uint) {
        return token.totalSupply();
    }

    function getTokenToClaim(address contributor) public view returns(uint) {
        return contributions[contributor] * rate;
    }


    // Total WETH9 held in the CustomCrowdsale
    function getWethTotalSupply() public view returns (uint) {
        return weth9.totalSupply();
    }

    // Current Contributions
    function getCurrentContribution() public view returns (uint) {
        return currentContribution;
    }

    // Current Rate in the CustomCrowdsale
    function getRate() public view returns (uint) {
        return rate;
    }

    // Current Cap in the CustomCrowdsale
    function getCap() public view returns (uint) {
        return cap;
    }

    // Current Goal in the CustomCrowdsale
    function getGoal() public view returns (uint) {
        return contributionGoal;
    }

    // Current Completed Status in the CustomCrowdsale
    function isCompleted() public view returns (bool) {
        return ICOCompleted;
    }

    // Current Starting Time in the CustomCrowdsale
    function getStartingTime() public view returns (uint) {
        return startingTime;
    }

    // Current ClosingTime in the CustomCrowdsale
    function getClosingTime() public view returns (uint) {
        return closingTime;
    }

    // Current ReleaseTime in the CustomCrowdsale
    function getReleaseTime() public view returns (uint) {
        return releaseTime;
    }
}
