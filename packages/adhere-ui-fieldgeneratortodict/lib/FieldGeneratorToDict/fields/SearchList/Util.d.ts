import React from 'react';
import type { XhrResponseBusiness } from '../../../types';
interface SearchListClassFactoryParams {
    SuperClass: any;
    SearchClass: any;
    sage: any;
    override: Record<string, Function>;
    dictName: string;
    responseBusiness: XhrResponseBusiness;
    defaultResult: Record<string, any>;
    selectionMode?: 'single' | 'multiple';
}
interface CreateSearchListSelectParams {
    dictName: string;
    params: any;
    selectionMode: SearchListClassFactoryParams['selectionMode'];
}
/**
 * SELECT_LIST_OVERRIDE
 */
export declare const SELECT_LIST_OVERRIDE: {
    hasAdvancedSearch(): boolean;
    renderSearchToolBar(): null;
    isUseSearchWrapperGap(): boolean;
    isUseSearchFormToolBarGap(): boolean;
    getGridSearchFormColgroup(): {
        columnCount: number;
        colgroup: (string | undefined)[];
    };
    getGridSearchFormRowCount(): number;
};
/**
 * standardSearchListClassFactory
 * @param SearchClass
 * @param params
 */
export declare function standardSearchListClassFactory({ SearchClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
}): any;
/**
 * createSearchListSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 */
export declare function createSearchListSelect({ dictName, params, selectionMode, }: CreateSearchListSelectParams): ({ onDataSourceChange, cascadeParams, listProps, defaultOptions, ...props }: {
    [x: string]: any;
    onDataSourceChange: any;
    cascadeParams: any;
    listProps: any;
    defaultOptions: any;
}) => React.JSX.Element;
export {};
