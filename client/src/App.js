import React, { Component } from 'react'
//import Web3 from 'web3'
import './App.css'
//import truffleContract from 'truffle-contract'
import getWeb3 from "./utils/getWeb3";
import crowdsaleArtifact from "./contracts/CustomCrowdsale.json";
import tokenArtifact from "./contracts/CustomToken.json";
import wethArtifact from "./contracts/WETH9.json";

class App extends Component {
    state = { web3: null, accounts: null, contract: null, networkId: null, rate: null };
    componentWillMount() {
        this.loadBlockchainData();
    }


    async loadBlockchainData() {
        try {
            const web3 = await getWeb3();
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.net.getId();

            const deployedNetwork = crowdsaleArtifact.networks[networkId];
            const crowdsaleInstance = new web3.eth.Contract(
                crowdsaleArtifact.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // Get the contract instance for Custom Token.
            const deployedNetworkToken = tokenArtifact.networks[networkId];
            const tokenInstance = new web3.eth.Contract(
                tokenArtifact.abi,
                deployedNetworkToken && deployedNetworkToken.address,
            );

            const deployedNetworkWeth = wethArtifact.networks[networkId];
            const wethInstance = new web3.eth.Contract(
                wethArtifact.abi,
                deployedNetworkWeth && deployedNetworkWeth.address,
            );


            //this.setState({ web3, accounts, contract: CustomTokenInstance, networkId }, this.runExample);
            this.setState({ web3, accounts, contract: crowdsaleInstance, networkId }, this.runExample);
      } catch (err) {
            // Catch any errors for any of the above operations.
            alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            console.error(err);
      }
  }

    runExample = async () => {
        const { accounts, contract } = this.state;
        // Stores a given value, 5 by default.
        //await contract.methods.set(5).send({ from: accounts[0] });

        // Get the value from the contract to prove it worked.
        // const response = await contract.methods.decimals().call();
        // const response = await contract.methods.name().call();
        // const response = await contract.methods.symbol().call();

        // const response = await contract.methods.getTokenTotalSupply().call();
        // const response = await contract.methods.getRate().call();
        // const response = await contract.methods.getCap().call();
        // const response = await contract.methods.getGoal().call();
        // const response = await contract.methods.getCurrentContribution().call();
        // const response = await contract.methods.getStartingTime().call();
        // const response = await contract.methods.getClosingTime().call();
        // const response =  new String(await contract.methods.getReleaseTime().call());
        // const response = new String(await contract.methods.isCompleted().call());


        // Falla?¿?¿?¿
        //const response = await contract.buyToken(1).call();
        const response = await contract.claimContribution().call();
        //const response = await contract.getWethTotalSupply().call();

        // Update state with the result.
        this.setState({ rate: response });
    };


    constructor(props) {
        super(props);
        //this.state = { account: '', name: '', rate: '' }
    }

  render() {
      if (!this.state.web3) {
          return (
              <div>Loading Web3, accounts, and contract...</div>
          );
      }
    return (
        <div className="container">
        <h1> Truffledefackingmierder </h1>
            <p>Main Account: {this.state.accounts[0]}</p>
            <p>Network Id: {this.state.networkId}</p>
            <p>Rate: {this.state.rate}</p>
        </div>
        );
    }
}

export default App;