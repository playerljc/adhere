import classNames from 'classnames';
import React, { memo, useContext, useState } from 'react';
import type { FC } from 'react';
import { useDrag } from 'react-dnd';

import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { IconFont } from '../IconFont';
import { DND_SOURCE_WIDGET, WidgetDNDHelpProps } from '../types/WidgetTypes';
import { DNDLayoutWidgetContext } from './DNDLayoutWidget';

const suffix = '-widget-dnd-help';

/**
 * WidgetDNDHelp
 * @description Widget drag的help
 * @constructor
 */
const WidgetDNDHelp: FC<WidgetDNDHelpProps> = (props) => {
  const { id, children } = props;

  const [isHover, setHover] = useState(false);

  const { copyWidget, deleteWidget } = useContext(DNDLayoutWidgetContext);

  /**
   * useDrag
   * @description
   */
  const [{}, drag] = useDrag(() => ({
    type: DND_SOURCE_WIDGET,
    item: {
      ...props,
    },
    canDrag: () => true,
  }));

  const onMouseOver = (e) => {
    e.stopPropagation();
    setHover(true);
  };

  const onMouseOut = (e) => {
    e.stopPropagation();
    setHover(false);
  };

  const onCopy = (e) => {
    e.stopPropagation();
    copyWidget(props);
  };

  const onDelete = (e) => {
    e.stopPropagation();
    deleteWidget(props);
  };

  return (
    <div
      className={classNames(`${selectorPrefix}${suffix}`, {
        [`${selectorPrefix}${suffix}--hover`]: isHover,
      })}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div ref={drag} className={`${selectorPrefix}${suffix}-drag-handle`}>
        <IconFont type="icon-yidong" />
      </div>

      <div className={`${selectorPrefix}${suffix}-actions`}>
        <div
          className={classNames(`${selectorPrefix}${suffix}-action`)}
          title="复制"
          onClick={onCopy}
        >
          <CopyOutlined />
        </div>

        <div
          className={classNames(`${selectorPrefix}${suffix}-action`)}
          title="删除"
          onClick={onDelete}
        >
          <DeleteOutlined />
        </div>
      </div>

      {children}
    </div>
  );
};

export default memo(WidgetDNDHelp);
