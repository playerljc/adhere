import React from 'react';
import type { XhrResponseBusiness } from '../../../types';
interface SearchTableClassFactoryParams {
    SuperClass: any;
    SearchClass: any;
    sage: any;
    override: Record<string, Function>;
    dictName: string;
    responseBusiness: XhrResponseBusiness;
    defaultResult: Record<string, any>;
    selectionMode?: 'single' | 'multiple';
    rowSelectionMode?: 'normal' | 'continuous';
    showCheckedStrategy?: symbol;
}
interface CreateSearchTableSelectParams {
    dictName: string;
    params: any;
    selectionMode: SearchTableClassFactoryParams['selectionMode'];
    rowSelectionMode: SearchTableClassFactoryParams['rowSelectionMode'];
}
interface CreateSearchTreeTableSelectParams extends CreateSearchTableSelectParams {
}
/**
 * SELECT_TABLE_OVERRIDE
 */
export declare const SELECT_TABLE_OVERRIDE: {
    hasAdvancedSearch(): boolean;
    renderSearchToolBar(): null;
    isUseSearchWrapperGap(): boolean;
    isUseSearchFormToolBarGap(): boolean;
    getGridSearchFormColgroup(): {
        columnCount: number;
        colgroup: (string | undefined)[];
    };
    getGridSearchFormRowCount(): number;
    isUseCheckedStrategy(): boolean;
};
/**
 * TREE_SELECT_TABLE_OVERRIDE
 */
export declare const TREE_SELECT_TABLE_OVERRIDE: ({ selectionMode, showCheckedStrategy }: {
    selectionMode: any;
    showCheckedStrategy: any;
}) => {
    getCheckedStrategy(): any;
    isUseCheckedStrategy(): boolean;
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
 * standardSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function standardSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * editorCellSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function editorCellSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * editorRowSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function editorRowSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * editorTableSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function editorTableSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * rowDragSortSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function rowDragSortSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * editorCellRowDragSortSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function editorCellRowDragSortSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * editorRowDragSortSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function editorRowDragSortSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * editorTableRowDragSortSearchTableClassFactory
 * @param SearchClass
 * @param SuperClass
 * @param params
 */
export declare function editorTableRowDragSortSearchTableClassFactory({ SearchClass, SuperClass, ...params }: {
    [x: string]: any;
    SearchClass: any;
    SuperClass: any;
}): any;
/**
 * createSearchTableSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 */
export declare function createSearchTableSelect({ dictName, params, selectionMode, rowSelectionMode, }: CreateSearchTableSelectParams): ({ onDataSourceChange, cascadeParams, tableProps, defaultOptions, ...props }: {
    [x: string]: any;
    onDataSourceChange: any;
    cascadeParams: any;
    tableProps: any;
    defaultOptions: any;
}) => React.JSX.Element;
/**
 * createSearchTreeTableSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 * @param showCheckedStrategy
 */
export declare function createSearchTreeTableSelect({ dictName, params, selectionMode, rowSelectionMode, }: CreateSearchTreeTableSelectParams): ({ onDataSourceChange, cascadeParams, tableProps, ...props }: {
    [x: string]: any;
    onDataSourceChange: any;
    cascadeParams: any;
    tableProps: any;
}) => React.JSX.Element;
/**
 * createAsyncSearchTableSelect
 * @param dictName
 * @param params
 * @param selectionMode
 * @param rowSelectionMode
 */
export declare function createAsyncSearchTableSelect({ dictName, params, selectionMode, rowSelectionMode, }: CreateSearchTableSelectParams): ({ onDataSourceChange, cascadeParams, tableProps, ...props }: {
    [x: string]: any;
    onDataSourceChange: any;
    cascadeParams: any;
    tableProps: any;
}) => React.JSX.Element;
export {};
