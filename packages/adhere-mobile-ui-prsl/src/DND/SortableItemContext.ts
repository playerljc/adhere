import React from 'react';

export const SortableItemContext = React.createContext<{
  attributes: Record<string, any>;
  listeners: Record<string, any>;
  setActivatorNodeRef: (el: HTMLElement | null) => void;
}>({
  attributes: {},
  listeners: {},
  // @ts-ignore
  setActivatorNodeRef: () => {},
});


