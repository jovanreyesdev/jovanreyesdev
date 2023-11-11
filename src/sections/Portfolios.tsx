import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Card from '@/components/Card';
import styles from '@/styles/sections/Portfolios.module.scss';

const PORTFOLIOS = [
  {
    title: 'Neon Packaging',
    text: 'Shopify Liquid · HTML · CSS · Javascript',
    href: 'https://www.neonpackaging.com.au/',
    img: './neonpackaging.webp',
  },
  {
    title: '1800Accountant',
    text: 'NodeJS · React · ES6 · Next.js',
    href: 'https://1800accountant.com/',
    img: './1800accountant.webp',
  },
  {
    title: 'RobustClaims',
    text: 'NodeJS · ReactJS · .NET Framework',
    href: 'https://robustclaims.co.uk/',
    img: './robustclaims.webp',
  },
  {
    title: 'Merck',
    text: 'Javascript · jQuery · HTML · CSS',
    href: 'https://www.merck.at/',
    img: './merck.webp',
  },
  {
    title: 'Smartbag Australia',
    text: '.NET Framework · React · Microsoft Azure · ASP · Next.js',
    href: 'https://www.smartbag.com.au/',
    img: './smartbag.webp',
  },
  {
    title: 'Jovan Portfolio',
    text: 'ReactJS · Tailwind',
    href: 'https://jovanreyesdev.vercel.app/',
    img: './jovanreyesdev.webp',
  },
  {
    title: 'PrimePay',
    text: 'ReactJS · Tailwind',
    href: 'https://primepay-jrdev.netlify.app/',
    img: './primepay.webp',
  },
  {
    title: 'Plants Ecommerce',
    text: 'ReactJS · Tailwind',
    href: 'https://pcommerce-jrdev.netlify.app/',
    img: './plants.webp',
  },
  {
    title: 'Age of Khagan',
    text: 'ReactJS · Tailwind',
    href: 'https://age-of-khagan.netlify.app/',
    img: './aok.webp',
  }
]

function Portfolios() {
  return (
    <section id="portfolios">
      <div className="container">
        <div className={styles.content_area}>
          <h2 className="subheading">Portfolios</h2>
          <div className={styles['portfolio-list']}>
            {
              PORTFOLIOS.map((p) => (
                <div className={styles['portfolio-list--item']}>
                  <Link href={p.href} target="_blank">
                    <Card
                      title={p.title}
                      text={p.text}
                      thumbnailImg={p.img}
                    />
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolios;