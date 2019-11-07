import React from 'react';
import Web3 from 'web3';
import { time, BN } from '@openzeppelin/test-helpers';

class BuyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isBuyButtonDisabled: false,
            isClaimButtonDisabled: false,
            isCloseCrowdsaleDisable: false,
            errorMessage: ' ',

            accounts: this.props.accounts,
            mainContract: this.props.mainContract,
            mainContractAddr: this.props.mainContractAddr,
            crowdsaleData: this.props.crowdsaleData,
            tokenContract: this.props.tokenContract,
            tokenContractAddr: this.props.tokenContractAddr,
            wethContract: this.props.wethContract,
            wethContractAddr: this.props.wethContractAddr,

            currentValue: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleBuyClick = this.handleBuyClick.bind(this);
        this.handleClaimClick = this.handleClaimClick.bind(this);
    }

    claimTokenTransaction = async () => {
        try {
            const { accounts, mainContract } = this.state;
            await mainContract.methods.claimContribution().send({'from': accounts[0]});
        } catch(err){
            console.log(err.message);
        }
    };

    closeCrowdsale = async () => {
        try {
            const { accounts, mainContract } = this.state;
            await mainContract.methods.closeCustomCrowdsale().send({'from': accounts[0]});
            const crowdsaleRelease = await mainContract.methods.releaseTime().call();

            await time.increaseTo(crowdsaleRelease);
        } catch(err){
            console.log(err.message);
        }
    };

    buySingleTokensTransaction = async (currentAmount) => {
        try {
            const { accounts, mainContract, wethContract, mainContractAddr, crowdsaleData, tokenContract } = this.state;

            console.log('Current Contract Data');
            console.log('--------------------------------------------------');
            console.log(this.state.mainContract, this.state.mainContractAddr);
            console.log(this.state.wethContract, this.state.wethContractAddr);
            console.log(this.state.tokenContract, this.state.tokenContractAddr);

            var weiAmount = Web3.utils.toWei(currentAmount.toString());
            console.log('+ Current Wei Amount: ' + weiAmount);

            // ADD RATE IN THE APPROVAL?
            await wethContract.methods.deposit().send({'value': weiAmount, 'from': accounts[0]});
            await wethContract.methods.approve(mainContractAddr, weiAmount).send({'from':accounts[0]});
            await mainContract.methods.buyToken().send({'from':accounts[0], 'value': String(weiAmount)});
            var ctcAmount = new BN(String(weiAmount * crowdsaleData.crowdsaleRate));
            await tokenContract.methods.approve(mainContractAddr, String(ctcAmount)).send({'from':accounts[0]});

        } catch(err){
            console.log('Single Operation Buy Tokens Crashing');
            console.log(err.message);
        }
    };

    handleChange = (event) => {
        const { accounts, mainContract } = this.state;
        event.preventDefault();
        let eventVarName = event.target.name;
        let eventVarValue = event.target.value;
        let eventErrorMesage = ' ';
        if (eventVarName === "Amount") {
            if (eventVarValue !=='' && !Number(eventVarValue)) {
                eventErrorMesage = <strong> The cuantity must be a number </strong>;
                this.setState({isBuyButtonDisabled: true, isClaimButtonDisabled: true});
            }
            else if (eventVarValue ===' ' || eventVarValue  < Number(0)) {
                eventErrorMesage = <strong> The cuantity must be over 0 </strong>;
                this.setState({isBuyButtonDisabled: true, isClaimButtonDisabled: true,  isCloseCrowdsaleDisable: true});
            } else if (eventVarValue  > Number(0)) {
                this.setState({isBuyButtonDisabled: false, isClaimButtonDisabled: false,  isCloseCrowdsaleDisable: false, currentValue: eventVarValue});
            } else {
                this.setState({isBuyButtonDisabled: true, isClaimButtonDisabled: true,  isCloseCrowdsaleDisable: true});
            }
        }
        this.setState({errorMessage: eventErrorMesage});
    };

    // Handle Close ICO for Debugging
    handleCloseClick(event) {
        event.preventDefault();
        this.closeCrowdsale();
    }

    // Handle Single Click Operations
    handleBuyClick(event) {
        event.preventDefault();
        const { currentValue } = this.state;
        try {
            this.buySingleTokensTransaction(currentValue);
        } catch(err) {
            console.log(err);
        }
    }

    // Handle Claim Click Operations
    handleClaimClick(event) {
        event.preventDefault();
        this.claimTokenTransaction();
    }

    render() {
        const input_style = {
            alignSelf: 'center',
            padding: 2,
            margin: 3
        };
        return (
            <div>
                <form>
                        <center>
                            <br/>
                            <b>Enter your desired CustomToken Amount:</b>
                            <br/>
                            <input type='text' style= {input_style} name='Amount' onChange={this.handleChange}/>
                        </center>
                </form>
                <center>
                    <button style= {input_style} disabled={this.state.isBuyButtonDisabled} onClick={this.handleBuyClick}> Buy (Single-Tx) </button>
                    <button style= {input_style} disabled={this.state.isClaimButtonDisabled} onClick={this.handleClaimClick}> Claim (Single-Tx) </button>
                    <button style= {input_style} disabled={this.state.isCloseCrowdsaleDisable} onClick={this.handleCloseClick}> Close Crowdsale (Debug) </button>
                    <br/>
                   {this.state.errorMessage}
                </center>
            </div>
        )
    }
};

export default BuyForm;
