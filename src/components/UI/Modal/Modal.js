import React from 'react';
import classes from  './Modal.css';
<<<<<<< HEAD
import Aux from '../../../hoc/Ax';
=======
import Aux from '../../../hoc/Aux';
>>>>>>> 1dd82537041a43746138a2a620f021c64cef0c85
import Backdrop from '../Backdrop/Backdrop';


const Modal=(props)=> (

  <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
  
)
export default Modal;