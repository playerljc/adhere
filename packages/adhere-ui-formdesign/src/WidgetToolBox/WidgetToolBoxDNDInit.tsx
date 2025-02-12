import React, { FC, memo } from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';

import Ellipsis from '@baifendian/adhere-ui-ellipsis';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { WidgetToolBoxDNDInitProps } from '../types/WidgetToolBoxDNDInitProps';
import { DND_SOURCE_TOOL_BOX } from '../types/WidgetTypes';

// const selectorSuffix = `${selectorPrefix}-tool-box-inner`;

/**
 * WidgetToolBoxDNDInit
 * @description WidgetToolBox的init状态
 * @param props
 */
const WidgetToolBoxDNDInit: FC<WidgetToolBoxDNDInitProps> = (props) => {
  const { name, iconPath } = props;

  const [{}, drag] = useDrag(() => ({
    type: DND_SOURCE_TOOL_BOX,
    item: {
      ...props,
    },
    canDrag: () => true,
  }));

  return (
    <div className={`${selectorPrefix}-tool-box-inner`} ref={drag}>
      <div className={`${selectorPrefix}-tool-box-inner-media`}>
        <img src={iconPath!} alt={name!} />
      </div>

      <div className={`${selectorPrefix}-tool-box-inner-main`}>
        <Ellipsis wrap={false}>{name!}</Ellipsis>
      </div>
    </div>
  );
};

export default memo(WidgetToolBoxDNDInit);
