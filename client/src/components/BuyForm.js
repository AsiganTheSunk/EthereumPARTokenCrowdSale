import React from 'react';

class BuyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', isBuyButtonDisabled: false, isClaimButtonDisabled:false, isCloseCrowdsaleDisable:false, errorMessage: ' '};


        this.handleChange = this.handleChange.bind(this);
        this.handleClaimSubmit = this.handleClaimSubmit.bind(this);
        this.handleBuySubmit = this.handleBuySubmit.bind(this);
    }

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
            }

        }
        this.setState({errorMessage: eventErrorMesage});
        //this.setState({[eventVarName]: eventVarValue});
    };

    // handleCloseSubmit(event) {}

    handleBuySubmit(event) {
    }

    handleClaimSubmit(event) {
    //     alert('An essay was submitted: ' + this.state.value);
    //     event.preventDefault();
    //
    //     this.setState({isBuyButtonDisabled: true});
    //     let currentAmount = this.state.value;
    //     if (currentAmount === '') {
    //         alert("Invested Amount Must be more than 0");
    //         console.log('Invested amount must be more than 0');
    //     }
    //
    //     if (currentAmount !== '' && Number(currentAmount) && currentAmount > Number(0)) {
    //         console.log('Investment requirements fullfilled')
    //         // Time Out the button to avoid over transfering funds and spam clicking (1s delay).
    //
    //         // Pass the Function to make the transfer.
    //         //this.buyTokensTransaction(currentAmount);
    //     }
    //     setTimeout(() => this.setState({ isBuyButtonDisabled: false }), 1000);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <center>
                            <br/>
                            <b>Enter your desired CustomToken Amount:</b>
                            <br/>
                            <input type='text' name='Amount' onChange={this.handleChange}/>
                            <input type="submit" name='buyToken' value='BuyToken' disabled={this.state.isBuyButtonDisabled}/>
                            <input type="submit" name='ClaimToken' value='ClaimToken' disabled={this.state.isBuyButtonDisabled}/>
                            <input type="submit" name='ClaimToken' value='CloseICO' disabled={this.state.isBuyButtonDisabled}/>
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
