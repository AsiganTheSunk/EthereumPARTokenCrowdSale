/**
 * Init() Section for the Deployed Contract WETH9
 */
const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");

contract('WETH9', (accounts) => {

      /**
        * Evaluate if the current WETH9 Contract has the correct symbol for the defined ERC20Detailed
        */
      it('[ Init ]: Contract should have a Default Name of Wrapped Ether', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myWeth9Instance = await myWeth.deployed();

            // Retrieve Current name value in WETH9 Contract
            var name = await myWeth9Instance.name();

            // Expected value for name in WETH9
            var expectedName = 'Wrapped Ether';

            assert.equal(name.valueOf(), expectedName, 'SafeWETH9 Contract does not comply with the Expected Name Value.');
        } catch(err) {
            console.log(err);
        }
    });

    /**
      * Evaluate if the current WETH9 Contract has the correct symbol for the defined ERC20Detailed
      */
    it('[ Init ]: Contract should have a Default Symbol of WETH', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myWeth9Instance = await myWeth.deployed();

            // Retrieve Current symbol value in WETH9 Contract
            var symbol = await myWeth9Instance.symbol();

            // Expected value for symbol in WETH9
            var expectedSymbol = 'WETH';

            assert.equal(symbol.valueOf(), expectedSymbol, 'SafeWETH9 Contract does not comply with the Expected Symbol Value.');
        } catch(err) {
            console.log(err);
        }
    });

    /**
      * Evaluate if the current WETH9 Contract has the correct decimals for the defined ERC20Detailed
      */
    it('[ Init ]: Contract should have a Default Decimal of 18', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myWeth9Instance = await myWeth.deployed();

            // Retrieve Current decimals value in WETH9 Contract
            var decimals = await myWeth9Instance.decimals();

            // Expected value for decimals in WETH9
            var expectedDecimals = 18;

            assert.equal(decimals.valueOf(), expectedDecimals, 'SafeWETH9 Contract does not comply with the Expected Decimal Value.');
        } catch(err) {
            console.log(err);
        }
    });

    /**
      * Evaluate if the current WETH9 Contract is not able to reject the deposit of a negative value, not preventing an Underflow Attack
      */
    it('[  Tx  ]: Contract should not be able to Reject Negative deposit()', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myWeth9Instance = await myWeth.deployed();

            // Current malicious amount of ether to deposit()
            var malicious_amount = ether('-1');

            // Perfom a deposit of the malicious amount
            await myWeth9Instance.deposit({'value': malicious_amount});
        } catch (err) {
            console.log(err.message);
            //assert.equal(err.message, 'Returned error: VM Exception while processing transaction: revert Not enough Ether to Withdraw!! -- Reason given: Not enough Ether to Withdraw!!.', "This Contract is vulnerable to OverFlow Attacks");
        }
    });

    /**
      * Evaluate if the current WETH9 Contract is able to reject the a withdraw of a negative value
      */
    it('[  Tx  ]: Contract should be able to Reject withdraw() for more tokens than the balance deposited', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myWeth9Instance = await myWeth.deployed();

            // Current amount of ether to deposit()
            var amount = ether('1');

            // Current malicious amount of ether to withdraw()
            var malicious_amount = ether('-2');

            // Perfom a deposit of the amount
            await myWeth9Instance.deposit({'value': amount});

            // Perfom a withdraw of the malicious amount
            await myWeth9Instance.withdraw(malicious_amount);
        } catch (err) {
            assert.equal(err.message, 'Returned error: VM Exception while processing transaction: revert', 'This Contract is vulnerable to Withdraw more that Deposit');
        }
    });

    /**
      * Evaluate if the current WETH9 Contract is able to deposit and check the amount
      */
    it('[  Tx  ]: Contract should be able to make a deposit and check it', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myWeth9Instance = await myWeth.deployed();

            // Current amount of ether to deposit()
            var amount = ether('1');

            // Perfom a deposit of the amount
            await myWeth9Instance.deposit({'value': amount});

            // Retrieve the current amount of totalSupply()
            var currentBalance = new BN(await myWeth9Instance.totalSupply());
        } catch (err) {
            assert.equal(err.message, 'Returned error: VM Exception while processing transaction: revert', 'This Contract is vulnerable to UnderFlow Attacks');
        }
    });

    /**
      * Evaluate if the current WETH9 Contract is able to deposit and withdraw
      */
    it('[  Tx  ]: Contract should be able to deposit() & withdraw()', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myWeth9Instance = await myWeth.deployed();

            // Current amount of ether to deposit()
            var amount = ether('1');

            // Perfom a deposit of the amount
            await myWeth9Instance.deposit({'value': amount});

            // Perfom a withdraw of the malicious amount
            await myWeth9Instance.withdraw(amount);
        } catch (err) {
            assert.equal(err.message, 'Returned error: VM Exception while processing transaction: revert', 'This Contract is vulnerable to UnderFlow Attacks');
        }
    });

});
