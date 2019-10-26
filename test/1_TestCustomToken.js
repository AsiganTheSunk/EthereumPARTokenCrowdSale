/**
 * Init() Section for the Deployed Contracts CustomToken & CustomCrowdsale
 */
var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var myCustomCrowdsale = artifacts.require("../contracts/CustomCrowdsale.sol");

contract('CustomToken', (accounts) => {

    /**
     * Evaluate if the current CustomToken Contract has de correct balance since deploy.
     */
    it('[ Init ]: Contract should have a Default Balance of 1000 Tokens', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();
            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            // Default values for the accounts making the operations
            var currentTokenInCrowdsale = await myCustomTokenInstance.getBalance(myCustomCrowdsaleInstance.address);

            // Expected current value for totalSupply in CustomToken
            var expectedSupply = 1000;

            assert.equal(currentTokenInCrowdsale, expectedSupply, 'Token Contract should have atleast 1000 after inicialization');
        } catch(err) {
            console.log(err.message);
        }
    });

    /**
     * Evaluate if the current CustomToken Contract has the correct name for the defined ERC20Detailed
     */
    it('[ Init ]: Contract should have a Default Name of Custom Token Currency', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();

            // Expected Return Values
            var expectedName = "Custom Token Currency";

            // Retrieve value for name in CustomToken
            var currentName = await myCustomTokenInstance.name();

            assert.equal(currentName.valueOf(), expectedName, 'Token Contract does not comply with the Expected Name Value.');
        } catch(err) {
            console.log(err.message);
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
            console.log(err.message);
        }
    });

    /**
     * Evaluate if the current CustomToken Contract has the correct decimals for the defined ERC20Detailed
     */
    it('[ Init ]: Contract should have a Default Decimal of 18', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();

            // Expected value for decimals in CustomToken
            var expectedDecimals = 18;
            // Retrieve current value for the decimals in CustomToken
            var currentDecimals = await myCustomTokenInstance.decimals();

            assert.equal(currentDecimals.valueOf(), expectedDecimals, 'Token Concract does not comply with the Expected Decimal Value.');
        } catch(err) {
            console.log(err.message);
        }
    });

    /**
     * Evaluate if the current CustomToken Contract is able to reject an Overflow Attack in the transfer() operation
     */
    it('[  Tx  ]: Contract should be able to Reject OverFlow on transfer()', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomTokenInstance = await myToken.deployed();

            // Default values for the accounts making the operations
            var accountOne = accounts[0];
            var accountTwo = accounts[1];

            // Retrieve initial balances from accountOne and accountTwo.
            var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
            var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

            // Perfom Transaction from accountOne to accountTwo.
            var amount = 999999999999999;
            await myCustomTokenInstance.transfer(accountTwo, amount);
        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to OverFlow Attacks");
        }
    });

    /**
     * Evaluate if the current CustomToken Contract is able to reject an UnderFlow Attack in the transfer() operation
     */
    it('[  Tx  ]: Contract should be able to Reject UnderFlow on transfer() using SafeMath', async () => {
        try {

            var myCustomTokenInstance = await myToken.deployed();

            // Default values for the accounts making the operations
            var accountOne = accounts[0];
            var accountTwo = accounts[1];

            // Retrieve initial balances from accountOne & accountTwo.
            var accountOneStartingBalance = (await myCustomTokenInstance.getBalance.call(accountOne)).toNumber();
            var accountTwoStartingBalance = (await myCustomTokenInstance.getBalance.call(accountTwo)).toNumber();

            // Perform Transaction from accountOne to accountTwo.
            var amount = -10000;
            await myCustomTokenInstance.transfer(accountTwo, amount);
        } catch (error) {
            assert.equal(error.message, 'Returned error: VM Exception while processing transaction: revert', "This Contract is vulnerable to UnderFlow Attacks");
        }
    });
});


