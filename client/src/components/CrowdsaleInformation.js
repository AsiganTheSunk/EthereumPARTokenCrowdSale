import React from 'react';
import Countdown from 'react-countdown-now';

function CrowdsaleInformation(props) {
    return (
        <div>
            <br/>
            <b> [ Crowdsale Information ] </b>
            <br/>
            <b> Rate: </b> {props.crowdsaleRate}, <b> Cap: </b> {props.crowdsaleCap}, <b> Goal: </b> {props.crowdsaleGoal}
            <br/>
            <b> ClosingTime in </b> {props.crowdsaleClose} min, <b> ReleaseTime in </b> {props.crowdsaleRelease} min
            <br/>
            <b> Tokens Left Until Goal Reached: </b> {String(props.crowdsaleTokensUntilGoal).slice(0, String(props.crowdsaleTokensUntilGoal).length -18)}
            <br/>
            <b> Tokens Left: </b> {String(props.crowdsaleTokensLeft).slice(0, String(props.crowdsaleTokensLeft).length -18)}
            <br/>
            <b> Status(isClosed): </b> {props.crowdsaleState}
            <br/>
        </div>
    )
}
//             <b> Time Left Until Natural Close: </b>  <Countdown date={props.crowdsaleInitTime + (props.crowdsaleClose * 60000)} />
//             <br/>
//             <b> Time Left Until Natural Release: </b>  <Countdown date={props.crowdsaleInitTime + ((props.crowdsaleClose  + props.crowdsaleRelease) * 60000)} />
//             <br/>

export default CrowdsaleInformation;
