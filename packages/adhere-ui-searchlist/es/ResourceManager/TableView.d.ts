/// <reference types="react" />
import type { SearchTableImplementProps, SearchTableImplementState } from '@baifendian/adhere-ui-searchtable/es/types';
declare const TableView_base: {
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
 * TableView
 * @class
 * @classdesc TableView
 */
declare class TableView<P extends SearchTableImplementProps, S extends SearchTableImplementState> extends TableView_base {
}
export default TableView;
