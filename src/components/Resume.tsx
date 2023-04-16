import React from 'react';

import styles from '@/styles/components/Resume.module.scss';

function Resume() {

  return (
    <div className="container">
      <div className="flex">
        <h2 className="subheading">Resume</h2>
        <div className={styles.content_area}>
          <div className={styles.experience_box}>
            <div className={styles.exp_title}>Frontend Developer</div>
            <div className={styles.exp_details}>
              <div className="flex justify-between mb-5">
                <div>
                  <span className="font-bold">1800Accountant</span>, New York, USA
                </div>
                <div>
                  Jun 2020 - Present
                </div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </div>
            </div>
          </div>

          <div className={styles.experience_box}>
            <div className={styles.exp_title}>Full-stack Developer</div>
            <div className={styles.exp_details}>
              <div className="flex justify-between mb-5">
                <div>
                  <span className="font-bold">Smartgroup Enterprises</span>, Australia
                </div>
                <div>
                  Jan 2019 - Jun 2020
                </div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </div>
            </div>
          </div>

          <div className={styles.experience_box}>
            <div className={styles.exp_title}>Web Developer</div>
            <div className={styles.exp_details}>
              <div className="flex justify-between mb-5">
                <div>
                  <span className="font-bold">Lear Corporation</span>, Cebu
                </div>
                <div>
                  Sep 2017 - Jan 2019
                </div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;