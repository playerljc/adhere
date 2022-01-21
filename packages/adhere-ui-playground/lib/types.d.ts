import React, { CSSProperties } from 'react';
/**
 * ICardProps
 */
export interface ICardProps {
    className: string;
    style: object;
    headerClassName: string;
    headerStyle: object;
    bodyClassName: string;
    bodyStyle: object;
    actionClassName: string;
    actionStyle: object;
    title: React.ReactNode;
    extra: React.ReactNode;
    description: {
        title: string | React.ReactNode;
        info: string | React.ReactNode;
    };
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
export interface ICodePanelProps {
    codeText: string;
    theme?: string;
}
/**
 * IPlayGroundProps
 * @interface IPlayGroundProps
 */
export interface IPlayGroundProps extends ICodePanelProps {
    id?: string;
    cardProps: ICardProps;
    isActive: boolean;
    expand?: boolean;
}
/**
 * IPlayGroundMulitProps
 */
export interface IPlayGroundMulitProps extends IPlayGroundProps {
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
export interface ICollapseProps {
    headerClassName: string;
    headerStyle: CSSProperties | null;
    bodyClassName: string;
    bodyStyle: CSSProperties | null;
    title: React.ReactNode | string;
    extra: React.ReactNode | string;
    defaultCollapse: boolean;
    border: boolean;
    scrollY: boolean;
    fixedHeaderScrollBody: boolean;
}
export interface ICodeBoxPlayGroundProps extends IPlayGroundProps {
    type: 'PlayGround';
    renderWrap?: (columnIndex: number, index: number, config: IPlayGroundProps, children: React.ReactElement) => React.ReactElement;
    renderChildren?: (columnIndex: number, index: number, config: Array<ICodeBoxPlayGroundProps>) => React.ReactElement;
}
export interface ICodeBoxPlayGroundMulitProps extends IPlayGroundMulitProps {
    type: 'PlayGroundMulit';
    renderWrap?: (columnIndex: number, index: number, config: Array<ICodeBoxPlayGroundMulitProps>, children: React.ReactElement) => React.ReactElement;
    renderChildren?: (columnIndex: number, index: number, config: Array<ICodeBoxPlayGroundMulitProps>) => React.ReactElement;
}
export interface ICodeBoxPlayGroundTabProps extends IPlayGroundTabProps {
    type: 'PlayGroundTab';
    renderWrap?: (columnIndex: number, index: number, config: IPlayGroundTabProps, children: React.ReactElement) => React.ReactElement;
    renderChildren?: (columnIndex: number, index: number, config: Array<IPlayGroundTabProps>) => React.ReactElement;
}
export interface ICodeBoxProps {
    title?: string | React.ReactElement;
    extra?: React.ReactElement;
    isShowExpandAllBtn: boolean;
    columnCount: number;
    expandAll?: boolean;
    config: Array<ICodeBoxPlayGroundProps | ICodeBoxPlayGroundMulitProps | ICodeBoxPlayGroundTabProps>;
}
export interface ICollapseState {
    collapse: boolean;
}
export interface ICodeTabPanelItemProps extends ICodePanelProps {
    key: string;
    title: string | React.ReactElement;
}
export interface ICodeTabPanelProps {
    active: string;
    config: ICodeTabPanelItemProps[];
}
export interface IPlayGroundTabProps extends ICodeTabPanelProps, IPlayGroundProps {
}
