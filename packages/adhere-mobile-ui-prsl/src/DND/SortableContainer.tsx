import React, { useContext, useEffect, useMemo, useState } from 'react';
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

import Context from '../Context';

type Props = {
  children?: React.ReactNode;
  onSortEnd?: (params: { oldIndex: number; newIndex: number }) => void;
  useDragHandle?: boolean;
};

export default function SortableContainer({ children, onSortEnd }: Props) {
  const { getDatasourceLength } = useContext(Context);

  const length = getDatasourceLength?.() ?? 0;

  const initialItems = useMemo(() => Array.from({ length }, (_, i) => i), [length]);

  const [items, setItems] = useState<number[]>(initialItems);

  useEffect(() => {
    setItems(initialItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: any) {
    const { active, over } = event ?? {};
    if (!active || !over || active?.id === over?.id) return;

    const oldIndex = items.indexOf(active.id);
    const newIndex = items.indexOf(over.id);

    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
      setItems((prev) => arrayMove(prev, oldIndex, newIndex));
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
