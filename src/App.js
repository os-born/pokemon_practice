import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonInfo from './Components/PokemoInfo/PokemonInfo';
import PokemonForm from './Components/PokemonForm/PokemonForm'



class App extends Component {
  state = {
    pokemonName: '',
  }

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName })
  }

  render() {
    const { pokemonName } = this.state
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit}/>
        <PokemonInfo pokemonName={pokemonName} />
        
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;