import React, { Component } from 'react';
//import logo from '../src/images/littlegardendog.jpg';
import './App.css';
import Header from '../src/components/Header';
import Container from '../src/components/Container';
import Row from '../src/components/Row';
import Wrapper from '../src/components/Wrapper'


class App extends Component {
  render() {
  return (
    <Wrapper>
      <Header />
      <Container >
        <Row>
          <p>Hey y'all. This is Amy's garden blog.</p>
        </Row>
      </Container>
    </Wrapper>
    );
  }
}

export default App;

