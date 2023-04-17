import React from 'react';

import styles from '@/styles/components/Thumbnail.module.scss';

function Thumbnail({
  src,
  className,
} : {
  src: string;
  className: string;
}) {
  return (
    <div className={`${styles.thumbnail} ${className}`} style={{ backgroundImage: `url(${src})` }} />
  )
}

export default Thumbnail;