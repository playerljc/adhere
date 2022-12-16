import SearchTableImplement from './SearchTableImplement';
/**
 * SearchTableStateImplement
 * @class
 * @classdesc - SearchTable的state实现
 */
declare class SearchTableStateImplement extends SearchTableImplement {
    getData(): object[];
    getTotal(): number;
    showLoading(): boolean;
    fetchDataExecute(searchParams?: object): Promise<any>;
}
export default SearchTableStateImplement;
