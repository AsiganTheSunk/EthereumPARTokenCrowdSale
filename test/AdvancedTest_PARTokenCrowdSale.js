// Importing Canonical WETH9
const contract = require('truffle-contract');
const wethArtifact = require('canonical-weth');
const weth = contract(wethArtifact);

// Imported Developed Contracts
const token = artifacts.require("PARToken");
const crowdsale = artifacts.require("CrowdSalePARToken");


const BigNumber = web3.BigNumber;
const expect = require('canonical-weth').expect;
const should = require('cannonical-weth').use(require('weth-as-promised'))

contract('CrowdSalePARToken', accounts => {


contract('MyCrowdsale', accounts => {
  const [
    wallet,
    overpaymentWallet,
    punter
  ] = accounts.slice(1)

  let crowdsale
  let token
  let refunded

  openingTime = Math.floor(new Date().getTime() / 1000)
  closingTime = openingTime + SECONDS_IN_A_DAY
  const rate = toWei(0.5)
  const amount = toWei(1.2)
  const expectedMax = amount.minus(rate.times(2))
  const goal = toWei(1)
  before(async () => {
    token = await MintableToken.new()
    crowdsale = await MyCrowdsale.new(
      openingTime,
      closingTime,
      wallet,
      overpaymentWallet,
      token.address,
      rate,
      goal
    )
    await crowdsale.buyTokens(
      punter, { value: amount, from: punter })
    await timeTravel(SECONDS_IN_A_DAY * 2)
    await crowdsale.finalize()
    const balance = web3.eth.getBalance(punter)
    await crowdsale.claimRefund({ from: punter })
    const newBalance = web3.eth.getBalance(punter)
    refunded = newBalance.minus(balance)
  })
  it('claimRefund refunds the overpayment', () => {
    // not exact as gas costs can vary slightly
    assert.isTrue(refunded.gt(0) && refunded.lt(expectedMax))
  })
})