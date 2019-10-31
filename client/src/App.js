// Import React & React Components
import React, { Component } from 'react'

// Import Crowdsale Styles
import './App.css'

// Import getWeb3Provider & Web3
import getWeb3 from "./utils/getWeb3";
import Web3 from 'web3';

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

        this.state = {
            web3: null, accounts: null,
            mainContract: null, tokenContract: null, wethContract: null,
            mainContractAddr: null, tokenContractAddr: null, wethContractAddr: null,
            networkId: null, networkName: null, time: null,
        };
    }

    // LOADING CONTRACT AND NETWORK DATA
    UNSAFE_componentWillMount() {
        this.loadContractArtifacts();
        this.loadStaticContractData();
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
                networkId });
        } catch (err) {
            // Catch any errors for any of the above operations.
            alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            console.error(err);
        }
    };

    loadStaticContractData = async () => {
        try {
            const { mainContract, tokenContract, wethContract } = this.state;
            // Get static values from the contract WETH9 to prove it was correcly loaded by Web3js
            this.wethName = await wethContract.methods.name().call();
            this.wethSymbol = await wethContract.methods.symbol().call();
            this.wethDecimals = await wethContract.methods.decimals().call();

            // Get static values from the contract CustomToken to prove it was correctly loaded by Web3js
            this.tokenBalance = await tokenContract.methods.getAmount().call();
            this.tokenName = await tokenContract.methods.name().call();
            this.tokenSymbol = await tokenContract.methods.symbol().call();
            this.tokenDecimals = await tokenContract.methods.decimals().call();

            // Get static values from the contract CustomCrowdsale to prove it was correctly loaded by Web3js
            this.crowdsaleRate = await mainContract.methods.getRate().call();
            this.crowdsaleCap = await mainContract.methods.getCap().call();
            this.crowdsaleGoal = await mainContract.methods.getGoal().call();
            this.crowdsaleStart = await mainContract.methods.getStartingTime().call(); // TODO: Change to a Proper Date Format
            this.crowdsaleClose = await mainContract.methods.getClosingTime().call();  // TODO: Change to a Proper Date Format
            this.crowdsaleRelease = ((await mainContract.methods.getReleaseTime().call()) - this.crowdsaleClose) / 60000;
            this.crowdsaleState = (await mainContract.methods.isCompleted().call()).toString();
       } catch(err) {
            console.log(err);
       }
    };

    buyTokensTransaction = async (currentAmount) => {
       try {
            const {
                accounts,
                mainContract, tokenContract, wethContract,
                wethContractAddr,  tokenContractAddr, mainContractAddr
            } = this.state;

            var weiAmount = Web3.utils.toWei(currentAmount);
            console.log('Current Wei Amount: ' + weiAmount);
            console.log(tokenContractAddr, wethContractAddr, mainContractAddr);

            await wethContract.methods.deposit().send({value: weiAmount, from:accounts[0]});
            await wethContract.methods.approve(mainContractAddr, weiAmount).send({from:accounts[0]});
            await mainContract.methods.buyToken(currentAmount).send({from:accounts[0]});
            await tokenContract.methods.approve(mainContractAddr, currentAmount).send({from:accounts[0]});

       } catch(err){
            console.log(err.message);
        }
    };

    claimTokenTransaction = async () => {
        try {
            const { accounts, mainContract} = this.state;
            await mainContract.methods.claimContribution().send({from: accounts[0]});
        } catch(err){
            console.log(err.message);
        }
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
                            wethName={this.wethName} wethSymbol={this.wethSymbol} wethDecimals={this.wethDecimals} />
                        <TokenInformation
                            tokenName={this.tokenName} tokenSymbol={this.tokenSymbol}
                            tokenDecimals={this.tokenDecimals} tokenBalance={this.tokenBalance} />
                        <CrowdsaleInformation crowdsaleRate={this.crowdsaleRate} crowdsaleCap={this.crowdsaleCap}
                                              crowdsaleGoal={this.crowdsaleGoal} crowdsaleBalance={this.crowdsaleBalance}
                                              crowdsaleStart={this.crowdsaleStart} crowdsaleClose={this.crowdsaleClose}
                                              crowdsaleRelease={this.crowdsaleRelease} crowdsaleState={this.crowdsaleState} />
                    </p>
                </center>
                <div>
                    <center>
                        <BuyForm/>
                        <br/>
                        <Disclaimer/>
                    </center>
                </div>
            </div>
            )
        }
};

export default App;