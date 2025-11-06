import { UnorderedListOutline } from 'antd-mobile-icons';
import React, { useContext } from 'react';

import { SortableItemContext } from './SortableItemContext';

export default function DragHandle({ children }: { children?: React.ReactNode }) {
  const { attributes, listeners, setActivatorNodeRef } = useContext(SortableItemContext);

  return (
    <span ref={setActivatorNodeRef} {...attributes} {...listeners}>
      {children ?? (
        <span>
          <UnorderedListOutline />
        </span>
      )}
    </span>
  );
}
