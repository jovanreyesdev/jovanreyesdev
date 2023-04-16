import React from 'react';
import Image from 'next/image';

import styles from '@/styles/components/CompaniesHelped.module.scss';

const IMG_BASE_URL = '/images/companies';

function CompaniesHelped() {
  return (
    <section className={`container ${styles.component}`}>
      <div className={styles.content_area}>
        <div className={styles.companies}>
          <Image alt="1800Accountant" src={`${IMG_BASE_URL}/1800accountant.png`} width={150} height={33} />
          <Image alt="Smartbag" src={`${IMG_BASE_URL}/smartbag.png`} width={150} height={55} />
          <Image alt="Lear" src={`${IMG_BASE_URL}/lear.png`} width={150} height={40} />
          <Image alt="Merck" src={`${IMG_BASE_URL}/merck.png`} width={150} height={40} />
          <Image alt="Maxicare" src={`${IMG_BASE_URL}/maxicare.png`} width={150} height={40} />
        </div>
      </div>
    </section>
  )
}

export default CompaniesHelped;