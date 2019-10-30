// Import React & React Components
import React, { Component } from 'react'

// Import Crowdsale Logo
import logo from './ETH-Icon.png'

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

// Unused Imports, pending implementation
import FailToLoad from "./components/FailToLoad";

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
            mainContractAddr: null, tokenContractAddr: null,  wethContractAddr: null,
            networkId: null, networkName: null, time: null,
        };

       this.onLaunchClicked = this.onLaunchClicked.bind(this);
       // Bind Event for Claim Button
       //this.onLaunchClicked = this.onLaunchClicked.bind(this);
    }

    // LOADING CONTRACT AND NETWORK DATA
    UNSAFE_componentWillMount() {
        this.loadContracts();
        this.setNetwork();
    };

    // TODO: move to a separate utils file
    // Method to set the Proper name to the Network
    async setNetwork () {
        const { networkId} = this.state;
        var currentNetworkName = "";
        switch (networkId) {
            case "1":
                currentNetworkName = " Main";
                break;
            case "2":
                currentNetworkName = " Morden ";
                break;
            case "3":
                currentNetworkName = " Ropsten ";
                break;
            case "4":
                currentNetworkName = " Rinkeby ";
                break;
            case "42":
                currentNetworkName = " Kovan ";
                break;
            default:
                currentNetworkName = " Ganache ";
        }
        this.setState({ networkName: currentNetworkName });
    };

    // TODO: move to a separate utils file
    // Method for loading Contracts Deployed in the Network
    async loadContracts() {
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
                networkId }, this.loadStaticContractData, this.loadDynamicContractData);
        } catch (err) {
            // Catch any errors for any of the above operations.
            alert(`Failed to load web3, accounts, or contract. Check console for details.`);
            console.error(err);
        }
    };

    // Method for loading Dynamic Data
    loadDynamicContractData = async () => {
        try {
            const { mainContract } = this.state;
            this.crowdsaleWethSupply = await mainContract.methods.getWethTotalSupply().call();
            this.crowdsaleTokenSupply = await mainContract.methods.getCurrentContribution().call();
            this.crowdsaleContribution = await mainContract.methods.getTokenTotalSupply().call();
        } catch(err) {
            console.log(err);
        }
    };

    // TODO: move to a separate utils file
    // Method for loading Static Data from the Contracts
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

    // TODO: move to input.js component
    onLaunchClicked (event) {
        event.preventDefault();
        this.setState({isTransferButtonDisabled: true});
        let amount = this.state.amount;
        if (amount === '') {
            alert("Your Invested Amount Must be more than 0");
        }
        if (amount !== '' && Number(amount) && amount > Number(0)) {
            // Time Out the button to avoid over transfering funds and spam clicking (1s delay).
            this.buyTokensTransaction(amount);
        }
        setTimeout(() => this.setState({ isTransferButtonDisabled: false }), 1000);
    };

    // TODO: move to input.js component
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "amount") {
            if (val !=='' && !Number(val)) {
                err = <strong>The cuantity must be a number, more than 0</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    };

    // TODO: move to transaction.js component
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

            // TODO: does not appear to work, there is no call from metamask. CHECK MORE EXAMPLES
            // var batch = new Web3.BatchRequest();
            // batch.add(wethContract.methods.deposit().send({value: weiAmount, from:accounts[0]}));
            // batch.add(wethContract.methods.approve(mainContractAddr, weiAmount).send({from:accounts[0]}));
            // batch.add(mainContract.methods.buyToken(currentAmount).send({from:accounts[0]}));
            // batch.add(tokenContract.methods.approve(mainContractAddr, currentAmount).send({from:accounts[0]}));
            // batch.execute();
       } catch(err){
            console.log(err.message);
        }
    };

    // TODO: move to claim.js component
    claimTokenTransaction = async () => {
        try {
            const { accounts, mainContract} = this.state;
            await mainContract.methods.claimContribution().send({from: accounts[0]});
        } catch(err){
            console.log(err.message);
        }
    };

    // ** TIER 1: IMPLEMENTATION
    // TODO: Add Claim Button, Close CrowdsaleButton (Debugging)
    // TODO: Messages for Success/Failed Transactions

    // ** TIER 2: IMPLEMENTATION + REFACTOR
    // TODO: More Detailed Error on Web3, Contracts connection
    // TODO: Move Information Block into a container component
    // TODO: Remove Center Html5 for center style using css
    // TODO: Move form to form.js component
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
                    <form onSubmit={this.mySubmitHandler}>
                        <div>
                            <center>
                                <br/>
                                <h1> <b>Write The  Amount & Start Contributing! </b></h1>
                                <br/>
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
                    </form>
                </div>
                <center>
                    <Disclaimer/>
                </center>
            </div>
            )
        }
};

export default App;