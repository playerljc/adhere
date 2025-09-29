import { SearchBar } from 'antd-mobile';
import type { SearchBarProps } from 'antd-mobile';

import { createFactory } from '../util';

const SearchBarHOC: typeof SearchBar & {
  defaultProps?: Partial<SearchBarProps>;
  override?: (props: Partial<SearchBarProps>) => Partial<SearchBarProps>;
} = createFactory<SearchBarProps>(SearchBar, {});

SearchBarHOC.displayName = 'SearchBar';

export default SearchBarHOC;
