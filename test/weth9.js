var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");

// Test UnderFlow/OverFlow Attacks in WETH9, SafeWETH9 & CustomToken

contract('WETH9', (accounts) => {
      it('[ Init ]: Contract should have a Default Name of Wrapped Ether', async () => {

            // Default Values
            var myWethInstance = await myWeth.deployed();
            var name = await myWethInstance.name();

            // Expected Return Values
            var expected_name = 'Wrapped Ether';

            assert.equal(name.valueOf(), expected_name, 'SafeWETH9 Contract does not comply with the Expected Name Value.');
            });

     it('[ Init ]: Contract should have a Default Symbol of WETH', async () => {

        // Default Values
        var myWethInstance = await myWeth.deployed();
        var symbol = await myWethInstance.symbol();

        // Expected Return Values
        var expected_symbol = 'WETH';

        assert.equal(symbol.valueOf(), expected_symbol, 'SafeWETH9 Contract does not comply with the Expected Symbol Value.');
        });

    it('[ Init ]: Contract should have a Default Decimal of 18', async () => {

        // Default Values
        var myWethInstance = await myWeth.deployed();
        var decimals = await myWethInstance.decimals();

        // Expected Return Values
        var expected_decimals = 18;

        assert.equal(decimals.valueOf(), expected_decimals, 'SafeWETH9 Contract does not comply with the Expected Decimal Value.');
    });


    it('[ Attack Vector ]: Contract should not be able to Withstand OverFlow Attacks using SafeMath', async () => {

        // Default Values
        var myWethInstance = await myWeth.deployed();

        // Expected Return Values
        var expected_decimals = 18;
    });

    it('[ Attack Vector ]: Contract should not be able to Withstand UnderFlow Attacks using SafeMath', async () => {

        // Default Values
        var myWethInstance = await myWeth.deployed();

        // Expected Return Values
        var expected_decimals = 18;
    });
});
