import React from 'react';
import { Requireable } from 'prop-types';
import { ITableProps } from './types';
/**
 * Table
 * @class Table
 * @classdesc Table
 */
declare class Table extends React.Component<ITableProps, any> {
    static defaultProps: {
        tableClassName: string;
        columns: any[];
        tableStyle: {};
        className: string;
        style: {};
        dataSource: any[];
    };
    static propTypes: {
        tableClassName: any;
        columns: Requireable<any[]>;
        tableStyle: any;
        className: any;
        style: any;
        dataSource: Requireable<any[]>;
        rowKey: any;
    };
    /**
     * renderHeader
     */
    protected renderHeader(): JSX.Element;
    /**
     * renderBody
     */
    protected renderBody(): JSX.Element;
    protected render(): JSX.Element;
}
export default Table;
