import React from 'react';

function TokenInformation(props) {
    return (
        <div>
            <br/>
            <b> [ Token Information ] </b>
            <br/>
            <b> Name: </b> {props.tokenName}, <b> Symbol: </b> {props.tokenSymbol},  <b> Decimals: </b> {props.tokenDecimals}, <b> Balance: </b> {String(props.tokenBalance).slice(0, String(props.tokenBalance).length -18)}
            <br/>
        </div>
    )
}

export default TokenInformation;
