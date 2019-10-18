// Current Solidity Version
pragma solidity >=0.5.0 <0.6.0;

import "canonical-weth/contracts/WETH9.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract SafeWETH9 is WETH9 {
    using SafeMath for uint256;

    string public name     = "Wrapped Ether";
    string public symbol   = "WETH";
    uint8  public decimals = 18;

    event  Approval(address indexed src, address indexed guy, uint wad);
    event  Transfer(address indexed src, address indexed dst, uint wad);
    event  Deposit(address indexed dst, uint wad);
    event  Withdrawal(address indexed src, uint wad);

    mapping (address => uint)                       public  balanceOf;
    mapping (address => mapping (address => uint))  public  allowance;

    function() external payable {
        deposit();
    }

    function deposit() public payable {
        balanceOf[msg.sender] = balanceOf[msg.sender].add(msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint _amount) public {
        require(balanceOf[msg.sender] >= _amount, "Not enough Ether to Withdraw!!");
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_amount);
        msg.sender.transfer(_amount);
        emit Withdrawal(msg.sender, _amount);
    }

    function approve(address guy, uint wad) public returns (bool) {
        allowance[msg.sender][guy] = wad;
        emit Approval(msg.sender, guy, wad);
        return true;
    }

    function transfer(address dst, uint wad) public returns (bool) {
        return transferFrom(msg.sender, dst, wad);
    }

    function transferFrom(address src, address dst, uint _amount)
    public
    returns (bool)
    {
        require(balanceOf[src] >= _amount);

        if (src != msg.sender && allowance[src][msg.sender] != uint(-1)) {
            require(allowance[src][msg.sender] >= _amount, "Not Enough Ether for Allowance!!");
            allowance[src][msg.sender] = allowance[src][msg.sender].sub(_amount);
        }

        balanceOf[src] = balanceOf[src].sub(_amount);
        balanceOf[dst] = balanceOf[dst].add(_amount);
        emit Transfer(src, dst, _amount);

        return true;
    }

    function getWethBalance(address addr) public view returns(uint) {
        return balanceOf[addr];
    }

    function totalSupply() public view returns (uint) {
        return address(this).balance;
    }

}