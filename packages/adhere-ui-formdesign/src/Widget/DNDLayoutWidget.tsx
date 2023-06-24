import React, { createContext, memo, useContext } from 'react';
import type { FC } from 'react';
import { useDrop } from 'react-dnd';
import { v1 } from 'uuid';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { FormDesignContext } from '../FormDesign/FormDesignProvider';
import { WidgetToolBoxDNDInitProps } from '../types/WidgetToolBoxDNDInitProps';
import {
  DLayoutWidget,
  DNDLayoutWidgetProps,
  DND_SOURCE_TOOL_BOX,
  DND_SOURCE_WIDGET,
  IDNDLayoutWidgetContext,
  LayoutWidgetProps,
  WidgetProps,
} from '../types/WidgetTypes';
import { findParentLayoutWidgetById, findWidgetById } from '../util';
import LayoutWidgetDNDHelp from './LayoutWidgetDNDHelp';
import LayoutWidgetHoverHighlightHelp from './LayoutWidgetHoverHighlightHelp';

/**
 * DNDLayoutWidgetContext
 */
export const DNDLayoutWidgetContext = createContext<IDNDLayoutWidgetContext>({
  toolboxDropWithWidget() {},
  widgetDropWithWidget() {},
  copyWidget() {},
  deleteWidget() {},
  isOverCurrent: false,
});

/**
 * DNDLayoutWidgetProvider
 */
const DNDLayoutWidgetProvider = DNDLayoutWidgetContext.Provider;

/**
 * DNDLayoutWidget
 * @description 可拖放的布局容器
 * @constructor
 * @param props
 */
const DNDLayoutWidget: FC<DNDLayoutWidgetProps> = (props) => {
  const { id, widgets, children } = props;

  const isOver = (monitor) => monitor.isOver({ shallow: true });

  const { setDataSource, setWidgetActiveKey, getWidgetActiveKey } = useContext(FormDesignContext);

  /**
   * useDrop
   * @description 处理放置的操作，放置在布局的容器上
   */
  const [{ isOverCurrent }, drop] = useDrop(
    () => ({
      accept: [DND_SOURCE_WIDGET, DND_SOURCE_TOOL_BOX],
      drop: (_item: WidgetToolBoxDNDInitProps, _monitor) => {
        if (_monitor.canDrop()) {
          const dWidgetId = v1();

          // TODO: append
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

        return _monitor.getDropResult();
      },
      canDrop: (_item, _monitor) => {
        // 自己放在自己上面不行
        if (getWidgetActiveKey() === id) return false;

        // 自己widgets里的不能放
        if (_monitor.getItemType() === DND_SOURCE_WIDGET) {
          if (widgets.find((_widget) => _widget.id === _item.id)) return false;
        }

        return isOver(_monitor);
      },
      collect: (_monitor) => ({
        isOverCurrent: isOver(_monitor),
      }),
    }),
    [id, getWidgetActiveKey(), widgets, children],
  );

  /**
   * toolboxDropWithWidget
   * @description ToolBox -> DNDLayoutWidget -> DNDWidget (insert)
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

  /**
   * widgetDropWithWidget
   * @description Widget -> DNDLayoutWidget -> Widget (swipe)
   * @param {WidgetProps | LayoutWidgetProps} sourceWidget
   * @param {WidgetProps | LayoutWidgetProps} targetWidget
   */
  const widgetDropWithWidget = (
    sourceWidget: WidgetProps | LayoutWidgetProps,
    targetWidget: WidgetProps | LayoutWidgetProps,
  ) => {
    // 要改数据
    setDataSource((_dataSource) => {
      const sourceLayoutWidget = findParentLayoutWidgetById(
        sourceWidget.id,
        _dataSource,
      ) as DLayoutWidget;
      const targetLayoutWidget = findParentLayoutWidgetById(
        targetWidget.id,
        _dataSource,
      ) as DLayoutWidget;

      const sourceWidgetIndexByLayoutWidget = sourceLayoutWidget.widgets.findIndex(
        (_widget) => _widget.id === sourceWidget.id,
      );
      const targetWidgetIndexByLayoutWidget = targetLayoutWidget.widgets.findIndex(
        (_widget) => _widget.id === targetWidget.id,
      );

      sourceLayoutWidget.widgets[sourceWidgetIndexByLayoutWidget] = targetWidget;
      targetLayoutWidget.widgets[targetWidgetIndexByLayoutWidget] = sourceWidget;

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(sourceWidget.id);
    });
  };

  /**
   * copyWidget
   * @description 复制Widget
   * @param {WidgetProps} widget
   */
  const copyWidget = (widget: WidgetProps) => {
    const dWidgetId = v1();

    // 要改数据
    setDataSource((_dataSource) => {
      const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

      const _index = dWidget.widgets.findIndex((_w) => _w.id === widget.id);

      dWidget.widgets.splice(_index + 1, 0, {
        id: dWidgetId,
        groupType: widget.groupType,
        type: widget.type,
        propertys: widget.propertys,
        widgets: widgets.widgets,
      });

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(dWidgetId);
    });
  };

  /**
   * deleteWidget
   * @description 删除Widget
   * @param {WidgetProps} widget
   */
  const deleteWidget = (widget: WidgetProps) => {
    let widgetActiveKey = '';

    // 要改数据
    setDataSource((_dataSource) => {
      const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

      const _index = dWidget.widgets.findIndex((_w) => _w.id === widget.id);

      if (dWidget.widgets.length > 1) {
        // 最后一个
        if (_index === dWidget.widgets.length - 1) {
          widgetActiveKey = dWidget.widgets[_index - 1].id;
        } else {
          widgetActiveKey = dWidget.widgets[_index + 1].id;
        }
      }

      dWidget.widgets.splice(_index, 1);

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(widgetActiveKey);
    });
  };

  /**
   * onClick
   * @param e
   */
  const onClick = (e) => {
    e.stopPropagation();
    setWidgetActiveKey(id);
  };

  /**
   * dndLayoutWidgetJSX
   */
  const dndLayoutWidgetJSX = (
    <div ref={drop} className={`${selectorPrefix}-dnd-layout-widget`} onClick={onClick}>
      {children}
    </div>
  );

  return (
    <DNDLayoutWidgetProvider
      value={{
        isOverCurrent,
        toolboxDropWithWidget,
        widgetDropWithWidget,
        copyWidget,
        deleteWidget,
      }}
    >
      {getWidgetActiveKey() === id && (
        <LayoutWidgetDNDHelp {...props}>{dndLayoutWidgetJSX}</LayoutWidgetDNDHelp>
      )}
      {getWidgetActiveKey() !== id && (
        <LayoutWidgetHoverHighlightHelp {...props}>
          {dndLayoutWidgetJSX}
        </LayoutWidgetHoverHighlightHelp>
      )}
    </DNDLayoutWidgetProvider>
  );
};

export default memo(DNDLayoutWidget);
