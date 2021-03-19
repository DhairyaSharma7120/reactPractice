import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import axios from 'axios'




function PlanetDetail({homeworld}) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [climate, setClimate] = React.useState('')
  const [diameter, setDiameter] = React.useState('')
  const [surfaceWater, setSurfaceWater] = React.useState('')

  // let planetData = {name:'',climate:'',diameter:'',surfaceWater:''}
//   let planetData = [];
//   console.log(homeworld)
  axios.get(homeworld).then(res=>{
      console.log(res.data)
        setName(res.data.name)
        setClimate(res.data.climate)
        setDiameter(res.data.diameter)
        setSurfaceWater(res.data.surface_water)
  })
  console.log(climate)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Details</Button>}
    >
      <Modal.Header>Planet Detail</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Name: {name}</Header>
          <p>Climate: {climate}</p>
          <p>Diameter: {diameter}</p>
          <p>surface Water: {surfaceWater}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Find More"
          labelPosition='right'
          icon='checkmark'
          onClick={() =>  alert("BAS Hogya aaJKA")}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default PlanetDetail
