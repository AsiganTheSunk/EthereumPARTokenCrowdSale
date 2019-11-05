import React from 'react';

function Account(props) {
    return (
        <div>
            <br/>
            <b> [ Account Address Information ] </b>
            <br/>
            {props.accountId}
            <br/>
        </div>
    )
}

export default Account;
