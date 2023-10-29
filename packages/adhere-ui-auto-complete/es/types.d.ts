import { SelectProps } from 'antd';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
export type AutoCompleteProps = Omit<SelectProps, 'children'> & {
    classNameWrap?: string;
    styleWrap?: CSSProperties;
    renderLoading?: () => ReactNode;
    debounceTimeout?: number;
    loadData?: (kw?: string) => Promise<void>;
    children?: (arg: {
        originNode?: ReactElement;
        value?: SelectProps['value'];
        onChange?: SelectProps['onChange'];
        options?: SelectProps['options'];
        loading?: boolean;
    }) => ReactElement;
};
