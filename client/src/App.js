// Import React & React Components
import React, { Component } from 'react'

// Import Crowdsale Styles
import './App.css'

// Import getWeb3Provider & Web3
import getWeb3 from "./utils/getWeb3";
//import Web3 from 'web3';

// Import ABI for the Smart Contracts
import crowdsaleArtifact from "./contracts/CustomCrowdsale.json";
import tokenArtifact from "./contracts/CustomToken.json";
import wethArtifact from "./contracts/WETH9.json";

// Import Components for the App
import Nav from './components/Nav';
import Disclaimer from './components/Disclaimer';
import WethInformation from './components/WethInformation';
import TokenInformation from "./components/TokenInformation";
import CrowdsaleInformation from "./components/CrowdsaleInformation";
import LoadingMessage from "./components/LoadingMessage";
import Account from "./components/Account";
import BuyForm from "./components/BuyForm"

// Import utils module
import getNetworkName from './utils/getNerworkName'



class App extends Component {
    constructor(props) {
        super(props);
        this.appName = 'CustomTokenCrodwsale';

        this.crowdsaleInitTime = Date.now();
        // Crowdsale Static Data Variables
        this.crowdsaleRate = 0;
        this.crowdsaleGoal = 0;
        this.crowdsaleCap = 0;
        this.crowdsaleStart = 0;
        this.crowdsaleRelease = 0;
        this.crowdsaleClose = 0;
        this.crowdsaleTokensLeft = 0;
        this.crowdsaleTokensUntilGoal = 0;
        this.crowdsaleIsOwner = false;
        this.crowdsaleState = false;

        // Token & Weth Static Data Variables
        this.wethName = '';
        this.wethSymbol = '';
        this.wethDecimals = '';
        this.tokenName = '';
        this.tokenSymbol = '';
        this.tokenDecimals = '';
        this.tokenBalance = '';

        // TODO: Move Data to the proper State Varibles
        // Weth Data to be Stored in the State
        this.weth = {
            wethInstance: null, wethInstanceAddr: null,
            wethName: '', wethSymbol: '', wethDecimals: ''
        };

        // Token Data to be Stored in the State
        this.token = {
            tokenInstance: null, tokenIntanceAddr: null,
            tokenName: '', tokenSymbol: '', tokenDecimals: '', tokenBalance: ''
        };

        // Crowdsale Data to be Store in the State
        this.crowdsale = {
            crowdsaleInstance: null, crowdsaleInstanceAddr: null,
            crowdsaleRate: 0, crowdsaleGoal: 0, crowdsaleCap: 0, crowdsaleStart: 0,
            crowdsaleClose: 0, crowdsaleRelease: 0, crowdsaleBalance:0 ,
            crowdsaleState:false, crowdsaleOwner: false, crowdsaleIsOwner: null,
            crowdsaleTokensLeft: 0, crowdsaleTokensUntilGoal: 0, crowdsaleInitTime: this.crowdsaleInitTime,
        };

        this.state = {
            web3: null, accounts: null,
            mainContract: null, tokenContract: null, wethContract: null,
            mainContractAddr: null, tokenContractAddr: null, wethContractAddr: null,
            networkId: null, networkName: null, time: null,
            wethData: this.weth, tokenData: this.token, crowdsaleData: this.crowdsale,
            externalData: false
        };
    }


    // LOADING CONTRACT AND NETWORK DATA
    componentDidMount() {
        this.loadContractArtifacts();
        const { networkId } = this.state;

        // setInterval to check MetaMask
        // setInterval(() => this.setState({ web3: getWeb3() }), 1000);
        this.setState({ networkName: getNetworkName(networkId)});
        //this.componentWillUpdate();
    };

    async refreshWeb3() {
        var currentAccount = await getWeb3();
        return currentAccount;
    }

     componentWillUpdate() {

        setInterval(() => this.setState({ web3: this.refreshWeb3() }), 1000);
    }

