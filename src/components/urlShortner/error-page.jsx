import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ErrorPage({history,path}) {
  const [open, setOpen] = React.useState(true)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
     
    >
      <Header icon>
        <Icon name='archive' />
        Access Denied
      </Header>
      <Modal.Content>
        <p>
          Dont Try To Access Pages Without Login 
        </p>
      </Modal.Content>
      <Modal.Actions>
        
        <Button color='green' inverted onClick={() => {setOpen(false); history.push(`${path}/login`)}}>
           Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ErrorPage
