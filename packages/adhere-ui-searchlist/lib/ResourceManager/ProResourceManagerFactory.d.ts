import { ReactNode } from 'react';
export declare const selectorPrefix = "adhere-ui-searchtable-protable";
/**
 * ProResourceManagerFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
        getParams(): any;
        getColumns(columns: any): any;
        renderSearchFooterItemsImpl(defaultItems: any): any[];
        renderTableDensitySetting(): any;
        /**
         * getViewParams
         * @override
         */
        getViewParams(): {
            name: null;
            resourceType: null;
            size: null;
            modifyTimeStart: undefined;
            modifyTimeEnd: undefined;
        };
        /**
         * getTableViewColumns
         * @override
         */
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
        /**
         * renderGridViewCard
         * @override
         */
        renderGridViewCard({ record }: {
            record: any;
        }): ReactNode;
    };
    [x: string]: any;
};
