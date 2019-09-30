
pragma solidity ^0.5.0;

//import 'zeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import '../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';


// Show Weth Balance
// Show SCM Balance
// Balance to Claim by user
// Allow user to claim it's Tokens 

contract ScamToken is ERC20 {

    string public constant name = 'Scam';
    string public constant symbol = 'SCM';
    uint8 public constant decimals = 18;

    using SafeMath for uint256;
    uint constant _initial_supply = 2100000000;

   
    // const contract = require('truffle-contract');
    // const wethArtifact = requiere('cannonical-weth');
    // const weth = contract(wethArtifacts);

    //mapping(address => uint256) public balanceOf;

    mapping(address => uint256) balances;

    event Transfer(
        address indexed from, 
        address indexed to, 
        uint256 value);

    address public owner;

    function SCMToken() public {



        balances[msg.sender] = _initial_supply;
    // SCM Token Definition
        //totalSupply = _initial_supply;
        //balanceOf[msg.sender] = totalSupply;
        owner = msg.sender;
    //emit Transfer(address(0), msg.sender, _initial_supply);
    }

    function getBalanceSMC(address tokenOwner) public view returns (uint) {
        // Retrieve Balance in SMC Currency Token
        return balances[msg.sender];
    }

    function getBalanceWETH(address tokenOwner) public view returns (uint) {
        // Retrieve Balance from SCM Currency Token in WETH Cannonical Form
        return balances[msg.sender];
    }

    function transferAmount(address reciever, uint numTokens) public returns (bool) {
        // Require the Emitter to have enough funds in the current account, otherwise
        // the function will revert, send back the remaining gas and send an error message.
        if (balances[msg.sender] >= numTokens) {
            revert('Insufficient Funds/Tokens to Emit & Fulfill the Current Transaction');
        }

        // Previous Accounts Values for Later Assertion
        uint previousValueSender = balances[msg.sender];
        uint previousValueReciever = balances[reciever];

        // Transaction Operations
        balances[msg.sender] = balances[msg.sender] - numTokens;
        balances[reciever] = balances[reciever] + numTokens;
        
        // Transaction Emission
        emit Transfer(msg.sender, reciever, numTokens);

        // Assert the Proper Emission of the Transactions
        assert(balances[msg.sender] == previousValueSender - numTokens);
        assert(balances[reciever] == previousValueReciever + numTokens);
       
        return true;
    }
}

contract ICOCrowdSale {
    using SafeMath for uint256; 

    // Addresses for Owner & Wallet
    address public owner;
    address public ETHWallet;

    // ICOCroweSale Currency State
    ERC20 public ScamToken;
    bool private isFunding;
    bool public ICOCompleted;
    uint256 public tokenExchangeRate;
    uint256 public fundingGoal; 
    uint256 public heldTotal;
    uint256 public tokenAddress;
    uint256 public maxMintable;

    // Block INFO!
    uint256 public endBlock;
    uint256 public startBlock;

    modifier whenICOCompleted {
        require(ICOCompleted, 'error? SCM Token ICO Sale has been Completed!!');
        _;
    }

    modifier onlyOwner {
        require(msg.sender == owner,'error?');
        _;
    }

    mapping (address => uint256) public heldTokens;
    mapping (address => uint256) public heldTimeLine;

    event Contribution(address from, uint256 amount);
    event ReleaseToken(address from, uint256 amount);


    //constructor(uint256 _tokenExchangeRate, uint256 _fundingGoal, uint256 _tokenAddress) public {
    //    tokenExchangeRate = _tokenExchangeRate;
    //    fundingGoal = _fundingGoal;
    //    tokenAddress = _tokenAddress;
    //}


    function SaleToken(address _wallet) public {
        startBlock = block.number;
        maxMintable = 400000000000000000;
        ETHWallet = _wallet;
        isFunding = true;
        owner = msg.sender;
        createHeldCoins();
        tokenExchangeRate(600);
    }

    function closeICOSale() external {
        require(msg.sender == owner, 'Unable to close ICO Sale');
        isFunding = false;
    }

    function () playable{
        require(msg.value>0, '');

    }

    function contribute() external payable {
        require(msg.value > 0, '');
        require(isFunding, '');
        require(block.number <= endBlock);

    }


    function extractEther() public whenICOCompleted onlyOwner{
        //owner.Transfer(address(this).balance);
        return;
    }

}
