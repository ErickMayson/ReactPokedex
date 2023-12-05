import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const current_date = new Date();
const currentDay = Math.floor((current_date - new Date(current_date.getFullYear(), 0, 0)) / 86400000);




export default class PokeDay extends Component {
  state = {
    url: `https://pokeapi.co/api/v2/pokemon/${currentDay}`, // Assuming you want to fetch Pokémon with ID 1
    pokemon: null
  };

  async componentDidMount() {
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data['results'] });
  }



  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            <PokemonCard
              key={this.state.pokemon.id}
              name={this.state.pokemon.name}
              url={this.state.pokemon.url}
            />
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </React.Fragment>
    );
  }
}
