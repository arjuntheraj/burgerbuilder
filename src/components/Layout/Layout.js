import React from 'react';
import classes from './Layout.css';
<<<<<<< HEAD
import Aux from '../../hoc/Ax'
=======
import Aux from '../../hoc/Aux'
>>>>>>> 1dd82537041a43746138a2a620f021c64cef0c85
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


const Layout=(props)=> 
      (
      <Aux>
      <Toolbar></Toolbar>
      <main className={classes.Content}>
        {props.children}
      </main>
      </Aux>
   
    )
    
 

export default Layout;