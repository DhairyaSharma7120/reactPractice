import React, { useState, useRef } from 'react'
import { Button, Image, Message, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {  Icon, Modal } from 'semantic-ui-react'
import '../urlShortner.style.scss'
import './login.scss'
import { setCurrentUser } from '../../../redux/user/user.action'
import { selectCurrentUser } from '../../../redux/user/user.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const username = "dhairya";
const password = "hello";

const errShake = (errRef)=>{
    console.log({errRef})
    var element = errRef.current
    // element.classList.toggle('error-shake')
        element.innerHTML="Wrong username or password"
        element.classList.toggle('error-shake')
     
}
const errReshake = (errRef)=>{
    console.log({errRef})
    var element = errRef.current;
    // element.classList.toggle('error-shake')
        element.innerHTML="Wrong username or password"
        element.classList.toggle('error-shake')
     
}
  
const Login = ({ toggleState, userLoggedIn, history, path,currentUser }) => {
    const errRef = useRef(null)
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [open, setOpen] = React.useState(true)
    // console.log(currentUser,"yoyoy this is the redux user state")
    return (
        <div className="loginForm">
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>

                    <div className="loginFrame">

                        <Form className="cusForm">
                            <div className="cusFormfield">
                                <label className="cusLabel">First Name</label>
                                <input className="cusInput" 
                                type="text"
                                placeholder='First Name'
                                 onChange={(e) => setUname(e.target.value)} />
                            </div>
                            <div className="cusFormfield">
                                <label className="cusLabel">password</label>
                                <input className="cusInput"
                                type="password"    
                                 placeholder='Last Name'
                                 onChange={(e) => setPass(e.target.value)} />
                                </div>                            
                                <p ref={errRef} >
                                </p>
                            
                            <button
                            className="cusButton"
                            onClick={
                                () => {
                                    if (uname === username && pass === password) {
                                        toggleState()
                                        history.push(`${path}/`)                                        
                                    } else {errShake(errRef);}
                                }
                            }>Login</button>
                        </Form>
                        
                    </div>
                   
                </Grid.Column>
                
            </Grid>
            <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
     
    >
      
      <Modal.Content>
         <div class="circle-loader">
             <div class="checkmark draw"></div>
        </div>                    
      </Modal.Content>
     
    </Modal>
            </div>

        
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
  })
  
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
