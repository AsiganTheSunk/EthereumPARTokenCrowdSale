var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var mySafeWeth = artifacts.require("../contracts/tokens/SafeWETH9.sol");
var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myConvertLib = artifacts.require("../contracts/lib/ConvertLib.sol");

// Test UnderFlow/OverFlow Attacks in WETH9, SafeWETH9 & CustomToken

contract('CustomToken', (accounts) => {
    it('[ Init ]: Contract should have a Default Balance of 1000', async () => {
        // Default Values
        var accountOne = accounts[0];
        var myCustomTokenInstance = await myToken.deployed();
        var balance = await myCustomTokenInstance.getBalance.call(accountOne);

        // Expected Return Values
        var expected_balance = 1000;

        assert.equal(balance.valueOf(), expected_balance, 'CustomToken Contract Should have 10000');
        });

    it('[ Init ]: Contract should have a Default Name of Custom Token Currency', async () => {

        // Default Values
        var myCustomTokenInstance = await myToken.deployed();
        var name = await myCustomTokenInstance.name();

        // Expected Return Values
        var expected_name = "Custom Token Currency";

        assert.equal(name.valueOf(), expected_name, 'CustomToken Contract does not comply with the Expected Name Value.');
        });

        it('[ Init ]: Contract should have a Default Symbol of CTC', async () => {

        // Default Values
        var myCustomTokenInstance = await myToken.deployed();
        var symbol = await myCustomTokenInstance.symbol();

        // Expected Return Values
        var expected_symbol = 'CTC';

        assert.equal(symbol.valueOf(), expected_symbol, 'CustomToken Contract does not comply with the Expected Symbol Value.');
    });

    it('[ Init ]: Contract should have a Default Decimal of 18', async () => {

        // Default Values
        var myCustomTokenInstance = await myToken.deployed();
        var decimals = await myCustomTokenInstance.decimals();

        // Expected Return Values
        var expected_decimals = 18;

        assert.equal(decimals.valueOf(), expected_decimals, 'CustomToken does not comply with the Expected Decimal Value.');
        });

        it('[ Link ]: Contract should be able to Call the linked library ConvertLib', async () => {

        // Default Values
        var accountOne = accounts[0];
        var defaultRate = 100;
        var defaultEther = 1000;
        var myCustomTokenInstance = await myToken.deployed();
        var myConvertLibInstance = await myConvertLib.deployed();

        var convertedTokens = (await myCustomTokenInstance.getBalanceInEth.call(accountOne)).toNumber();;
        var balance = (await myCustomTokenInstance.getBalance.call(accountOne));

        assert.equal(convertedTokens, defaultEther / defaultRate, 'Library function returned unexpected function');
    });

    it('[ Tx ]: Contract should be able to Perform Transfers between different Accounts', async () => {
        try {
        // Default Values.
        var accountOne = accounts[0];
        var accountTwo = accounts[1];
        var myCustomTokenInstance = await myToken.deployed();

        // Get initial balances from accountOne and accountTwo.
        var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
        var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

        // Make Transaction from accountOne to accountTwo.
        var amount = 10;
        await myCustomTokenInstance.transfer(accountTwo, amount);

        // Get balances of accountOne and accountTwo after the Transactions.
        var accountOneEndingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
        var accountTwoEndingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

        assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount Wasn't Correctly Taken from the Sender");
        assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount Wasn't Correctly Sent to the Receiver");
        } catch (error) {
            console.log(error)
        }
    });

    it('[ Attack Vector ]: Contract should be able to Withstand OverFlow Attacks on transfer() using SafeMath', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];
            var accountTwo = accounts[1];
            var myCustomTokenInstance = await myToken.deployed();

            // Get initial balances from accountOne and accountTwo.
            var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
            var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

            // Make Transaction from accountOne to accountTwo.
            var amount = 999999999999999;
            await myCustomTokenInstance.transfer(accountTwo, amount);

            } catch (error) {
                assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to OverFlow Attacks");
            }
    });

    it('[ Attack Vector ]: Contract should be able to Withstand UnderFlow Attacks on transfer() using SafeMath', async () => {
        try {
            // Default Values.
            var accountOne = accounts[0];
            var accountTwo = accounts[1];
            var myCustomTokenInstance = await myToken.deployed();

            // Get initial balances from accountOne and accountTwo.
            var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
            var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

            // Make Transaction from accountOne to accountTwo.
            var amount = -10000;
            await myCustomTokenInstance.transfer(accountTwo, amount);

            } catch (error) {
                assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to UnderFlow Attacks");
            }
    });
});


