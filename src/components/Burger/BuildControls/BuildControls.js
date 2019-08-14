import React  from 'react';
import classes from  './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';


const controls=[
  {label:'Salad',type:'salad'},
  {label:'Bacon',type:'bacon'},
  {label:'Cheese',type:'cheese'},
  {label:'Meat',type:'meat'}
    
];
const BuildControls=(props)=> {

    
    return(
  
      <div className={classes.BuildControls}>
        <p><strong>Current Price: {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
          <BuildControl 
          more={()=>props.ingredientsAdded(ctrl.type)}
          less={()=>props.ingredientsRemoved(ctrl.type)}
          key={ctrl.label} 
          label={ctrl.label}
          disabled={props.disabled[ctrl.type]}
          ></BuildControl>
    ))}
    <button 
    disabled={!props.purchasable}
    onClick={props.checkout}
    className={classes.OrderButton}>ORDER NOW</button>
      </div>
    )
  
        
        }

export default BuildControls;