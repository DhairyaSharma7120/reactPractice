import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Button, Radio } from "semantic-ui-react";
import "./urlShortner.style.scss";
import Login from "./login/login";
import Urlservice from "./urlservice/urlservice";
import Welcome from "./welcome/welcome";
import PropTypes from "prop-types";
import ErrorPage from "./error-page";
import { setCurrentUser } from '../../redux/user/user.action'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FormDemo from './form'
import AnimationPrac from './animationPrac/animationPrac.js'
export class urlShortner extends Component {
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      loggedOut: true,
      themeIsDark: true
    };
    this.themeChange = React.createRef();
    this.modeRef = React.createRef();
    this.toggleState = this.toggleState.bind(this);
    this.toogleTheme = this.toogleTheme.bind(this);
  }
  
  toggleState() {
    
    const {currentUser,setCurrentUser} = this.props
    console.log('props yoy oy oy ',currentUser)
    setCurrentUser(!currentUser)
  }


  toogleTheme(myRef){
    var element = this.themeChange.current
    element.classList.toggle('light')
    var element2 = this.modeRef.current
    const themeIsDark = this.state.themeIsDark
    themeIsDark?element2.innerHTML="Light Mode":element2.innerHTML="Dark Mode"
    this.setState({themeIsDark:!themeIsDark})
    console.log(themeIsDark)
  }
  // myRef = React.createRef();
  modeRef = React.createRef();
  render() {
    
   
    const {currentUser} = this.props
    const match = this.props.match;
    const { history } = this.props;
    const { url, path } = match;
    console.log(currentUser,"this is current user")
    console.log(history);
    console.log("this is routing page");
    console.log(path);
    console.log(this.state);
    return (
      <div ref={this.themeChange} className="urlShortner-body">
        <div className="nav">
          <Link className="nav-items" to={`${url}`}>
            Home
          </Link>
          {currentUser ? (
            <Link
              className="nav-items"
              onClick={() => {
                this.toggleState()
                history.push(`${path}`);
              }}
            >
              Logout
            </Link>
          ) : (
           
            <Link className="nav-items" to={`${url}/login`}>
              Login
            </Link>
          )          
          }
          <div className="nav-items-custom">
            <label ref={this.modeRef} className="label-custom">Dark mode</label>
            <Radio toggle onChange={this.toogleTheme} className="cusRadio"/></div> 
        </div>
      
        <Route
          exact
          path={`${path}/`}
          component={() => <Welcome path={match.path} history={history} />}
        />
           <Route
          exact
          path={`${path}/animation`}
          component={() => <AnimationPrac path={match.path} history={history} />}
        />
        <Switch>
          <Route
            exact
            path={`${path}/login`}
            component={() => (
              <Login
                path={match.path}
                history={history}
                userLoggedIn={this.state.userLoggedIn}
                toggleState={this.toggleState}
              />
            )}
          />

          <Route
            exact
            path={`${path}/dashboard`}
            component={() => (
              <Urlservice
                loggedOut={this.state.loggedOut}
                path={match.path}
                userLoggedIn={this.state.userLoggedIn}
                history={history}
              />
            )}
          />

          <Route
            exact
            path={`${path}/error-page`}
            component={() => <ErrorPage path={match.path} history={history} />}
          />
           <Route
            exact
            path={`${path}/form`}
            component={() => <FormDemo path={match.path} history={history} />}
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(urlShortner);