    // Method for loading Contracts Deployed in the Network
    async loadContractArtifacts() {
        try {
            const web3 = await getWeb3();
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.net.getId();

            // Retrieving the current Artifact for the Crowdsale Contract
            const deployedNetworkCrowdsale = crowdsaleArtifact.networks[networkId];
            const crowdsaleInstance = new web3.eth.Contract(
                crowdsaleArtifact.abi,
                deployedNetworkCrowdsale && deployedNetworkCrowdsale.address,
            );

            // Retrivieving the current Artifact for the Custom Token
            const deployedNetworkToken = tokenArtifact.networks[networkId];
            const tokenInstance = new web3.eth.Contract(
                tokenArtifact.abi,
                deployedNetworkToken && deployedNetworkToken.address,
            );

            // Retrieving the current Artifact for the Weth
            const deployedNetworkWeth = wethArtifact.networks[networkId];
            const wethInstance = new web3.eth.Contract(
                wethArtifact.abi,
                deployedNetworkWeth && deployedNetworkWeth.address,
            );

            this.setState({
                web3, accounts,
                mainContract: crowdsaleInstance,
                wethContract: wethInstance,
                tokenContract: tokenInstance,
                mainContractAddr: deployedNetworkCrowdsale.address,
                wethContractAddr: deployedNetworkWeth.address,
                tokenContractAddr: deployedNetworkToken.address,
                networkId,  });
            
        } catch (err) {
            alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            console.error(err);
        }

        const {
            mainContract, tokenContract, accounts,
            wethContract, mainContractAddr, wethContractAddr,
            tokenContractAddr, wethData, tokenData, crowdsaleData
        } = this.state;

        // Get static values from the contract WETH9 to prove it was correcly loaded by Web3js
        this.wethName = await wethContract.methods.name().call();
        this.wethSymbol = await wethContract.methods.symbol().call();
        this.wethDecimals = await wethContract.methods.decimals().call();

        // Promise all values so it guarantees that the contracts will provide the information
        Promise.all([this.wethName, this.wethSymbol, this.wethDecimals]);
        console.log('current state for weth data',this.wethName, this.wethSymbol, this.wethDecimals);

        // Get static values from the contract CustomToken to prove it was correctly loaded by Web3js
        this.tokenName = await tokenContract.methods.name().call();
        this.tokenSymbol = await tokenContract.methods.symbol().call();
        this.tokenDecimals = await tokenContract.methods.decimals().call();
        this.tokenBalance = await tokenContract.methods.getAmount().call();

        // Promise all values so it guarantees that the contracts will provide the information
        Promise.all([this.tokenName, this.tokenSymbol, this.tokenDecimals, this.tokenBalance]);
        console.log('current state for token data',this.tokenName, this.tokenSymbol, this.tokenDecimals, this.tokenBalance);

        // Get static values from the contract CustomCrowdsale to prove it was correctly loaded by Web3js
        this.crowdsaleRate = await mainContract.methods.rate().call();
        this.crowdsaleCap = await mainContract.methods.cap().call();
        this.crowdsaleGoal = await mainContract.methods.contributionGoal().call();
        this.crowdsaleClose = (await mainContract.methods.closingTime().call() - await mainContract.methods.startingTime().call())/ 60000;
        this.crowdsaleRelease = ((await mainContract.methods.releaseTime().call()) - await mainContract.methods.closingTime().call()) / 60000;
        this.crowdsaleState = (await mainContract.methods.isCompleted().call()).toString();
        this.crowdsaleIsOwner = (await mainContract.methods.isOwner().call({'from':accounts[0]}));
        this.crowdsaleTokensLeft = (await mainContract.methods.getTokenTotalSupply(mainContractAddr).call());
        this.crowdsaleTokensUntilGoal = (this.crowdsaleGoal = await mainContract.methods.contributionGoal().call() - await mainContract.methods.currentContribution().call());
        console.log("Token Status", String(this.crowdsaleTokensLeft).slice(0, String(this.crowdsaleTokensLeft).length -18), '/', String(this.crowdsaleTokensUntilGoal).slice(0, String(this.crowdsaleTokensUntilGoal).length -18));

        // Promise all values so it guarantees that the contracts will provide the information
        Promise.all([this.crowdsaleRate, this.crowdsaleCap, this.crowdsaleGoal, this.crowdsaleStart, this.crowdsaleClose, this.crowdsaleRelease, this.crowdsaleState, this.crowdsaleIsOwner]);
        console.log('current state for crowdsale data', this.crowdsaleRate, this.crowdsaleCap, this.crowdsaleGoal, this.crowdsaleStart, this.crowdsaleClose, this.crowdsaleRelease, this.crowdsaleIsOwner);

        // Save Current Status of the Contracts in state objects in case any component needs the current values
        wethData.wethName = this.wethName;
        wethData.wethSymbol = this.wethSymbol;
        wethData.wethDecimals =  this.wethDecimals;

        tokenData.tokenName = this.tokenName;
        tokenData.tokenSymbol = this.tokenSymbol;
        tokenData.tokenDecimals = this.tokenDecimals;
        tokenData.tokenBalance = this.tokenBalance;

        crowdsaleData.crowdsaleRate = this.crowdsaleRate;
        crowdsaleData.crowdsaleCap = this.crowdsaleCap;
        crowdsaleData.crowdsaleGoal = this.crowdsaleGoal;
        crowdsaleData.crowdsaleStart = this.crowdsaleStart;
        crowdsaleData.crowdsaleClose = this.crowdsaleClose;
        crowdsaleData.crowdsaleRelease = this.crowdsaleRelease;
        crowdsaleData.crowdsaleState = this.crowdsaleState;
        crowdsaleData.crowdsaleTokensLeft = this.crowdsaleTokensLeft;
        crowdsaleData.crowdsaleTokensUntilGoal = this.crowdsaleTokensUntilGoal;
        crowdsaleData.crowdsaleIsOwner = this.crowdsaleIsOwner;

        this.setState({
            mainContract, tokenContract, wethContract,
            mainContractAddr, wethContractAddr, tokenContractAddr,
            wethData, tokenData, crowdsaleData });
        return this.state;
    };

    render() {
        if (!this.state.web3) {
            return (<LoadingMessage/>);
        }
        return (
            <div>
                <Nav appName={this.appName} network={this.state.networkName} />

                <center>
                    <Account accountId={this.state.accounts[0]}/>
                    <div>
                        <WethInformation
                            wethName={this.wethName}
                            wethSymbol={this.wethSymbol}
                            wethDecimals={this.wethDecimals}
                        />
                        <TokenInformation
                            tokenName={this.tokenName}
                            tokenSymbol={this.tokenSymbol}
                            tokenDecimals={this.tokenDecimals}
                            tokenBalance={this.tokenBalance}
                        />
                        <CrowdsaleInformation
                            crowdsaleRate={this.crowdsaleRate}
                            crowdsaleCap={String(this.crowdsaleCap).slice(0,2)}
                            crowdsaleGoal={String(this.crowdsaleGoal).slice(0,2)}
                            crowdsaleStart={this.crowdsaleStart}
                            crowdsaleClose={this.crowdsaleClose}
                            crowdsaleRelease={this.crowdsaleRelease}
                            crowdsaleState={this.crowdsaleState}
                            crowdsaleTokensLeft={this.crowdsaleTokensLeft}
                            crowdsaleTokensUntilGoal={this.crowdsaleTokensUntilGoal}
                            crowdsaleInitTime={this.crowdsaleInitTime}

                        />
                    </div>
                </center>
                <div>
                    <center>
                        <BuyForm
                            accounts={this.state.accounts}
                            mainContract={this.state.mainContract}
                            mainContractAddr={this.state.mainContractAddr}
                            tokenContract={this.state.tokenContract}
                            tokenContractAddr={this.state.tokenContractAddr}
                            wethContract={this.state.wethContract}
                            wethContractAddr={this.state.wethContractAddr}
                            crowdsaleData={this.state.crowdsaleData}
                        />
                        <br/>
                        <Disclaimer/>
                        <p>
                            <b> [ Weth Contract Addr ]: </b> {this.state.wethContractAddr}
                            <br/>
                            <b> [ Token Contract Addr ]: </b> {this.state.tokenContractAddr}
                            <br/>
                            <b>[ Crowdsale Contract Addr ]: </b> {this.state.mainContractAddr}
                        </p>
                    </center>
                </div>
            </div>
            )
        }
};

export default App;