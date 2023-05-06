import React from 'react';
import { SearchListImplementState, SearchListStateImplementProps } from '../types';
declare const GridStateView_base: {
    new (props: any): {
        [x: string]: any;
        renderCard(params: any): React.ReactNode;
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
 * GridStateView
 * @class
 * @classdesc GridStateView
 */
declare class GridStateView<P extends SearchListStateImplementProps, S extends SearchListImplementState> extends GridStateView_base {
}
export default GridStateView;
