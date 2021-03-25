import React from 'react'
import { Container, Header, Table } from 'semantic-ui-react'
import { Dimmer, Loader, Image} from 'semantic-ui-react'

import ReactPaginate from 'react-paginate';
import './axios.css'
import { aGet, aPost } from './axiosInstance'
// console.log(checkApi());

class AxiosPractice  extends React.Component {

    constructor(props) {
        super(props);
        this.checkApi = this.checkApi.bind(this);
        this.state = {
            res: [],
            filesLoaded: false,
            loader:false,
            minValue:0,
            maxValue:4,
            mappedData:[],
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0
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
    receivedData() {
        aGet(`todos/`)
            .then(res => {

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
                console.log(postData,"this is the post data ")
            });
    }
    checkApi() {
       
        this.setState({loader:true})
        aGet('todos/')
            // .then(res => res.json())
            .then(json => { this.setState({ res: json.data }); console.log(json)})
            .catch(err => { console.log("error message thois is error",err) })
            setTimeout(() => {
                this.setState({filesLoaded: true})
                this.setState({loader: false})
              }, 2000);
            
              
            
    }

    render() {
        // console.log(this.state.res,"this is the response data")
        console.log(this.state.mappedData,"this is the mapped data")
        let dataSet = this.state.res;
        console.log(dataSet)
        // dataSet.map(item => console.log(item))        
        return (
            <div>

            <div>Click Below To Check The Api's Working</div>
                <button onClick={this.checkApi}>Check Api</button>
              <div> <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine textAlign='center'>Id</Table.HeaderCell>
                            
                            <Table.HeaderCell textAlign='center'>Title</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Completed</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                   { (this.state.loader)?<div> 
                    <Dimmer active inverted>
                      <Loader inverted>Loading</Loader>
                    </Dimmer>
              
                    <Image src='/images/wireframe/short-paragraph.png' />
                  </div>
                    :   (dataSet.filter((item,inx) => inx>=this.state.minValue && inx<=this.state.maxValue)
                    .map( r => (<Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h2' textAlign='center'>
                                    {r.id}
                  </Header>
                            </Table.Cell>
                        
                            <Table.Cell textAlign='center'>
                            {r.title}
                            </Table.Cell>
                          
                            <Table.Cell textAlign='center'>
                            {String(r.completed)} <br />
                            </Table.Cell>
                            
                        </Table.Row>    

        </Table.Body>))) } 
                        
                </Table>            
              
                </div>
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
        
        );
    }
}

export default AxiosPractice;

