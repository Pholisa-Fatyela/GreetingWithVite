import React, { Fragment } from "react";

function MyCounter({counter, overallCounter}) {
    return <Fragment>
        {counter && 
        <><h1>Counter</h1><h2>{counter}</h2></>
        }

        <hr />
        <h1>People Greeted</h1>
        <h2>{overallCounter}</h2>
    </Fragment>
}

export default MyCounter