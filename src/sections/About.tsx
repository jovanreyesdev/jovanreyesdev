import React from 'react';

import styles from '@/styles/sections/About.module.scss';

function About() {
  return (
    <section id="about-me">
      <div className="container">
        <div className={styles.content_area}>
          <h2 className="subheading">A bit about me</h2>
            <p className="typography">I'm a software engineer with a passion for coding. I love to spend my free time tinkering with new technologies and building applications that solve real-world problems.</p>
            <p className="typography">
              When I'm not coding, you can find me hiking in the great outdoors or freediving in the deep blue sea.
              I'm always up for a good challenge, whether it's a tough coding problem or a new adventure.
              I'm excited to see where my passion for coding takes me next!
            </p>
        </div>
      </div>
    </section>
  )
}

export default About;