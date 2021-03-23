import React, { useState, useRef } from 'react'
import { Grid } from 'semantic-ui-react'

import './urlShortner.style.scss'
import './login/login.scss'

import CustomForm from './customForm/customForm.js'
import FormInput from './customForm/FormInput'
// import { Divider } from 'antd'


const FormDemo = ({ toggleState , history, path }) => {

    const formFields = [
        {
            name: 'username',
            type: 'text',
            value: '' ,
            handleChange: ()=>console.log('working'),
            label: 'username'
        }
    ]
    return (
        <div className="loginForm">
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>

                    <CustomForm formFields = {formFields}/>                   
                </Grid.Column>
                
            </Grid>
 
            </div>

        
    )
}


  
  export default FormDemo;
