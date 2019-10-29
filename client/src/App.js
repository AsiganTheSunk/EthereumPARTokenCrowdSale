
import React, { Component } from 'react'
//import Web3 from 'web3'
import './App.css'
//import truffleContract from 'truffle-contract'
import getWeb3 from "./utils/getWeb3";
import crowdsaleArtifact from "./contracts/CustomCrowdsale.json";
import tokenArtifact from "./contracts/CustomToken.json";
import wethArtifact from "./contracts/WETH9.json";
import logo from './ETH-Icon.png'

class App extends Component {
    state = {
        web3: null, accounts: null, contract: null, token: null, weth: null, networkId: null,
        crowdsaleRate: null, crowdsaleGoal: null, crowdsaleContribution: null,
        crowdsaleStart: null, crowdsaleClose: null, crowdsaleRelease: null,
        crowdsaleBalance: null, crowdsaleState: null,
        wethName: null, wethSymbol: null, wethDecimals: null,
        tokenName: null, tokenSymbol: null, tokenDecimals: null, tokenBalance: null,
        isTransferButtonDisabled: false, time: 0
    };

    componentWillMount() {
        var interval = setInterval(() => this.setState({ time: (Date.now() / 60000) - this.state.time }), 60000);
        this.loadBlockchainData();
    }

