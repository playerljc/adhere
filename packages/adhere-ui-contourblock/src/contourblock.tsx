import React from 'react';
import PropTypes from 'prop-types';

import { IContourBlockProps } from './types';

const selectorPrefix = 'adhere-ui-contourblock';

/**
 * ContourBlock
 * @constructor
 */
function ContourBlock(props: IContourBlockProps) {
  return (
    <div className={props.className || ''} style={props.style || {}}>
      <div className={`${selectorPrefix}`}>
        <div className={`${selectorPrefix}-inner`}>{props.children}</div>
      </div>
    </div>
  );
}

ContourBlock.defaultProps = {
  className: '',
  style: {},
};

ContourBlock.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ContourBlock;
