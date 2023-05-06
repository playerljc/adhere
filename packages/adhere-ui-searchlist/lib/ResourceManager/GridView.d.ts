import React from 'react';
import { SearchListImplementProps, SearchListImplementState } from '../types';
declare const GridView_base: {
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
 * GridView
 * @class
 * @classdesc GridView
 */
declare class GridView<P extends SearchListImplementProps, S extends SearchListImplementState> extends GridView_base {
}
export default GridView;
