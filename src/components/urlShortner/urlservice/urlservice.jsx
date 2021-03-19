import React, { Component } from 'react'
import Sidenav from './sidenav/sidenav'
import UrlShort from './urlshort/urlshort'
import ManageUser  from "./manageUser/manageUser";
import './urlservice.scss'

export class Urlservice extends Component {
    constructor(){
        super()
        this.handleUrlShort = this.handleUrlShort.bind(this)
        this.handleManageUser = this.handleManageUser.bind(this)
        this.state={
            sideNav: 'manageUser'
        }
        }
    
    handleUrlShort() {
        this.setState({
            sideNav: 'urlShort'
        })
        }
    
    handleManageUser() {
        this.setState({
            sideNav: 'manageUser'
        })
        }
        
    
    componentWillMount() {
        const path = this.props.path;
       !this.props.userLoggedIn && this.props.history.push(`${path}/error-page`)
    }
    render() {
        const {history,path}=this.props;
        return (
            <div className="urlDashboard">
                <Sidenav 
                 handleManageUser = {this.handleManageUser}
                 handleUrlShort = {this.handleUrlShort} className="cusSidenav"/>
                <div className="cusComponent">
              {
                  this.state.sideNav==="urlShort" && <UrlShort/>    }{
                  this.state.sideNav==="manageUser" && <ManageUser/>  
              }
                   
                </div>
            </div>
        )
    }
}

export default Urlservice
