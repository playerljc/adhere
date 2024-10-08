import React, { memo } from 'react';

import { ContourBlockProps } from './types';

const selectorPrefix = 'adhere-ui-contour-block';

/**
 * ContourBlock
 * @constructor
 */
const ContourBlock = memo<ContourBlockProps>((props) => {
  const { className, style, children, ...attrs } = props;

  return (
    <div {...attrs} className={className ?? ''} style={style ?? {}}>
      <div className={`${selectorPrefix}`}>
        <div className={`${selectorPrefix}-inner`}>{children}</div>
      </div>
    </div>
  );
});

ContourBlock.displayName = 'ContourBlock';

export default ContourBlock;
