// Current Solidity Version
pragma solidity >=0.5.0 <0.6.0;

/*
 * @title Imports
 * Import ERC20Detailed Module from OpenZeppelin Library
 * Import SafeMath Module from OpenZeppelin Library
 */
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title CustomToken
 * It is meant to be used in the CustomCrowdsale Contract.
 */
contract CustomToken is ERC20Detailed, Ownable {
    // Use SafeMath for uint Operations to prevent UnderFlow/OverFlow
    using SafeMath for uint;
    uint amount;
    // Mappings for Balance and Allowance
    mapping (address => uint)                       public  balanceOf;
    mapping (address => mapping (address => uint))  public  allowance;

    // Events to track during CustomToken operations
    event Transfer(address indexed _from, address indexed _to, uint _value);
    event Approval(address indexed _from, address indexed _to, uint _value);

    // Constructor for the CustomToken Contract
    constructor (uint wad) public ERC20Detailed("Custom Token Currency", "CTC", 18) {
        balanceOf[msg.sender] = wad;
        amount = wad;
    }

    // Total Supply Function for the CustomToken
    function totalSupply() public view returns (uint) {
        return address(this).balance;
    }

    // Approve Function for the CustomToken
    function approve(address addr, uint wad) public returns (bool) {
        allowance[msg.sender][addr] = wad;
        emit Approval(msg.sender, addr, wad);
        return true;
    }

    // Transfer Function for the CustomToken
    function transfer(address dst, uint wad) public returns (bool) {
        return transferFrom(msg.sender, dst, wad);
    }

    // TransferFrom Function for the CustomToken
    function transferFrom(address src, address dst, uint wad) public returns (bool) {
        require(balanceOf[src] >= wad,'Not Enough Funds');

        if (src != msg.sender && allowance[src][msg.sender] != uint(-1)) {
            require(allowance[src][msg.sender] >= wad, 'Not enough Allowance ');
            allowance[src][msg.sender] = allowance[src][msg.sender].add(wad);
        }
        balanceOf[src] = balanceOf[src].sub(wad);
        balanceOf[dst] = balanceOf[dst].add(wad);
        emit Transfer(src, dst, wad);
        return true;
    }

    // getAmount Init CustomTokens from the contract
    function getAmount() public view returns(uint) {
        return amount;
    }

    // GetBalance Function for the CustomCrowdsale
    function getBalance(address addr) public view returns(uint) {
        return balanceOf[addr];
    }
}
