// import type { Dispatch } from 'react';
// import type { DesignValueAction } from '../Design/DesignValueReducer';
// import type { DesignProps, DesignValue } from '../types';
import { TableGridLayoutProps as AntdTableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

export interface PropertiesProps {
  // activeFieldId?: string;
  // activeDesignFieldValue?: DesignValue | null;
  // items: DesignProps['items'];
  // dispatch: Dispatch<DesignValueAction>;
}

export type PropertiesTabProps = Required<PropertiesProps>;

export type StyleTabProps = Required<PropertiesProps>;

export type TableGridLayoutProps = AntdTableGridLayoutProps;
