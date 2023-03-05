import React from 'react';
import Helmet from 'react-helmet';
import Homepage from 'components/Homepage';
import Footer from 'components/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>JRDev | Portfolio</title>
      </Helmet>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
