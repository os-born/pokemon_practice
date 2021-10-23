import { Component } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

class PokemonInfo extends Component {
    state = {
        
        pokemon: null,
        error: null,
        status: 'idle'
    }
    
    componentDidUpdate(prevProps, _prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            console.log('Change Props');
            
            this.setState({status: 'pending'})
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
            .then(response =>{ 
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(new Error(`ERROR, no Pokemon's name like ${nextName}`))
            })
            .then(pokemon => this.setState({ pokemon, status: 'resolved'}))
            .catch(error => this.setState({error, status: 'rejected'}))
        }
    }

    render() {
        const { pokemon, error, status } = this.state;

        if (status === 'idle') {
            return <div> Enter Pokemon Name, please!</div>
        };

        if (status === 'pending') {
            return <div>Loading  . . . </div>
        };

        if (status === 'rejected') {
            return <div>{error.message}</div>
        };

        if (status === 'resolved') {
            return <div><PokemonCard pokemon={pokemon}/></div>
        };
    }
}

export default PokemonInfo;