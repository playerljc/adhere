import { SelectProps, TreeSelectProps } from 'antd';
import type { CSSProperties, ReactElement } from 'react';
export interface IAutoComplete {
    classNameWrap?: string;
    styleWrap?: CSSProperties;
    renderLoading?: () => ReactElement;
    debounceTimeout?: number;
    loadData?: (kw?: string) => Promise<void>;
    emptyContent?: ReactElement;
}
export type AutoCompleteProps = IAutoComplete & Omit<SelectProps, 'children'> & {
    defaultOptions?: SelectProps['options'];
    children?: (arg: {
        originNode?: ReactElement;
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
        loading?: boolean;
    }) => ReactElement;
};
export type TreeAutoCompleteProps = IAutoComplete & Omit<TreeSelectProps, 'children'> & {
    defaultTreeData?: {
        key: any;
        value: TreeSelectProps['treeData'];
    };
    children?: (arg: {
        originNode?: ReactElement;
        value?: TreeSelectProps['value'];
        treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
        onChange?: TreeSelectProps['onChange'];
        treeData?: TreeSelectProps['treeData'];
        loading?: boolean;
    }) => ReactElement;
};
export type UseMemo = (params: Pick<AutoCompleteProps, 'renderLoading' | 'emptyContent' | 'loadData'>) => {
    defaultDebounceTimeout: number;
    fetchLoading: ReactElement;
    empty: ReactElement;
    selectorPrefix: string;
    fetching: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
    onClear: () => void;
    onInputMemo: Function;
};
