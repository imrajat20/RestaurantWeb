import React from "react";
import CartIcon from "../Cart/CartIcons";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {

    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Sumit ki Dukan</span>
        <span className={classes.badge}>3</span>
    </button>
};

export default HeaderCartButton;