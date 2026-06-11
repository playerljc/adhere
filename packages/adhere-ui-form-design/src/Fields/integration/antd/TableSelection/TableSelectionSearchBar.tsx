import { Button, Input, Space } from 'antd';
import React, { useCallback, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import './index.less';

const selectorPrefix = 'adhere-ui-fd-table-select-field-search';

export type TableSelectSearchBarProps = {
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
  onSearch: (keyword: string) => void;
  onClear: () => void;
};

const TableSelectSearchBar: React.FC<TableSelectSearchBarProps> = ({
  placeholder,
  allowClear = true,
  disabled = false,
  onSearch,
  onClear,
}) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = useCallback(() => {
    onSearch(keyword.trim());
  }, [keyword, onSearch]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      setKeyword(next);
      if (!next) {
        onClear();
      }
    },
    [onClear],
  );

  const handleClear = useCallback(() => {
    setKeyword('');
    onClear();
  }, [onClear]);

  return (
    <div className={selectorPrefix}>
      <Space.Compact className={`${selectorPrefix}-compact`}>
        <Input
          className={`${selectorPrefix}-input`}
          value={keyword}
          disabled={disabled}
          allowClear={allowClear}
          placeholder={
            placeholder ?? Intl.get('table_select_search_keyword_placeholder')
          }
          onChange={handleChange}
          onClear={handleClear}
        />
        <Button
          type="primary"
          className={`${selectorPrefix}-button`}
          disabled={disabled}
          onClick={handleSearch}
        >
          {Intl.get('search')}
        </Button>
      </Space.Compact>
    </div>
  );
};

export default TableSelectSearchBar;
