import React from 'react';

function Disclaimer() {
    const divstyle = {
        backgroundColor: 'lightgrey',
        width: 800,
        alignSelf: 'center',
        padding: 10,
    };
    return (
        <div>
            <br/>
            <pre style={divstyle}> --------------------------------- DISCLAIMER ----------------------------------
            <br/>
            <br/><b>Custom Crowdsale</b> is not protected against <b>Reentry Attacks</b>
            <br/><b>Custom Crowdsale</b> is not fully protected against <b>UnderFlow/OverFlow Attacks</b>
            <br/>
            <br/> ------------------------------------------------------------------------------- </pre>
            <br/>
        </div>
    )
}

export default Disclaimer;




