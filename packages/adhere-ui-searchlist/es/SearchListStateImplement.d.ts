import { SearchListImplement } from './SearchListImplement';
import type { SearchListImplementState, SearchListStateImplementFactoryFunction, SearchListStateImplementProps } from './types';
export declare const selectorPrefix = "adhere-ui-searchstatetableimplement";
/**
 * SearchListStateImplement
 * @class
 * @classdesc - SearchList的state实现
 */
export declare class SearchListStateImplement<P extends SearchListStateImplementProps, S extends SearchListImplementState> extends SearchListImplement<SearchListStateImplementProps, SearchListImplementState> {
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
 * SearchListStateImplementFactory
 * @description 创建SearchListStateImplementFactory
 * @param serviceNames
 * @param middleWares
 * @param reducer
 * @param models
 * @param mapStateToProps
 * @param mapDispatchToProps
 */
declare const SearchListStateImplementFactory: SearchListStateImplementFactoryFunction<any, any>;
export default SearchListStateImplementFactory;
