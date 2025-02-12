import SearchTable from '@baifendian/adhere-ui-searchtable';

import ProSearchList from './ProSearchList';
import ProSearchStateList from './ProSearchStateList';
import ProResourceManager from './ResourceManager/ProResourceManager';
import ProResourceStateManager from './ResourceManager/ProResourceStateManager';
import ResourceManager from './ResourceManager/ResourceManager';
import ResourceStateManager from './ResourceManager/ResourceStateManager';
import SearchList, { SearchListContext } from './SearchList';
import SearchListImplementFactory, { SearchListImplement } from './SearchListImplement';
import SearchListStateImplementFactory, {
  SearchListStateImplement,
} from './SearchListStateImplement';
import Dict from './dict';

const { OptionsWrap, DisabledOption, SearchAndPaginParams } = SearchTable;

export default {
  List: SearchList,
  Dict,
  SearchListContext,
  ListImplement: SearchListImplement,
  ListStateImplement: SearchListStateImplement,
  SearchListImplementFactory,
  SearchListStateImplementFactory,
  ProSearchList,
  ProSearchStateList,
  ResourceStateManager,
  ResourceManager,
  ProResourceManager,
  ProResourceStateManager,
  OptionsWrap,
  DisabledOption,
  SearchAndPaginParams,
};
