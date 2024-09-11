import { SelectProps, TreeSelectProps } from 'antd';
import { NamedExoticComponent } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import TreeAutoComplete from './TreeAutoComplete';
export type AutoCompleteComponent = NamedExoticComponent<AutoCompleteProps> & {
    TreeAutoComplete: typeof TreeAutoComplete;
};
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
    children?: (arg: {
        originNode?: ReactElement;
        value?: TreeSelectProps['value'];
        treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
        onChange?: TreeSelectProps['onChange'];
        treeData?: TreeSelectProps['treeData'];
        loading?: boolean;
    }) => ReactElement;
};
export type UseCommon = (params: Pick<AutoCompleteProps, 'renderLoading' | 'emptyContent' | 'loadData'>) => {
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
