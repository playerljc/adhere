import type { SearchBarProps } from 'antd-mobile';
import type { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import type { CSSProperties, ReactNode } from 'react';

export interface AutoCompleteProps {
  className?: string;
  style?: CSSProperties;
  searchBarClassName?: string;
  searchBarStyle?: CSSProperties;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
  placeholder?: string;
  searchBarProps?: SearchBarProps;
  loadData?: (kw?: string) => Promise<any>;
  rowKey?: string;
  labelProp?: string;
  valueProp?: string;
  renderResultItem?: (record: Record<string, any>, defaultItem: ReactNode) => ReactNode;
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
