import React from 'react';
import styles from '@/styles/components/Tag.module.scss';

function Tag({ children }) {
    return <div className={styles.tag}>{children}</div>
}

export default Tag;