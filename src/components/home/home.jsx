import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {Card, Container } from 'semantic-ui-react'
import PropTypes from "prop-types";
import './home.css'

export class home extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
        render() {
            const { match,  history } = this.props;
            console.log(history,match)
        return (
            <Container>
            <Card.Group centered className="custom-grid">
            
            <Card>
            
                <Card.Content>
                <Card.Header>Axios/Pagination practice</Card.Header>
                <Card.Meta>
                    <span className='date'>Day1</span>
                </Card.Meta>
                <Card.Description>
                   -completed
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button primary onClick={()=> history.push("/axios")}>Practice</Button>

                </Card.Content>
            </Card>

            <Card >
                <Card.Content>
                <Card.Header>Rxjs Practice</Card.Header>
                <Card.Meta>
                    <span className='date'>Day2</span>
                </Card.Meta>
                <Card.Description>
                <p>-learning right now -- 11am</p> 
                   <p>-completed and implied --  2pm</p>
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button primary onClick={()=> history.push("/rxjs")}>Practice</Button>

                </Card.Content>
            </Card>

            
            <Card>
            
                <Card.Content>
                <Card.Header>Form Validation</Card.Header>
                <Card.Meta>
                    <span className='date'>Day2</span>
                </Card.Meta>
                <Card.Description>
                   -learning right now -- 3pm
                   -completed -- 5:30pm 
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button primary onClick={()=> history.push("/validation")}>Practice</Button>

                </Card.Content>
            </Card>
            
            <Card>
            
                <Card.Content>
                <Card.Header>Dropdown CheckBox Task</Card.Header>
                <Card.Meta>
                    <span className='date'>Day2</span>
                </Card.Meta>
                <Card.Description>
                   -learning right now -- 5:30pm
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button primary onClick={()=> history.push("/checkdropbox")}>Practice</Button>

                </Card.Content>
            </Card>

            <Card>
            
                <Card.Content>
                <Card.Header>Url Shortner Microservice</Card.Header>
                <Card.Meta>
                    <span className='date'>Day3</span>
                </Card.Meta>
                <Card.Description>
                   -will learn tommorrow
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button primary onClick={()=> history.push("/short")}>Practice</Button>

                </Card.Content>
            </Card>

            <Card>
            
                <Card.Content>
                <Card.Header>internationalization using react-i18next</Card.Header>
                <Card.Meta>
                    <span className='date'>Day3</span>
                </Card.Meta>
                <Card.Description>
                   -completed -- 3pm - 5:30pm
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button primary onClick={()=> history.push("/internationalization")}>Practice</Button>

                </Card.Content>
            </Card>
            
            </Card.Group>
            </Container>
        )
    }
}

export default home
