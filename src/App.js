import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
  background-color: rgba(155, 25, 35, 0.3);
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  color: rgba(255, 255, 255, .7);
  font-size: 6vw;
`

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Wrapper>
          <h1>@kaylanspell</h1>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default App;
