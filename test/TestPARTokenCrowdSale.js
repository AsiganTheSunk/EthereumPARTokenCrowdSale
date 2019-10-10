//const contract = require('truffle-contract');
//const wethArtifact = require('canonical-weth');
//const weth = contract(wethArtifact);

const PARToken = artifacts.require("PARToken");

contract('PARToken', accounts => {
  const _name = 'PAR Token';
  const _symbol = 'PARTKN';
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await DappToken.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      decimals.should.be.bignumber.equal(_decimals);
    });
  });
});
