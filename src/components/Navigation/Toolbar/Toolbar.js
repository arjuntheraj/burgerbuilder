import React  from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar =(props)=> (
 
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo></Logo>
    <NavigationItems></NavigationItems>
  </header>


);

export default Toolbar;