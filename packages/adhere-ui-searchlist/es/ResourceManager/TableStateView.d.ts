/// <reference types="react" />
import type { SearchTableImplementState, SearchTableStateImplementProps } from '@baifendian/adhere-ui-searchtable/es/types';
declare const TableStateView_base: {
    new (props: any): {
        [x: string]: any;
        getOrderFieldValue(): string;
        renderTableDensitySetting({ density, onChange, onReset }: {
            density: any;
            onChange: any;
            onReset: any;
        }): JSX.Element;
        isMount: boolean;
        componentDidMount(): void;
        fetchData(): Promise<any>;
        getParams(): any;
        getData(): object[];
        getServiceName(): string;
        getFetchListPropName(): any;
        getTotalKey(): any;
        getColumns(): any;
        renderSearchFormBefore(): null;
        renderSearchForm(): null;
        renderSearchToolBar(): null;
        renderSearchFormAfter(): null;
        renderSearchHeader(): null;
        renderSearchFooter(): null;
    };
};
/**
 * TableStateView
 * @class
 * @classdesc TableStateView
 */
declare class TableStateView<P extends SearchTableStateImplementProps, S extends SearchTableImplementState> extends TableStateView_base {
}
export default TableStateView;
