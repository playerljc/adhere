import { SearchTableImplement } from './SearchTableImplement';
import type { SearchTableImplementState, SearchTableStateImplementFactoryFunction, SearchTableStateImplementProps } from './types';
export declare const selectorPrefix = "adhere-ui-searchstatetableimplement";
/**
 * SearchTableStateImplement
 * @class
 * @classdesc - SearchTable的state实现
 */
export declare class SearchTableStateImplement<P extends SearchTableStateImplementProps, S extends SearchTableImplementState> extends SearchTableImplement<SearchTableStateImplementProps, SearchTableImplementState> {
    private unsubscribe;
    constructor(props: any);
    componentWillUnmount(): void;
    /**
     * getData
     * @description 获取列表的数据
     */
    getData(): object[];
    /**
     * getTotal
     * @description 获取列表总的数据树
     */
    getTotal(): number;
    /**
     * showLoading
     * @description loading
     */
    showLoading(): boolean;
    /**
     * fetchDataExecute
     * @description 调用列表数据接口
     * @param searchParams
     */
    fetchDataExecute(searchParams?: object): Promise<any>;
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
