import { Icon } from 'semantic-ui-react'
import React, { Component } from 'react'
import './sidenav.scss'

export class Sidenav extends Component {
    constructor(){
        super();
        this.state={
            sideNav: ''
        }
    }
   
    componentDidUpdate(){
        const val = this.state;
        switch(val.sideNav){
            case ('manageUsers'):
                // console.log("yoyo manageUsers")
                document.getElementById("li1").classList.add("active");
                document.getElementById("li2").classList.remove("active");
                document.getElementById("li3").classList.remove("active");
                document.getElementById("li4").classList.remove("active");
                break;
            case ('manageUrls'):
                // console.log("yoyo manageURLS")
                document.getElementById("li2").classList.add("active");
                document.getElementById("li1").classList.remove("active");
                document.getElementById("li3").classList.remove("active");
                document.getElementById("li4").classList.remove("active");
                break;
            case ('useShortners'):
                // console.log("yoyo useShortners")
                document.getElementById("li3").classList.add("active");
                document.getElementById("li2").classList.remove("active");
                document.getElementById("li1").classList.remove("active");
                document.getElementById("li4").classList.remove("active");
                break;
            case ('manageComplains'):
                // console.log("yoyo manageComplains")
                document.getElementById("li4").classList.add("active");
                document.getElementById("li2").classList.remove("active");
                document.getElementById("li3").classList.remove("active");
                document.getElementById("li1").classList.remove("active");
                break;
            default:
                console.log("working but not updating")
        }
    }
    render() {
        const {handleUrlShort,handleManageUser,handleManageUrls} = this.props
        console.log(this.state)
        return (
            <div className="cusSidenav">
               <ul className="sidenavList">
              
                <li id="li1" onClick={
                        ()=>{
                        this.setState({sideNav:'manageUsers'})
                        handleManageUser()
                        }
                    }> <Icon name='home' /> Manage Users</li>


                    <li id="li2" onClick={
                        ()=> {
                        this.setState({sideNav:'manageUrls'});
                        handleManageUrls();
                        }
                    }><Icon name='chain' /> Manage URLs</li>

                    <li id="li3" onClick={
                        ()=>{
                        this.setState({sideNav:'useShortners'})
                        handleUrlShort();
                        }
                    } ><Icon name='random ' /> Use Shortner</li>

                    <li id="li4" onClick={()=>this.setState({sideNav:'manageComplains'})} >Manage Complains</li>
               </ul>

            </div>
        )
    }
}

  
export default Sidenav
