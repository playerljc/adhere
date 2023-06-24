import React, { createContext, memo, useContext, useState } from 'react';
import type { FC } from 'react';
import { useDrop } from 'react-dnd';
import { v1 } from 'uuid';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { FormDesignContext } from '../FormDesign/FormDesignProvider';
import { WidgetToolBoxDNDInitProps } from '../types/WidgetToolBoxDNDInitProps';
import {
  DLayoutWidget,
  DNDLayoutWidgetProps,
  DND_TYPE,
  IDNDLayoutWidgetContext,
  LayoutWidgetProps,
  WidgetProps,
} from '../types/WidgetTypes';
import { findWidgetById } from '../util';

export const DNDLayoutWidgetContext = createContext<IDNDLayoutWidgetContext>({
  toolboxDropWithWidget() {},
  isOverCurrent: false,
});

const DNDLayoutWidgetProvider = DNDLayoutWidgetContext.Provider;

/**
 * DNDLayoutWidget
 * @description 可拖放的布局容器
 * @param id
 * @param widgets
 * @param children
 * @constructor
 */
const DNDLayoutWidget: FC<DNDLayoutWidgetProps> = ({ id, widgets, children }) => {
  const isOver = (monitor) => monitor.isOver({ shallow: true });

  const { setDataSource, setWidgetActiveKey, getWidgetActiveKey } = useContext(FormDesignContext);

  /**
   * useDrop
   * @description 处理放置的操作，放置在布局的容器上
   */
  const [{ isOverCurrent }, drop] = useDrop(
    () => ({
      accept: DND_TYPE,
      drop: (_item: WidgetToolBoxDNDInitProps, monitor) => {
        if (monitor.canDrop()) {
          const dWidgetId = v1();

          // 要改数据
          setDataSource((_dataSource) => {
            const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

            dWidget.widgets.push({
              id: dWidgetId,
              groupType: _item.groupType!,
              type: _item.type!,
              propertys: [],
              widgets: [],
            });

            return [..._dataSource];
          }).then(() => {
            setWidgetActiveKey(dWidgetId);
          });
        }

        return monitor.getDropResult();
      },
      canDrop: (item, monitor) => isOver(monitor),
      collect: (monitor) => ({
        isOverCurrent: isOver(monitor),
      }),
    }),
    [id, widgets, children],
  );

  /**
   * toolboxDropWithWidget
   * @description ToolBox -> DNDLayoutWidget -> DNDWidget
   * @param {WidgetToolBoxDNDInitProps} toolbox
   * @param {WidgetProps | LayoutWidgetProps} widget
   */
  const toolboxDropWithWidget = (
    toolbox: WidgetToolBoxDNDInitProps,
    widget: WidgetProps | LayoutWidgetProps,
  ) => {
    const dWidgetId = v1();

    // 要改数据
    setDataSource((_dataSource) => {
      const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

      const _index = dWidget.widgets.findIndex((_w) => _w.id === widget.id);

      dWidget.widgets.splice(_index + 1, 0, {
        id: dWidgetId,
        groupType: toolbox.groupType!,
        type: toolbox.type!,
        propertys: [],
        widgets: [],
      });

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(dWidgetId);
    });
  };

  return (
    <DNDLayoutWidgetProvider
      value={{
        isOverCurrent,
        toolboxDropWithWidget,
      }}
    >
      <div ref={drop} className={`${selectorPrefix}-dnd-layout-widget`}>
        {children}
      </div>
    </DNDLayoutWidgetProvider>
  );
};

export default memo(DNDLayoutWidget);
