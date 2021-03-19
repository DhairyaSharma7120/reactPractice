import React from 'react'
import './urlshort.scss'
import HorizontalLabelPositionBelowStepper from '../stepper.js'
import axios from 'axios'
import {aPost} from '../../axiosInstance'
const jsonData = require('../../url-id.json')
class UrlShort extends React.Component {
   constructor(){
       super();
       this.state = {
        url: '',
        nextStepper: 0     
    }
   }

   writeJson(){
        aPost('/writeJson').then(res=>{
            console.log(res.data)
            
        })
   }

   handelSubmit(event){   
    
    // console.log(name);
    if(this.state.url === ''){
        document.getElementById('labelElement').innerHTML=`PASTE URL`
        return
    }
    const data = {
        url: this.state.url,
        UrlShort: 'yoyo@.com'
    }
    console.log(data);
    // fetch("http://localhost:3001/create",
    // {
    //     method: "post",
    //     data: JSON.stringify(data)
    // })
    const json = JSON.stringify(data);
    // const config= {'header':'application/json'}
    axios.post('/insert',  json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      })
    .then(response => {
        console.log(response,"dd");
    })
    .catch(error => {
        console.log(error);
    });
    // console.log(data);
    alert(`Your shortURL is : drockss@${jsonData['url-id']}.com`);
    document.getElementById('labelElement').innerHTML=`drockss@${jsonData['url-id']}.com`
    // window.location.reload(false);
      
}
    render(){
        const handleChange = (e) =>{
            this.setState({url: e.target.value})
        }
        
    return (
        <div className="shortnerBody">
            <HorizontalLabelPositionBelowStepper nextStepper={this.state.nextStepper}/>
            <div className="cusDiv">
                <label className="cusLabel">Paste Link Here</label>
                <input onChange={handleChange} className="cusInput"></input>
                <label className="cusLabel" id="labelElement"></label>
            </div>
            
           <button className="cusButton"
           onClick={()=>{    
                this.handelSubmit()
               this.state.nextStepper >= 3?this.setState({nextStepper:0})
               :this.setState({nextStepper: this.state.nextStepper+1}) 
               this.writeJson()           
           }}
           >Generate Url</button>               
        </div>
    )}
}

export default UrlShort
