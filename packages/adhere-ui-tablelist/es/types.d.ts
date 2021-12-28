import React from 'react';
import { IFormItemProps } from '@baifendian/adhere-ui-formitemcreator/lib/types';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { TableProps } from 'antd/lib/table';
import { ListProps } from 'antd/lib/list';
import { TooltipProps } from 'antd/lib/tooltip';
/**
 * ITemplateProps
 * @interface ITemplateProps
 */
export interface ITableListProps<T> {
    className?: string;
    mode?: 'table' | 'list';
    search?: ISearchProps;
    toolbar?: IToolbarProps;
    table?: ITableProps<T>;
    list?: ListProps<T>;
    request?: Function;
}
export interface ITableProps<RecordType> extends TableProps<RecordType> {
    sortable?: boolean | ISortableProps;
    showNumber?: boolean | object;
}
export interface TSortTableProps<RecordType> extends TableProps<RecordType> {
    sortable?: boolean | ISortableProps;
    [proName: string]: any;
}
/**
 * 搜索栏
 */
export interface ISearchProps {
    className?: string;
    beforeContent?: string | number | React.ReactElement;
    afterContent?: string | number | React.ReactElement;
    columns?: IFormItemProps;
    optionRender?: boolean | React.ReactElement;
    searchText?: string;
    resetText?: string;
    size?: SizeType;
}
export interface ISortableProps {
    itemProps?: object;
    containerProps?: object;
}
/**
 * 工具栏
 */
export interface IToolbarProps {
    className?: string;
    title?: string | React.ReactElement;
    total?: boolean | string | React.ReactElement;
    selectAll?: boolean | IToolbarSelectAllProps;
    search?: IFormItemProps;
    reload?: boolean | object;
    setting?: boolean | object;
    toolbarOptionRender?: undefined | React.ReactElement;
}
/**
 * 工具栏-选中全部
 */
export declare type IToolbarSelectAllProps = TooltipProps & {
    total?: boolean;
};
