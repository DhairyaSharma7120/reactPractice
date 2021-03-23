import React from 'react'

import './FormInput.scss'
import './customForm.scss'
const FormInput = ({ handleChange, label, ...otherProps}) => {
    return(
    <div className="cusFormfield">
      {
        label ?
                (<label className={`${otherProps.value.length ? 'shrink': ''} cusLabel`}>
                    {label}
                </label>)
                    :null
          
          }
      <input className="cusInputTag" type="text" 
        onChange={handleChange}
        />
    </div>
    )
        }

export default FormInput