var mySafeWeth = artifacts.require("../contracts/tokens/SafeWETH9.sol");

// Test UnderFlow/OverFlow Attacks in WETH9, SafeWETH9 & CustomToken

contract('SafeWETH9', (accounts) => {
      it('[ Init ]: Contract should have a Default Name of Wrapped Ether', async () => {

            // Default Values
            var mySafeWeth9Instance = await mySafeWeth.deployed();
            var name = await mySafeWeth9Instance.name();

            // Expected Return Values
            var expected_name = 'Wrapped Ether';

            assert.equal(name.valueOf(), expected_name, 'SafeWETH9 Contract does not comply with the Expected Name Value.');
            });

     it('[ Init ]: Contract should have a Default Symbol of WETH', async () => {

        // Default Values
        var mySafeWeth9Instance = await mySafeWeth.deployed();
        var symbol = await mySafeWeth9Instance.symbol();

        // Expected Return Values
        var expected_symbol = 'WETH';

        assert.equal(symbol.valueOf(), expected_symbol, 'SafeWETH9 Contract does not comply with the Expected Symbol Value.');
        });

    it('[ Init ]: Contract should have a Default Decimal of 18', async () => {

        // Default Values
        var mySafeWeth9Instance = await mySafeWeth.deployed();
        var decimals = await mySafeWeth9Instance.decimals();

        // Expected Return Values
        var expected_decimals = 18;

        assert.equal(decimals.valueOf(), expected_decimals, 'SafeWETH9 Contract does not comply with the Expected Decimal Value.');
    });

    it('[ Tx ]: Contract should be able to Reject Negative deposit()', async () => {
        try {
            // Default Values.
            var mySafeWeth9Instance = await mySafeWeth.deployed();
            var malicious_amount = -1001;

            // Make A Deposit of a Negative Value.
            await mySafeWeth9Instance.deposit({'value': malicious_amount});

        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert Not enough Ether to Withdraw!! -- Reason given: Not enough Ether to Withdraw!!.', "This Contract is vulnerable to OverFlow Attacks");
        }
    });

    it('[ Tx ]: Contract should be able to Reject withdraw() for more tokens than the balance deposited', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];
            var mySafeWeth9Instance = await mySafeWeth.deployed();

            var amount = 1000;
            var malicious_amount = -1001;

             // Make A Deposit of a Positive Value.
            await mySafeWeth9Instance.deposit({'value': amount});
             // Make A Deposit of a Negative Value.
            await mySafeWeth9Instance.withdraw(malicious_amount);

        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert Not enough Ether to Withdraw!! -- Reason given: Not enough Ether to Withdraw!!.', "This Contract is vulnerable to UnderFlow Attacks");
        }
    });

});
