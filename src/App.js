import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Homepage from 'components/Homepage';
import Footer from 'components/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Homepage />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
