import React, { useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { fadeInUp } from '@/components/Animations';

import styles from '@/styles/sections/CompaniesHelped.module.scss';

const IMG_BASE_URL = '/images/companies';

function CompaniesHelped() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className={`container ${styles.component}`}>
      <div className={styles.content_area}>
        <div className={styles.companies}>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Image loading="lazy" alt="1800Accountant" src={`${IMG_BASE_URL}/1800accountant.png`} width={150} height={33} />
          </motion.div>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image loading="lazy" alt="Smartbag" src={`${IMG_BASE_URL}/smartbag.png`} width={150} height={55} />
          </motion.div>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image loading="lazy" alt="Lear" src={`${IMG_BASE_URL}/lear.png`} width={150} height={40} />
          </motion.div>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image loading="lazy" alt="Merck" src={`${IMG_BASE_URL}/merck.png`} width={150} height={40} />
          </motion.div>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image loading="lazy" alt="Maxicare" src={`${IMG_BASE_URL}/maxicare.png`} width={150} height={40} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesHelped;