/**
 * Init() Section for the Deployed Contracts CustomToken, WETH9
 */
var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");

contract('CustomToken', (accounts) => {
    /**
     * Evaluate if the current CustomToken Contract has de correct balance since deploy.
     */
    // it('[ Init ]: Contract should have a Default Balance of 1000', async () => {
    //     try {
    //         // Finish the deployment of the CustomToken Contract instance.
    //         var myCustomTokenInstance = await myToken.deployed();
    //         // Promise(myCustomTokenInstance);

    //         var accountOne = accounts[0];        
    //         var currentBalance = (await myCustomTokenInstance.getBalance.call(accountOne));
    //         console.log(currentBalance);
    //         // Expected Returned Balance Value
    //         var expectedBalance = 1000;
            
    //         assert.equal(currentBalance, expectedBalance, 'Token Contract should have atleast 1000 after inicialization');
    //     } catch(err) {
    //         console.log(err.message)
    //     }
    // });


    /**
     * Evaluate if the current CustomToken Contract has the correct name for the defined ERC20Detailed
     */
    it('[ Init ]: Contract should have a Default Name of Custom Token Currency', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();
            // Promise(myCustomTokenInstance);
            
            // Default Values
            var currentName = await myCustomTokenInstance.name();

            // Expected Return Values
            var expectedName = "Custom Token Currency";

            assert.equal(currentName.valueOf(), expectedName, 'Token Contract does not comply with the Expected Name Value.');
        } catch(err) {
            console.log(err.message)
        }
    });


    /**
     * Evaluate if the current CustomToken Contract has the correct symbol for the defined ERC20Detailed
     */
    it('[ Init ]: Contract should have a Default Symbol of CTC', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();

            // Expected value for symbol in CustomToken
            var expectedSymbol = 'CTC';

            // Retrieve current value for the symbol in CustomToken
            var currentSymbol = await myCustomTokenInstance.symbol();

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
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();

            // Retrieve current value for the decimals in CustomToken
            var currentDecimals = await myCustomTokenInstance.decimals();

            // Expected value for decimals in CustomToken
            var expectedDecimals = 18;

            assert.equal(currentDecimals.valueOf(), expectedDecimals, 'Token Concract does not comply with the Expected Decimal Value.');
        } catch(err) {
            console.log(err.message)
        }
    });

    it('[  Tx  ]: Contract should be able to Reject OverFlow on transfer()', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();

            // Default Values.
            var accountOne = accounts[0];
            var accountTwo = accounts[1];

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

    it('[  Tx  ]: Contract should be able to Reject UnderFlow on transfer() using SafeMath', async () => {
        try {

            var myCustomTokenInstance = await myToken.deployed();

            // Default Values.
            var accountOne = accounts[0];
            var accountTwo = accounts[1];


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


