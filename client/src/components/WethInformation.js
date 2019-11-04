import React from 'react';

function WethInformation(props) {
    return (
        <p>
            <br/>
            <b> [ Weth Information ]</b>
            <br/>
            <b> Name: </b> {props.wethName}, <b> Symbol: </b> {props.wethSymbol},  <b> Decimals: </b> {props.wethDecimals}
            <br/>
        </p>
    )
};

export default WethInformation;
