import React from 'react';
import Image from 'next/image';

import styles from '@/styles/sections/Recommendations.module.scss';

function Recommendations() {
  return (
    <section className="container py-10">
      <div className={styles.content_area}>
        <div className={styles.avatar} />
        <div>
          <div className={styles.recommendation}>
            Jovan is a very talented Front-End Developer.
            While at 1-800Accountant we hired Jovan to help with the ongoing web app development,
            and he exceeded our expectations. He has an excellent understanding of JavaScript, React, HTML, and CSS.
            He familiarized himself with Next.js and the large codebase quickly and became a valuable member of the team!
            I'm particularly impressed with his strong problem-solving skills. Any company will be happy to have Jovan!
          </div>
          <div className={styles.author}>
            Igor Krstevski
          </div>
          <div className={styles.author_title}>
            Former Colleague
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recommendations;
