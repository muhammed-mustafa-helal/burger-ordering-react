import React from 'react'

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

export default function navigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active>Burder Builder</NavigationItem>
            <NavigationItem link='/'>Checkout</NavigationItem>
        </ul>
    )
}
