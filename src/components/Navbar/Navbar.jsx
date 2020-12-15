import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/img/Shopee-logo.png';
import useStyles from './styles'

const Narbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Shopaa
                    </Typography>
                    <div className={classes.grow}></div>
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton aria-label="Show card items" color="inherit">
                                <Badge component={Link} to='/cart' badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Narbar;
