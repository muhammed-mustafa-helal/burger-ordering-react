import React, { Fragment } from "react";

import Aux from '../../hoc/Auxillary'
import classes from './layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, sideDrawer, backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;