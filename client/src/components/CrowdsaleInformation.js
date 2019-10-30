import React from 'react';

function CrowdsaleInformation(props) {
    return (
        <div>
            <b> [ Crowdsale Information ] </b>
            <br/>
            <b> Rate: </b> {props.crowdsaleRate}, <b> Cap: </b> {props.crowdsaleCap}, <b> Goal: </b> {props.crowdsaleGoal}, <b> Token Balance: </b> {props.crowdsaleBalance}
            <br/>
            <b> OpeningTime: {props.crowdsaleStart} </b>, <b> ClosingTime: {props.crowdsaleClose} </b>, <b> ReleaseTime: </b> {props.crowdsaleRelease} min
            <br/>
            <b> Status(isClosed): </b> {props.crowdsaleState}
            <br/>

        </div>
    )
};

export default CrowdsaleInformation;
