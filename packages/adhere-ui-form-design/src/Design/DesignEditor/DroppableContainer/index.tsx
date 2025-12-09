import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import { useDroppable } from '@dnd-kit/core';

import { SELECT_PREFIX } from '../../../constant';
import type { DroppableContainerProps } from '../../../types';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

/**
 * DroppableContainer
 */
const DroppableContainer: FC<DroppableContainerProps> = ({ id, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={classNames(`${selectPrefix}-droppable-container`, {
        [`${selectPrefix}-droppable-container-over`]: isOver,
      })}
    >
      {children}
    </div>
  );
};

export default DroppableContainer;
