import React from 'react';
import { TSortTableProps } from './types';
declare class SortableTable<RecordType extends object = any> extends React.Component<TSortTableProps<RecordType>> {
    state: {
        dataSource: readonly RecordType[];
        isSort: boolean;
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        dataSource: any;
        isSort?: undefined;
    } | {
        isSort: boolean;
        dataSource?: undefined;
    } | null;
    /**
     * 覆盖antdTable的tr
     */
    DraggableBodyRow: ({ className, style, ...restProps }: {
        [x: string]: any;
        className: any;
        style: any;
    }) => JSX.Element;
    DraggableContainer: (containerProps: any) => JSX.Element;
    /**
     * 拖拽完成时更改dataSource
     */
    onSortEnd: ({ oldIndex, newIndex }: {
        oldIndex: any;
        newIndex: any;
    }) => void;
    render(): JSX.Element;
}
export default SortableTable;
