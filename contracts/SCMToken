
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