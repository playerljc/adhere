import React, { memo } from 'react';
import type { FC } from 'react';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { LayoutWidgetHoverHighlightHelpProps } from '../types/WidgetTypes';

const suffix = '-layout-widget-hover-highlight';

/**
 * LayoutWidgetHoverHighlightHelp
 * @constructor
 */
const LayoutWidgetHoverHighlightHelp: FC<LayoutWidgetHoverHighlightHelpProps> = () => {
  return <div className={`${selectorPrefix}${suffix}`}></div>;
};

export default memo(LayoutWidgetHoverHighlightHelp);
