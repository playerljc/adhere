/**
 * ResourceManagerFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass: any): {
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
