import React, { Component } from 'react';
import PokeDay from '../pokemon/PokeDay';
import pokemonList from '../pokemon/PokemonList';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <pokemonList />
          </div>
        </div>
      </div>
    );
  }
}
