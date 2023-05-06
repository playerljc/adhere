/// <reference types="react" />
import ResourceManager from './ResourceManager/ResourceManager';
import ResourceStateManager from './ResourceManager/ResourceStateManager';
import SearchList from './SearchList';
import { SearchListImplement } from './SearchListImplement';
import { SearchListStateImplement } from './SearchListStateImplement';
declare const _default: {
    List: typeof SearchList;
    Dict: {
        initStatic(): void;
        initRemote(): void;
    };
    SearchListContext: import("react").Context<{
        context: SearchList<import("./types").SearchListProps, import("./types").SearchListState>;
    } | null>;
    ListImplement: typeof SearchListImplement;
    ListStateImplement: typeof SearchListStateImplement;
    SearchListImplementFactory: import("./types").SearchListImplementFactoryFunction<any, any>;
    SearchListStateImplementFactory: import("./types").SearchListStateImplementFactoryFunction<any, any>;
    ProSearchList: {
        new (): {
            getParams(): {};
            getColumns(): never[];
        };
    };
    ProSearchStateList: {
        new (): {
            getParams(): {};
            getColumns(): never[];
        };
    };
    ResourceStateManager: typeof ResourceStateManager;
    ResourceManager: typeof ResourceManager;
    ProResourceManager: {
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
            }): import("react").ReactNode;
        };
        [x: string]: any;
    };
    ProResourceStateManager: {
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
            }): import("react").ReactNode;
        };
        [x: string]: any;
    };
};
export default _default;
