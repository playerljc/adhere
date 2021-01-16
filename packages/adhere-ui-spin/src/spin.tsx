import React from 'react';
import PropTypes from 'prop-types';

import ISpinProps from './types';

const selectorprefix = 'adhere-ui-spin';

/**
 * Spin
 * @class Spin
 * @classdesc Spin
 */
class Spin extends React.Component<ISpinProps, any> {
  render() {
    const { spinning, text } = this.props;

    return spinning ? (
      <div className={selectorprefix}>
        <span className={`${selectorprefix}-dot`}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <div className={`${selectorprefix}-text`}>{text}</div>
      </div>
    ) : null;
  }
}

Spin.defaultProps = {
  spinning: false,
  text: '',
};

Spin.propTypes = {
  spinning: PropTypes.bool,
  text: PropTypes.string,
};

export default Spin;
