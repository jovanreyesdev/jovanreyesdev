import React, { ReactNode } from 'react';
import styles from '@/styles/components/Tag.module.scss';

function Tag({ children } : { children: ReactNode }) {
    return <div className={styles.tag}>{children}</div>
}

export default Tag;