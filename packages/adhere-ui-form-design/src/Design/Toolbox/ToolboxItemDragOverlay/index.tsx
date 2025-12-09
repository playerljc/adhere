import classNames from 'classnames';
import React, { useContext } from 'react';

import { DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core';

import { SELECT_PREFIX } from '../../../constant';
import type { ToolboxItemDragOverlayProps } from '../../../types';
import { DesignContext } from '../../Context';
import ToolboxItem from '../ToolboxItem';

const selectPrefix = `${SELECT_PREFIX}-design-toolbox-item-drag-overlay`;

/**
 * ToolboxItemDragOverlay
 */
const ToolboxItemDragOverlay: React.FC<ToolboxItemDragOverlayProps> = () => {
  const { getOverlayCursor, getActiveToolItemData } = useContext(DesignContext);

  const activeToolItemData = getActiveToolItemData();

  if (!activeToolItemData) return null;

  const cursor = getOverlayCursor();

  return (
    <DragOverlay
      dropAnimation={{
        duration: 300,
        easing: 'cubic-bezier(.2,.8,.2,1)',
        sideEffects: defaultDropAnimationSideEffects({
          styles: {
            active: {
              opacity: '0.6',
            },
          },
        }),
      }}
    >
      <ToolboxItem
        className={classNames(selectPrefix)}
        style={{
          cursor,
        }}
        {...activeToolItemData}
      />
    </DragOverlay>
  );
};

export default ToolboxItemDragOverlay;
