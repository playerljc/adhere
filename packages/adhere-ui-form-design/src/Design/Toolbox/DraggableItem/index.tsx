import classNames from 'classnames';
import React, { type FC } from 'react';

import { useDraggable } from '@dnd-kit/core';

import { SELECT_PREFIX } from '../../../constant';
import type { DraggableToolItemProps } from '../../../types';

const selectPrefix = `${SELECT_PREFIX}-design-toolbox`;

/**
 * DraggableToolItem
 */
const DraggableToolItem: FC<DraggableToolItemProps> = ({ id, data, disabled, children }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data,
    disabled,
  });

  return (
    <li
      ref={setNodeRef}
      className={classNames(`${selectPrefix}-draggable-item`, {
        [`${selectPrefix}-draggable-item-dragging`]: isDragging,
      })}
      {...listeners}
      {...attributes}
    >
      {children}
    </li>
  );
};

export default DraggableToolItem;
