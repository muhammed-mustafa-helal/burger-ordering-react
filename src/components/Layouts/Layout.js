import React, { Fragment } from "react";
import Aux from '../../hoc/Auxillary'

const layout = (props) => (
    <Aux>
        <div>Toolbar, sideDrawer, backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;