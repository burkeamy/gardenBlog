import React, { Component } from 'react';
//import logo from '../src/images/littlegardendog.jpg';
import './App.css';
import Header from '../src/components/Header';
import Container from '../src/components/Container';
import Row from '../src/components/Row';
import Wrapper from '../src/components/Wrapper'
import BlogPost from './components/BlogPost';
import Col from './components/Col';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
  return (
    <Wrapper>
      <Header />
      <Navbar/>
      <Container >
        <Row>
          <Col size = "md-5">
            <BlogPost/>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    );
  }
}

export default App;

