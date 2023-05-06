/// <reference types="react" />
/**
 * TableViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
        /**
         * getOrderFieldValue
         * @description - 获取默认排序字段的值
         * @override
         * @protected
         * @return {string}
         */
        getOrderFieldValue(): string;
        renderTableDensitySetting({ density, onChange, onReset }: {
            density: any;
            onChange: any;
            onReset: any;
        }): JSX.Element;
        isMount: boolean; /**
         * TableViewFactory
         * @param SuperClass
         */
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
