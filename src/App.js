import React from 'react';
import { Helmet } from 'react-helmet';
import Homepage from 'components/Homepage';
import Footer from 'components/Footer';
import MetaThumbnail from 'assets/images/jovanportraitbrush.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>JRDev | Portfolio</title>
        <meta name="description" content="Jovan Porfolio by jovanreyesdev" />
        <meta property="og:image" content={MetaThumbnail} />
      </Helmet>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
