import React, { Component } from 'react'
import Sidenav from './sidenav/sidenav'
import UrlShort from './urlshort/urlshort'
import ManageUser  from "./manageUser/manageUser";
import ManageUrls from "./manageUrls/manageUrls"
import './urlservice.scss'

export class Urlservice extends Component {
    constructor(){
        super()
        this.handleUrlShort = this.handleUrlShort.bind(this)
        this.handleManageUser = this.handleManageUser.bind(this)
        this.handleManageUrls = this.handleManageUrls.bind(this)
        this.state={
            sideNavPageLoad: ''
        }
        
    }  

    handleUrlShort() {
        console.log('this',this);
        this.setState({
            sideNavPageLoad: 'urlShort'
        })
        }
    
    handleManageUser() {
        this.setState({
            sideNavPageLoad: 'manageUser'
        })
        }
    
    handleManageUrls() {
        console.log('this',this);
        this.setState({
            sideNavPageLoad: 'manageUrls'
        })
    }
    
    componentWillMount() {
        const path = this.props.path;
       !this.props.userLoggedIn && this.props.history.push(`${path}/error-page`)
    }
    render() {
        // const {history,path}=this.props;
        // console.log(this.state,"yaflaflsfaflmms")
        return (
            <div className="urlDashboard">
                <Sidenav 
                handleManageUrls = {this.handleManageUrls}
                 handleManageUser = {this.handleManageUser}
                 handleUrlShort = {this.handleUrlShort} className="cusSidenav"/>
                <div className="cusComponent">
              
                    {this.state.sideNavPageLoad==="urlShort" && <UrlShort/> }
                  {this.state.sideNavPageLoad==="manageUser" && <ManageUser/>} 
                  {this.state.sideNavPageLoad==="manageUrls" && <ManageUrls/>} 
             
                   
                </div>
            </div>
        )
    }
}

export default Urlservice
