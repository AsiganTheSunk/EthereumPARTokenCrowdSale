import React, { Component } from 'react'

import './App.css'
import getWeb3 from "./utils/getWeb3";
import crowdsaleArtifact from "./contracts/CustomCrowdsale.json";
import tokenArtifact from "./contracts/CustomToken.json";
import wethArtifact from "./contracts/WETH9.json";
import logo from './ETH-Icon.png'
import Nav from './components/Nav';
import InstallMetamask from './components/InstallMetamask';
import UnlockMetamask from './components/UnlockMetamask';
//import Web3 from 'web3'


class App extends Component {
    constructor(props) {
        super(props);
        this.appName = 'CustomTokenCrodwsale';

        // this.isWeb3 = true;
        // this.isWeb3Locked = false;

        // Crowdsale Static Data Variables
        this.crowdsaleRate = 0;
        this.crowdsaleGoal = 0;
        this.crowdsaleCap = null;
        this.crowdsaleStart = 0;
        this.crowdsaleRelease = 0;
        this.crowdsaleClose = 0;
        this.crowdsaleBalance = 0;

        // Crowdsale Dinamic Data Variables TODO: move to state?
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
            web3: null, accounts: null, mainContract: null, tokenContract: null, wethContract: null, networkId: null, networkName: null, time: null
        };

        this.onLaunchClicked = this.onLaunchClicked.bind(this);
    }

    // LOADING CONTRACT AND NETWORK DATA
    UNSAFE_componentWillMount() {
        //var interval = setInterval(() => this.setState({ time: (Date.now() / 60000) - this.state.time }), 60000);
        this.loadContracts();
        this.setNetwork();
    };

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

    // Method for loading Contracts Deployed in the Network
    async loadContracts() {
        try {
            const web3 = await getWeb3();
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.net.getId();

            const deployedNetwork = crowdsaleArtifact.networks[networkId];
            const crowdsaleInstance = new web3.eth.Contract(
                crowdsaleArtifact.abi,
                deployedNetwork && deployedNetwork.address,
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

            this.setState({ web3, accounts, mainContract: crowdsaleInstance, wethContract: wethInstance, tokenContract: tokenInstance, networkId }, this.loadStaticContractData, this.loadDynamicContractData);
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
            // Stores a given value, 5 by default.
            //await contract.methods.set(5).send({ from: accounts[0] });
            this.crowdsaleWethSupply = await mainContract.methods.getWethTotalSupply().call();
            this.crowdsaleTokenSupply = await mainContract.methods.getCurrentContribution().call();
            this.crowdsaleContribution = await mainContract.methods.getTokenTotalSupply().call();

        } catch(err) {
            console.log(err);
        }
    };

    // Method for loading Static Data from the Contracts
    loadStaticContractData = async () => {
        //try {
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

            // Assert ownership of the customtoken?¿?¿
            this.crowdsaleRate = await mainContract.methods.getRate().call();
            this.crowdsaleCap = await mainContract.methods.getCap().call();
            this.crowdsaleGoal = await mainContract.methods.getGoal().call();
            this.crowdsaleContribution = await mainContract.methods.getCurrentContribution().call().valueOf();
            this.crowdsaleStart = await mainContract.methods.getStartingTime().call();
            this.crowdsaleClose = await mainContract.methods.getClosingTime().call();
            this.crowdsaleRelease = ((await mainContract.methods.getReleaseTime().call()) - this.crowdsaleClose) / 60000;
            this.crowdsaleState = (await mainContract.methods.isCompleted().call()).toString();
       // } catch(err) {
        //     console.log(err);
        //}
    };


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

    mySubmitHandler = (event) => {
        event.preventDefault();

    };


    render() {
        const mystyle = {
            color: "black",
            backgroundColor: "lightblue",
            padding: "10px",
            fontFamily: "Arial",
            width: 800,
            textAlign: 'center'
        };

        const divstyle = {
            backgroundColor: 'lightgrey',
            width: 800,
            alignSelf: 'center',
            padding: 10,
        };

//        if(this.isWeb3Locked) {
//            return ( )

    if (!this.state.web3) {
        return (
            <div>
                <center>
                {/*<UnlockMetamask message="Unlock Your Metamask/Mist Wallet" />*/}
                    <b> Loading Web3, Accounts & Contracts ... </b>
                </center>
            </div>

        );
    }
    return (
        <div>
            <Nav appName={this.appName} network={this.state.networkName} />
            <center>
                <br/>
                <div>
                    <h1> <b>Select The  Amount & Start Contributing! </b></h1>


                        <pre style={divstyle}> --------------------------------- DISCLAIMER ----------------------------------
                        <br/>
                        <br/><b>Custom Crowdsale</b> is not protected against <b>Reentry Attacks</b>
                        <br/><b>Custom Crowdsale</b> is not fully protected against <b>UnderFlow/OverFlow Attacks</b>
                        <br/>
                        <br/> ------------------------------------------------------------------------------- </pre>
                </div>
            </center>
            <form onSubmit={this.mySubmitHandler}>
                <div>
                    <center>
                        <b> Account Address: </b> {this.state.accounts[0]} <br/>
                        <p>
                            wethInfo: <br/>
                            <b> {this.wethName} </b> , <b> {this.wethSymbol} </b>, <b> {this.wethDecimals} </b> <br/>
                            tokenInfo: <br/>
                            <b> {this.tokenName}  </b>,  <b>{this.tokenSymbol} </b>,  <b> {this.tokenDecimals} </b>, <b> {this.tokenBalance} </b> <br/>
                            crowdsaleInfo: <br/>
                            <b> RATE: {this.crowdsaleRate} </b>, <b> CAP: {this.crowdsaleCap} </b>, <b> GOAL: {this.crowdsaleGoal} </b>, <b> BALANCE: {this.crowdsaleBalance} </b> <br/>
                            <b> OPENING TIME: {this.crowdsaleStart} </b>, <b> CLOSING TIME: {this.crowdsaleClose} </b>, <b> RELEASE TIME: {this.crowdsaleRelease} </b>, <b> isClosed: {this.crowdsaleState} </b> <br/>
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