import React from 'react';

import styles from './RadialGradient.module.scss';

function RadialGradient () {
  const settings = [
    { x: 40, y: 20, hex: '#9EE362' },
    { x: 100, y: 80, hex: '#444bf7' },
    { x: 160, y: 20, hex: '#9EE362' },
    { x: 220, y: 80, hex: '#FFD403' },
    { x: 280, y: 20, hex: '#FE82AA' },
    { x: 340, y: 80, hex: '#444bf7' },
    { x: 400, y: 20, hex: '#9EE362' },
    { x: 460, y: 80, hex: '#FFD403' },
    { x: 520, y: 20, hex: '#FE82AA' },
    { x: 580, y: 80, hex: '#444bf7' },
  ];

  return settings.map((s) => (
    <div
      style={{
        left: s.y + '%',
        top: s.x + '%',
        background: `radial-gradient(circle at 50% 50%, ${s.hex}, #444bf700)`,
      }}
      className={styles.radialGradientObject}
    />
  ))
}

export default RadialGradient;
