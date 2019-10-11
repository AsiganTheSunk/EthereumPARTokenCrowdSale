pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "./ConvertLib.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "canonical-weth/contracts/WETH9.sol";

/**
 * @title PARToken CrowdSaleToken
 * @dev Very simple ERC20 Token.
 * It is meant to be used in a CrowdSale Contract.
 */
contract PARToken is ERC20Detailed {
    using SafeMath for uint256;

    mapping (address => uint256)                       public  balanceOf;
    mapping (address => mapping (address => uint256))  public  allowance;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor () public ERC20Detailed("PARToken Currency", "PAR-TKC", 18) {
        balanceOf[tx.origin] = 10000;
    }

    function totalSupply() public view returns (uint) {
        return address(this).balance;
    }

    function approve(address guy, uint wad) public returns (bool) {
        allowance[msg.sender][guy] = wad;
        emit Approval(msg.sender, guy, wad);
        return true;
    }

    function transfer(address dst, uint wad) public returns (bool) {
        return transferFrom(msg.sender, dst, wad);
    }

    function transferFrom(address src, address dst, uint wad) public returns (bool) {
        require(balanceOf[src] >= wad);
        if (src != msg.sender && allowance[src][msg.sender] != uint(-1)) {
            require(allowance[src][msg.sender] >= wad);
            allowance[src][msg.sender] = allowance[src][msg.sender].add(wad);
        }

        balanceOf[src] = balanceOf[src].sub(wad);
        balanceOf[dst] = balanceOf[dst].add(wad);

        emit Transfer(src, dst, wad);
        return true;
    }


    // TO BE IMPLEMENTED
    function getBalanceInWEth(address addr) public view returns(uint){
        return ConvertLib.convert(getBalance(addr),2);
    }

    function getBalanceInEth(address addr) public view returns(uint){
        return ConvertLib.convert(getBalance(addr),2);
    }

    function getBalance(address addr) public view returns(uint) {
        return balanceOf[addr];
    }
}

