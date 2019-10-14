const MyToken = artifacts.require("../contracts/PARToken.sol");
const MyCrowdSale = artifacts.requiere("../contracts/PARTokenCrowdSale")
const ConvertLib = artifacts.require("ConvertLib");

module.exports = function(deployer) {
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, MyToken);
    deployer.deploy(MyToken);
    deployer.deploy(MyCrowdSale)
};

