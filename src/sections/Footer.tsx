import React from 'react';
import { ReactSVG } from 'react-svg';
import Button from '@/components/Button';

import styles from '@/styles/sections/Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={`container ${styles.content_area}`}>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex">
            <div>
              <ReactSVG src="/images/jrdevlogo.svg" className={styles.logo} />
              <div className="mb-4">
                <div>Jovan Reyes</div>
                <div className="text-xs italic">Software Developer</div>
              </div>
              <div className={styles.social_icons}>
                <ReactSVG src="/images/insta.svg" />
                <ReactSVG src="/images/linkedin.svg" />
                <ReactSVG src="/images/github.svg" />
              </div>
              <div>
                <Button>Contact me</Button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className={`mr-20 ${styles.page_sections}`}>
              <div className={styles.page_section_item}>
                About Me
              </div>
              <div className={styles.page_section_item}>
                Resume
              </div>
              <div className={styles.page_section_item}>
                Portfolios
              </div>
            </div>
            <div className={styles.page_sections}>
              <div className={styles.page_section_item}>
                Companies Helped
              </div>
              <div className={styles.page_section_item}>
                Gallery
              </div>
            </div>
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