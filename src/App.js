import React, { Component } from 'react';
//import logo from '../src/images/littlegardendog.jpg';
import './App.css';
import Header from '../src/components/Header';
import Container from '../src/components/Container';
import Row from '../src/components/Row';
import Wrapper from '../src/components/Wrapper'
//import BlogPost from './components/BlogPost';
//import Col from './components/Col';
//import Navbar from './components/Navbar';
//import post from "./blogpost.json";

class App extends Component {
  /*state = {
    selected: post.id,
    title: post.title,
    article: post.article,
}*/

  render() {
  return (
    <Wrapper>
      <Container>
        <Header />
    
      </Container>
      <Container >
        <Row>
          <h2>Introducing Little Dog Garden Blog</h2>
          <p>What do you get when an aspiring software  and web developer has a 
            background in landscaping? A garden blog. Add a cute little dog and a 
            family and you get Little Dog Garden Blog. This blog hopefully will 
            deliver helpful garden and landscaping tips as well as family friendly 
           activities, tools of the trade, product reviews, some of my favorite 
           plants, and popular gardens to visit. Future plans include games and 
           how to videos.</p>
         
        </Row>
      </Container>
    </Wrapper>
    );
  }
}

export default App;

