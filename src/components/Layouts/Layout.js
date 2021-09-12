import React, { Fragment } from "react";

import classes from './layout.css'

const layout = (props) => (
    <Fragment>
        <div>Toolbar, sideDrawer, backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;