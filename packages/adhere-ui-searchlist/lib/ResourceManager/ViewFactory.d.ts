/**
 * ViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
        isMount: boolean;
        componentDidMount(): void;
        fetchData(): Promise<any>;
        /**
         * getParams
         * @transmit
         */
        getParams(): any;
        getData(): object[];
        /**
         * getServiceName
         * @transmit
         */
        getServiceName(): string;
        getFetchListPropName(): any;
        getTotalKey(): any;
        /**
         * getColumns
         * @transmit
         */
        getColumns(): any;
        renderSearchFormBefore(): null;
        renderSearchForm(): null;
        renderSearchToolBar(): null;
        renderSearchFormAfter(): null;
        renderSearchHeader(): null;
        renderSearchFooter(): null;
    };
    [x: string]: any;
};
