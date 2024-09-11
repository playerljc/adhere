import classNames from 'classnames';
import React, { memo } from 'react';

import Ellipsis from '@baifendian/adhere-ui-ellipsis';

import { selectorPrefix } from './Expression';
import type { ViewProps } from './types';

/**
 * View
 * @param wrapClassName
 * @param wrapStyle
 * @param value
 * @param ellipsisProps
 * @return {JSX.Element}
 * @constructor
 */
const View = memo<ViewProps>(({ wrapClassName, wrapStyle, value, ...ellipsisProps }) => (
  <div
    className={classNames(`${selectorPrefix}-view`, wrapClassName ?? '')}
    style={wrapStyle ?? {}}
  >
    <Ellipsis
      {...(ellipsisProps || {})}
      dangerouslySetInnerHTML={{ __html: value ?? '' }}
    ></Ellipsis>
  </div>
));

export default View;
