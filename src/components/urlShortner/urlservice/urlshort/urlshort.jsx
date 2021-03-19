import React from 'react'
import './urlshort.scss'
import HorizontalLabelPositionBelowStepper from '../stepper.js'

class UrlShort extends React.Component {
   constructor(){
       super();
       this.state = {
        nextStepper: 0 
    }
   }
    render(){
        
    return (
        <div className="shortnerBody">
            <HorizontalLabelPositionBelowStepper nextStepper={this.state.nextStepper}/>
            <div className="cusDiv">
                <label className="cusLabel">Paste Link Here</label>
                <input className="cusInput"></input>
            </div>
           <button className="cusButton"
           onClick={()=>{          
               this.state.nextStepper >= 3?this.setState({nextStepper:0})
               :this.setState({nextStepper: this.state.nextStepper+1})            
           }}
           >NEXT</button>
        </div>
    )}
}

export default UrlShort
