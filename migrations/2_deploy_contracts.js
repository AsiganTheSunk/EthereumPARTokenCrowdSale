var PARTokenCrowdSale = artifacts.require("../contracts/par_token_crowd_sale.sol");

module.exports = function(deployer) {
  deployer.deploy(PARTokenCrowdSale);
};