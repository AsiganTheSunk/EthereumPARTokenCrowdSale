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
    // Use SafeMath for uint256 Operations to prevent UnderFlow/OverFlow
    using SafeMath for uint256;

    // Mappings for Balance and Allowance
    mapping (address => uint256)                       public  balanceOf;
    mapping (address => mapping (address => uint256))  public  allowance;

    /**
     * Events to track during CustomToken operations
     */
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
      * Constructor for the CustomToken Contract
      */
    constructor (uint256 _amount) public ERC20Detailed("Custom Token Currency", "CTC", 18) {
        balanceOf[msg.sender] = _amount;
    }

    // Total Supply Function for the CustomToken
    function totalSupply() public view returns (uint256) {
        return address(this).balance;
    }

    // Approve Function for the CustomToken
    function approve(address addr, uint _amount) public returns (bool) {
        allowance[msg.sender][addr] = _amount;
        emit Approval(msg.sender, addr, _amount);
        return true;
    }

    // Transfer Function for the CustomToken
    function transfer(address dst, uint _amount) public returns (bool) {
        return transferFrom(msg.sender, dst, _amount);
    }

    // TransferFrom Function for the CustomToken
    function transferFrom(address src, address dst, uint _amount) public returns (bool) {
        require(balanceOf[src] >= _amount,'');
        if (src != msg.sender && allowance[src][msg.sender] != uint(-1)) {
            require(allowance[src][msg.sender] >= _amount, 'not enough Allowance ');
            allowance[src][msg.sender] = allowance[src][msg.sender].add(_amount);
        }

        balanceOf[src] = balanceOf[src].sub(_amount);
        balanceOf[dst] = balanceOf[dst].add(_amount);

        emit Transfer(src, dst, _amount);
        return true;
    }

    // GetBalance Function for the CustomCrowdsale
    function getBalance(address addr) public view returns(uint) {
        return balanceOf[addr];
    }
}

