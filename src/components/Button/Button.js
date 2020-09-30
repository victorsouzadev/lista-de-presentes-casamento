import React, { Component } from 'react'
import { Button, Icon} from 'semantic-ui-react'
import firebase from '../../Firebase'
class ButtonToggle extends Component {
  constructor(){
    super()
     this.state = {
       ativo:false
     }
    
     
  }


  handleClick = (e) =>{
    this.setState((prevState) => ({ active: !prevState.active }))
    this.setState({ativo: !this.state.ativo})
    if(!this.state.ativo){
      firebase.database().ref(this.props.src+this.props.index+'/1').set(
        this.props.count+1
      );
    }else{
      firebase.database().ref(this.props.src+this.props.index+'/1').set(
        this.props.count-1
      );
    }
    
  }
    


  render() {
    const { active } = this.state

    return (
      <Button circular toggle color={active ? 'red' : null} active={active} onClick={this.handleClick}>
       <Icon name={this.state.ativo? 'check':'add'} /> Possível presente
      </Button>
    )
  }
}

export default ButtonToggle