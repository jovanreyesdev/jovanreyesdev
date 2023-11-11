import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/sections/CompaniesHelped.module.scss';

const IMG_BASE_URL = '/images/companies';

function CompaniesHelped() {
  return (
    <section id="companies-helped" className={styles.component}>
      <div className="container">
        <div className={styles.content_area}>
          <div className={styles.companies}>
            <Image alt="Lear" src={`${IMG_BASE_URL}/lear.webp`} width={100} height={40} />

            <Link href="https://www.merckgroup.com/at-de" target="_blank">
              <Image alt="Merck" src={`${IMG_BASE_URL}/merck.webp`} width={100} height={40} />
            </Link>

            <Link href="https://www.smartbag.com.au/" target="_blank">
              <Image alt="Smartbag" src={`${IMG_BASE_URL}/smartbag.webp`} width={100} height={55} />
            </Link>

            <Link href="https://1800accountant.com/" target="_blank">
              <Image alt="1800Accountant" src={`${IMG_BASE_URL}/1800accountant.webp`} width={100} height={33} />
            </Link>

            <Link href="https://robustclaims.co.uk/" target="_blank">
              <Image alt="RobustClaims" src={`${IMG_BASE_URL}/robustclaimslogo.webp`} width={100} height={40} />
            </Link>

            <Link href="https://www.neonpackaging.com.au/" target="_blank">
              <Image alt="Neon Packaging" src={`${IMG_BASE_URL}/neon-packaging.webp`} width={100} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesHelped;