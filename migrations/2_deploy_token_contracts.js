const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Deployment Artifacts for the CustomToken, WETH9 & SafeWETH9 Contracts
var myWETH9 = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myToken = artifacts.require("./CustomToken.sol");

// Deployment
module.exports = function(deployer) {
    // Deployment Default Variables for CustomToken Contract
    var token_quantity = 1000;

    // Artifact Deployment for Custom Contract
    deployer.deploy(myToken, token_quantity);

    // Artifact Deployment for WETH9 Contract
    deployer.deploy(myWETH9);
};