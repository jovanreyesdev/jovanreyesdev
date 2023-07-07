import React, { useEffect } from "react";
import Image from "next/image";
import { ReactSVG } from "react-svg";

import Button from "@/components/Button";
import { slideDown } from '@/components/Animations';
import { motion, useAnimation } from 'framer-motion';

import styles from "@/styles/sections/PageHeader.module.scss";

function PageHeader() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -10, 10, -10, 10, -10, 0],
      rotate: [0, 0, -10, 10, -10, 10, 0],
      transition: { duration: 3, ease: "easeInOut" },
    });
  }, [controls]);
    
  return (
    <div className={`container ${styles.pageheader}`}>
      <div className={styles.header_content_left}>
        <motion.div
          variants={slideDown}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
        >
          <ReactSVG src="/images/jrdev.svg" className={styles.background_brand} />
        </motion.div>
        <h1 className={styles.heading}>Hello! I am Jovan</h1>
        <h2 className={styles.subheading}>
          Building digital products, brands & experience.
        </h2>
        <div className="flex flex-col xl:flex-row">
          <Button className={`${styles.cta} mb-10 xl:mb-0 xl:mr-5`}>Contact Me</Button>
          <Button className={`${styles.cta} hidden xl:inline`} variant="secondary">Get to know more</Button>
        </div>
      </div>
      <div className={styles.header_content_right}>
        <Image
          width={750}
          height={500}
          alt="Jovan Portrait"
          src="/jovanportraitbrush.png"
          loading="eager"
          priority
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
