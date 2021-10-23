import { Component } from 'react'
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

class PokemonForm extends Component {
    state = {
        pokemonName: '',
    }

    onHandleSubmit = (e) => {
        e.preventDefault()
        if (this.state.pokemonName.trim() === '') {
            toast.info('Something WRONG! Try again!')
            return
        }

        this.props.onSubmit(this.state.pokemonName)
        this.setState({pokemonName: ''})
    }

    onHandleChange = (e) => {
        this.setState({pokemonName: e.currentTarget.value.toLowerCase()});
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.onHandleChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
        );
    }
}

export default PokemonForm;
