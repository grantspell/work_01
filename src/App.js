import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// COMPONENTS
import Directory from './components/directory'

// STYLES
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
              <Route exact path="/" component={Directory} />
            </Switch>
          </Wrapper>
        </Router>
    );
  }
}

export default App;
