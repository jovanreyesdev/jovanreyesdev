import React from 'react';

import Photo1 from 'assets/images/gallery/1.jpg';
import Photo2 from 'assets/images/gallery/2.jpg';
import Photo3 from 'assets/images/gallery/3.jpg';
import Photo4 from 'assets/images/gallery/4.jpg';
import Photo5 from 'assets/images/gallery/5.jpg';
import Photo6 from 'assets/images/gallery/6.jpg';

import './index.scss';

function Gallery() {
  return (
    <div className="gallery">
      <div className="subheader">
        Gallery
      </div>
      <div className="items">
        <div className="item">
          <div className="photo-display" style={{ backgroundImage: `url(${Photo1})` }} />
        </div>
        <div className="item">
          <div className="photo-display" style={{ backgroundImage: `url(${Photo2})` }} />
        </div>
        <div className="item">
          <div className="photo-display" style={{ backgroundImage: `url(${Photo3})` }} />
        </div>
        <div className="item">
          <div className="photo-display" style={{ backgroundImage: `url(${Photo4})` }} />
        </div>
        <div className="item">
          <div className="photo-display" style={{ backgroundImage: `url(${Photo5})` }} />
        </div>
        <div className="item">
          <div className="photo-display" style={{ backgroundImage: `url(${Photo6})` }} />
        </div>
      </div>
      <a href="https://www.instagram.com/jovanrdr" target="_blank">View more</a>
    </div>
  );
}

export default Gallery;
