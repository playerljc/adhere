import { SearchBar } from 'antd-mobile';
import type { SearchBarProps } from 'antd-mobile';
declare const SearchBarHOC: typeof SearchBar & {
    defaultProps?: Partial<SearchBarProps>;
    override?: (props: Partial<SearchBarProps>) => Partial<SearchBarProps>;
};
export default SearchBarHOC;
