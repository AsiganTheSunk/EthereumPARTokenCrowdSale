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

    it('[ Init ]: Contract should have a Default Rate of 2', async () => {
        // Default Values
        var expected_rate = 2;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        // Current Rate Value
        var rate = await myCustomCrowdsaleInstance.getRate();
        assert.equal(rate.toNumber(), expected_rate, 'CustomCrowdsale Contract Should have a Rate of 2');
    });


    it('[ Init ]: Contract should have a Default Cap of 10', async () => {
        // Await Deployment
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        // Expected Value for Contract
        var expected_cap = 10;

        // Current Cap Default Value for Contract
        var cap = await myCustomCrowdsaleInstance.getCap();
        assert.equal(cap.toNumber(), expected_cap, 'CustomCrowdsale Contract Should have a Cap of 100');

    });

    it('[ Init ]: Contract should have a Default Goal 50', async () => {
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        // Expected Value for Contract
        var expected_goal = 50;

        // Current Goal Default Value for Contract
        var goal = await myCustomCrowdsaleInstance.getGoal();
        assert.equal(goal.toNumber(), expected_goal, 'CustomCrowdsale Contract Should have a Goal of 100');
    });


    it('[ Init ]: Contract should have a Default currentContribution of 0', async () => {
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        // Expected Value for Contract
        var expected_currentContribution = 0;

        var currentContribution  = await myCustomCrowdsaleInstance.getCurrentContribution();
        assert.equal(currentContribution.toNumber(), expected_currentContribution, 'CustomCrowdsale Contract Should have a currentContribution of 0');
    });

    it('[ Init ]: Contract should have a Default isCompleted of false', async () => {
        var expected_isCompleted = false;
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

        var isCompleted =  await myCustomCrowdsaleInstance.isCompleted();
        assert.equal(isCompleted.valueOf(), expected_isCompleted, 'CustomCrowdsale Contract Should have a hasClosed of false');
    });


    it('[ TEST ]: * ', async () => {
        var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();
        const value = new web3.utils.BN(web3.utils.toWei("1", 'ether'));
        const purchaser = accounts[2];
        const investor1 = accounts[4];
//
//        var openingTime = (await myCustomCrowdsaleInstance.openingTime()).toNumber();
//        console.log(openingTime);
//
//        var actualTime = await time.latest();
//        console.log(actualTime.toNumber());
//
//        var newTime = await time.increaseTo(openingTime + duration.minutes(2));
//        await myCustomCrowdsaleInstance.buyTokens(investor1, { value: value, from: purchaser }).should.be.fulfilled;
    });

    it('[ Tx ]: Contract should have a Default remainingTokens of * ', async () => {
        try {
            var myTokenInstance = await myToken.deployed();
            var myWethInstance = await myWeth.deployed();

            //var value = new web3.utils.BN(web3.utils.toWei("1", 'ether'));
            var investorOne = accounts[1];
            var investorTwo = accounts[2];
            var investorThree = accounts[3];

            var expected_isCompleted = false;

            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            var goal = (await myCustomCrowdsaleInstance.getGoal()).toNumber();
            var rate = (await myCustomCrowdsaleInstance.getRate()).toNumber();

            //var totalAllowedInvestment = goal - ether('1')
            await myWethInstance.deposit({'value': ether('1')});

            //console.log(amount.valueOf());
            //console.log(total.valueOf());

            var currentWethBalance = (await myWethInstance.totalSupply()).valueOf();
            console.log(currentWethBalance);
            //assert.equal(currentWethBalance, ether('1').valueOf(), 'myWethInstance Contract Should have 1 ether as currentWethBalance');

            await myWethInstance.approve(myCustomCrowdsale.address, currentWethBalance);
            //await myWethInstance.approve(investorOne, ether('1')});
            //console.log(isApproved.valueOf());

            var isCompleted =  await myCustomCrowdsaleInstance.isCompleted();
            assert.equal(isCompleted.valueOf(), expected_isCompleted, 'CustomCrowdsale Contract Should have a hasClosed of false');
            console.log('Crowdsale Closed? ' + isCompleted.valueOf());


            //await myCustomCrowdsaleInstance.buyToken(web3.utils.toWei('0.5'));
            //await myCustomCrowdsaleInstance.claimContributions();


            var startingTime = (await myCustomCrowdsaleInstance.getStartingTime()).toNumber();
            console.log('is Crowdsale Starting Time: ' + startingTime);

            var actualTime = await time.latest();
            console.log('Crowdsale Current Time: ' + actualTime.toNumber());

            var newTime = startingTime + duration.minutes(3);
            console.log('Crowdsale Release Time: ' + newTime);

            await time.increaseTo(newTime);

            // Closing The Auction
            await myCustomCrowdsaleInstance.closeICO();

            var isCompleted =  await myCustomCrowdsaleInstance.isCompleted();
            console.log('is Crowdsale Closed? ' + isCompleted.valueOf());

            // var expected_isCompleted = true;
            // assert.equal(isCompleted.valueOf(), expected_isCompleted, 'CustomCrowdsale Contract Should have a hasClosed of false');



        } catch(error) {
            console.log(error);
        }
    });
});