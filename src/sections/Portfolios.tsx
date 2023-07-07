import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import styles from '@/styles/sections/Portfolios.module.scss';

function Portfolios() {
  return (
    <div className="container">
      <div className={styles.content_area}>
        <h2 className="subheading">Portfolios</h2>
        <div className={`${styles.bgCover} flex justify-between rounded-xl overflow-hidden bg-[#0f121c]`}>
          <div className="flex flex-col flex-1 justify-center items-center sm:items-end sm:pr-20">
            <h2 className={styles.title}>
              Empowering Businesses with Full-Stack Innovation
            </h2>
            <Button className="z-[101]">View portfolios</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolios;