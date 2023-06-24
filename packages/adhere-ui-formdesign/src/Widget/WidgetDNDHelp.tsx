import classNames from 'classnames';
import React, { memo } from 'react';
import type { FC } from 'react';
import { useDrag } from 'react-dnd';

import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { IconFont } from '../IconFont';
import { DND_TYPE, WidgetDNDHelpProps } from '../types/WidgetTypes';

const suffix = '-widget-dnd-help';

/**
 * WidgetDNDHelp
 * @description Widget drag的help
 * @constructor
 */
const WidgetDNDHelp: FC<WidgetDNDHelpProps> = (props) => {
  const { id } = props;

  /**
   * useDrag
   * @description
   */
  const [{}, drag] = useDrag(
    () => ({
      type: DND_TYPE,
      item: {
        ...props,
      },
      canDrag: () => true,
      collect: (monitor) => {
        return {};
      },
    }),
    [id],
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
    </div>
  );
};

export default memo(WidgetDNDHelp);
