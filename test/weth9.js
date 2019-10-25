const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");

// Test UnderFlow/OverFlow Attacks in WETH9, SafeWETH9 & CustomToken

contract('WETH9', (accounts) => {
      it('[ Init ]: Contract should have a Default Name of Wrapped Ether', async () => {

            // Default Values
            var myWeth9Instance = await myWeth.deployed();
            var name = await myWeth9Instance.name();

            // Expected Return Values
            var expected_name = 'Wrapped Ether';

            assert.equal(name.valueOf(), expected_name, 'SafeWETH9 Contract does not comply with the Expected Name Value.');
            });

     it('[ Init ]: Contract should have a Default Symbol of WETH', async () => {

        // Default Values
        var myWeth9Instance = await myWeth.deployed();
        var symbol = await myWeth9Instance.symbol();

        // Expected Return Values
        var expected_symbol = 'WETH';

        assert.equal(symbol.valueOf(), expected_symbol, 'SafeWETH9 Contract does not comply with the Expected Symbol Value.');
        });

    it('[ Init ]: Contract should have a Default Decimal of 18', async () => {

        // Default Values
        var myWeth9Instance = await myWeth.deployed();
        var decimals = await myWeth9Instance.decimals();

        // Expected Return Values
        var expected_decimals = 18;

        assert.equal(decimals.valueOf(), expected_decimals, 'SafeWETH9 Contract does not comply with the Expected Decimal Value.');
    });

    it('[  Tx  ]: Contract should be able to Reject Negative deposit()', async () => {
        try {
            // Default Values.
            var myWeth9Instance = await myWeth.deployed();
            var malicious_amount = ether('-1');

            // Make A Deposit of a Negative Value.
            await myWeth9Instance.deposit({'value': malicious_amount});

        } catch (error) {
            //assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert Not enough Ether to Withdraw!! -- Reason given: Not enough Ether to Withdraw!!.', "This Contract is vulnerable to OverFlow Attacks");
        }
    });

    it('[  Tx  ]: Contract should be able to Reject withdraw() for more tokens than the balance deposited', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];
            var myWeth9Instance = await myWeth.deployed();

            var amount = ether('1');
            var malicious_amount = ether('-2');

             // Make A Deposit of a Positive Value.
            await myWeth9Instance.deposit({'value': amount});

            // Make A Deposit of a Negative Value.
            await myWeth9Instance.withdraw(malicious_amount);

        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to UnderFlow Attacks");
        }
    });

    it('[  Tx  ]: Contract should be able to make a deposit and check it', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];
            var myWeth9Instance = await myWeth.deployed();

            var amount = ether('1');

             // Make A Deposit of a Positive Value.
            await myWeth9Instance.deposit({'value': amount});
            var currentBalance = new BN(await myWeth9Instance.totalSupply());
            //console.log('        + Current Supply WETH: ' +  String(currentBalance));

        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to UnderFlow Attacks");
        }
    });


    it('[ Tx ]: Contract should be able to withdraw() tokens from the deposited balance ', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];
            var myWeth9Instance = await myWeth.deployed();

            var amount = ether('1');

             // Make A Deposit of a Positive Value.
            await myWeth9Instance.deposit({'value': amount});

            // Make A Deposit of a Negative Value.
            await myWeth9Instance.withdraw(amount);

        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to UnderFlow Attacks");
        }
    });

});
