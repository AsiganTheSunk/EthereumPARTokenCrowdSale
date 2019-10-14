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


//import "openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
//import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Current Solidity Version
pragma solidity ^0.5.0;

/*
 * @title Imports
 * Import Ownable Module from OpenZeppelin Library
 * Import CappedCrowdSale Module from OpenZeppelin Library
 * Import RefundableCrowdSale Module from OpenZeppelin Library
 * Import Token Contract from ./PARToken.sol
 */
import "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/distribution/RefundableCrowdsale.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "./PARToken.sol";

/**
 * @title PARTokenCrowdSale
 * @dev This is an Example of a Fully Fledged CrowdSale Contract.
 *
 * The Way to Add New Features to a Base CrowdSale is by Multiple Inheritance, for this Contract, we will use
 * the following Extensions:
 *
 * CappedCrowdsale - With this Contract Implementation we sets a max Boundary for Raised Funds
 * RefundableCrowdsale - With this Contract Implementation set a min Goal to be Reached and Returns Funds
 * if it's not met
 *
 */
contract PARTokenCrowdSale is CappedCrowdsale, RefundableCrowdsale {

    /**
     * @param rate - Value Defining the Current Rate for the PARToken CrowdSale Exchange
     * @param wallet - Value Defining the Current Address for the Source Wallet for the PARToken CrowdSale
     * @param cap - Value Defining the Current Cap for the PARToken CrowdSale Exchange
     * @param token - Value Defining the Current Token for the PARToken CrowSale Exchange
     * @param goal - Value Defining the Current Goal for the PARToken CrowdSale Exchange
     */

    constructor (
        uint256 rate,
        address payable wallet,
        uint256 cap,
        PARToken token,
        uint256 goal
    )

    /**
     * Constructor for the PARTokenCrowdSale Contract
     */
    public
    Crowdsale(rate, wallet, token)
    CappedCrowdsale(cap)
    RefundableCrowdsale(goal)
    {
        /**
         * As the Goal needs to be met, in order to have a Successfull PARToken Crowdsale Exchange,
         * the Value needs to be less or equal than the Cap which is the Current Limit for Accepted Funds.
         */
        require(goal <= cap, "SampleCrowdSale: goal is greater than cap");
    }
}