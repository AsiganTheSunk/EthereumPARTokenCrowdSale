// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Current Solidity Version
pragma solidity ^0.5.0;

/*
 * @title Imports
 * Import ERC20Detailed Module from OpenZeppelin Library
 * Import SafeMath Module from OpenZeppelin Library
 * Import WETH9 Module from Canonical-Weth Library
 * Import Convert Library Contract from ./ConvertLib.sol
 */

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "canonical-weth/contracts/WETH9.sol";
import "./ConvertLib.sol";

/**
 * @title PARToken
 * @dev Very Simple ERC20Detailed Token.
 * It is meant to be used in the PARToken CrowdSale Contract.
 */

contract PARToken is ERC20Detailed {
    /**
      * Use SafeMath for uint256 Operations to prevent UnderFlow/OverFlow
      */
    using SafeMath for uint256;

    // BalanceOf
    // Allowance
    mapping (address => uint256)                       public  balanceOf;
    mapping (address => mapping (address => uint256))  public  allowance;

    /**
     * Transfer Event
     */
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
      * Constructor for the PARToken Contract
      */
    constructor () public ERC20Detailed("PARToken Currency", "PAR-TKC", 18) {
        balanceOf[tx.origin] = 10000;
    }

    // Total Supply for the Current PARToken
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


    /**
     * Code Snippet For WETH Contract
     */

    //    WETH9_ WETH = WETH9_(0xd0a1e359811322d97991e03f863a0c30c2cf029c);
    //    address WETHAddress = 0xd0a1e359811322d97991e03f863a0c30c2cf029c;
    //
    //    //Deposit WETH to the User Account
    //    function depositWETH() public payable {
    //        require(etherBalance[msg.sender] + msg.value>etherBalance[msg.sender], "Overflow in the Ether Balance");
    //        WETH.deposit.value(msg.value)();
    //        emit Deposit(msg.sender, msg.value);
    //        etherBalance[msg.sender] += msg.value; // ??
    //    }
}

