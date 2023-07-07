import React from 'react';
import { ReactSVG } from 'react-svg';
import Button from '@/components/Button';

import styles from '@/styles/sections/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content_area}`}>
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-center">
            <img src="/images/footer-line.png" alt="line" />
            <div className="px-10">
              <ReactSVG src="/images/jrdevlogo-white.svg" className={styles.logo} />
              <div className="mb-4 text-center">
                <div>Jovan Reyes</div>
                <div className="text-xs italic">Software Developer</div>
              </div>
            </div>
            <img src="/images/footer-line.png" alt="line" />
          </div>
          <div className="flex justify-center">
            <div className={styles.social_icons}>
              <ReactSVG src="/images/insta.svg" />
              <ReactSVG src="/images/linkedin.svg" />
              <ReactSVG src="/images/github.svg" />
            </div>
          </div>
          <div className="flex justify-center">
            
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.container_custom}`}>
          <div className="hidden sm:block">
            Jovan Reyes / Personal Site
          </div>
          <div className="text-white">
            © 2022 JRDev - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;