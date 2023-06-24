import React, { memo } from 'react';
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
  return (
    <div className={`${selectorPrefix}${suffix}`}>
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
