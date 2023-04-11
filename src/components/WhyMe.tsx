import React from 'react';
import Image from 'next/image';

import styles from '@/styles/components/WhyMe.module.scss';

function WhyMe() {
  return (
    <section className="container pt-10">
      <div className={styles.content_area}>
        <div className={styles.box}>
          <div className="text-5xl mb-10">Why <span className="font-bold text-blue-500">Jovan</span>?</div>
          <div className="typography">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt Laoreet non curabitur gravida
            sagittis aliquam bibendum.
          </div>
        </div>
        <div className={styles.box + ' ' + styles.techstacks}>
          <Image
            alt="Tech Stacks"
            src="/images/techstacks.png"
            width={374}
            height={364}
          />
        </div>
        <div className={styles.box}>
          <Image
            src="/images/whyme/safesecurity.svg"
            width={348}
            height={147}
            className="mb-5"
          />
          <div className={`${styles.box_title} font-bold`}>Safe & Secure Apps</div>
          <div className="typography">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt Laoreet non curabitur gravida
            sagittis aliquam bibendum.
          </div>
        </div>
        <div className={styles.box}>
          <Image
            src="/images/whyme/mobileresponsive.svg"
            width={348}
            height={147}
            className="mb-5"
          />
          <div className={`${styles.box_title} font-bold`}>Mobile Responsive</div>
          <div className="typography">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt Laoreet non curabitur gravida
            sagittis aliquam bibendum.
          </div>
        </div>
        <div className={styles.box}>
          <Image
            src="/images/whyme/fastwebsites.svg"
            width={348}
            height={147}
            className="mb-5"
          />
          <div className={`${styles.box_title} font-bold`}>Fast & Optimized</div>
          <div className="typography">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt Laoreet non curabitur gravida
            sagittis aliquam bibendum.
          </div>
        </div>
        <div className={styles.box}>
          <Image
            src="/images/whyme/budgetfriendly.svg"
            width={348}
            height={147}
            className="mb-5"
          />
          <div className={`${styles.box_title} font-bold`}>Budget Friendly</div>
          <div className="typography">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt Laoreet non curabitur gravida
            sagittis aliquam bibendum.
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMe;