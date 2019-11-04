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

        // Crowdsale Static Data Variables
        this.crowdsaleRate = 0;
        this.crowdsaleGoal = 0;
        this.crowdsaleCap = 0;
        this.crowdsaleStart = 0;
        this.crowdsaleRelease = 0;
        this.crowdsaleClose = 0;
        this.crowdsaleBalance = 0;

        // Crowdsale Dinamic Data Variables
        this.crowdsaleTokenSupply = 0;
        this.crowdsaleWethSupply = 0;
        this.crowdsaleContribution = 0;
        this.crowdsaleState = false;

        // Token & Weth Static Data Variables
        this.wethName = '';
        this.wethSymbol = '';
        this.wethDecimals = '';
        this.tokenName = '';
        this.tokenSymbol = '';
        this.tokenDecimals = '';
        this.tokenBalance = '';

        this.weth = { wethName: '', wethSymbol: '', wethDecimals: '' };
        this.token = { tokenName: '', tokenSymbol: '', tokenDecimals: '', tokenBalance: ''};
        this.crowdsale = {crowdsaleRate: 0, crowdsaleGoal: 0, crowdsaleCap: 0, crowdsaleStart: 0, crowdsaleClose: 0, crowdsaleRelease: 0, crowdsaleBalance:0 , crowdsaleState:false };

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
        this.setState({ networkName: getNetworkName(networkId)});
    };

    // Method for loading Contracts Deployed in the Network
    async loadContractArtifacts() {
        try {
            const web3 = await getWeb3();
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.net.getId();

            const deployedNetworkCrowdsale = crowdsaleArtifact.networks[networkId];
            const crowdsaleInstance = new web3.eth.Contract(
                crowdsaleArtifact.abi,
                deployedNetworkCrowdsale && deployedNetworkCrowdsale.address,
            );

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
            // Catch any errors for any of the above operations.
            alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            console.error(err);
        }

        //TODO: Clean Up This Mess
        const {
            mainContract, tokenContract,
            wethContract, mainContractAddr, wethContractAddr,
            tokenContractAddr, wethData, tokenData, crowdsaleData
        } = this.state;

        // Get static values from the contract WETH9 to prove it was correcly loaded by Web3js
        this.wethName = await wethContract.methods.name().call();
        this.wethSymbol = await wethContract.methods.symbol().call();
        this.wethDecimals = await wethContract.methods.decimals().call();

        Promise.all([this.wethName, this.wethSymbol, this.wethDecimals]);
        console.log('current state for weth data',this.wethName, this.wethSymbol, this.wethDecimals);

        // Get static values from the contract CustomToken to prove it was correctly loaded by Web3js
        this.tokenName = await tokenContract.methods.name().call();
        this.tokenSymbol = await tokenContract.methods.symbol().call();
        this.tokenDecimals = await tokenContract.methods.decimals().call();
        this.tokenBalance = await tokenContract.methods.getAmount().call();
        Promise.all([this.tokenName, this.tokenSymbol, this.tokenDecimals, this.tokenBalance]);
        console.log('current state for token data',this.tokenName, this.tokenSymbol, this.tokenDecimals, this.tokenBalance);

        // Get static values from the contract CustomCrowdsale to prove it was correctly loaded by Web3js
        this.crowdsaleRate = await mainContract.methods.getRate().call();
        this.crowdsaleCap = await mainContract.methods.getCap().call();
        this.crowdsaleGoal = await mainContract.methods.getGoal().call();
        this.crowdsaleStart = await mainContract.methods.getStartingTime().call(); // TODO: Change to a Proper Date Format
        this.crowdsaleClose = await mainContract.methods.getClosingTime().call();  // TODO: Change to a Proper Date Format
        this.crowdsaleRelease = ((await mainContract.methods.getReleaseTime().call()) - this.crowdsaleClose) / 60000;
        // This line doing rejection!
        this.crowdsaleState = (await mainContract.methods.isCompleted().call()).toString();

        Promise.all([this.crowdsaleRate, this.crowdsaleCap, this.crowdsaleGoal, this.crowdsaleStart, this.crowdsaleClose, this.crowdsaleRelease, this.crowdsaleState]);
        console.log('current state for crowdsale data', this.crowdsaleRate, this.crowdsaleCap, this.crowdsaleGoal, this.crowdsaleStart, this.crowdsaleClose, this.crowdsaleRelease, this.crowdsaleState);

        // Save Current Status of the Contracts in state objects.
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
                    <p>
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
                            crowdsaleCap={this.crowdsaleCap}
                            crowdsaleGoal={this.crowdsaleGoal}
                            crowdsaleBalance={this.crowdsaleBalance}
                            crowdsaleStart={this.crowdsaleStart}
                            crowdsaleClose={this.crowdsaleClose}
                            crowdsaleRelease={this.crowdsaleRelease}
                            crowdsaleState={this.crowdsaleState}
                        />
                    </p>
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