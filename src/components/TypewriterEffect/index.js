import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function TypewriterEffect({ children }) {
  return (
    <h1 className="typewrite-effect">
      {children}
    </h1>
  );
}

TypewriterEffect.defaultProps = {
  children: null,
};

TypewriterEffect.propTypes = {
  children: PropTypes.node,
};

export default TypewriterEffect;
