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


pragma solidity ^0.5.0;

/*
    @dev Import Custom Token from Module PARToken.
*/
import "./PARToken.sol";

/*
    @dev Import Ownable Module from OpenZeppelin.
*/
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/*
    @dev Import Module Cannonical-Weth.
*/
import "canonical-weth/contracts/WETH9.sol";


/**
    @dev Ownable node_module to Grant Ownable Properties to the Contract CrowdSale.
*/
contract CrowdSale is Ownable {
    /**
        @dev SafeMath node_module to Grant Protection Against UnderFlow/OverFlow Attacks in Arithmetical Operations.
    */
    using SafeMath for uint256;
    /**
        @dev _owner Current Owner of the Contract CrowdSale Operation.
    */
    address private _owner;

    /**
        @dev startDate Starting Point for the CrowdSale PARToken Sale Operation.
        @dev stopDate Ending Point for the CrowdSale PARToken Sale Operation.
    */

    uint256 public startDate;
    uint256 public stopDate;

    /**
        @dev fundingGoal Funding Goal for the CrowdSale PARToken Sale Operation.
        @dev amountRaised Current Amount of Funding for the CrowdSale PARToken Sale Operation.
    */
    uint256 public fundingGoal;
    uint256 public amountRaised;
    bool public crowdSaleCompleted;


    PARToken public tokenContract;

    uint256 public tokenPrice;
    uint256 public tokensSold;

    // event Sell(address _buyer, uint256 _amount);

    /**
        @dev GoalReached.
        @dev PARTokenSale.
        @dev PARTokenSalesReport.
    */
    event GoalReached(address _receiver, uint256 _amount);
    event PARTokenSale(address _buyer, uint256 _amount);
    event PARTokenSalesReport(uint256 _amount);


    /**

    */
    function CrowdPARTokenSale(
        uint256 _startDate,
        uint256 _stopDate,
        uint256 _fundingGoal,
        PARToken _tokenContract,
        uint256 _tokenPrice) public {

        startDate = _startDate;
        stopDate =_stopDate;

        fundingGoal = _fundingGoal;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    /**
        @dev getCurrentTimeStamp.
    */
    function getCurrentTimeStamp() internal view returns (uint256) {
        return now;
    }

    /**
        @dev isCrowdSaleActive.
    */
    function isCrowdSaleActive() public view returns (bool) {
        return (now >= startDate && now <= stopDate && amountRaised < fundingGoal);
    }

    /**
        @dev isCrowdSaleActive.
    */
    function isCrowdSaleFinished() public view returns (bool) {
        return (now > stopDate);
    }

    /**
        @dev isCrowdSaleActive.
    */
    function isCrowdSaleCompleted() public view returns (bool){
        return (now > stopDate && amountRaised > fundingGoal);
    }

    /**
        @dev !isContractSaleActive() CrowdSale Operation must be Active.
        @dev isCrowdSaleFinished() CrowdSale Operation within the Established Limits / Time Frame.
        @dev tokeContract.
    */
    function finishCrowdSale() public onlyOwner {
        require(!isCrowdSaleActive(), '[ ERROR ] Requirement not Achieved, CrowdSale is no Longer Active');
        require(isCrowdSaleFinished(), '[ ERROR ] Requirement not Achieved, Current Time Frame not Valid ( now < stopDate )');

        require(tokenContract.transfer(_owner, tokenContract.balanceOf(_owner)), '[ Error ] ');
    }


    /**

    */
    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x.mul(y)) / y == x, '[ Error ] Multiply Requirements Not Met');
        return z;
    }

    /**

    */
    function buyTokens(uint256 _numberOfTokens) public payable {
        require(!isCrowdSaleCompleted(), '[ ERROR ] Funds for the CrowdSale has Already been Achieved ');
        require(isCrowdSaleActive(), '[ ERROR ] Requirement not Achieved, CrowdSale is no Longer Active');



        require(msg.value == multiply(_numberOfTokens, tokenPrice), '[ Error ] Multiply Requirements Not Met');
        require(tokenContract.balanceOf(_owner) >= _numberOfTokens, '[ Error ] Multiply Requirements Not Met');
        require(tokenContract.transfer(msg.sender, _numberOfTokens), '[ Error ] Multiply Requirements Not Met');

        /**
            @dev tokensSold.
            @dev amountRaised.
        */
        tokensSold = tokensSold.add(_numberOfTokens);
        amountRaised = multiply(tokenPrice, tokensSold);

        /**
            @dev PARTokenSale.
            @dev PARTokenSalesReport.
        */
        emit PARTokenSale(msg.sender, _numberOfTokens);
        emit PARTokenSalesReport(amountRaised);
    }
}
