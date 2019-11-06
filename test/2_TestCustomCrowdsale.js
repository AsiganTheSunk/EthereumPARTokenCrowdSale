/**
 * Init() Section for the Deployed Contracts CustomToken, WETH9 & CustomCrowdsale
 */
const { balance, BN, time, ether, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

var myWeth = artifacts.require("canonical-weth/contracts/WETH9.sol");
var myToken = artifacts.require("../contracts/tokens/CustomToken.sol");
var myCustomCrowdsale = artifacts.require("../contracts/CustomCrowdsale.sol");

contract('CustomCrowdsale', (accounts) => {

    /**
     * Evaluate if the current CustomCrowdsale has the correct rate for the defined Crowdsale
     */
    it('[ Init ]: Contract should have a Default Rate of 2', async () => {
        try {
        	// Await Deployment of the Smart Contract
            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            // Expected value for rate in CustomCrowsale
            var expectedRate = 2;

            // Retrieve Current rate value in CustomCrowdsale Contract
            var rate = await myCustomCrowdsaleInstance.rate();

            assert.equal(rate.toNumber(), expectedRate, 'CustomCrowdsale Contract Should have a Rate of 2');
        } catch(err) {
            console.log(err);
        }
    });

    /**
     * Evaluate if the current CustomCrowdsale has the correct cap for the defined Crowdsale
     */
    it('[ Init ]: Contract should have a Default Cap of 10 ether', async () => {
        try {
            // Await Deployment of the Smart Contract
            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            // Expected value for cap in CustomCrowsale
            var expectedCap = ether('10');

            // Retrieve Current cap value in CustomCrowdsale Contract
            var cap = await myCustomCrowdsaleInstance.cap();

            assert.equal(String(cap), String(expectedCap), 'CustomCrowdsale Contract Should have a Cap of 100');
        } catch(err){
            console.log(err);
        }
    });

    /**
     * Evaluate if the current CustomCrowdsale has the correct goal for the defined Crowdsale
     */
    it('[ Init ]: Contract should have a Default Goal 50 ether', async () => {
        try {
        	// Await Deployment of the Smart Contract
            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            // Expected Value for Contract
            var expected_goal = ether('50');

             // Retrieve Current cap value in CustomCrowdsale Contract
            var goal = await myCustomCrowdsaleInstance.contributionGoal();

            assert.equal(String(goal), String(expected_goal), 'CustomCrowdsale Contract Should have a Goal of 50');
        } catch(err) {
            console.log(err);
        }
    });

    /**
     * Evaluate if the current CustomCrowdsale can perform all the necesary actions of a Crowsale, with cap, rate, goal and time constraints
     */
    it('[  Tx  ]: Contract should be able to perform a standard buy sequence', async () => {
        try {
        	// Await Deployment of the Smart Contracts
            var myTokenInstance = await myToken.deployed();
            var myWethInstance = await myWeth.deployed();
            var myCustomCrowdsaleInstance = await myCustomCrowdsale.deployed();

            // Wait for all the Deployements to be over
            Promise.all([myTokenInstance, myWethInstance, myCustomCrowdsaleInstance]);

            /**
              * Make a deposit in the WETH9 Contract
              */
            await myWethInstance.deposit({'value': ether('10')});
            // Retrieve the deposit made previously
            var depositedWeth = new BN(await myWethInstance.totalSupply());
            // Expected value to be Retrieved  with the totalSuppy() function
            var expectedWeth9 = new BN(ether('10'));
            console.log('         (+)  Deposit of WETH in WETH9 Contract: ' + String(depositedWeth).slice(0,2)  + ' ether');
            // Assertion for the Current deposit vs Expected deposit of WETH9
            assert.equal(String(depositedWeth), String(expectedWeth9), 'myWethInstance Contract Should have x ether as currentWethBalance');

            /**
              * Make a approval operation in the current CustomCrowsale Contract of the previous amount of WETH9
              */

            await myWethInstance.approve(myCustomCrowdsale.address, depositedWeth);
            // Retrieve the Current Balance of WETH9 in the CustomCrowdsale
            var currentWethBalance = new BN((await myCustomCrowdsaleInstance.getWethTotalSupply()));
            // Assertion for the Current Balance vs Expected deposit of WETH9
            console.log('         (+)  Approve of Tx with the Current WETH for CustomCrowdsale Contract: ' + String(currentWethBalance).slice(0,2) + ' ether');
            assert.equal(String(currentWethBalance), String(expectedWeth9), 'myWethInstance Contract Should have x ether as currentWethBalance');

            /**
              * Check Current state of the CustomCrowdsale (Open)
              */
            // Retrieve the Current state of the Crowdsale
            var isCompleted =  await myCustomCrowdsaleInstance.isCompleted();
            // Assertion of the Current state vs Expected stateof the CustomCrowdsale
            console.log('         (?)  Current Status for the CustomCrowdsale Conctract isCompleted: ' + String(isCompleted));
            assert.equal(isCompleted.valueOf(), false, 'CustomCrowdsale Contract Should have a hasClosed of false');

            /**
              * Perform a buy in the CustomCrowdsale
              */
            // Current Buyer
            var account0 = accounts[0];
            // Current Amount of CustomToken to buy in the CustomCrowdsale by the current buyer
            var currentTokenToBuy = 5;
            var currentEtherToInvest = new ether('5');
            // Perform a buy of the previous defined amount
            console.log('         (?)  Current Ether to Invest in the CustomCrowdsale Conctract: ' + String(currentEtherToInvest).slice(0,1) + ' ether');
            await myCustomCrowdsaleInstance.buyToken({'from': account0, 'value': currentEtherToInvest});

            var rate = await myCustomCrowdsaleInstance.rate();
            var currentAmmountToApprove = new BN(rate * currentTokenToBuy);
            try {
                /**
                 * Perform the claim from the buyer on the owned tokens without the time contraint/closed ICO being met
                 */
                // Aprove the current transfer of the amount that has been bought
                console.log('         (+)  Approve of Tx with the Current TokenToInvest for CustomCrowdsale Contract: ' + String(currentAmmountToApprove).slice(0,2) + ' token');
                await myTokenInstance.approve(myCustomCrowdsaleInstance.address, String(currentAmmountToApprove));
                // Perform the claim for the CustomTokens
                await myCustomCrowdsaleInstance.claimContribution({'from':account0});

            } catch(err) {
                console.log('         (+)  Perform the claim from the buyer on the owned tokens without the time contraint/closed ICO being met');
                console.log('       (expect)  ', err.message);
            }

            /**
              * Simulate the closing & apply the release time to the CustomCrowdsale
              */
            console.log('         (+)  Perform the claim from the buyer on the owned tokens with the time contraint/closed ICO being met');
            // Perform the closing of the CustomCrowdsale
            await myCustomCrowdsaleInstance.closeCustomCrowdsale();
            // Retrieve the releaseTime from the CustomCrowdsale
            var releaseTime = (await myCustomCrowdsaleInstance.releaseTime());
            // Using openzeppelin time, increase the time to the releaseTime
            await time.increaseTo(releaseTime);

            /**
              * Check Current state of the CustomCrowdsale (Closed)
              */
            // Retrieve the Current state of the Crowdsale
            var valueIsCompleted =  await myCustomCrowdsaleInstance.isCompleted();
            // Assertion of the Current state vs Expected stateof the CustomCrowdsale
            console.log('         (?)  Current Status for the CustomCrowdsale Conctract isCompleted: ' + String(valueIsCompleted));
            assert.equal(valueIsCompleted.valueOf(), true, 'CustomCrowdsale Contract Should have a hasClosed of true');

            // Retrieve the Current Amount of tokens owned by the CustomCrowdsale
            var currentTokenInCrowdsale = await myTokenInstance.getBalance(myCustomCrowdsaleInstance.address);
            console.log('         (?)  Current Tokens in CustomCrowdsale '+ String(currentTokenInCrowdsale).slice(0,4) + ' token');


            /**
              * Perform the claim from the buyer on the owned tokens
              */
            // Aprove the current transfer of the amount that has been 44444
            var rate = await myCustomCrowdsaleInstance.rate();
            var currentAmmountToApprove = new BN(rate * currentTokenToBuy);
            console.log('         (+)  Approve of Tx with the Current TokenToInvest for CustomCrowdsale Contract: ' + String(currentAmmountToApprove).slice(0,2) + ' token');
            await myTokenInstance.approve(myCustomCrowdsaleInstance.address, currentAmmountToApprove);
            // Perform the claim for the CustomTokens
            var currentClaimedTokens = await myCustomCrowdsaleInstance.claimContribution({from:account0});
            console.log('         (+)  Claim of Tx with the Current TokenToInvest for CustomCrowdsale Contract: ' + String(currentAmmountToApprove).slice(0,2) + ' token');
            // Retrieve current contribution held by the CustomCrowdsale
            var currentContribution  = await myCustomCrowdsaleInstance.currentContribution();
            console.log('         (?)  CurrentContribution in CustomCrowdsale '+ String(currentContribution).slice(0,1) + ' ether');
            // Retrieve current Balance held by the buyer
            var balance_account0 = await myTokenInstance.getBalance(account0);
            console.log('         (?)  Current Tokens in Account0 ' + String(balance_account0).slice(0,2) + ' token');
            // Retrieve current Token Balance held by the CustomCrowdsale
            var currentTokenBalance  = await myTokenInstance.getBalance(myCustomCrowdsale.address);
            console.log('         (?)  CurrentContribution in CustomCrowdsale '+ String(currentTokenBalance).slice(0,3) + ' token');

            // DEBUG SECTION for Events in the CustomCrowdsale (Event/Emit)
            // myCustomCrowdsaleInstance.getPastEvents({fromBlock: 0, toBlock: 'latest'}, function(error, events){ console.log(events); })
            // .then(function(events){
            //     console.log(events) // same results as the optional callback above
            // });


        } catch(err) {
            console.log(err);
        }
    });
});