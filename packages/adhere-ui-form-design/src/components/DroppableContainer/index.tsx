import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import { useDroppable } from '@dnd-kit/core';

import { DesignContext } from '../../Design/Context';
import { SELECT_PREFIX } from '../../constant';
import type { DroppableContainerProps } from '../../types';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

const DroppableContainerDesignMode: FC<DroppableContainerProps> = ({
  id,
  value,
  className,
  style,
  children,
}) => {
  const { setNodeRef, isOver } = useDroppable({ id, data: value });

  return (
    <div
      ref={setNodeRef}
      className={classNames(`${selectPrefix}-droppable-container`, className, {
        [`${selectPrefix}-droppable-container-design-mode`]: true,
        [`${selectPrefix}-droppable-container-over`]: isOver,
      })}
      style={style ?? {}}
    >
      {children}
    </div>
  );
};

/**
 * DroppableContainer
 * @description 在设计器中能进行拖放中的放容器，用于放置控件
 *  - design 模式下：作为 dnd-kit 的 droppable 区域
 *  - form   模式下：仅渲染普通容器，不参与拖拽
 */
const DroppableContainer: FC<DroppableContainerProps> = ({
  id,
  value,
  className,
  style,
  children,
}) => {
  const { mode } = useContext(DesignContext);

  const isFormMode = mode === 'form';

  if (!isFormMode) {
    return (
      <DroppableContainerDesignMode
        id={id}
        value={value}
        className={className}
        style={style}
      >
        {children}
      </DroppableContainerDesignMode>
    );
  }

  return (
    <div
      className={classNames(`${selectPrefix}-droppable-container`, className, {
        [`${selectPrefix}-droppable-container-design-mode`]: false,
        [`${selectPrefix}-droppable-container-over`]: false,
      })}
      style={style ?? {}}
    >
      {children}
    </div>
  );
};

export default DroppableContainer;
