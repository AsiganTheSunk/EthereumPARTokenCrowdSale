const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myConvertLib = artifacts.require("../contracts/lib/ConvertLib.sol");
var myCustomCrowdsale = artifacts.require("../contracts/CustomCrowdsale.sol");

const duration = {
  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  years: function (val) { return val * this.days(365); },
};


contract('CustomCrowdsale', (accounts) => {


    it('[ Init ]: Contract should have a Default Rate of 10', async () => {
        // Default Values
        var expected_rate = 10;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        // Transfer token ownership to crowdsale
        var rate = await myCustomCrowdsaleInstance.rate();
        assert.equal(rate.valueOf(), expected_rate, 'CustomCrowdsale Contract Should have a Rate of 10');
    });


    it('[ Init ]: Contract should have a Default Cap of 100', async () => {
        // Default Values
        var expected_cap = 100;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        // Transfer token ownership to crowdsale
        var cap = await myCustomCrowdsaleInstance.cap();
        assert.equal(cap.valueOf(), expected_cap, 'CustomCrowdsale Contract Should have a Cap of 100');

    });

    it('[ Init ]: Contract should have a Default Goal 50', async () => {
        var expected_goal = 50;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        // Default Values
        var goal = await myCustomCrowdsaleInstance.goal();
        assert.equal(goal.valueOf(), expected_goal, 'CustomCrowdsale Contract Should have a Goal of 100');
    });


    it('[ Init ]: Contract should have a Default WeiRaised of 0', async () => {
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();
        var expected_weiRaised = 0;

        var weiRaised  = await myCustomCrowdsaleInstance.weiRaised();
        assert.equal(weiRaised.valueOf(), expected_weiRaised, 'CustomCrowdsale Contract Should have a weiRaised of 0');
    });

    it('[ Init ]: Contract should have a Default isOpen of false', async () => {
        var expected_isOpen = false;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        var isOpen =  await myCustomCrowdsaleInstance.isOpen();
        assert.equal(isOpen.valueOf(), expected_isOpen, 'CustomCrowdsale Contract Should have a isOpen of false');
    });

    it('[ Init ]: Contract should have a Default hasClosed of false', async () => {
        var expected_hasClosed = false;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        var hasClosed =  await myCustomCrowdsaleInstance.hasClosed();
        assert.equal(hasClosed.valueOf(), expected_hasClosed, 'CustomCrowdsale Contract Should have a hasClosed of false');
    });

    it('[ Init ]: Contract should have a Default tokenWallet of * ', async () => {
        var expected_tokenWallet = 0;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        var tokenWallet =  await myCustomCrowdsaleInstance.remainingTokens();
        assert.equal(tokenWallet.valueOf(), expected_tokenWallet, 'CustomCrowdsale Contract Should have a hasClosed of false');
    });

    it('[ Init ]: Contract should have a Default remainingTokens of * ', async () => {
        var expected_remainingTokens = 0;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        var remainingTokens =  await myCustomCrowdsaleInstance.remainingTokens();
        assert.equal(remainingTokens.valueOf(), expected_remainingTokens, 'CustomCrowdsale Contract Should have a remainingTokens of 0');
    });

    it('[ TEST ]: * ', async () => {
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();
        const value = new web3.utils.BN(web3.utils.toWei("1", 'ether'));
        const purchaser = accounts[2];
        const investor1 = accounts[4];

        var openingTime = (await myCustomCrowdsaleInstance.openingTime()).toNumber();
        console.log(openingTime);

        var actualTime = await time.latest();
        console.log(actualTime.toNumber());

        var newTime = await time.increaseTo(openingTime + duration.minutes(2));
        await myCustomCrowdsaleInstance.buyTokens(investor1, { value: value, from: purchaser }).should.be.fulfilled;
    });

    it('[ Tx ]: Contract should have a Default remainingTokens of * ', async () => {
        try {

            var accountOne = accounts[0];
            var myTokenInstance = await myToken.deployed();
            var myWethInstance = await myWeth.deployed();
            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            var wethToRaise = (await myCustomCrowdsaleInstance.wethToRaise()).valueOf();
            var rate = (await myCustomCrowdsaleInstance.rate()).valueOf();

            var amount = 1000;
            await myWethInstance.deposit({'value': amount});

            var currentWethBalance = (await myWethInstance.totalSupply()).toNumber();
            //console.log(currentWethBalance.valueOf());
            //console.log(isApproved.valueOf());

            assert.equal(currentWethBalance, amount);
            var isApproved = await myWethInstance.approve(myCustomCrowdsale.address, amount);

            var hasClosed =  await myCustomCrowdsaleInstance.hasClosed();
            assert.equal(hasClosed.valueOf(), false);


            //assert.ok(myCustomCrowdsale.buyTokens(weisToInvest, ))
            //        assert.equal(await icoSCM.closedOn(), 0)
        } catch(error) {
            console.log(error);
        }

//
//        // Invest everything - 1 ether
//        assert.ok(icoSCM.invest(weisToInvest))
//        assert.equal(await icoSCM.closedOn(), 0)
//
//        // Invest remaining 1 ether
//        assert.ok(icoSCM.invest(totalWeisToInvest - weisToInvest))
//        assert.equal(await icoSCM.balances.call(accounts[0]), totalWeisToInvest)
//
//        // Now ico should be closed
//        assert.ok(await icoSCM.closedOn() > 0)
//
//        // Try to get the tokens from the Ico
//        var expectedTokens = scmPerWeth * totalWeisToInvest
//        try {
//         await icoSCM.claim()
//         assert.fail('Exception not raised')
//        } catch (error) {
//        }
//
//        // Go 2 minutes in the future
//        web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [121], id: 0})
//        web3.currentProvider.send({jsonrpc: "2.0", method: "evm_mine", params: [], id: 0})
//        assert.ok(await icoSCM.claim())
//        assert.equal(await tokenSCM.balanceOf.call(accounts[0]), expectedTokens)
//        assert.equal(await icoSCM.balances.call(accounts[0]), 0)
    });
});