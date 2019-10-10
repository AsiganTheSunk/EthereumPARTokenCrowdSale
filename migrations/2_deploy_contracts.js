const MyToken = artifacts.require("../contracts/PARToken.sol");
const MyTokenCrowdSale = artifacts.require("../contracts/PARTokenCrowdSale.sol");
const Web3 = require('web3')

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(MyToken);
    const token = await MyToken.deployed();
  
    var date = new Date();
    const startTime = Math.floor((date.getTime() - date.getTimezoneOffset())/1000);
    const openingTime = startTime + 5;
    const closingTime = startTime + 7 * 24 * 60 * 60;
    const rate = '1';
    const wallet = '0xfc14816D16c5E62f5B7DB9B8b0372D7C92F6aA47';
    const cap = "1000000000000000000000000";
    const goal = "10000000000000"
  
    await deployer.deploy(MyTokenCrowdSale, openingTime, closingTime, rate, wallet, cap, token.address, goal);
  

    const crowdsale = await MyTokenCrowdSale.deployed();
  
    await token.addMinter(crowdsale.address);
    await token.renounceMinter();
  
    await crowdsale.setCap(accounts[0], "100000000000000000000")
  };