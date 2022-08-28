import React from 'react';
import Container from 'react-bootstrap/Container';

import NavigationBar from 'components/NavigationBar';
import Hero from 'components/Hero';
import Homepage from 'components/Homepage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Container className="pt-3" style={{ maxWidth: '50rem', position: 'relative' }}>
        <Homepage />
      </Container>
    </div>
  );
}

export default App;
