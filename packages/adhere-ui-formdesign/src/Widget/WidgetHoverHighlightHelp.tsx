import React, { memo, useContext } from 'react';
import type { FC } from 'react';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { FormDesignContext } from '../FormDesign/FormDesignProvider';
import { WidgetHoverHighlightHelpProps } from '../types/WidgetTypes';
import { getPropertyValueByName } from '../util';

const suffix = '-widget-hover-highlight-help';

/**
 * WidgetHoverHighlightHelp
 * @description Widget hover的help
 * @constructor
 */
const WidgetHoverHighlightHelp: FC<WidgetHoverHighlightHelpProps> = ({
  id,
  propertys,
  children,
}) => {
  const { setWidgetActiveKey } = useContext(FormDesignContext);

  const onClick = (e) => {
    e.stopPropagation();
    setWidgetActiveKey(id);
  };

  return (
    <div className={`${selectorPrefix}${suffix}`} onClick={onClick}>
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

export default memo(WidgetHoverHighlightHelp);
