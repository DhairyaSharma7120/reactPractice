import React, { Component } from 'react'
import anime from "animejs/lib/anime.es.js";
import './welcome.scss'
import { LinearScale } from '@material-ui/icons';
export class Welcome extends Component {
    componentDidMount() {
        anime({
            targets: ".header",
            opacity: 1,
            delay:150,
            easing: 'easeInOutSine'           
        });
        anime({
            targets: ".card",           
            opacity: 1,
            
            easing: 'easeInOutSine'           
        });
    }
    render() {
        const {history,path} = this.props
        console.log("this is welcome page")
        return (
            <div className="body">
              
                <div className="cusCircles">
                    <div className="circle1">
                        <div className="circle2">  
                        </div>
                    </div>               
                </div>
                <div className="cardBody">
                    
                    <div className="card">
                        <p>Please Login to enjoy the service of this URL shortner</p>
                        <button
                        onClick={()=>history.push(`${path}/login`)}
                        className="cusButton"><span className="cusText">Let's Go</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome