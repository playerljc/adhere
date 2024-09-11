import classNames from 'classnames';
import React, { ReactElement, memo } from 'react';

import { StickupLayoutItemProps } from './types';

const selectorPrefix = 'adhere-ui-stickup-layout-item';

const StickupLayoutItem = memo<StickupLayoutItemProps>((props): ReactElement => {
  const { className, style, title, content } = props;

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <div className={`${selectorPrefix}-header`}>{title}</div>
      <div className={`${selectorPrefix}-content`}>{content}</div>
    </div>
  );
});

StickupLayoutItem.displayName = 'StickupLayoutItem';

export default StickupLayoutItem;
