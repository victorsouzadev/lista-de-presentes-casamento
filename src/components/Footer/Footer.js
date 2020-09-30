import React from 'react';
import {
  Grid,
  Container,
  Segment
} from 'semantic-ui-react';

const Footer = () => (
<Segment inverted vertical style={{ padding: '2em 0em',backgroundColor:'#000000' }}>
    <Container>
        <Grid  >
            <Grid.Row>
                <Grid.Column textAlign='left'  width={8}>
                © copyright
                </Grid.Column>
                <Grid.Column textAlign='right' width={8}>
                developed by Victor Souza - 2020
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
</Segment>
)

export default Footer