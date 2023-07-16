import React, { FC, memo } from 'react';

import Ellipsis from '@baifendian/adhere-ui-ellipsis';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { WidgetToolBoxDNDDraggingProps } from '../types/WidgetToolBoxDNDDraggingProps';

const selectorSuffix = `${selectorPrefix}-tool-box-inner`;

/**
 * WidgetToolBoxDNDDragging
 * @param name
 * @param iconPath
 * @constructor
 */
const WidgetToolBoxDNDDragging: FC<WidgetToolBoxDNDDraggingProps> = ({ name, iconPath }) => {
  return (
    <div className={`${selectorSuffix}`}>
      <div className={`${selectorSuffix}-media`}>
        <img src={iconPath!} alt={name!} />
      </div>

      <div className={`${selectorSuffix}-main`}>
        <Ellipsis wrap={false}>{name!}</Ellipsis>
      </div>
    </div>
  );
};

export default memo(WidgetToolBoxDNDDragging);
