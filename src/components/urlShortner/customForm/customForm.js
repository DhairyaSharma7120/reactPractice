import React from 'react'
import './customForm.scss'
import FormInput from './FormInput'
const CustomForm = ({formFields}) => {
            formFields.map(ele=>ele.handleClick && console.log(ele.handleClick))
            return(<div className="customForm">   
                {formFields.map(ele=>ele.button? 
                    <button className="cusButton" onClick={ele.handleClick}>{ele.value}</button>
                :<FormInput 
                    name={ele.name}
                    type={ele.type}
                    value={ele.value}
                    handleChange= {ele.handleChange}
                    label={ele.label}
                    required/>)}
                   
           
            </div>)
       
}

export default CustomForm