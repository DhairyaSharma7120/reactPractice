import React from 'react'
import { Icon, Label, Menu, Table,Container } from 'semantic-ui-react'
import axios  from 'axios'
import ReactPaginate from 'react-paginate';

import { aGet, aPost }from '../../axiosInstance'

class ManageUrls extends React.Component {
    constructor(){
        super();
        this.state={
            res: [],
            filesLoaded: true,
            loader:false,
            minValue:0,
            maxValue:4,
            mappedData:[],
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0,
            refresher:1
        }
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    
    deleteData = (e,item)=>{
        console.log((e.target.value),"this is event");
        console.log(item,"this is item");
        
   
        aPost('delete/',{
            params: {
                shortUrl: e.target.value
            }
        })
        .then(response => {
            console.log(response,"this is response");
            if(response.data.success){
            
            this.setState({ res: this.state.res.filter(e=>e._id !== item._id) });}
            else console.log('err',response)
        })
        .catch(error => {
            console.log(error);
        });
        
    }


    receivedData(){
        aGet('req/')
        .then(res => {

            const data = res.data;
            // console.log("this is the data ", data)
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            
            const postData = slice.map(pd => <React.Fragment>
                
            </React.Fragment>)
                // console.log(postData,"this is postdata")
               
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
               
                postData
            })
            this.setState({res:slice});
        });
    }
    componentWillMount(){
        aGet('req/')
        .then(res => {
            console.log(res)
            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            
            const postData = slice.map(pd => <React.Fragment>
                
            </React.Fragment>)
                // console.log(postData,"this is postdata")
               
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
               
                postData
            })
            this.setState({res:slice});
        });
    }

    
    render(){
        let dataSet = this.state.res;
       console.log(dataSet)
        return(
   
    <div style={{width:'65vw',height:'75vh'}}>
        {this.state.refresher?<Table celled >
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>normalUrls</Table.HeaderCell>
                <Table.HeaderCell>shortUrl</Table.HeaderCell>
                <Table.HeaderCell>actions</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {(dataSet.filter((item,inx) => inx>=this.state.minValue && inx<=this.state.maxValue).map(e=>
                <Table.Row>
                    <Table.Cell>{e.url}</Table.Cell>
                    <Table.Cell>{e.shortUrl}</Table.Cell>
                    <Table.Cell>
                    <button value={e.shortUrl} onClick={(j)=>this.deleteData(j,e)  }>DELETE</button>
                    </Table.Cell>
                </Table.Row>))
            }
                </Table.Body>
         
            <Table.Footer>
            
            </Table.Footer>
        </Table> :<div></div>}
        {this.state.filesLoaded?<Container center>
                {this.state.postData}
                <ReactPaginate className="hh"
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </Container>:'' }
        </div>
)}}

export default ManageUrls
