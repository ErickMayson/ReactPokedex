import React, { Component } from 'react';

import styled from 'styled-components';
import spinner from './Gear.gif';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the height of the container to 100% of the viewport height */
`;

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    toManyRequests: false
  }
  componentDidMount() {
    const {name, url} = this.props;
    // This gets the Index/Id from the URL
    const pokemonIndex = url.split("/")[url.split('/').length - 2]
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

    this.setState({
      name,
      imageUrl,
      pokemonIndex,
    })
  }


  render() {
  

    return (
    <Container>
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">

            <h5 className='card header'>{this.state.pokemonIndex}</h5>
            {/* Code below does the spinner animation if imageLoading is true */}
            {this.state.imageLoading ? (
              <img src={spinner} style={{width:"5em", height: "5em"}} className='card-img-top rounded mx-auto d-block mt-2' alt="" ></img>
            ) : null}
            <Sprite className = "card-img-top rounded mx-auto mt-2"
            src={this.state.imageUrl}
            onLoad={() => this.setState({ imageLoading: false})}
            onError={() => this.setState({ toManyRequests: true})}
            //  Style below handles the logic for showing the image or the spinner gif
            style={
              this.state.toManyRequests ? {display: "none"} :
              this.state.imageLoading ? null : {display: "block"} 
            }
            />
            {/* Notifies too many requests. (Maybe this won't be useful anymore when I add Pagination.) */}
            {this.state.toManyRequests ? (<h6 className='mx-auto'>
              <span className="badge badge-danger mt-2">To many Requests</span>
              </h6>)
              : null}

            <div className="card-body mx-auto">
              <h6 className='card-title'>
                {/* This thing under here handles the formatting of the Pokemon string name. */}
                {this.state.name
                .toLowerCase()
                .split(" ")
                .map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                  .join(" ")}
              </h6>
            </div>
        </div>
      </div>
    </Container>
    );
  }
}
