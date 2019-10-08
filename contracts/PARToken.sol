pragma solidity ^0.5.0;

import "canonical-weth/contracts/WETH9.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract PARToken is ERC20 {
    /**
        @dev SafeMath node_module to Grant Protection Against UnderFlow/OverFlow Attacks in Arithmetical Operations.
    */

    string  public name = "PAR Token";
    string  public symbol = "PARToken";
    string  public standard = "PAR Token v0.1";

    uint8 public constant decimals = 18;
    uint constant _initial_supply = 21000000000000;

//    event Transfer(
//        address indexed _from,
//        address indexed _to,
//        uint256 _value
//    );
//
//    event Approval(
//        address indexed _owner,
//        address indexed _spender,
//        uint256 _value
//    );
}
