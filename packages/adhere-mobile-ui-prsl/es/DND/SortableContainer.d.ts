import React from 'react';
type Props = {
    children?: React.ReactNode;
    onSortEnd?: (params: {
        oldIndex: number;
        newIndex: number;
    }) => void;
    useDragHandle?: boolean;
};
export default function SortableContainer({ children, onSortEnd }: Props): React.JSX.Element;
export {};
