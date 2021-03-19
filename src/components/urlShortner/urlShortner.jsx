import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Button} from 'semantic-ui-react'
import "./urlShortner.style.scss";
import Login from "./login/login";
import Urlservice from './urlservice/urlservice'
import Welcome from './welcome/welcome'
import PropTypes from "prop-types";
import ErrorPage from "./error-page"
export class urlShortner extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    constructor(){
        super();
        this.state = {
            userLoggedIn: false,
            loggedOut: true,
        }
        this.toggleState = this.toggleState.bind(this)
    }

    toggleState() {
        this.setState(prevState =>  {
            return {userLoggedIn: !prevState.userLoggedIn};
        })  
        // this.state.userLoggedIn ? this.setState({userLoggedIn:false}):this.setState({userLoggedIn:true})
    }

    render() {
        const match = this.props.match;
        const { history } = this.props;
        const { url, path } = match
        console.log(history)
        console.log('this is routing page')
        console.log(path)
        console.log(this.state)
        return (
            <div className="body">
                <div className="nav">
                    <Link className="nav-items" to={`${url}`}>Home</Link>
                    {this.state.userLoggedIn?<Link className="nav-items" onClick={()=>{
                        this.setState({userLoggedIn:false})
                        history.push(`${path}`)
                        this.setState({loggedOut:true})
                    }}>Logout</Link>
                    :<Link className="nav-items" to={`${url}/login`}>Login</Link>}
                </div>
                
                <Route exact path={`${path}/`} component={()=><Welcome
                            path={match.path}
                            history = {history}
                    />
                    } />
               
                <Switch>
                    <Route exact path={`${path}/login`}
                        component={()=><Login
                            path={match.path}
                            history = {history}
                            
                            userLoggedIn = {this.state.userLoggedIn}
                            toggleState = {this.toggleState}/>} />

                    <Route exact path={`${path}/dashboard`}
                    
                     component={()=><Urlservice
                        loggedOut = {this.state.loggedOut}
                        path={match.path}
                        userLoggedIn = {this.state.userLoggedIn}
                        history = {history}
                        />} />

                        <Route exact path={`${path}/error-page`} component={()=><ErrorPage 
                            path={match.path}
                            history = {history}/>} />
                </Switch>
                            
            </div>
        );
    }
}

export default urlShortner;
