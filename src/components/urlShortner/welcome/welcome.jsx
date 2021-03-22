import React, { Component } from 'react'
import anime from "animejs/lib/anime.es.js";
import './welcome.scss'
import { LinearScale } from '@material-ui/icons';
import {selectCurrentUser} from '../../../redux/user/user.selector.js'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
        const {history,path,currentUser} = this.props
        console.log("this is welcome page")
        return (
            <div className="urlWelcome-body">
              
                <div className="cusCircles">
                    <div className="circle1">
                        <div className="circle2">  
                        </div>
                    </div>               
                </div>
                <div className="cardBody">
                    
                    <div className="card">
                       {currentUser? 
                       
                        <><p>Welcome To URL shortner</p>
                        <button
                        onClick={()=>history.push(`${path}/dashboard`)}
                        className="cusButton"><span className="cusText">Let's Go</span></button></>
                       :
                       
                       <><p>Please Login to enjoy the service of this URL shortner</p>
                        <button
                        onClick={()=>history.push(`${path}/login`)}
                        className="cusButton"><span className="cusText">Let's Go</span></button></>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Welcome)