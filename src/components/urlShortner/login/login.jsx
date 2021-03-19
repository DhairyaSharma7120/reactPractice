import React, { useState } from 'react'
import { Button, Image, Message, Form, Grid, Header, Segment } from 'semantic-ui-react'

import '../urlShortner.style.scss'
import './login.scss'
const username = "dhairya";
const password = "hello";


const errShake = ()=>{
    var element = document.getElementById("error-message");
    
    setTimeout(element.classList.remove("error-shake"),2000);
    async function asyncCall() { element.classList.add("error-shake"); }
    asyncCall()
    // console.log(element.className,"classname"," ",typeof(element.className),"type")

    // if(element.className === "error-shake"){     
    //     element.classList.remove("error-shake")    
    // }else{
    //     element.classList.add("error-shake")
    // }
    // if(element.className){     
    //     element.classList.add("error-shake")
    // }
}

const Login = ({ toggleState, userLoggedIn, history, path }) => {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    console.log(history)
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
                            
                                <p id="error-message">
                                Wrong username or password</p>
                            
                            <button
                            className="cusButton"
                            onClick={
                                () => {
                                    if (uname === username && pass === password) {
                                        toggleState()
                                        history.push(`${path}/dashboard`)
                                        

                                    } else {errShake()}
                                }
                            }>Login</button>
                        </Form>

                    </div>
                </Grid.Column>
            </Grid></div>
    )
}

export default Login
