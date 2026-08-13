import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React, { useContext, useMemo } from 'react';

import Context from '../Context';
import type { SortableContainerProps } from '../types';

export default function SortableContainer({ children, onSortEnd }: SortableContainerProps) {
  const { getDatasourceLength } = useContext(Context);

  const length = getDatasourceLength?.() ?? 0;

  // 每次拖拽结束后父级会对数据 arrayMove，子项重新按 0..n-1 的顺序渲染，
  // 所以 items 恒为顺序索引，不能在这里维护本地状态(会与实际渲染顺序脱节，导致第二次拖拽错位)
  const items = useMemo(() => Array.from({ length }, (_, i) => i), [length]);

  // 为移动端配置传感器：同时支持触摸和指针，并设置激活距离以避免误触
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event ?? {};
    if (!active || !over || active?.id === over?.id) return;

    // id 即数据中的索引
    const oldIndex = Number(active.id);
    const newIndex = Number(over.id);

    if (!Number.isNaN(oldIndex) && !Number.isNaN(newIndex) && oldIndex !== newIndex) {
      onSortEnd?.({ oldIndex, newIndex });
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}
