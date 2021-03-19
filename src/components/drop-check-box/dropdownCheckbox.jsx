import React from 'react'
import { Card, Container } from 'semantic-ui-react'
const handleChange = (e)=>{
    console.log(e.target.value)
    if(e.target.value==='cricket') document.getElementById('cricket').checked=true;
    if(e.target.value==='basketball') document.getElementById('basketball').checked=true;
    if(e.target.value==='singing') document.getElementById('singing').checked=true;
}
const onChange = (e)=>{
    console.log(e.target.value)
    if(e.target.value==='cricket') document.getElementById('cricketdrop').selected=true;
    if(e.target.value==='basketball') document.getElementById('basketballdrop').selected=true;
    if(e.target.value==='singing') document.getElementById('singingdrop').selected=true;
}
function DropdownCheckbox() {
    
    return (
        <div>
        <Container>
            <Card>
            <select onChange={handleChange} multiple>
                <option disabled selected value='cricket'>Select options</option>
                <option id="cricketdrop" value='cricket' selected={false}>Cricket</option>
                <option id="basketballdrop" value='basketball' selected={false}>Basketball</option>
                <option id="singingdrop" value='singing' selected={false}>Singing</option>
            </select>

            
            </Card>
            <Container><input onChange={onChange} type="checkbox" id="cricket" name="cricket" value="cricket"/>
            <label for="cricket"> Cricket</label><br/>
            <input onChange={onChange} type="checkbox" id="basketball" name="basketball" value="basketball"/>
            <label for="basketball"> Basketball</label><br/>
            <input onChange={onChange} type="checkbox" id="singing" name="singing" value="singing"/>
            <label for="singing"> Singing</label><br/><br/>
            <input onChange={onChange} type="submit" value="Submit"></input> </Container>
        </Container>
        </div>
    )
}

export default DropdownCheckbox
