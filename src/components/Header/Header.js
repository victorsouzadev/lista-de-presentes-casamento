import React from 'react';
import {
  Container,
  Responsive,
  Segment,
  Visibility,
  Image
} from 'semantic-ui-react';
import perfil from '../../assets/perfil.jpg'

const Header_Nav = ({children}) =>(
<div>
<Responsive minWidth={999} >
<Visibility

>
  <Segment
 
    textAlign='center'
    style={{ minHeight:300, 
            padding: '1em 0em', 
            background: 'rgba(0, 0, 0)', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' 
        }}
    vertical
  >      
    
      <Container style={{color:'white', fontSize:'2em',fontFamily:'Dancing Script, cursive'}} >
            <p>Lista de presentes</p>
            <Image centered circular src={perfil} size='medium'   />
            <p style={{margin:'5px 5px 5px 5px',fontSize:'3em'}} > Rafael e Kesia </p>
     
      </Container>
   
  </Segment>
</Visibility>
</Responsive>

<Responsive  maxWidth={1000}
      minWidth={200} >
<Visibility

>
  <Segment
 
    textAlign='center'
    style={{ minHeight:300, 
            padding: '1em 0em', 
            background: 'rgba(0, 0, 0)', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' 
        }}
    vertical
  >      
    
      <Container style={{color:'white', fontSize:'2em',fontFamily:'Dancing Script, cursive'}} >
            <p>Lista de presentes</p>
            <Image centered circular src={perfil} size='medium'  />
            <p style={{margin:'1em 1em 1em 1em',fontSize:'40px'}} > Rafael e Kesia </p>
     
      </Container>
   
  </Segment>
</Visibility>
</Responsive>
</div>
)

export default Header_Nav