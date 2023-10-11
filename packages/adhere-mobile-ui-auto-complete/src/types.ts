import type { CheckListProps, SearchBarProps } from 'antd-mobile';
import { CheckListValue } from 'antd-mobile/es/components/check-list/check-list';
import type { CheckListItemProps } from 'antd-mobile/es/components/check-list/check-list-item';
import type { CSSProperties, ReactNode } from 'react';

export interface AutoCompleteProps {
  className?: string;
  style?: CSSProperties;
  searchBarProps?: SearchBarProps;
  checkListProps?: Omit<CheckListProps, 'value' | 'onChange'>;
  loadData?: (kw: string | undefined | null) => Promise<Record<any, any>>;
  rowKey?: string;
  labelProp?: string;
  valueProp?: string;
  renderItem?: (record: any, rowIndex: number) => CheckListItemProps;
  renderResultItem?: (record: any) => ReactNode;
  renderEmpty?: () => ReactNode;
  searchDataSource?: any[];
  value?: CheckListValue[];
  onChange?: (val: CheckListValue[]) => void;
}