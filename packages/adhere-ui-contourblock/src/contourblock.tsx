import React, { FC, memo } from 'react';

import { ContourBlockProps } from './types';

const selectorPrefix = 'adhere-ui-contourblock';

/**
 * ContourBlock
 * @constructor
 */
const ContourBlock: FC<ContourBlockProps> = (props) => {
  const { className, style, children, ...attrs } = props;

  return (
    <div {...attrs} className={className || ''} style={style || {}}>
      <div className={`${selectorPrefix}`}>
        <div className={`${selectorPrefix}-inner`}>{children}</div>
      </div>
    </div>
  );
};

export default memo(ContourBlock);
