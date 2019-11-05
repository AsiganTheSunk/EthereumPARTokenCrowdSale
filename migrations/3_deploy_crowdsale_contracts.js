// Deployment Artifact for the Custom Crowdsale Contract
var myCustomCrowdSale = artifacts.require("./CustomCrowdsale.sol");

// Deployment Artifacts for the CustomToken, WETH9 & SafeWETH9 Contracts
var myWETH9 = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myCustomToken = artifacts.require("./CustomToken.sol");

const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

module.exports = async function(deployer, accounts, [owner]) {
    // Deployment Variables for the CustomCrowdsale Contract

    // Default Cap/Goal Contraints for the CustomCrowdsale Contract
    var rate            = 2;
    var cap             = ether('10');
    var goal            = ether('50');

    // Default Time Constraints for the CustomCrowdsale Contract
    var latestTime      = (new Date).getTime();
    var startingTime    = (new Date).setTime(latestTime + (60 * 1000));
    var closingTime     = (new Date).setTime(startingTime + (60 * 5 * 1000));
    var releaseTime     = (new Date).setTime(closingTime + (60 * 2 * 1000));

    deployer.deploy(myCustomCrowdSale, rate, cap, goal, myWETH9.address, myCustomToken.address,
                    startingTime, closingTime, releaseTime).then(async () => {

        var myCustomTokenInstance = await myCustomToken.deployed();
        var totalSupply = await myCustomTokenInstance.getBalance(owner);

        // Transfer CustomTokens To the Crowdsale Contract
        await myCustomTokenInstance.transferOwnership(myCustomCrowdSale.address);
        await myCustomTokenInstance.transfer(myCustomCrowdSale.address, totalSupply);
    });
};

