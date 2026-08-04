import type { DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core';
import React from 'react';

export type SortableItemContextValue = {
  attributes: DraggableAttributes | Record<string, never>;
  listeners: DraggableSyntheticListeners | Record<string, never>;
  setActivatorNodeRef: (el: HTMLElement | null) => void;
};

export const SortableItemContext = React.createContext<SortableItemContextValue>({
  attributes: {},
  listeners: {},
  setActivatorNodeRef: (_el: HTMLElement | null) => {},
});
