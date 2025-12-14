import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import { useDroppable } from '@dnd-kit/core';

import { SELECT_PREFIX } from '../../../constant';
import type { DroppableContainerProps } from '../../../types';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

/**
 * DroppableContainer
 * @description 在设计器中能进行拖放中的放容器，用于放置控件
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
