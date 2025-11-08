import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { SortableItemContext } from './SortableItemContext';

type Props = {
  index: number;
  children?: React.ReactNode;
};

export default function SortableItem({ index, children }: Props) {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } =
    useSortable({ id: index });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    // 移动端优化：防止触摸时的默认行为
    touchAction: 'none',
    WebkitUserSelect: 'none',
    userSelect: 'none',
  };

  return (
    <SortableItemContext.Provider value={{ attributes: attributes ?? {}, listeners: listeners ?? {}, setActivatorNodeRef }}>
      <div ref={setNodeRef} style={style}>
        {children}
      </div>
    </SortableItemContext.Provider>
  );
}
