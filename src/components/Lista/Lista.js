import React from 'react'
import {
    List,
    Header,
    Container,
    Icon,
    Button
} from 'semantic-ui-react'
import ButtonInteresse from '../Button/Button'




const ContainerLista = {

};

function Lista(props) {

    const title = props.title
    const lista = props.lista
    const src = props.src
    const person = props.animated_person
    const desktop = props.desktop
    var result_lista
    if (desktop) {
        result_lista = lista.map((item, index) =>
            <List.Item style={{ fontSize: 'large' }} key={index}>

                <Container>
                    
                <Button style={{ margin: '0em 2m 0em 2em',background:'rgba(0,0,0,0)' }} circular>
                        <Icon name='favorite' />
                        {item[1]}
                    </Button>
                    <ButtonInteresse
                        index={index}
                        title={title}
                        src={src}
                        count={item[1]} />
                        {item[0]}
                </Container>
            </List.Item>
        );
    } else {
        result_lista = lista.map((item, index) =>
            <List.Item style={{ fontSize: 'large' }} key={index}>

                <Container>
                <Container style={{ margin: '1em 2em 1em 2em' }}> {item[0]}</Container>
                <Button style={{ margin: '0em 2m 0em 2em',background:'rgba(0,0,0,0)' }} circular>
                        <Icon name='favorite' />
                        {item[1]}
                    </Button>
                    <ButtonInteresse
                        index={index}
                        title={title}
                        src={src}
                        count={item[1]} />
                        
                       

                </Container>
            </List.Item>
        );
    }
    return (
        <Container textAlign={desktop ? null : 'center'} style={ContainerLista}>
            <Header dividing as='h1'>{title}</Header>
            <List animated={person ? true : false} divided={desktop?false:true} relaxed>
                {result_lista}
            </List>
        </Container>
    )
}

export default Lista


