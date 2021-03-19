import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import './validation.css'

class Validation extends Component {
  constructor(){
      super();
      this.state={
          username:'',
          password:'',
          userNameError:false,
          passwordError:false,
      }
  }


  usernameValidate = (event) => {
    if(this.state.username.length > -1) document.getElementById('error-message-username').innerHTML="";
    
    this.setState({username: event.target.value});
    if(this.state.username.length > 4){
      document.getElementById('username').style.borderColor = 'lightgreen';
      document.getElementById('error-message-username').innerHTML="VALID";
      document.getElementById('error-message-username').style.color="green";
    }else{
      document.getElementById('error-message-username').innerHTML="NOT VALID";
      document.getElementById('error-message-username').style.color="tomato ";
      document.getElementById('username').style.borderColor = 'tomato';
      document.getElementById('username').style.borderWidth = "2px";
    }

  }
  passwordValidate = (event) => {
    if(this.state.password.length > -1) document.getElementById('error-message-password').innerHTML="";
    this.setState({password: event.target.value});
    if(this.state.password.length > 5){
      document.getElementById('error-message-password').innerHTML="VALID";
      document.getElementById('error-message-password').style.color="green";
      document.getElementById('password').style.borderColor = 'lightgreen';
      
    }else{
      document.getElementById('error-message-password').innerHTML="NOT VALID";
      document.getElementById('error-message-password').style.color="tomato ";
      document.getElementById('password').style.borderColor = 'tomato';
      document.getElementById('password').style.borderWidth = '2px';
    }

  }

  checkValidation = (event) => {
    if(this.state.username.length === 0){
      document.getElementById('error-message-username').innerHTML="PLEASE ENTER USERNAME";
      document.getElementById('error-message-username').style.color="tomato";
    }
    if(this.state.password.length === 0){
      document.getElementById('error-message-password').innerHTML="PLEASE ENTER PASSWORD"
      document.getElementById('error-message-password').style.color="tomato";
    }
    
  }
    render() {
        console.log(this.state.username.length);
 
      
    return (
      <div className="custom-grid-center"><div className="formBody">
      <Form>
        <Form.Group widths='equal'>
          <Form.Input id="username" fluid label='First name' onChange={this.usernameValidate} 
          placeholder='First name' />  
          
        </Form.Group>
        <p id="error-message-username"></p>
        <Form.Input 
        id="password" fluid label='Password' type="password" onChange={this.passwordValidate} 
        placeholder='Password' />
        <p id="error-message-password"></p>
        <Form.Button onClick={this.checkValidation}>Submit</Form.Button>
        
      </Form></div></div>
    )
  }
}

export default Validation