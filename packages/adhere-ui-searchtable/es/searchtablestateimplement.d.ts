import SearchTableImplement from './searchtableimplement';
/**
 * SearchTableStateImplement
 * @class
 * @classdesc - SearchTable的state实现
 */
declare class SearchTableStateImplement extends SearchTableImplement {
    protected getData(): Array<object>;
    protected getTotal(): number;
    protected showLoading(): boolean;
    protected fetchDataExecute(searchParams: object): Promise<any>;
}
export default SearchTableStateImplement;
