import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import { useDroppable } from '@dnd-kit/core';

import { DesignContext } from '../../Design/Context';
import { SELECT_PREFIX } from '../../constant';
import type { DroppableContainerProps } from '../../types';

const selectPrefix = `${SELECT_PREFIX}-design-editor`;

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

  // hooks 始终调用以满足 hook 规则；form 模式下不绑定 ref、不应用 over class
  const { setNodeRef, isOver } = useDroppable({ id, data: value });

  const isFormMode = mode === 'form';

  return (
    <div
      ref={isFormMode ? undefined : setNodeRef}
      className={classNames(`${selectPrefix}-droppable-container`, className, {
        [`${selectPrefix}-droppable-container-over`]: !isFormMode && isOver,
      })}
      style={style ?? {}}
    >
      {children}
    </div>
  );
};

export default DroppableContainer;
