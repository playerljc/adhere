import { SearchTableImplement } from './SearchTableImplement';
import type { SearchTableImplementState, SearchTableStateImplementFactoryFunction, SearchTableStateImplementProps } from './types';
export declare const selectorPrefix = "adhere-ui-searchstatetableimplement";
/**
 * SearchTableStateImplement
 * @class
 * @classdesc - SearchTable的state实现
 */
export declare class SearchTableStateImplement<P extends SearchTableStateImplementProps, S extends SearchTableImplementState> extends SearchTableImplement<SearchTableStateImplementProps, SearchTableImplementState> {
    static displayName: string;
    private unsubscribe;
    constructor(props: any);
    componentWillUnmount(): void;
    /**
     * getData
     * @description 获取列表的数据
     * @return {object[]}
     */
    getData(): object[];
    /**
     * getTotal
     * @description 获取列表总的数据树
     * @return {number}
     */
    getTotal(): number;
    /**
     * showLoading
     * @description loading
     * @return {boolean}
     */
    showLoading(): boolean;
    /**
     * fetchDataExecute
     * @description 调用列表数据接口
     * @param {any} searchParams
     * @return {Promise<any>}
     */
    fetchDataExecute(searchParams?: any): Promise<any>;
}
/**
 * SearchTableStateImplementFactory
 * @description 创建SearchTableStateImplementFactory
 * @param serviceNames
 * @param middleWares
 * @param reducer
 * @param models
 * @param mapStateToProps
 * @param mapDispatchToProps
 */
declare const SearchTableStateImplementFactory: SearchTableStateImplementFactoryFunction<any, any>;
export default SearchTableStateImplementFactory;
