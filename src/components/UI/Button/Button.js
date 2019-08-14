import React  from 'react';
import classes from './Button.css';

const Button =(props)=> (

<button 
className={[classes.Button,classes[props.btnType]].join(' ')}//dynamic styles needed that's y btnType will be either Success or Danger
onClick={props.click}>
{props.children}
</button>
);


export default Button;