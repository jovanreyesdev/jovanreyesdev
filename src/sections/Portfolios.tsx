import React from 'react';
import Image from 'next/image';

import styles from '@/styles/sections/Portfolios.module.scss';

function Portfolios() {
  return (
    <div className="container">
      <div className={styles.content_area}>
        <h2 className="subheading">Portfolios</h2>
        <div className={styles.portfolio_list}>
          <div className={`${styles.portfolio_item} pt-0`}>
            <Image alt="Primepay" src="/images/portfolios/primepay.jpg" width={492} height={292} />
            <div className={styles.portfolio_details}>
              <div className={styles.portfolio_title}>Primepay</div>
              <div className={styles.date_n_genre}>
                <div className={styles.date}>2023</div>
                <div>Static Website</div>
              </div>
              <div className={styles.description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <Image alt="Primepay" src="/images/portfolios/plants.jpg" width={492} height={292} />
            <div className={styles.portfolio_details}>
              <div className={styles.portfolio_title}>Plants</div>
              <div className={styles.date_n_genre}>
                <div className={styles.date}>2023</div>
                <div>Static Website</div>
              </div>
              <div className={styles.description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <Image alt="Primepay" src="/images/portfolios/1800accountant.jpg" width={492} height={292} />
            <div className={styles.portfolio_details}>
              <div className={styles.portfolio_title}>1800Accountant</div>
              <div className={styles.date_n_genre}>
                <div className={styles.date}>2019</div>
                <div>Client Website</div>
              </div>
              <div className={styles.description}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolios;