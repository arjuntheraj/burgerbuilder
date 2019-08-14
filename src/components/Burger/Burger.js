import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const Burger =(props)=>{
    let transformedIngredients=Object.keys(props.ingredients)  // it gives you an array of the keys from ingredients object
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredients key={igKey+1} type={igKey}></BurgerIngredients>;
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(transformedIngredients.length ===0){
      transformedIngredients=<p>Please start adding the ingredients !!!</p>;
    }
return (
 
    <div className={classes.Burger}>
        <BurgerIngredients type="bread-top"/>
         {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>

    </div>
);
};
export default Burger;