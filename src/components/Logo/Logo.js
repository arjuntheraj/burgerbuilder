import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png'
const Logo =(props)=>(

  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger"></img>
  </div>

);

   


export default Logo;