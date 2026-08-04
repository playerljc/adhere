import type { DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core';
import React from 'react';
export type SortableItemContextValue = {
    attributes: DraggableAttributes | Record<string, never>;
    listeners: DraggableSyntheticListeners | Record<string, never>;
    setActivatorNodeRef: (el: HTMLElement | null) => void;
};
export declare const SortableItemContext: React.Context<SortableItemContextValue>;
