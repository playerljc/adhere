import React from 'react';
import type { DragSortColumnProps } from '../../../../types';
/**
 * DragSortColumn
 * @param width
 * @param title
 * @param render
 * @param className
 * @constructor
 */
declare function DragSortColumn({ width, title, render, className }?: DragSortColumnProps): {
    key: string;
    dataIndex: string;
    title: React.ReactNode;
    width: string | number;
    $search: {
        visible: boolean;
        showColumnHeader: boolean;
    };
    render: (...params: any[]) => React.JSX.Element;
};
export default DragSortColumn;
