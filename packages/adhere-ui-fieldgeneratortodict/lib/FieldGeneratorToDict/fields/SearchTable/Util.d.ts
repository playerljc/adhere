import React from 'react';
interface SearchTableClassFactoryParams {
    SuperClass: any;
    sage: any;
    override: Record<string, Function>;
    dictName: string;
    responseBusiness: XhrResponseBusiness;
    defaultResult: Record<string, any>;
    selectionMode?: 'single' | 'multiple';
    rowSelectionMode?: 'normal' | 'continuous';
    showCheckedStrategy?: symbol;
}
interface XhrResponseBusiness {
    codeKey: string;
    codeSuccess: number;
    codeSuccessKey: number;
    dataKey: string;
    messageKey: string;
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
};
/**
 * standardSearchTableClassFactory
 * @param params
 */
export declare function standardSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
/**
 * editorCellSearchTableClassFactory
 * @param params
 */
export declare function editorCellSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
/**
 * editorRowSearchTableClassFactory
 * @param params
 */
export declare function editorRowSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
/**
 * editorTableSearchTableClassFactory
 * @param params
 */
export declare function editorTableSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
/**
 * rowDragSortSearchTableClassFactory
 * @param params
 */
export declare function rowDragSortSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
/**
 * editorCellRowDragSortSearchTableClassFactory
 * @param params
 */
export declare function editorCellRowDragSortSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
/**
 * editorRowDragSortSearchTableClassFactory
 * @param params
 */
export declare function editorRowDragSortSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
/**
 * editorTableRowDragSortSearchTableClassFactory
 * @param params
 */
export declare function editorTableRowDragSortSearchTableClassFactory(params: any): React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<any>>;
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
