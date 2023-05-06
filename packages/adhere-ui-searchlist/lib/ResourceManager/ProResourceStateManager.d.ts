import React from 'react';
export declare const SearchAndPaginParamsMemo: any;
/**
 * ProResourceStateManager
 * @classdesc 高级查询列表
 */
declare const _default: {
    new (props: any): {
        [x: string]: any;
        getParams(): any;
        getColumns(columns: any): any;
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        renderTableDensitySetting(): any;
        getViewParams(): {
            name: null;
            resourceType: null;
            size: null;
            modifyTimeStart: undefined;
            modifyTimeEnd: undefined;
        };
        getTableViewColumns(): ({
            title: string;
            dataIndex: string;
            key: string;
            sorter: boolean;
            sortOrder: any;
            $search: {
                type: string;
                visible: boolean;
                dictName?: undefined;
                startName?: undefined;
                endName?: undefined;
            };
            render: (value: any, record: any) => JSX.Element;
            align?: undefined;
            width?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            sorter: boolean;
            sortOrder: any;
            $search: {
                type: string;
                visible: boolean;
                dictName: string;
                startName?: undefined;
                endName?: undefined;
            };
            render: (value: any) => JSX.Element;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            sorter: boolean;
            sortOrder: any;
            $search: {
                type: string;
                visible: boolean;
                dictName?: undefined;
                startName?: undefined;
                endName?: undefined;
            };
            render: (value: any) => JSX.Element | "-";
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            sorter: boolean;
            sortOrder: any;
            $search: {
                type: string;
                visible: boolean;
                startName: string;
                endName: string;
                dictName?: undefined;
            };
            render: (value: any) => JSX.Element;
        })[];
        renderGridViewCard({ record }: {
            record: any;
        }): React.ReactNode;
    };
    [x: string]: any;
};
export default _default;
