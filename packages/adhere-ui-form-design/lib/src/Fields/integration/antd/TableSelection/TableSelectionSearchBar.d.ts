import React from 'react';
import './index.less';
export type TableSelectionSearchBarProps = {
    placeholder?: string;
    allowClear?: boolean;
    disabled?: boolean;
    onSearch: (keyword: string) => void;
    onClear: () => void;
};
declare const TableSelectionSearchBar: React.FC<TableSelectionSearchBarProps>;
export default TableSelectionSearchBar;
