import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, catchError, retry } from 'rxjs/operators'
import { Dimmer, Loader, Image} from 'semantic-ui-react'

import PlanetDetail from './planetdetail'
const observable$ = ajax.getJSON('https://swapi.dev/api/people/')
        .pipe(
        map(response => {
          for (let i = 0; i < response.results.length; i++) {
            const element = response.results[i];
            fetch(element.homeworld).then(res=>res.json()).then(res=>{
              element.Detailname = res.name;
              console.log(response.results)
            })
          }
          // const names = response.results.map(async ele=>{
          //   const res = await fetch(ele.homeworld).then(res=>res.json())
          //   return (ele.name = res.name)
          // })
          console.log(response.results)
          return response.results
        }),
        retry(3),
        catchError(error => of(error))
        ) 


export class Rxjs extends Component {
    constructor(){
        super();
        this.state={
            filesLoaded: false,
            loader:false,
            data:[],
            planet:{},
        }
        
        observable$.subscribe(val=>{
            this.setState({data:val})
        },err=>{
            console.log('err',err)
        })    
    }
    
   
    render() {
        const dataSet = this.state.data;
        console.log(dataSet.map(val=>console.log(val.homeworld)))
        return (
         <div>
            <p>Click Below to check api's working using RxJs</p>
            <button onClick={()=> 
                {       this.setState({loader:true})
                       setTimeout(() => {
                        this.setState({filesLoaded: true})
                        this.setState({loader: false})
                      }, 2500);
                }}>Click Here</button>
            <Table fixed>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Height</Table.HeaderCell>
                    <Table.HeaderCell>Planet</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
            {(this.state.loader)?<div> 
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>
          
                <Image src='/images/wireframe/short-paragraph.png' />
              </div>: (this.state.filesLoaded)?
                (dataSet.map(val=>(<Table.Body>
                  
                  <Table.Row>
                    <Table.Cell>{val.name}</Table.Cell>
                    <Table.Cell>{val.height}</Table.Cell>
                    <Table.Cell >{val.Detailname}  <PlanetDetail homeworld={val.homeworld}/></Table.Cell>
                  </Table.Row>
                </Table.Body>))):''
            }
              </Table>
            
         </div>    
        )}
}

export default Rxjs