import React from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Lista from './components/Lista/Lista'
import './App.css';
import firebase from './Firebase'

import { Container,
  Responsive,
  Grid } from 'semantic-ui-react'

const styleDiv = {
  minHeight:'1000px',
  height: '100%',
 // background: 'linear-gradient(180deg, #FFFFFF 50%, #EEEEEE 50%)'
};



/*
function cadastrarListas(){
  Sala()
  Lavanderia()
  Quarto()
  Cozinha()
}

function Sala() {
  firebase.database().ref('Sala/').set({
    0: ['Sofá',0],
    1: ['Cortina',0],
    2: ['TV',0],
    3: ['Painel',0],
    4: ['Tapete',0]

  });
}
function Lavanderia() {
  firebase.database().ref('Lavandeira/').set({
    0: ['Lavadoura de roupas',0],
    1: ['Cesto de roupas',0],
    2: ['Tábua de passar',0],
  });
}
function Quarto() {
  firebase.database().ref('Quarto/').set({
    0: ['Lençol',0],
    1: ['Edredom',0],
    2: ['Travesseiro',0],
    3: ['Jogo de cama',0]
  });
}

function Cozinha() {
  firebase.database().ref('Cozinha/').set({
    0: ['Geladeira',0],
    1: ['Forno',0],
    2: ['Batedeira',0],
    3: ['Bebedouro',0],
    4: ['Panela de arroz',0],
    5: ['Confeteira',0],
    6: ['Microondas',0],
    7: ['Lixeira',0],
    8: ['Formas de bolo',0],
    9: ['Facas de chef',0],
    10: ['Tábuas para cortes',0],
    11: ['Aparelho de jantar',0],
    
  });
}
*/
class Home extends React.Component {
  constructor(){
    super()
     this.state = {
       sala:[],
       quarto:[],
       cozinha:[],
       lavanderia:[]   
     }
    
     
  }

  componentDidMount(){
    this.lista_sala()
    this.lista_cozinha()
    this.lista_quarto()
    this.lista_lavanderia()

     
}
  async lista_sala() {
    await firebase.database().ref('Sala/').on("value", dataSnapshot => {
     var lista = [];
     dataSnapshot.forEach(child => {
       lista.push(child.val());
     });
     this.setState({
      sala:lista
    })
   });
 }
 async lista_cozinha() {
  await firebase.database().ref('Cozinha/').on("value", dataSnapshot => {
   var lista = [];
   dataSnapshot.forEach(child => {
     lista.push(child.val());
   });
   this.setState({
    cozinha:lista
  })
 });
}
async lista_quarto() {
  await firebase.database().ref('Quarto/').on("value", dataSnapshot => {
   var lista = [];
   dataSnapshot.forEach(child => {
     lista.push(child.val());
   });
   this.setState({
    quarto:lista
  })
 });
}
async lista_lavanderia() {
  await firebase.database().ref('Lavandeira/').on("value", dataSnapshot => {
   var lista = [];
   dataSnapshot.forEach(child => {
     lista.push(child.val());
   });
   this.setState({
    lavanderia:lista
  })
 });
}

DesktopContainer (){

  return (
    <Responsive  minWidth={999}
    style={{ padding: '2em 2em 2em 2em' }}
      >


    
    <Container>
    <Grid  >
        <Grid.Row>
            <Grid.Column  width={8}>
              <Lista desktop={true} animated_person={true} lista={this.state.sala} title='Sala' src='Sala/'></Lista>
    
            </Grid.Column>
            <Grid.Column width={8}>
              <Lista desktop={true} animated_person={true} lista={this.state.quarto} title='Quarto' src='Quarto/'></Lista>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column    width={8}>
              <Lista desktop={true} animated_person={true} lista={this.state.cozinha} title='Cozinha' src='Cozinha/'></Lista>
            </Grid.Column>
            <Grid.Column  width={8}>
              <Lista desktop={true} animated_person={true} lista={this.state.lavanderia} title='Lavanderia' src='Lavandeira/'></Lista>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>
  </Responsive>
  )
}

MobileContainer (){

  return (
    <Responsive
      maxWidth={1000}
      minWidth={200}
      >
    <Container style={{ padding: '2em 2em 2em 2em' }} >
    <Grid>
        <Grid.Row>
            <Grid.Column  width={16}>
              <Lista  lista={this.state.sala} title='Sala' src='Sala/'></Lista>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column  width={16}>
            <Lista lista={this.state.quarto} title='Quarto' src='Quarto/'></Lista>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column  width={16}>
            <Lista lista={this.state.cozinha} title='Cozinha' src='Cozinha/'></Lista>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column  width={16}>
              <Lista lista={this.state.lavanderia} title='Lavanderia' src='Lavandeira/'></Lista>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>
  </Responsive>
  )
}

// <Lista lista={this.state.sala} title='teste' src='Sala/'></Lista>
  render(){
  return (
    <div>
        <Header></Header>
     
        <div style={styleDiv}>
 
        {this.MobileContainer()}{this.DesktopContainer() }
      
      

        </div>
   
        
        <Footer></Footer>




    </div>
  
  );
}

}


export default Home
