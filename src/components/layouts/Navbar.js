/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        >
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">Pokedex</a>
        </nav>
      </div>
    );
  }
}
