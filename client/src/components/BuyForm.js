import React from 'react';

function BuyForm(props) {
    return (
        <div>
            <form onSubmit={this.mySubmitHandler}>
                <div>
                    <center>
                        <br/>
                        <p>Enter your desired CustomToken Amount:</p>
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
    )
};

export default BuyForm;
