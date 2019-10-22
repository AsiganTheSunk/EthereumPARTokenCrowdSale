// Current Solidity Version
pragma solidity >=0.5.0 <0.6.0;

import "./tokens/CustomToken.sol";
import "canonical-weth/contracts/WETH9.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract CustomCrowdsale is Ownable {
    using SafeMath for uint256;

    // Attr of the Custom Crowdsale
    WETH9 public weth9;
    CustomToken public token;
    uint256 public rate = 2;
    uint256 public cap = 10 ether;
    bool public ICOCompleted = false;
    uint256 public contributionGoal = 50 ether;
    uint256 public currentContribution = 0 ether;

    //address public onwer = this.owner();
    // uxio dice que staring u
    uint256 public startingTime;
    uint256 public closingTime;
    uint256 public releaseTime;
    uint256 public numberOfContributions;

    // Mapping of the Contributions
    mapping (address => uint256) public contributions;

    // Events to track during the crowdsale
    event Contribution(address _from, uint256 _amount);
    event ClaimContribution(address _from, uint256 _amount);
    event CloseCrowdsale(address _from, uint256 time);

    // Setting Up Modifiers for the Finalize Function
    modifier whenICOCompleted {
        require(ICOCompleted, 'Token ICO not Completed!!');
        require(closingTime > 0 && (closingTime + 2 minutes) < now, 'Ico not closed');
        _;
    }

    // Constructor for the CustomCrowdsale
    constructor(uint256 _rate, uint256 _cap, uint256 _contributionGoal, address payable _wethAddr, address _tokenAddr, uint256 _staringTime, uint256 _closingTime, uint256 _releaseTime) public {
        closingTime = _closingTime;
        startingTime = _staringTime;
        releaseTime = _releaseTime;
        rate = _rate;
        cap = _cap;
        contributionGoal = _contributionGoal;
        token = CustomToken(_tokenAddr);        // Default fallback function not needed != address payable
        weth9 = WETH9(_wethAddr);               // Default fallback function deposit() 

        require(startingTime >= now, 'Opening time is before current time');
        require(closingTime > startingTime, 'Opening time is not before closing time');
        require(cap > 0, 'Cap value must be more than 0');
        require(contributionGoal > 0, 'Goal value must be more than 0');
        require(contributionGoal > cap, 'Goal value must be more than Cap value');
    }

    // Buy Funtion for the Custom Crowdsale
    function buyToken(uint256 _contribution) public returns (bool) {
        if (_contribution + currentContribution >= contributionGoal) {
            _contribution = contributionGoal.sub(currentContribution);
            require(_contribution >= 0, 'There is no more tokens');
        }
        require(weth9.transferFrom(msg.sender, address(this), _contribution), "Unable to transfer");
        currentContribution = currentContribution.add(_contribution);
        contributions[msg.sender] = contributions[msg.sender].add(_contribution);
        emit Contribution(msg.sender, _contribution);
        return true;
    }

    function closeICO() public onlyOwner returns (bool) {
        ICOCompleted = true;
        emit CloseCrowdsale(msg.sender, now);
        return true;
    }

    function claimContribution() public returns (bool) {
        uint256 currentTokens = contributions[msg.sender] * rate;

        if (currentTokens > 0) {
            require(token.transferFrom(address(token), msg.sender, currentTokens), "Unable to transfer");
            contributions[msg.sender] = 0;
            emit ClaimContribution(msg.sender, currentTokens);
        }
        return true;
    }

    function getWethTotalSupply() public view returns (uint256) {
        return weth9.totalSupply();
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

    function getCurrentContribution() public view returns (uint256) {
        return currentContribution;
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

    function getTokens() public view returns (uint256) {
        return token.totalSupply();
    }
}
