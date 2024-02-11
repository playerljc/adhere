import { SelectProps } from 'antd';
import type {
  CheckListProps as AntMobileCheckListProps,
  CheckListItemProps,
  SearchBarProps,
} from 'antd-mobile';
import type { CheckListValue } from 'antd-mobile/es/components/check-list';
import type { CSSProperties, ReactElement, ReactNode } from 'react';

type BaseType = {
  className?: string;
  style?: CSSProperties;
};

export type CheckListProps = AntMobileCheckListProps & {
  options?: CheckListItemProps[];
};

export type DisplayNameInternal<T> = T & {
  displayName: string;
};

export type CheckAllWrapperStyleProps = {
  checkAllWrapperClassName?: string;
  checkAllWrapperStyle?: CSSProperties;
  // 自定义渲染
  renderCheckAll?: (checkAllOrigin: ReactElement, childrenOrigin: ReactNode) => ReactElement;
};

export type CheckAllCheckListProps = CheckAllWrapperStyleProps & CheckListProps;

export type CheckAllWrapperProps = {
  value: CheckListValue[];
  options?: CheckListValue[];
  onChange?: (
    checkedValue: CheckListValue[],
    checked: boolean,
    changeValue: CheckListValue[],
  ) => void;
};

export type SearchCheckListFilterOption = (
  inputValue: string,
  option: CheckListItemProps,
) => boolean;

export type SearchCheckListProps = BaseType &
  CheckListProps & {
    searchProps?: SearchBarProps & {
      optionFilterProp?: string;
      filterOption?: SearchCheckListFilterOption | boolean;
    };
  };
