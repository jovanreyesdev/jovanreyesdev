import React, { useEffect, useState } from 'react';

import styles from '@/styles/components/Card.module.scss';

function Card({
  thumbnailImg,
  title,
  text,
  href,
}) {
  const [view, setView] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      if (view < 100) {
        setTimeout(function() {
          setView((prev) => prev + 1);
        }, 10);
      }
      return;
    }
    setView(0);
  }, [view, hovered]);
 
  const onMouseEnter = () => {
    setHovered(true);
  }

  const onMouseLeave = () => {
    setHovered(false);
  }

  return (
    <div className={styles.card}>
      { thumbnailImg ? (
        <div
          className={styles['card--thumbnail-img']}
          style={{
            backgroundPositionY: `${view}%`,
            backgroundImage: `url('images/portfolios/${thumbnailImg}')`
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ) : null}
      <div className={styles['card--body']}>
        <h3 className={styles['card--title']}>{title}</h3>
        <p className={styles['card--text']}>{text}</p>
      </div>
    </div>
  )
}

export default Card;
