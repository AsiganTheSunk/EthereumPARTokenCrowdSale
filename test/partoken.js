const MyToken = artifacts.require("../contracts/PARToken.sol");

contract('Testing PARToken', (accounts) => {
  it('should put 10000 PARToken in the First Account', async () => {
    const MyTokenCoinInstance = await MyToken.deployed();
    const balance = await MyTokenCoinInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 Wasn't in the First Account");
  });
  it('should call a function that depends on a linked library', async () => {
    const MyTokenCoinInstance = await MyToken.deployed();
    const MyTokenCoinBalance = (await MyTokenCoinInstance.getBalance.call(accounts[0])).toNumber();
    const MyTokenCoinEthBalance = (await MyTokenCoinInstance.getBalanceInEth.call(accounts[0])).toNumber();
    const MyTokenCoinWEthBalance = (await MyTokenCoinInstance.getBalanceInWEth.call(accounts[0])).toNumber();

    assert.equal(MyTokenCoinEthBalance, 2 * MyTokenCoinBalance, 'Library function returned unexpected function');
  });
  it('Should Send PARToken Correctly', async () => {
    const MyTokenCoinInstance = await MyToken.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await MyTokenCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await MyTokenCoinInstance.getBalance.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await MyTokenCoinInstance.transfer(accountTwo, amount);

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await MyTokenCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await MyTokenCoinInstance.getBalance.call(accountTwo)).toNumber();

    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount Wasn't Correctly Taken from the Sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount Wasn't Correctly Sent to the Receiver");
  });
});
