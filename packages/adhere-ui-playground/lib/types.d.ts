import React, { CSSProperties } from 'react';
/**
 * ICardProps
 */
export interface ICardProps {
    headerClassName: string;
    headerStyle: object;
    bodyClassName: string;
    bodyStyle: object;
    actionClassName: string;
    actionStyle: object;
    title: React.ReactNode;
    extra: React.ReactNode;
    actions: React.ReactNode[];
}
/**
 * ITableColumn
 */
export interface ITableColumn {
    key: string;
    dataIndex: string;
    title: React.ReactNode | string;
    width: string;
    align: 'left' | 'right' | 'center';
    valign: 'top' | 'middle' | 'bottom';
    render: (text: any, record: object, rowIndex: number, columnIndex: number) => void;
    className: string;
    style: object;
}
/**
 * ITableProps
 */
export interface ITableProps {
    className: string;
    style: CSSProperties | null;
    tableClassName: string;
    tableStyle: CSSProperties;
    columns: ITableColumn[];
    dataSource: Object[];
    rowKey: string;
}
/**
 * IPlayGroundProps
 * @interface IPlayGroundProps
 */
export interface IPlayGroundProps {
    codeText: string;
    title: object | string;
    expand?: boolean;
}
/**
 * IPlayGroundMulitProps
 */
export interface IPlayGroundMulitProps {
    config: IPlayGroundProps[];
    expand: boolean;
}
/**
 * IPlayGroundState
 * @interface IPlayGroundState
 */
export interface IPlayGroundState {
    expand: boolean;
}
/**
 * IPropsProps
 */
export interface IPropsProps {
    data: Array<{
        params: string | React.ReactNode;
        desc: string | React.ReactNode;
        type: string | React.ReactNode;
        defaultVal: string | React.ReactNode;
    }>;
}
/**
 * IFunctionProps
 */
export interface IFunctionProps {
    data: Array<{
        name: string | React.ReactNode;
        desc: string | React.ReactNode;
        modifier: 'static' | 'public' | 'private' | 'protected';
        params: Array<{
            name: string | React.ReactNode;
            desc: string | React.ReactNode;
            type: string | React.ReactNode;
            defaultVal: string | React.ReactNode;
            required: string | boolean;
        }>;
        returnType: string | React.ReactNode;
        returnDesc: string | React.ReactNode;
    }>;
}
