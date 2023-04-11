import React from 'react';

import styles from '@/styles/components/About.module.scss';

function About() {
  return (
    <div className="container">
      <div className={styles.content_area}>
        <h2 className="subheading">A bit about me</h2>
        <article>
          <p className="typography">I'm a software engineer with a passion for coding. I love to spend my free time tinkering with new technologies and building applications that solve real-world problems.</p>
        </article>
      </div>
    </div>
  )
}

export default About;