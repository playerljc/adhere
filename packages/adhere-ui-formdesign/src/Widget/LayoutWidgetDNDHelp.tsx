import classNames from 'classnames';
import React, { memo } from 'react';
import type { FC } from 'react';
import { useDrag } from 'react-dnd';

import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { IconFont } from '../IconFont';
import { DND_SOURCE_WIDGET, LayoutWidgetDNDHelpProps } from '../types/WidgetTypes';

const suffix = '-layout-widget-dnd-help';

/**
 * LayoutWidgetDNDHelp
 * @description LayoutWidget drag的help
 * @constructor
 */
const LayoutWidgetDNDHelp: FC<LayoutWidgetDNDHelpProps> = (props) => {
  const { id, children } = props;

  /**
   * useDrag
   * @description
   */
  const [{}, drag] = useDrag(
    () => ({
      type: DND_SOURCE_WIDGET,
      item: {
        ...props,
      },
      canDrag: () => true,
    }),
    [id, children],
  );

  return (
    <div className={`${selectorPrefix}${suffix}`}>
      <div ref={drag} className={`${selectorPrefix}${suffix}-drag-handle`}>
        <IconFont type="icon-yidong" />
      </div>

      <div className={`${selectorPrefix}${suffix}-actions`}>
        <div className={classNames(`${selectorPrefix}${suffix}-action`)}>
          <CopyOutlined />
        </div>

        <div className={classNames(`${selectorPrefix}${suffix}-action`)}>
          <DeleteOutlined />
        </div>
      </div>

      {children}
    </div>
  );
};

export default memo(LayoutWidgetDNDHelp);
