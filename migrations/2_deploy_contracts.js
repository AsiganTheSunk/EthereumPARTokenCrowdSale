const MyToken = artifacts.require("../contracts/PARToken.sol");
const ConvertLib = artifacts.require("ConvertLib");

module.exports = function(deployer) {
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, MyToken);
    deployer.deploy(MyToken);
};

