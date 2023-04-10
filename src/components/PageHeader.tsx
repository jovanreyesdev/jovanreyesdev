import React from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";

import Button from "@/components/Button";

import styles from "@/styles/components/PageHeader.module.scss";

function PageHeader() {
  return (
    <div className={`container ${styles.pageheader}`}>
      <div className={styles.header_content_left}>
        <ReactSVG src="/images/jrdev.svg" className={styles.background_brand} />
        <h1 className={styles.heading}>Hello! I am Jovan</h1>
        <h2 className={styles.subheading}>
          Professional UI/UX Designer & Web Developer
        </h2>
        <div>
          <Button className="mr-5">Contact Me</Button>
          <Button variant="secondary">Get to know more</Button>
        </div>
      </div>
      <div className={styles.header_content_left}>
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
