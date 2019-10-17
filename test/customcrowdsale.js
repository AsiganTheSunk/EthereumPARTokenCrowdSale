//const { balance, BN, constants, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var mySafeWeth = artifacts.require("../contracts/tokens/SafeWETH9.sol");
var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myConvertLib = artifacts.require("../contracts/lib/ConvertLib.sol");


contract('CustomCrowdsale', (accounts) => {
    it('[Init]: Contract should have a Default Rate of 10', async () => {
        // Default Values
        var accountOne = accounts[0];
        var expected_rate = 10;

        //var myCustomTokenInstance = await myToken.deployed();
        //var myCustomCrowdsaleInstance = await myCrowdsale.deployed();

    });

    it('[Init]: Contract should have a Default Cap of 100', async () => {
        // Default Values
        var accountOne = accounts[0];
        var expected_rate = 10;

        //var myCustomTokenInstance = await myToken.deployed();
        //var myCustomCrowdsaleInstance = await myCrowdsale.deployed();

    });
    it('[Init]: Contract should have a Default Goal 50', async () => {
        // Default Values
        var accountOne = accounts[0];
        var expected_rate = 10;

        //var myCustomTokenInstance = await myToken.deployed();
        //var myCustomCrowdsaleInstance = await myCrowdsale.deployed();

    });
    it('[Init]: Contract should have a Default Release Time of 2 min', async () => {
        // Default Values
        var accountOne = accounts[0];
        var expected_rate = 10;

        //var myCustomTokenInstance = await myToken.deployed();
        //var myCustomCrowdsaleInstance = await myCrowdsale.deployed();

    });
});