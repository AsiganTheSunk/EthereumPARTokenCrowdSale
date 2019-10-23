const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myCustomCrowdsale = artifacts.require("../contracts/CustomCrowdsale.sol");

contract('CustomCrowdsale', (accounts) => {

    // it('[ Init ]: Contract should have a Default Rate of 2', async () => {
    //     // Default Values
    //     var expected_rate = 2;
    //     var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

    //     // Current Rate Value
    //     var rate = await myCustomCrowdsaleInstance.getRate();
    //     assert.equal(rate.toNumber(), expected_rate, 'CustomCrowdsale Contract Should have a Rate of 2');
    // });


    // it('[ Init ]: Contract should have a Default Cap of 10', async () => {
    //     // Await Deployment
    //     var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

    //     // Expected Value for Contract
    //     var expected_cap = 10;

    //     // Current Cap Default Value for Contract
    //     var cap = await myCustomCrowdsaleInstance.getCap();
    //     assert.equal(cap.toNumber(), expected_cap, 'CustomCrowdsale Contract Should have a Cap of 100');

    // });

    // it('[ Init ]: Contract should have a Default Goal 50', async () => {
    //     var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

    //     // Expected Value for Contract
    //     var expected_goal = 50;

    //     // Current Goal Default Value for Contract
    //     var goal = await myCustomCrowdsaleInstance.getGoal();
    //     assert.equal(goal.toNumber(), expected_goal, 'CustomCrowdsale Contract Should have a Goal of 100');
    // });


    // it('[ Init ]: Contract should have a Default currentContribution of 0', async () => {
    //     var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

    //     // Expected Value for Contract
    //     var expected_currentContribution = 0;

    //     var currentContribution  = await myCustomCrowdsaleInstance.getCurrentContribution();
    //     assert.equal(currentContribution.toNumber(), expected_currentContribution, 'CustomCrowdsale Contract Should have a currentContribution of 0');
    // });

    // it('[ Init ]: Contract should have a Default isCompleted of false', async () => {
    //     var expected_isCompleted = false;
    //     var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

    //     var isCompleted =  await myCustomCrowdsaleInstance.isCompleted();
    //     assert.equal(isCompleted.valueOf(), expected_isCompleted, 'CustomCrowdsale Contract Should have a hasClosed of false');
    // });


    // it('[ TEST ]: * ', async () => {
    //     var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();
    //     var latestTime      = (new Date).getTime();

    //     var startingTime = (await myCustomCrowdsaleInstance.getStartingTime());
    //     console.log('       +  Crowdsale Starting Time: ' + startingTime.toString(10));

    //     var closingTime = (await myCustomCrowdsaleInstance.getClosingTime());
    //     console.log('       +  Crowdsale Closing Time:  ' + closingTime.toString(10));

    // });

    it('[ Tx ]: Contract should have a Default remainingTokens of * ', async () => {
        try {

            // Deploy the Smart Contracts, and await via Promise.all()
            var myTokenInstance = await myToken.deployed();
            var myWethInstance = await myWeth.deployed();
            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            Promise.all([myTokenInstance, myWethInstance, myCustomCrowdsaleInstance]);

            // //var value = new web3.utils.BN(web3.utils.toWei("1", 'ether'));
            // var investorOne = accounts[1];
            // var investorTwo = accounts[2];
            // var investorThree = accounts[3];

            // var expected_isCompleted = false;

            // var goal = (await myCustomCrowdsaleInstance.getGoal()).toNumber();
            // var rate = (await myCustomCrowdsaleInstance.getRate()).toNumber();

            await myWethInstance.deposit({'value': ether('3')});
            var depositedWeth = new BN(await myWethInstance.totalSupply());
            console.log('       +  Current Deposit of WETH in WETH9 Contract: ' + String(depositedWeth));
            var expectedWeth9 = new BN(ether('3'));
            assert.equal(String(depositedWeth), String(expectedWeth9), 'myWethInstance Contract Should have 1 ether as currentWethBalance');

            await myWethInstance.approve(myCustomCrowdsale.address, depositedWeth);
            
            // myWethInstance.approve.totalSupply().call().then(function (err, result) {
            //     console.log('error', err);
            //     console.log('result', result);
            //   });
            // console.log('       +  isApproved in Crodwsale Contract: ' + isApproved.valueOf());

            var currentWethBalance = new BN((await myCustomCrowdsaleInstance.getWethTotalSupply()));
            console.log('       +  Current Allowance of WETH9 in Crodwsale Contract: ' + String(currentWethBalance));

            // var actualTime = await time.latest();
            // console.log('       +  Crowdsale Current Time:  ' + actualTime);

            // const startingTime = (await myCustomCrowdsaleInstance.getStartingTime());
            // console.log('       +  Crowdsale Starting Time: ' + startingTime);

            // const closingTime = (await myCustomCrowdsaleInstance.getClosingTime());
            // console.log('       +  Crowdsale Closing Time:  ' + closingTime);

            // const newTime = startingTime + duration.minutes(3);
            // console.log('       +  Crowdsale Release Time:  ' + newTime);
            // console.log('       +  Time increment of: ' + duration.minutes(3));

            // await time.increaseTo(newTime);

            // actualTime = await time.latest();
            // console.log('       +  Crowdsale Current Time:  ' + actualTime.toNumber());

            // Current Auction State **** ULTIMO DESCOMENTADO
            // //const expected_isCompleted = false;
            // var isCompleted =  await myCustomCrowdsaleInstance.isCompleted();
            // console.log('       +  isCrowdsale Closed? ' + isCompleted.valueOf());
            // assert.equal(isCompleted.valueOf(), true, 'CustomCrowdsale Contract Should have a hasClosed of true');

            const currentTokenToBuy = new BN(web3.utils.toWei('3')); 
            await myCustomCrowdsaleInstance.buyToken(currentTokenToBuy);
            var currentWethBalance = new BN((await myCustomCrowdsaleInstance.getWethTotalSupply()));
            console.log('       +  Current Allowance of WETH9 in Crodwsale Contract: ' + String(currentWethBalance));

            // Closing The Auction
            await myCustomCrowdsaleInstance.closeICO();
            const valueIsCompleted =  await myCustomCrowdsaleInstance.isCompleted();
            console.log('       +  isCrowdsale Closed? ' + valueIsCompleted.valueOf());
            const expectedIsCompleted = true;
            assert.equal(valueIsCompleted.valueOf(), expectedIsCompleted, 'CustomCrowdsale Contract Should have a hasClosed of false');
            console.log('       +  Crowdsale Closed? ' + valueIsCompleted.valueOf());
 
            // const currentTokenInCrowdsale = await myTokenInstance.getBalance(myCustomCrowdsaleInstance.address);
            // console.log('       +  Current Tokens in Crowdsale '+ String(currentTokenInCrowdsale));
            // await myTokenInstance.approve(myCustomCrowdsale.address, currentTokenToBuy);
            // await myCustomCrowdsaleInstance.claimContribution();

        } catch(error) {
            console.log(error);
        }
    });
});