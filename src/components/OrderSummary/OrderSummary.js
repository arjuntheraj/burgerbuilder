import React from 'react';
import classes from './OrderSummary.css';

import Aux from '../../hoc/Aux';

import Button from '../../components/UI/Button/Button';

const OrderSummary =(props)=> {
 
  const ingredientSummary=Object.keys(props.ingredients)
  .map(item=>{
    return (
    <li key={item}>
      <span style={{textTransform:"capitalize"}}>{item}</span>:{props.ingredients[item]}
    </li>
    );
  });

 
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Delicious Burger with the following Ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Current Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout ?</p>
        <Button click={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
        <Button click={props.purchaseContinue} btnType="Success">CONTINUE</Button>
      </Aux>
    );
 
}

export default OrderSummary;