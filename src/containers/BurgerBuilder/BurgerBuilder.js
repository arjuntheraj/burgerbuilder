import React, { Component } from 'react';
import './BurgerBuilder.css';

import Aux from '../../hoc/Aux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
  salad:0.5,
  bacon:0.7,
  cheese:0.5,
  meat:1.3
}
class BurgerBuilder extends Component {
  state={
   ingredients:{
     salad:0,
     bacon:0,
     cheese:0,
     meat:0
   },
   totalPrice:4,
   purchasable:false,
   purchasing:false

   
  }

  purchaseHandler=()=>{
    this.setState({purchasing:true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
}
purchaseContinueHandler = () => {
  alert("Your order is placed");
}
  updatePurchasestate=(ingredients)=>{
 //debugger
   
        // next line it will create an array salad,bacon,cheese ... i need the values here quantities
    const sum =Object.keys(ingredients)
       .map(igKey=>{
         return ingredients[igKey];//basically getting values associated with each salad,bacon etc..
       }).reduce((sum,el)=>{// here el is the number associated with each salad,bacon etc..

        return sum+el;
       },0);
       this.setState({purchasable:sum>0});


  }

  addIngredients=(type)=>{

    const oldCount=this.state.ingredients[type];
    const updatedCount=oldCount+1;
    const updatedIngredients={
      ...this.state.ingredients
    }
    updatedIngredients[type]=updatedCount;
    const priceAddition=INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const updatedPrice=oldPrice+priceAddition;
    this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
    this.updatePurchasestate(updatedIngredients);
  }
  removeIngredients=(type)=>{
    const oldCount=this.state.ingredients[type];
    if(oldCount<=0){
      return;
    }
    const updatedCount=oldCount-1;
    const updatedIngredients={
      ...this.state.ingredients
    }
    updatedIngredients[type]=updatedCount;
    const priceDeduction=INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const updatedPrice=oldPrice-priceDeduction;
    this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
    this.updatePurchasestate(updatedIngredients);
  }
  render() {
    const disabledInfo={
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key]=disabledInfo[key]<=0 // it will return true if the key is 0 or less key is the ingredient values
    }// will get salad:true,meat:false etc....
    return (
      <Aux>
         <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
           <OrderSummary 
           ingredients={this.state.ingredients}
           purchaseCancelled={this.purchaseCancelHandler}
           purchaseContinue={this.purchaseContinueHandler}
           price={this.state.totalPrice}
           ></OrderSummary>
         </Modal>
         <Burger ingredients={this.state.ingredients}></Burger>
         <BuildControls 
         ingredientsAdded={this.addIngredients} 
         ingredientsRemoved={this.removeIngredients}
         disabled={disabledInfo}
         purchasable={this.state.purchasable}
         price={this.state.totalPrice}
         checkout={this.purchaseHandler}
         >
         </BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;