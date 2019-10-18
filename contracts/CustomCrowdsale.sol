// Current Solidity Version
pragma solidity >=0.5.0 <0.6.0;

/*
 * @title Imports
 * Import Ownable Module from OpenZeppelin Library
 * Import CappedCrowdSale Module from OpenZeppelin Library
 * Import RefundableCrowdSale Module from OpenZeppelin Library
 * Import Token Contract from ./PARToken.sol
 */
import "openzeppelin-solidity/contracts/crowdsale/distribution/PostDeliveryCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "./tokens/CustomToken.sol";
import "canonical-weth/contracts/WETH9.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol";

/**
 * @title PARTokenCrowdSale
 * @dev This is an Example of a Fully Fledged CrowdSale Contract.
 *
 * The Way to Add New Features to a Base CrowdSale is by Multiple Inheritance, for this Contract, we will use
 * the following Extensions:
 *
 * CappedCrowdsale - With this Contract Implementation we set a max Boundary for Raised Funds
 * RefundableCrowdsale - With this Contract Implementation we set a min Goal to be Reached and Returns Funds
 * if it's not met
 * TimedCrowdsale - With this Contract Implementation we set a Time frame for the Funds to be Raised
 *
 *
 */
contract CustomCrowdsale is TimedCrowdsale, CappedCrowdsale, RefundableCrowdsale, AllowanceCrowdsale {

    using SafeMath for uint256;
    /**
     * @param rate - Value Defining the Current Rate for the PARToken CrowdSale Exchange
     * @param wallet - Value Defining the Current Address for the Source Wallet for the PARToken CrowdSale
     * @param cap - Value Defining the Current Cap for the PARToken CrowdSale Exchange
     * @param token - Value Defining the Current Token for the PARToken CrowSale Exchange
     * @param goal - Value Defining the Current Goal for the PARToken CrowdSale Exchange
     */

    uint256 public constant wethToRaise = 10 ether;
    uint256 public releaseTime;
    uint256 public investorHardCap;
    // Mapping for _spender money
    mapping(address => uint) public balances;
    WETH9 public weth9;

    /**
 * Constructor for the CustomCrowdSale Contract
 */
    // Address payable will be
    constructor (uint256 rate, address wallet, uint256 cap, uint256 _openingTime, uint256 _closingTime, CustomToken token, uint256 goal, address payable wethAddr, uint256 _releaseTime)
    public
    Crowdsale(rate, address(uint160(wallet)), token)
    CappedCrowdsale(cap)
    RefundableCrowdsale(goal)
    TimedCrowdsale(_openingTime, _closingTime)
    AllowanceCrowdsale(wethAddr)
    {
        /**
         * As the Goal needs to be met, in order to have a Successfull PARToken Crowdsale Exchange,
         * the Value needs to be less or equal than the Cap which is the Current Limit for Accepted Funds.
         */
        require(goal <= cap, "CustomCrowdSale: goal is greater than cap");
        releaseTime = _releaseTime;
    }

    /**
     * The address and address payable types both store a 160-bit Ethereum address. The concept of payable
     * and non-payable addresses only exists in the Solidity type system at compile-time. The difference between
     * payable and non-payable addresses is gone in the compiled contract code.
     */
//    function buyToken(address payable wallet, uint256 _amount) public {
//        require(amount + heldTotal <= goal);
//
//        // hacer set a 0 medida preventiva en el allowance
//        // hacer approve x cantidad de pasta al weth9 tokenAddress
//        // hacer el allowance x cantidad de pasta al weth9 tokenAddress
//    }

    /**
      * @dev Returns the amount contributed so far by a sepecific user.
      * @param _beneficiary Address of contributor
      * @return User contribution so far
      */
//        function getUserContribution(address _beneficiary)
//        public view returns (uint256)
//        {
//            return balances[_beneficiary];
//        }

    /**
* @dev Extend parent behavior requiring purchase to respect investor min/max funding cap.
* @param _beneficiary Token purchaser
* @param _weiAmount Amount of wei contributed
*/
//    function _preValidatePurchase(
//        address _beneficiary,
//        uint256 _weiAmount
//    )
//    internal onlyWhileOpen
//    {
//        super._preValidatePurchase(_beneficiary, _weiAmount);
//        uint256 _existingContribution = balances[_beneficiary];
//        uint256 _newContribution = _existingContribution.add(_weiAmount);
//        require(_newContribution <= investorHardCap);
//        balances[_beneficiary] = _newContribution;
//    }

//
//
//    function buyToken(uint _amount) public returns (bool) {
//        require(_amount + storedWeth >= wethToRaise, 'Not Enough Tokens');
//        _amount = wethToRaise.sub(storedWeth);
//
//        closedOn = now;
//        emit Closed(msg.sender, closedOn);
//
//        require(weth9.transferFrom(msg.sender, address(this), _amount), "Cannot transfer WEth");
//        storedWeth = storedWeth.add(_amount);
//        balances[msg.sender] = balances[msg.sender].add(_amount);
//
//        emit Invest(msg.sender, _amount);
//        return true;
//    }
//
//
}