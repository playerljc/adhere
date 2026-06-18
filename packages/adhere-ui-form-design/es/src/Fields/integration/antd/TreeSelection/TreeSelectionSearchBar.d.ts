import React from 'react';
import './index.less';
export type TreeSelectionSearchBarProps = {
    placeholder?: string;
    allowClear?: boolean;
    disabled?: boolean;
    onSearch: (keyword: string) => void;
    onClear: () => void;
};
declare const TreeSelectionSearchBar: React.FC<TreeSelectionSearchBarProps>;
export default TreeSelectionSearchBar;
