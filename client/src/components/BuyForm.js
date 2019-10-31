import React, { useState }  from 'react';
import Web3 from 'web3';

class BuyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', isBuyButtonDisabled: false, isClaimButtonDisabled:false, isCloseCrowdsaleDisable:false, errorMessage: ' '};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitAction = this.handleSubmitAction.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleClaimClick = this.handleClaimClick.bind(this);
    }

    claimTokenTransaction = async () => {
        try {
            const { accounts, mainContract} = this.state;
            await mainContract.methods.claimContribution().send({from: accounts[0]});
        } catch(err){
            console.log(err.message);
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
            console.log('BuyTokens Crashing')
            console.log(err.message);
        }
    };

    handleChange = (event) => {
        let eventVarName = event.target.name;
        let eventVarValue = event.target.value;
        let eventErrorMesage = ' ';
        if (eventVarName === "Amount") {
            if (eventVarValue !=='' && !Number(eventVarValue)) {
                eventErrorMesage = <strong> The cuantity must be a number </strong>;
                this.setState({isBuyButtonDisabled: true});
            }
            else if (eventVarValue  < Number(0)) {
                eventErrorMesage = <strong> The cuantity must be over 0 </strong>;
                this.setState({isBuyButtonDisabled: true});
            } else {
                this.setState({isBuyButtonDisabled: false});
                this.buyTokensTransaction(eventVarValue);
            }

        }
        this.setState({errorMessage: eventErrorMesage});
        //this.setState({[eventVarName]: eventVarValue});
    };

    handleSubmitAction(event) {
        let eventVarValue = event.target.value;
        console.log(eventVarValue);
        this.buyTokensTransaction(eventVarValue);
    }


    handleCloseClick(event) {
    }

    handleClaimClick(event) {
        this.claimTokenTransaction();
        //setTimeout(() => this.setState({ isBuyButtonDisabled: false }), 1000);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitAction}>
                    <div>
                        <center>
                            <br/>
                            <b>Enter your desired CustomToken Amount:</b>
                            <br/>
                            <input type='text' name='Amount' onChange={this.handleChange}/>
                            <input type="submit" name='buyToken' value='BuyToken' disabled={this.state.isBuyButtonDisabled}/>
                            <button type="button" name='ClaimToken' onClick={this.handleClaimClick} disabled={this.state.isBuyButtonDisabled}> ClaimToken </button>
                            <button type="button" name='CloseICO' disabled={this.state.isBuyButtonDisabled}> CloseICO </button>
                            <br/>
                            <center> {this.state.errorMessage} </center>
                        </center>
                    </div>
                </form>
            </div>
        )
    }
};

export default BuyForm;
