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

    it('[ Attack Vector ]: Contract should be able to Withstand OverFlow Attacks on withdraw() using SafeMath', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];

            var mySafeWeth9Instance = await mySafeWeth.deployed();

            var amount = 1000;
            var malicious_amount = 999999999999999;
            //var malicious_amount = 1000;
            // Make A Deposit Of a Negative Value.
            await mySafeWeth9Instance.deposit({'sender':accountOne, 'value': amount})
            var data = await mySafeWeth9Instance.totalSupply();
            console.log(data);
            await mySafeWeth9Instance.deposit({'sender':accountOne, 'value': malicious_amount});
            var data = await mySafeWeth9Instance.totalSupply();
            console.log(data);

        } catch (error) {
            console.log(error);
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert Not enough Ether to Withdraw!! -- Reason given: Not enough Ether to Withdraw!!.', "This Contract is vulnerable to OverFlow Attacks");
        }
    });

    it('[ Attack Vector ]: Contract should be able to reject negative deposit()', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];

            var mySafeWeth9Instance = await mySafeWeth.deployed();

            var malicious_amount = -1001;

            // Make A Deposit Of a Negative Value.
            await mySafeWeth9Instance.deposit({'value': malicious_amount});


        } catch (error) {
            console.log(error)
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert Not enough Ether to Withdraw!! -- Reason given: Not enough Ether to Withdraw!!.', "This Contract is vulnerable to OverFlow Attacks");
        }
    });

    it('[ Attack Vector ]: Contract should not be able to withdraw() more tokens than the account it is holding', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];

            var mySafeWeth9Instance = await mySafeWeth.deployed();

            var amount = 1000;
            var malicious_amount = -1001;

            // TODO: Comment
            await mySafeWeth9Instance.deposit({'value': amount});
            await mySafeWeth9Instance.withdraw(malicious_amount);

        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert Not enough Ether to Withdraw!! -- Reason given: Not enough Ether to Withdraw!!.', "This Contract is vulnerable to UnderFlow Attacks");
        }
    });

});
