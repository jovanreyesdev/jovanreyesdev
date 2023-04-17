import React from 'react';
import Thumbnail from '@/components/Thumbnail';

import styles from '@/styles/sections/Gallery.module.scss';

function Gallery() {
  return (
    <section className="container">
      <div className={styles.content_area}>
        <h2 className="subheading">Gallery</h2>
        <div>
          <p className="typography">Hey! I love photography too! Check out these photos taken by me</p>
        </div>
        <div className={styles.gallery_images}>
          <Thumbnail className="xl:mb-10" src="/images/gallery/andabohol.jpg" />
          <Thumbnail className="xl:mb-10" src="/images/gallery/alegriafalls.jpg" />
          <Thumbnail className="xl:mb-10" src="/images/gallery/dalaguetechurch.jpg" />

          <Thumbnail className="xl:mb-10" src="/images/gallery/canduman.jpg" />
          <Thumbnail className="xl:mb-10" src="/images/gallery/milkyway.jpg" />
          <Thumbnail className="xl:mb-10" src="/images/gallery/turtle.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Gallery;