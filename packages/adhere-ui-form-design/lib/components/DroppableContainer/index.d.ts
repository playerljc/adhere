import type { FC } from 'react';
import type { DroppableContainerProps } from '../../types';
/**
 * DroppableContainer
 * @description 在设计器中能进行拖放中的放容器，用于放置控件
 *  - design 模式下：作为 dnd-kit 的 droppable 区域
 *  - form   模式下：仅渲染普通容器，不参与拖拽
 */
declare const DroppableContainer: FC<DroppableContainerProps>;
export default DroppableContainer;
