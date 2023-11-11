import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { ReactSVG } from "react-svg";

import Button from "@/components/Button";

import styles from "@/styles/sections/PageHeader.module.scss";

function PageHeader() {
  return (
    <div className={`container ${styles.pageheader}`}>
      <div className={styles.header_content_left}>
        <ReactSVG src="/images/jrdev.svg" className={styles.background_brand} />
        <h1 className={styles.heading}>Hello! I am Jovan</h1>
        <h2 className={styles.subheading}>
          Code Artisan : Crafting Digital Experiences
        </h2>
        <div className="flex flex-col xl:flex-row">
          <Link href="mailto:jovan.reyes.dev@gmail.com">
            <Button className={`${styles.cta} mb-10 xl:mb-0 xl:mr-5`}>Contact Me</Button>
          </Link>
          <a href="#about-me">
            <Button className={`${styles.cta} hidden xl:inline`} variant="secondary">Get to know more</Button>
          </a>
        </div>
      </div>
      <div className={styles.header_content_right}>
        <Image
          width={750}
          height={500}
          alt="Jovan Portrait"
          src="/jovanportraitbrush.png"
        />
        <div className={styles.social_container}>
          <ReactSVG src="/images/insta.svg" className={styles.social_icon} />
          <div className={styles.separator} />
          <ReactSVG src="/images/linkedin.svg" className={styles.social_icon} />
          <div className={styles.separator} />
          <ReactSVG src="/images/github.svg" className={styles.social_icon} />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
