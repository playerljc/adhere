import type { FC } from 'react';
import React, { createContext, memo, useContext } from 'react';
import { useDrop } from 'react-dnd';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { FormDesignContext } from '../FormDesign/FormDesignProvider';
import { WidgetToolBoxDNDInitProps } from '../types/WidgetToolBoxDNDInitProps';
import type { DNDWidgetProps } from '../types/WidgetTypes';
import {
  DND_SOURCE_TOOL_BOX,
  DND_SOURCE_WIDGET,
  IDNDWidgetContext,
  LayoutWidgetProps,
  WidgetProps,
} from '../types/WidgetTypes';
import { DNDLayoutWidgetContext } from './DNDLayoutWidget';
import WidgetDNDHelp from './WidgetDNDHelp';
import WidgetHoverHighlightHelp from './WidgetHoverHighlightHelp';

export const DNDWidgetContext = createContext<IDNDWidgetContext>({
  isOverCurrent: false,
});

const DNDWidgetProvider = DNDWidgetContext.Provider;

/**
 * DNDWidget
 * @description 可拖放的Widhet
 * @param props
 * @constructor
 */
const DNDWidget: FC<DNDWidgetProps> = (props) => {
  const { id, children } = props;

  const isOver = (monitor) => monitor.isOver({ shallow: true });

  const { getWidgetActiveKey } = useContext(FormDesignContext);

  const { toolboxDropWithWidget, widgetDropWithWidget } = useContext(DNDLayoutWidgetContext);

  /**
   * useDrop
   * @description
   */
  const [{ isOverCurrent }, drop] = useDrop(
    () => ({
      accept: [DND_SOURCE_WIDGET, DND_SOURCE_TOOL_BOX],
      drop(_item: WidgetToolBoxDNDInitProps | WidgetProps | LayoutWidgetProps, _monitor) {
        if (_monitor.canDrop()) {
          // 需要区分出是insert swipe

          debugger;
          // Widget间相互(swipe)
          if (_item.id) {
            // TODO: swipe
            console.log('swipe');
            widgetDropWithWidget(_item as WidgetProps | LayoutWidgetProps, props);
          }
          // ToolBox拖拽进来(insert)
          else {
            // TODO: insert
            // ToolBox -> DNDLayoutWidget(id) -> DNDWidget(数据)
            toolboxDropWithWidget(_item, props);
          }
        }

        return _monitor.getDropResult();
      },
      canDrop: (_item, _monitor) => {
        // 自己放在自己上面不行
        if (getWidgetActiveKey() === id) return false;

        return isOver(_monitor);
      },
      collect: (_monitor) => ({
        isOverCurrent: isOver(_monitor),
      }),
    }),
    [id, getWidgetActiveKey(), children],
  );

  const dndWidget = (
    <div ref={drop} className={`${selectorPrefix}-dnd-widget`}>
      {children}
    </div>
  );

  return (
    <DNDWidgetProvider
      value={{
        isOverCurrent,
      }}
    >
      {getWidgetActiveKey() === id && <WidgetDNDHelp {...props}>{dndWidget}</WidgetDNDHelp>}
      {getWidgetActiveKey() !== id && (
        <WidgetHoverHighlightHelp {...props}>{dndWidget}</WidgetHoverHighlightHelp>
      )}
    </DNDWidgetProvider>
  );
};

export default memo(DNDWidget);
