// Current Solidity Version
pragma solidity >=0.5.0 <0.6.0;

import "./tokens/CustomToken.sol";
import "canonical-weth/contracts/WETH9.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract CustomCrowdsale is Ownable {
    using SafeMath for uint256;

    // Tokens To Exchange during the Crowdsale
    WETH9 public weth9;
    CustomToken public token;

    // Caracteristics of the Crodwsale
    uint256 public rate;
    uint256 public cap;
    uint256 public contributionGoal;
    uint256 public currentContribution;

    // Time Constraint Variables
    uint256 public startingTime;
    uint256 public closingTime;
    uint256 public releaseTime;

    // Current Of the Crowdsale
    bool public ICOCompleted = false;

    // Mapping of the Contributions
    mapping (address => uint256) public contributions;

    // Events to track during the crowdsale
    event Contribution(address _from, uint256 _amount);
    event ClaimContribution(address _from, uint256 _amount);
    event CloseCrowdsale(address _from, uint256 time);
    event claimContributionPreTx(address _sender, uint256 _claimedTokens, uint256 _balance);

    // Setting Up Modifiers for the Finalize Function
    modifier whenICOCompleted {
        require(ICOCompleted, 'CustomCrowdsale Not Completed');
        require(closingTime > 0 && releaseTime < now, 'CustomCrowdsale releases the CustomTokens 2min afer');
        _;
    }

    function closeICO() public onlyOwner returns (bool) {
        ICOCompleted = true;
        emit CloseCrowdsale(msg.sender, now);
        return true;
    }

    constructor(uint256 _rate, uint256 _cap, uint256 _contributionGoal, address payable _wethAddr, address _tokenAddr, uint256 _staringTime, uint256 _closingTime, uint256 _releaseTime) public {
        rate = _rate;
        cap = _cap;
        contributionGoal = _contributionGoal;
        weth9 = WETH9(_wethAddr); // Default fallback function deposit()
        token = CustomToken(_tokenAddr); // Default fallback function not needed != address payable
        startingTime = _staringTime;
        closingTime = _closingTime;
        releaseTime = _releaseTime;

        // Current Contraints for the Constructor of the Crowdsale.
        require(startingTime > now, 'StaringTime before Now');
        require(closingTime > startingTime, 'StaringTime time after ClosingTime');
        require(cap > 0, 'Cap Value must be above 0');
        require(contributionGoal > 0, 'Goal Value must be above 0');
        require(contributionGoal > cap, 'Goal value must be above cap Value');
    }

    // Buy Funtion for the Custom Crowdsale
    function buyToken(uint256 _contribution) public returns (bool) {
        // Case: Request More than the actual amount.
        require(currentContribution < contributionGoal, 'CustomCrowdsale has succeed in the pursue of the contributionGoal');
        require(_contribution >= 0,'contribution parameter must be above 0');
        uint256 aux = 0;
        aux.add(_contribution);
        aux.add(currentContribution);
        if (aux > contributionGoal) {
            _contribution = contributionGoal.sub(currentContribution);
        }
        require(weth9.transferFrom(msg.sender, address(this), _contribution), "transferFrom() Wether has Failed");
        currentContribution = currentContribution.add(_contribution);
        contributions[msg.sender] = contributions[msg.sender].add(_contribution);
        emit Contribution(msg.sender, _contribution);
        return true;
    }


    function claimContribution() public returns (bool) {
        uint256 claimedTokens = contributions[msg.sender].mul(rate);

        emit claimContributionPreTx(msg.sender, claimedTokens, contributions[msg.sender]);
        if(contributions[msg.sender] != 0) {
            emit ClaimContribution(msg.sender, claimedTokens);
            require(token.transfer(msg.sender, claimedTokens), "transfer() CustomTokens has Failed");
            contributions[msg.sender] = 0;
            return true;
        }
        return false;
    }

    /**
     * GETTERS
     */

    function getTokenTotalSupply() public view returns(uint256) {
        return token.totalSupply();
    }
    function getWethTotalSupply() public view returns (uint256) {
        return weth9.totalSupply();
    }
    function getCurrentContribution() public view returns (uint256) {
        return currentContribution;
    }

    function getRate() public view returns (uint256) {
        return rate;
    }

    function getCap() public view returns (uint256) {
        return cap;
    }

    function getGoal() public view returns (uint256) {
        return contributionGoal;
    }

    function isCompleted() public view returns (bool) {
        return ICOCompleted;
    }

    function getStartingTime() public view returns (uint256) {
        return startingTime;
    }

    function getClosingTime() public view returns (uint256) {
        return closingTime;
    }

    function getReleaseTime() public view returns (uint256) {
        return releaseTime;
    }
}
