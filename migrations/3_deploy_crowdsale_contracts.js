// Deployment Artifact for the Custom Crowdsale Contract
var myCustomCrowdSale = artifacts.require("./CustomCrowdsale.sol");

// Deployment Artifact for the ConvertLib Linked Library
var myConvertLib = artifacts.require("./ConvertLib.sol");

// Deployment Artifacts for the CustomToken, WETH9 & SafeWETH9 Contracts
var myWETH9 = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myCustomToken = artifacts.require("./CustomToken.sol");
var mySafeWETH9 = artifacts.require('./SafeWETH9.sol');

//var ether = (n) => new web3.BigNumber(web3.toWei(n, 'ether'));

const duration = {
  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  years: function (val) { return val * this.days(365); },
};

module.exports = async function(deployer, accounts, [owner]) {
    // Deployment Variables for the CustomCrowdsale Contract

    // Default Time Constraints for the CustomCrowdsale Contract
    var latestTime  = (new Date).getTime();
    var openingTime = latestTime + duration.minutes(1);
    var closingTime = openingTime + duration.minutes(5);
    var releaseTime = closingTime + duration.minutes(2);

    // Default Cap/Goal Contraints for the CustomCrowdsale Contract
    var rate        = 10;
    var cap         = 100;
    var goal        = 50;

    deployer.deploy(myCustomCrowdSale, rate, owner, cap, openingTime, closingTime,
                    myCustomToken.address, goal, mySafeWETH9.address, releaseTime).then(async () => {

        var myCustomTokenInstance = await myCustomToken.deployed();
        var mySafeWETH9Instance = await mySafeWETH9.deployed();
        var myWETH9Instance = await myWETH9.deployed();
        var totalSupply = await myCustomTokenInstance.totalSupply();

        // Transfer CustomTokens To the Crowdsale Contract
        await myCustomTokenInstance.transfer(myCustomCrowdSale.address, totalSupply);
    });
};