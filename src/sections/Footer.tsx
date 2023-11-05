import React from 'react';
import { ReactSVG } from 'react-svg';
import Button from '@/components/Button';

import styles from '@/styles/sections/Footer.module.scss';

function Footer() {
  return (
    <footer className={`pt-5 relative ${styles.footer}`}>
      <div className={`container pt-10 ${styles.content_area}`}>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <ReactSVG src="/images/jovanportfolio-white.svg" className={styles.logo} />
          <div className={styles.page_sections}>
            <div className={styles.page_section_item}>
              About Me
            </div>
            <div className={styles.page_section_item}>
              Resume
            </div>
            <div className={styles.page_section_item}>
              Portfolios
            </div>
            <div className={styles.page_section_item}>
              Companies Helped
            </div>
            <div className={styles.page_section_item}>
              Gallery
            </div>
          </div>
          <div className={styles.social_icons}>
            <ReactSVG src="/images/insta-white.svg" />
            <ReactSVG src="/images/linkedin-white.svg" />
            <ReactSVG src="/images/github-white.svg" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
          <span>
            All Rights Reserved
          </span>
      </div>
    </footer>
  )
}

export default Footer;