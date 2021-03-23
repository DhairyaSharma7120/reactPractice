import React, { useState, useRef } from 'react'
import { Form, Grid } from 'semantic-ui-react'
import {   Modal } from 'semantic-ui-react'
import '../urlShortner.style.scss'
import './login.scss'
import { setCurrentUser } from '../../../redux/user/user.action'
import { selectCurrentUser } from '../../../redux/user/user.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomForm from '../customForm/customForm.js'
// import { Divider } from 'antd'

const username = "dhairya";
const password = "hello";

const errShake = (errRef)=>{
    console.log({errRef})
    var element = errRef.current
    console.log(element,"this is the error shake elemetn")
    // element.classList.toggle('error-shake')
    element.innerHTML = "Please enter username or password"
        element.classList.add('error-shake')     
        setTimeout(function() {
      
            element.classList.remove('error-shake');
            }, 1000);
}
const spinner = (spinRef)=>{
    var element2 = spinRef.current;
    console.log(element2,"this is the element")
    // element.classList.toggle('circle-loader')
}


const Login = ({ toggleState , history, path }) => {
   const errRef = useRef(null)
    const spinRef = useRef(null)
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');

    const formFields = [
        {
            name: 'username',
            type: 'text',
            value: '' ,
            handleChange: (e) => {setUname(e.target.value);},
            label: 'username'
        },
        {
            name: 'password',
            type: 'password',
            value: '' ,
            handleChange: (e) => {setPass(e.target.value);},
            label: 'password'
        },
        {
            name: 'button',
            value: 'Login' ,
            handleClick: (e) => {
                console.log(uname)
                if (uname === username && pass === password) {
                    toggleState()
                    spinner(spinRef) 
                    setTimeout(()=>history.push(`${path}/`),3)                                              
                } else {errShake(errRef);}
            },   
            button: true
        }
    ]

    return (
        <div className="loginForm">
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <CustomForm formFields = {formFields}/>             
                    <p style={{color:'tomato'}} ref={errRef}></p>
                </Grid.Column>     
            </Grid>


            
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
