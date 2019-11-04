import React from 'react';

function WethInformation(props) {
    return (
        <div>
            <br/>
            <b> [ Weth Information ]</b>
            <br/>
            <b> Name: </b> {props.wethName}, <b> Symbol: </b> {props.wethSymbol},  <b> Decimals: </b> {props.wethDecimals}
            <br/>
        </div>
    )
};

export default WethInformation;