    onLaunchClicked (event) {
        event.preventDefault();
        this.setState({isTransferButtonDisabled: true});
        let amount = this.state.amount;
        if (amount === '') {
            // Alert on Submit if the amount is 0
            alert("Your Invested Amount Must be more than 0");
        }
        if (amount !== '' && Number(amount)) {
            // Time Out the button to avoid over transfering of the funds and spam clicking.
            alert("Your Invested Amount is Being Transfer ...");
        }
        setTimeout(() => this.setState({ isTransferButtonDisabled: false }), 1000);
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

    };

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "amount") {
            if (val !=='' && !Number(val)) {
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    };

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

            this.setState({ web3, accounts, contract: crowdsaleInstance, weth: wethInstance, token: tokenInstance, networkId }, this.runExample);
      } catch (err) {
            // Catch any errors for any of the above operations.
            alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            console.error(err);
      }
  }

    runExample = async () => {
        const { accounts, contract, token, weth } = this.state;
        // Stores a given value, 5 by default.
        //await contract.methods.set(5).send({ from: accounts[0] });

        // Get static values from the contract WETH9 to prove it was correcly loaded by Web3js
        const currentWethName = await weth.methods.name().call();
        const currentWethSymbol = await weth.methods.symbol().call();
        const currentWethDecimals = await weth.methods.decimals().call();

        // Get static values from the contract CustomToken to prove it was correctly loaded by Web3js
        const currentTokenBalance = await token.methods.getAmount().call();
        const currentTokenName = await token.methods.name().call();
        const currentTokenSymbol = await token.methods.symbol().call();
        const currentTokenDecimals = await token.methods.decimals().call();

        // Assert ownership of the customtoken?¿?¿
        const currentCrowdsaleRate = await contract.methods.getRate().call();
        const currentCrowdsaleCap = await contract.methods.getCap().call();
        const currentCrowdsaleGoal = await contract.methods.getGoal().call();
        const currentCrowdsaleContribution = await contract.methods.getCurrentContribution().call().valueOf();
        const currentCrowdsaleStart = await contract.methods.getStartingTime().call();
        const currentCrowdsaleClose = await contract.methods.getClosingTime().call();
        const currentCrowdsaleRelease = ((await contract.methods.getReleaseTime().call()) - currentCrowdsaleClose) / 60000;
        const currentCrowdsaleState = (await contract.methods.isCompleted().call()).toString();

        this.setState({
            wethName: currentWethName, wethSymbol: currentWethSymbol, wethDecimals: currentWethDecimals,
            tokenName: currentTokenName, tokenSymbol: currentTokenSymbol, tokenDecimals: currentTokenDecimals, tokenBalance: currentTokenBalance,
            crowdsaleRate: currentCrowdsaleRate, crowdsaleCap: currentCrowdsaleCap, crowdsaleGoal: currentCrowdsaleGoal,
            crowdsaleContribution: currentCrowdsaleContribution, crowdsaleStart: currentCrowdsaleStart, crowdsaleClose: currentCrowdsaleClose,
            crowdsaleRelease: currentCrowdsaleRelease, crowdsaleState: currentCrowdsaleState
        });
    };

    constructor(props) {
        super(props);
        //this.state = { account: '', name: '', rate: '' }
    }

  render() {

      const hposition = {
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      };

      const mystyle = {
          color: "black",
          backgroundColor: "lightblue",
          padding: "10px",
          fontFamily: "Arial",
          width: 800,
          textAlign: 'center'
      };

      const headline = {
          textAlign: 'center', // <-- the magic
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 0,
          width: 100,
      };

      const divstyle = {

          backgroundColor: 'lightgrey',
          width: 640,
          padding: 10,
      };

      const headerStyle = {
          textAlign: 'center',
      };

      if (!this.state.web3) {
          return (
              <div>Loading Web3, accounts, and contract...</div>
          );
      }
    return (
        <div className="container">
            <p>Main Account: {this.state.accounts[0]} Network Id: {this.state.networkId} </p>
            <form onSubmit={this.mySubmitHandler}>
                <center>
                    <img src={logo} className="App-logo" alt="logo" />
                </center>
                <div>
                    <center>
                        <h1 style={mystyle}> Welcome To The Custom Crowdsale </h1>
                        <p> <b>Select The  Amount & Start Contributing! </b></p>
                    </center>
                    <div>
                        <center>
                        <pre style={divstyle}> --------------------------------- DISCLAIMER ----------------------------------
                        <br/>
                        <br/><b>Custom Crowdsale</b> is not protected against <b>Reentry Attacks</b>
                        <br/><b>Custom Crowdsale</b> is not fully protected against <b>UnderFlow/OverFlow Attacks</b>
                        <br/>
                        <br/> ------------------------------------------------------------------------------- </pre>
                        </center>
                    </div>
                </div>
                <div>
                    <center>
                        <p>
                            wethInfo: <br/>
                            <b> {this.state.wethName} </b> , <b> {this.state.wethSymbol} </b>, <b> {this.state.wethDecimals} </b> <br/>
                            tokenInfo: <br/>
                            <b> {this.state.tokenName}  </b>,  <b>{this.state.tokenSymbol} </b>,  <b> {this.state.tokenDecimals} </b>, <b> {this.state.tokenBalance} </b> <br/>
                            crowdsaleInfo: <br/>
                            <b> RATE: {this.state.crowdsaleRate} </b>, <b> CAP: {this.state.crowdsaleCap} </b>, <b> GOAL: {this.state.crowdsaleGoal} </b>, <b> BALANCE: {this.state.crowdsaleBalance} </b> <br/>
                            <b> OPENING TIME: {this.state.crowdsaleStart} </b>, <b> CLOSING TIME: {this.state.crowdsaleClose} </b>, <b> RELEASE TIME: {this.state.crowdsaleRelease} </b>, <b> isClosed: {this.state.crowdsaleState} </b> <br/>
                        </p>
                        <div>User online for {this.state.time} minutes</div>
                        <p>Enter your desired CustomToken Amount:</p>
                        <input type='text' name='amount' onChange={this.myChangeHandler}/>

                        <br/>
                        <br/>
                    </center>
                </div>
                <div>
                    <center>
                        <input type='submit' name='transfer' onClick={this.onLaunchClicked} disabled={this.state.isTransferButtonDisabled}/>
                        {this.state.errormessage}
                    </center>
                </div>
                <center>

                </center>
            </form>
            <br/>
        </div>
        );
    }
}

export default App;