import React from "react";
import classes from './Header.module.css';
import mealPhoto from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h2>Shiva</h2>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealPhoto} alt="A table of foods"/>
        </div>
    </React.Fragment>
};

export default Header;