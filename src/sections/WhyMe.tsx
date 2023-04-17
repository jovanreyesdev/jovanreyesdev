import React from 'react';
import Image from 'next/image';

import styles from '@/styles/sections/WhyMe.module.scss';

function WhymeBox({
  src,
  title,
  description
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.box}>
      <Image
        src={src}
        width={348}
        height={147}
        className="mb-5"
        alt="background"
      />
      <div className={`${styles.box_title} font-bold`}>{title}</div>
      <div className="typography">
        {description}
      </div>
    </div>
  )
}

function WhyMe() {
  return (
    <section className="container pt-10">
      <div className={styles.content_area}>
        <WhymeBox
          src="/images/whyme/safesecurity.svg"
          title="Safe & Secure"
          description="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt Laoreet non curabitur gravida
          sagittis aliquam bibendum."
        />
        <WhymeBox
          src="/images/whyme/mobileresponsive.svg"
          title="Mobile Responsive"
          description="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt Laoreet non curabitur gravida
          sagittis aliquam bibendum."
        />
        <WhymeBox
          src="/images/whyme/fastwebsites.svg"
          title="Fast & Optimized"
          description="Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor
          incididunt Laoreet non curabitur gravida
          sagittis aliquam bibendum."
        />
      </div>
    </section>
  )
}

export default WhyMe;