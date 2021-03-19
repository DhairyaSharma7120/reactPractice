import { DragHandleRounded } from '@material-ui/icons';
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
            case ('manageURLS'):
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
        const {handleUrlShort,handleManageUser} = this.props
        console.log(this.state)
        return (
            <div className="cusSidenav">
               <ul className="sidenavList">
                    <li id="li1" onClick={()=>{this.setState({sideNav:'manageUsers'})
                    handleManageUser()
                    }}>Manage Users</li>
                    <li id="li2" onClick=
                    {()=> {
                        this.setState({sideNav:'manageURLS'}) 
                        
                    }}>Manage URLs</li>
                    <li id="li3" onClick={
                        ()=>{this.setState({sideNav:'useShortners'})
                        handleUrlShort();}
                    } >Use Shortner</li>
                    <li id="li4" onClick={()=>this.setState({sideNav:'manageComplains'})} >Manage Complains</li>
               </ul>

            </div>
        )
    }
}

export default Sidenav
