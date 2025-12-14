import type { ReactElement } from 'react';

import type { LayoutType } from '@baifendian/adhere-ui-tablegridlayout/es/types';

export interface TableGridLayoutHorizontalColgroupSetting {
  columnCount: number;
  value?: (number | 'auto')[];
  onChange?: (value: (number | 'auto')[]) => void;
}

export interface TableGridLayoutVerticalColgroupSetting {
  columnCount: number;
  value?: (number | 'auto')[];
  onChange?: (value: (number | 'auto')[]) => void;
}

export interface TableGridLayoutColgroupSettingProps {
  layout: LayoutType;
  columnCount: number;
  value?: (number | 'auto')[];
  onChange?: (value: (number | 'auto')[]) => void;
}

export interface ColgroupValueSettingProps {
  value: number | 'auto';
  onChange: (value: number | 'auto') => void;
}

export type I18nValue = {
  selectValue: string;
} & Record<string, string | null | undefined>;

export interface I18nChangeFormItemProps {
  id?: string | number;
  value?: I18nValue;
  onChange?: (next: I18nValue) => void;
  getTriggerContainer?: () => HTMLElement | null | undefined;
  children?: (args: {
    id?: string | number | undefined;
    value: any;
    targetSelectValue: string;
    onChange: Function;
  }) => ReactElement;
}
