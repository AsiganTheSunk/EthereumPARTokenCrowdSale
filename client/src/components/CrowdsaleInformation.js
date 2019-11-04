import React from 'react';

function CrowdsaleInformation(props) {
    return (
        <p>
            <br/>
            <b> [ Crowdsale Information ] </b>
            <br/>
            <b> Rate: </b> {props.crowdsaleRate}, <b> Cap: </b> {props.crowdsaleCap}, <b> Goal: </b> {props.crowdsaleGoal}, <b> Token Balance: </b> {props.crowdsaleBalance}
            <br/>
            <b> OpeningTime: </b> {props.crowdsaleStart}, <b> ClosingTime: </b> {props.crowdsaleClose}, <b> ReleaseTime: </b> {props.crowdsaleRelease} min
            <br/>
            <b> Status(isClosed): </b> {props.crowdsaleState}
            <br/>
        </p>
    )
};

export default CrowdsaleInformation;
