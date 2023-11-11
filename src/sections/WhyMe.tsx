import React, { useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { fadeInUp, fadeInLeft } from '@/components/Animations';

import styles from '@/styles/sections/WhyMe.module.scss';

function WhymeBox({
  src,
  title,
  description,
  delay,
}: {
  src: string;
  title: string;
  description: string;
  delay: number;
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay }}
      className={styles.box}
    >
      <Image
        src={src}
        width={348}
        height={147}
        className="mb-5"
        alt="background"
        loading="lazy"
      />
      <div className={`${styles.box_title} font-bold`}>
        {title}
      </div>
      <div className="typography">
        {description}
      </div>
    </motion.div>
  )
}

function WhyMe() {
  return (
    <section className="container pt-10">
      <div className={styles.content_area}>
        <WhymeBox
          src="/images/whyme/uiux.svg"
          title="UI & UX"
          description="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt Laoreet non curabitur gravida
          sagittis aliquam bibendum."
          delay={0.1}
        />
        <WhymeBox
          src="/images/whyme/creative.svg"
          title="Design & Creative"
          description="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt Laoreet non curabitur gravida
          sagittis aliquam bibendum."
          delay={0.3}
        />
        <WhymeBox
          src="/images/whyme/development.svg"
          title="Development"
          description="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt Laoreet non curabitur gravida
          sagittis aliquam bibendum."
          delay={0.5}
        />
      </div>
    </section>
  )
}

export default WhyMe;