import { SearchBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import type { FC } from 'react';

import type { SearchCheckListProps } from '../types';
import CheckList from './CheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-search-check-list';

const SearchCheckList: FC<SearchCheckListProps> = ({ className, style, searchProps, ...props }) => {
  const [searchValue, setSearchValue] = useState('');

  const targetOptions = useMemo(() => {
    if(typeof searchProps?.filterOption === 'boolean' && searchProps.filterOption || ) {

    }
  }, [searchValue, searchProps?.filterOption, searchProps?.optionFilterProp, props.options]);

  function onSearch(value) {
    setSearchValue(value);
  }

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <div>
        <SearchBar {...searchProps} onSearch={onSearch} />
      </div>

      <div>
        <CheckList {...props} options={targetOptions} />
      </div>
    </div>
  );
};

export default SearchCheckList;
