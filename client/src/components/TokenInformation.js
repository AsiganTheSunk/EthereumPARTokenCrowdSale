import React from 'react';

function TokenInformation(props) {
    return (
        <p>
            <br/>
            <b> [ Token Information ] </b>
            <br/>
            <b> Name: </b> {props.tokenName}, <b> Symbol: </b> {props.tokenSymbol},  <b> Decimals: </b> {props.tokenDecimals}, <b> Balance: </b> {props.tokenBalance}
            <br/>
        </p>
    )
};

export default TokenInformation;
