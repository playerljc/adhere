import React, { createContext, memo, useContext } from 'react';
import type { FC } from 'react';
import { useDrop } from 'react-dnd';

import { selectorPrefix } from '../FormDesign/FormDesign';
import { FormDesignContext } from '../FormDesign/FormDesignProvider';
import { WidgetToolBoxDNDInitProps } from '../types/WidgetToolBoxDNDInitProps';
import { DND_TYPE, IDNDWidgetContext, LayoutWidgetProps, WidgetProps } from '../types/WidgetTypes';
import type { DNDWidgetProps } from '../types/WidgetTypes';
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
  const { children, ..._dWidget } = props;

  const { id } = _dWidget;

  const isOver = (monitor) => monitor.isOver({ shallow: true });

  const { getWidgetActiveKey } = useContext(FormDesignContext);

  const { toolboxDropWithWidget } = useContext(DNDLayoutWidgetContext);

  /**
   * useDrop
   * @description
   */
  const [{ isOverCurrent }, drop] = useDrop(
    () => ({
      accept: DND_TYPE,
      drop(_item: WidgetToolBoxDNDInitProps | WidgetProps | LayoutWidgetProps, monitor) {
        if (monitor.canDrop()) {
          // 需要区分出是insert swipe

          // Widget间相互(swipe)
          if (_item.id) {
          }
          // ToolBox拖拽进来(insert)
          else {
            // ToolBox -> DNDLayoutWidget(id) -> DNDWidget(数据)
            toolboxDropWithWidget(_item, _dWidget);
          }
        }

        return monitor.getDropResult();
      },
      canDrop: (item, monitor) => isOver(monitor),
      collect: (monitor) => ({
        isOverCurrent: isOver(monitor),
      }),
    }),
    [id, children],
  );

  return (
    <DNDWidgetProvider
      value={{
        isOverCurrent,
      }}
    >
      <div ref={drop} className={`${selectorPrefix}-dnd-widget`}>
        {children}
        {getWidgetActiveKey() === id && <WidgetDNDHelp {..._dWidget} />}
        {getWidgetActiveKey() !== id && <WidgetHoverHighlightHelp {..._dWidget} />}
      </div>
    </DNDWidgetProvider>
  );
};

export default memo(DNDWidget);
