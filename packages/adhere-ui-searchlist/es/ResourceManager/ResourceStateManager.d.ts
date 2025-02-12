import React from 'react';
import type { ResourceManagerProps, ResourceManagerState } from '../types';
declare const ResourceStateManager_base: {
    new (props: any): {
        [x: string]: any;
        viewRenders: Map<string, any>;
        onSearch(): Promise<void>;
        onClear(): any;
        fetchData(): any;
        getColumns(): any;
        getDefaultValues(): {
            page: any;
            limit: any;
            selectedRowKeys: any;
            selectedRows: any;
        };
        getSearchParams(): any;
        renderView(): any;
        renderBody(): any;
    };
    [x: string]: any;
};
/**
 * ResourceStateManager
 * @class
 * @classdesc 可编辑单元格的表格
 */
declare class ResourceStateManager<P extends ResourceManagerProps, S extends ResourceManagerState> extends ResourceStateManager_base {
    static displayName: string;
    renderThumbnailView(): React.JSX.Element;
    renderInfoView(): React.JSX.Element;
}
export default ResourceStateManager;
