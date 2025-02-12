import type { SearchBarProps } from 'antd-mobile';
import type { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import type { CSSProperties, ReactNode } from 'react';
import { NamedExoticComponent } from 'react';

import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';

import TreeAutoComplete from './TreeAutoComplete';

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
  defaultDataSource?: any[];
  searchDataSource?: any[];
  value?: (CheckListValue | object)[];
  onChange?: (val: CheckListValue[]) => void;
  children?: (arg: {
    value?: CheckListValue[];
    onChange?: (_values: CheckListValue[] | CheckListValue) => void;
    searchDataSource?: any[];
  }) => ReactNode;
  showResult?: boolean;
}

export type TreeAutoCompleteProps = AutoCompleteProps & {
  treeSelectProps?: TreeSelectProps;
};

export type AutoCompleteComponent = NamedExoticComponent<AutoCompleteProps> & {
  TreeAutoComplete: typeof TreeAutoComplete;
};
