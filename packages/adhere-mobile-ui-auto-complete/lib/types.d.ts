import type { SearchBarProps } from 'antd-mobile';
import { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import type { CSSProperties, ReactNode } from 'react';
export interface AutoCompleteProps {
    className?: string;
    style?: CSSProperties;
    placeholder?: string;
    searchBarProps?: SearchBarProps;
    loadData?: (kw?: string) => Promise<Record<any, any>>;
    rowKey?: string;
    labelProp?: string;
    valueProp?: string;
    renderResultItem?: (record: any) => ReactNode;
    renderEmpty?: () => ReactNode;
    searchDataSource?: any[];
    value?: CheckListValue[];
    onChange?: (val: CheckListValue[]) => void;
    children?: (arg: {
        value?: CheckListValue[];
        onChange?: (_values: CheckListValue[] | CheckListValue) => void;
        searchDataSource?: any[];
    }) => ReactNode;
    showResult?: boolean;
}
