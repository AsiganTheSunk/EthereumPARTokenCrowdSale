const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

/**
 * Init() Section for the Deployed Contracts CustomToken, WETH9
 */
var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myConvertLib = artifacts.require("../contracts/lib/ConvertLib.sol");


contract('CustomToken', (accounts) => {


    /**
     * Evaluate if the current CustomToken Contract has de correct balance since deploy.
     */
    it('[ Init ]: Contract should have a Default Balance of 1000', async () => {
        try {
            // Finish the deployment of the CustomToken Contract instance.
            const myCustomTokenInstance = await myToken.deployed();
            // Promise(myCustomTokenInstance);

            const accountOne = accounts[0];        
            var currentBalance = await myCustomTokenInstance.getBalance.call(accountOne);

            // Expected Returned Balance Value
            const expectedBalance = new BN(ether('1000'));
            assert.equal(currentBalance.valueOf(), expectedBalance, 'Token Contract should have atleast 1000 after inicialization');
        } catch(err) {
            console.log(err.message)
        }
    });


    /**
     * Evaluate if the current CustomToken Contract has the correct name for the defined ERC20Detailed
     */
    it('[ Init ]: Contract should have a Default Name of Custom Token Currency', async () => {
        try {
            // Finish the deployment of the CustomToken Contract instance.
            const myCustomTokenInstance = await myToken.deployed();
            // Promise(myCustomTokenInstance);
            
            // Default Values
            const currentName = await myCustomTokenInstance.name();

            // Expected Return Values
            const expectedName = "Custom Token Currency";

            assert.equal(name.valueOf(), expectedName, 'Token Contract does not comply with the Expected Name Value.');
        } catch(err) {
            console.log(err.message)
        }
    });


    /**
     * Evaluate if the current CustomToken Contract has the correct symbol for the defined ERC20Detailed
     */
    it('[ Init ]: Contract should have a Default Symbol of CTC', async () => {
        try {
            // Finish the deployment of the CustomToken Contract instance.
            var myCustomTokenInstance = await myToken.deployed();
            // Promise(myCustomTokenInstance);

            // Default Values
            const currentSymbol = await myCustomTokenInstance.symbol();

            // Expected Return Values
            const expectedSymbol = 'CTC';                      
            assert.equal(currentSymbol.valueOf(), expectedSymbol, 'Token Contract does not comply with the Expected Symbol Value.');
        } catch(err) {
            console.log(err.message)
        }
    });


    /**
     * Evaluate if the current CustomToken Contract has the correct decimals for the defined ERC20Detailed
     */
    it('[ Init ]: Contract should have a Default Decimal of 18', async () => {
        try {
            // Finish the deployment of the CustomToken Contract instance.
            const myCustomTokenInstance = await myToken.deployed();
            // Promise(myCustomTokenInstance)

            // Default Values
            var currentDecimals = await myCustomTokenInstance.decimals();

            // Expected Return Values
            var expectedDecimals = 18;

            assert.equal(currentDecimals.valueOf(), expected_decimals, 'Token Concract does not comply with the Expected Decimal Value.');
        } catch(err) {
            console.log(err.message)
        }
    });


    /*
     * Evaluate if the current CustomToken Contract behaves well when importing a library.
     */
    it('[ Library Link ]: Contract should be able to Call the linked library ConvertLib', async () => {
        try {
            // Finish the deployment of the CustomToken Contract instance.
            const myCustomTokenInstance = await myToken.deployed();
            const myConvertLibInstance = await myConvertLib.deployed();
            // Promise.all(myCustomTokenInstance, myConvertLib);

            // Default Values
            const accountOne = accounts[0];
            const expectedRate = 100;
            const expectedBalance = new BN(ether('1000'));
            const expectedResult = expectedBalance * expectedRate;

            var currentBalanceInEth = (await myCustomTokenInstance.getBalanceInEth.call(accountOne));
            assert.equal(String(currentBalanceInEth), String(expectedResult), 'Library Link unable to function propperly');
        } catch(err) {
            console.log(err.message)
        }
    });

    it('[ Tx ]: Contract should be able to Perform transfer()', async () => {
        try {
            // Finish the deployment of the CustomToken Contract instance.
            const myCustomTokenInstance = await myToken.deployed();
            // Promise(myCustomTokenInstance);

            // Default Values.
            const accountOne = accounts[0];
            const accountTwo = accounts[1];

            // Get initial balances from accountOne and accountTwo.
            var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
            var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

            // Make Transaction from accountOne to accountTwo.
            const currentAmount = new BN(ether('10'));
            await myCustomTokenInstance.transfer(accountTwo, currentAmount);

            // Get balances of accountOne and accountTwo after the Transactions.
            var accountOneEndingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
            var accountTwoEndingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

            assert.equal(accountOneEndingBalance, accountOneStartingBalance - currentAmount, "Amount Wasn't Correctly Taken from the Sender");
            assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + currentAmount, "Amount Wasn't Correctly Sent to the Receiver");
            } catch (error) {
                console.log(error)
            }
    });

    // it('[ Tx ]: Contract should be able to Reject OverFlow on transfer()', async () => {
    //     try {
    //         // Default Values.
    //         var accountOne = accounts[0];
    //         var accountTwo = accounts[1];
    //         var myCustomTokenInstance = await myToken.deployed();

    //         // Get initial balances from accountOne and accountTwo.
    //         var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
    //         var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

    //         // Make Transaction from accountOne to accountTwo.
    //         var amount = 999999999999999;
    //         await myCustomTokenInstance.transfer(accountTwo, amount);

    //         } catch (error) {
    //             assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to OverFlow Attacks");
    //         }
    // });

    // it('[ Tx ]: Contract should be able to Reject UnderFlow on transfer() using SafeMath', async () => {
    //     try {
    //         // Default Values.
    //         var accountOne = accounts[0];
    //         var accountTwo = accounts[1];
    //         var myCustomTokenInstance = await myToken.deployed();

    //         // Get initial balances from accountOne and accountTwo.
    //         var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
    //         var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

    //         // Make Transaction from accountOne to accountTwo.
    //         var amount = -10000;
    //         await myCustomTokenInstance.transfer(accountTwo, amount);

    //         } catch (error) {
    //             assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to UnderFlow Attacks");
    //         }
    // });
});


