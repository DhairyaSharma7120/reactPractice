import axios from 'axios'
import React, { Component } from 'react'
import './fileUpload.scss'

export class FileUpload extends Component {
    constructor(){
        super()
        this.state={
            currentFiles: [],
            multipleFile: []
        }
      this.handleClick = this.handleClick.bind(this)
      
    }
   
    

    onFileChange=(e)=>{
        this.setState({currentFiles:this.state.currentFiles.push(e.target.files[0])})    
    }
    onMultipleChange=(e)=>{
        console.log(e.target.files,"this is we are recieving")
        console.log(Array.from(e.target.files),"this is we are recieving")

        // for (let i = 0; i < e.target.files.length; i++) {
        //     this.state.currentFiles.push(e.target.files[i])
        // }
        this.setState({currentFiles:Array.from(e.target.files)})
        // this.setState({currentFiles:this.state.currentFiles[e.target.files[0]]})    
        this.setState({multipleFile:e.target.files})

    }
    handleClick(){
        const formData = new FormData();
        for (let i = 0; i < this.state.currentFiles.length; i++) {
        formData.append(
            "file",
            this.state.currentFiles[i]                     
          );
        }
        axios.post('/uploadFile',formData)
        .then(res=> console.log(res.data.success)).catch(err=> console.log(err))
    }
    render() {
        console.log(this.state.currentFiles)
        const dataSet= this.state.currentFiles
        return (
            <div className="fileUploadBody">
           
                <div className="uploadFile">
                <form  enctype="multipart/form-data">
                
                    {/* <input type="file" name="file"
                     className="cusButton custom-file-input" 
                     onChange={this.onFileChange}
                         multiple
                     /> */}
                      <input type="file"
                     name="file" 
                     className="custom-file-input"
                     onChange={this.onMultipleChange}
                     multiple></input>
                    <button className="cusButton"
                    
                    onClick={this.handleClick}
                    >Upload</button></form>
                </div>
             
                 <div>
                    <h2>File Details</h2>
                    <div>
                      {
                          dataSet.map(ele=><label>Filename: {ele.name}</label>)
                      }
                    </div>
                
                </div>
            
            </div> 
            
            
        )
    }
}

export default FileUpload

