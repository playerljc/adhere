import React from 'react';
import { ITableProps } from './types';
/**
 * Table
 * @class Table
 * @classdesc Table
 */
declare class Table extends React.Component<ITableProps, any> {
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
