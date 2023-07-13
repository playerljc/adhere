import type { FC } from 'react';
import React, { createContext, memo, useContext } from 'react';
import { useDrop } from 'react-dnd';
import { v4 } from 'uuid';

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
import {
  copyWidget as copyWidgetUtil,
  findParentLayoutWidgetById,
  findWidgetById,
  getDefaultProperties,
} from '../util';
import DropHelp from './DropHelp';
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

  const { copyWidget: contextCopyWidget, deleteWidget: contextDeleteWidget } =
    useContext(DNDLayoutWidgetContext);

  const activeKey = getWidgetActiveKey();

  /**
   * useDrop
   * @description 处理放置的操作，放置在布局的容器上
   */
  const [{ isOverCurrent }, drop] = useDrop(() => ({
    accept: [DND_SOURCE_WIDGET, DND_SOURCE_TOOL_BOX],
    drop: (_item: WidgetToolBoxDNDInitProps | WidgetProps | LayoutWidgetProps, _monitor) => {
      if (_monitor.canDrop()) {
        const type = _monitor.getItemType();

        // ToolBox -> LayoutWidget
        if (type === DND_SOURCE_TOOL_BOX) {
          toolboxDropWithSelf(_item as WidgetToolBoxDNDInitProps);
        } else if (type === DND_SOURCE_WIDGET) {
          // LayoutWidget -> LayoutWidget
          // Widget -> LayoutWidget
          widgetDropWithSelf(_item as WidgetProps);
        }
      }

      return _monitor.getDropResult();
    },
    canDrop: (_item, _monitor) => {
      // 自己放在自己上面不行
      if (activeKey === id) return false;

      // 自己widgets里的不能放
      if (_monitor.getItemType() === DND_SOURCE_WIDGET) {
        if (widgets.find((_widget) => _widget.id === _item.id)) return false;
      }

      return isOver(_monitor);
    },
    collect: (_monitor) => ({
      isOverCurrent: isOver(_monitor),
    }),
  }));

  /**
   * widgetDropWithSelf
   * @description Widget | LayoutWidget -> LayoutWidget remove -> append
   * @param {WidgetProps} widget
   */
  const widgetDropWithSelf = (widget: WidgetProps) => {
    setDataSource((_dataSource) => {
      const widgetLayoutWidget = findParentLayoutWidgetById(
        widget.id,
        _dataSource,
      ) as DLayoutWidget;

      const widgetIndexInWidgets = widgetLayoutWidget.widgets.findIndex(
        (_widget) => _widget.id === widget.id,
      );

      widgetLayoutWidget.widgets.splice(widgetIndexInWidgets, 1);

      const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

      dWidget.widgets.push(widget);

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(widget.id);
    });
  };

  /**
   * toolboxDropWithSelf
   * @description ToolBox -> LayoutWidget append
   * @param {WidgetToolBoxDNDInitProps} toolbox
   */
  const toolboxDropWithSelf = (toolbox: WidgetToolBoxDNDInitProps) => {
    const dWidgetId = v4();

    // TODO: append
    setDataSource((_dataSource) => {
      const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

      const defaultProperties = getDefaultProperties(toolbox.groupType!, toolbox.type!);

      dWidget.widgets.push({
        id: dWidgetId,
        groupType: toolbox.groupType!,
        type: toolbox.type!,
        properties: defaultProperties,
        widgets: [],
      });

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(dWidgetId);
    });
  };

  /**
   * toolboxDropWithWidget
   * @description ToolBox -> Widget (insert)
   * @param {WidgetToolBoxDNDInitProps} toolbox
   * @param {WidgetProps | LayoutWidgetProps} widget
   */
  const toolboxDropWithWidget = (
    toolbox: WidgetToolBoxDNDInitProps,
    widget: WidgetProps | LayoutWidgetProps,
  ) => {
    const dWidgetId = v4();

    // 要改数据
    setDataSource((_dataSource) => {
      const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

      const _index = dWidget.widgets.findIndex((_w) => _w.id === widget.id);

      const defaultProperties = getDefaultProperties(toolbox.groupType!, toolbox.type!);

      dWidget.widgets.splice(_index + 1, 0, {
        id: dWidgetId,
        groupType: toolbox.groupType!,
        type: toolbox.type!,
        properties: defaultProperties,
        widgets: [],
      });

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(dWidgetId);
    });
  };

  /**
   * widgetDropWithWidget
   * @description Widget | LayoutWidget -> Widget (swipe)
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
    if (widget.id === id) {
      contextCopyWidget(widget);
      return;
    }

    const newWidget = copyWidgetUtil(widget);

    // 要改数据
    setDataSource((_dataSource) => {
      const dWidget = findWidgetById(id, _dataSource) as DLayoutWidget;

      const _index = dWidget.widgets.findIndex((_w) => _w.id === widget.id);

      dWidget.widgets.splice(_index + 1, 0, newWidget);

      return [..._dataSource];
    }).then(() => {
      setWidgetActiveKey(newWidget.id);
    });
  };

  /**
   * deleteWidget
   * @description 删除Widget
   * @param {WidgetProps} widget
   */
  const deleteWidget = (widget: WidgetProps) => {
    if (widget.id === id) {
      contextDeleteWidget(widget);
      return;
    }

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
      {isOverCurrent && <DropHelp />}
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
      {activeKey === id && (
        <LayoutWidgetDNDHelp {...props}>{dndLayoutWidgetJSX}</LayoutWidgetDNDHelp>
      )}
      {activeKey !== id && (
        <LayoutWidgetHoverHighlightHelp {...props}>
          {dndLayoutWidgetJSX}
        </LayoutWidgetHoverHighlightHelp>
      )}
    </DNDLayoutWidgetProvider>
  );
};

export default memo(DNDLayoutWidget);
