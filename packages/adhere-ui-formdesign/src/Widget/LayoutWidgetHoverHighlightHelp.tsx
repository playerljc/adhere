import classNames from 'classnames';
import React, { memo, useState } from 'react';
import type { FC } from 'react';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { LayoutWidgetHoverHighlightHelpProps } from '../types/WidgetTypes';
import { getPropertyValueByName } from '../util';

const suffix = '-layout-widget-hover-highlight-help';

/**
 * LayoutWidgetHoverHighlightHelp
 * @description LayoutWidget hover的help
 * @constructor
 */
const LayoutWidgetHoverHighlightHelp: FC<LayoutWidgetHoverHighlightHelpProps> = ({
  propertys,
  children,
}) => {
  const [isHover, setHover] = useState(false);

  const onMouseOver = (e) => {
    e.stopPropagation();
    setHover(true);
  };

  const onMouseOut = (e) => {
    e.stopPropagation();
    setHover(false);
  };

  return (
    <div
      className={classNames(`${selectorPrefix}${suffix}`, {
        [`${selectorPrefix}${suffix}--hover`]: isHover,
      })}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div className={`${selectorPrefix}${suffix}-title`}>
        {getPropertyValueByName(propertys, 'title')}
      </div>

      <div className={`${selectorPrefix}${suffix}-name`}>
        {getPropertyValueByName(propertys, 'name')}
      </div>

      {children}
    </div>
  );
};

export default memo(LayoutWidgetHoverHighlightHelp);
