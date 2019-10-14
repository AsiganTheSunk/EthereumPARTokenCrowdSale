import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/PARToken.sol";

pragma solidity >=0.5.0 <0.6.0;

contract TestPARToken {
    function testInitialBalanceUsingDeployedContract() public {
        PARToken myToken = PARToken(DeployedAddresses.PARToken());

        uint expected = 10000;

        Assert.equal(myToken.getBalance(tx.origin), expected, "Owner should have 10000 PARToken Initially");
    }

    function testInitialBalanceWithNewMetaCoin() public {
        PARToken meta = new PARToken();

        uint expected = 10000;

        Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 PARToken Initially");
    }
    
}
