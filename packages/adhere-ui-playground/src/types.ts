import PropTypes from 'prop-types';
import {
  FC,
  ForwardRefExoticComponent,
  FunctionComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import type { CSSProperties, ReactNode } from 'react';

import PlayGroundPageForward from './PlayGroundPage';
import CodeBoxSection from './PlayGroundPage/CodeBoxSection';
import FunctionPropsSection from './PlayGroundPage/FunctionPropsSection';
import PropsSection from './PlayGroundPage/PropsSection';
import Section from './PlayGroundPage/Section';

/**
 * CardProps
 */
export interface CardProps {
  className?: string;
  style?: CSSProperties;
  headerClassName?: string;
  headerStyle?: CSSProperties;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
  actionClassName?: string;
  actionStyle?: CSSProperties;
  title?: ReactNode | string;
  extra?: ReactNode;
  description?: {
    title: string | ReactNode;
    info: string | ReactNode;
  };
  actions?: ReactNode[];
  children?: any;
}

/**
 * TableColumn
 */
export interface TableColumn {
  key: string;
  dataIndex: string;
  title: ReactNode | string;
  width: string;
  align?: 'left' | 'right' | 'center';
  valign?: 'top' | 'middle' | 'bottom';
  render?: (text: any, record: object, rowIndex: number, columnIndex: number) => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * TableProps
 */
export interface TableProps {
  className?: string;
  style?: CSSProperties;
  tableClassName?: string;
  tableStyle?: CSSProperties;
  columns: TableColumn[];
  dataSource: object[];
  rowKey?: string;
}

export interface CodePanelProps {
  codeText: string;
  theme?: string;
}

/**
 * PlayGroundProps
 * @interface PlayGroundProps
 */
export interface PlayGroundProps extends CodePanelProps {
  id?: string;
  cardProps: CardProps;
  isActive: boolean;
  expand?: boolean;
  title?: any;
  active?: string;
}

/**
 * PlayGroundMulitProps
 */
export interface PlayGroundMulitProps extends PlayGroundProps {
  config?: PlayGroundProps[];
}

export interface PlayGroundMulitState extends PlayGroundState {
  config?: PlayGroundProps[];
}

/**
 * PlayGroundState
 * @interface PlayGroundState
 */
export interface PlayGroundState {
  expand?: boolean;
  config?: PlayGroundProps[];
  activeKey?: string;
}

/**
 * PropsProps
 */
export interface PropsProps extends CollapseProps {
  data: Array<{
    params: string | ReactNode;
    desc: string | ReactNode;
    type: string | ReactNode;
    defaultVal: string | ReactNode;
  }>;
}

/**
 * FunctionProps
 */
export interface FunctionProps extends CollapseProps {
  data: Array<{
    // 函数名称
    name: string | ReactNode;
    // 函数描述
    desc: string | ReactNode;
    // 函数修饰符
    modifier: 'static' | 'public' | 'private' | 'protected';
    // 函数参数
    params: Array<{
      // 参数名称
      name: string | ReactNode;
      // 参数说明
      desc: string | ReactNode;
      // 参数类型
      type: string | ReactNode;
      // 默认值
      defaultVal: string | ReactNode;
      // 是否必填
      required: string | boolean;
    }>;
    // 函数返回值类型
    returnType: string | ReactNode;
    // 函数返回值说明
    returnDesc: string | ReactNode;
  }>;
}

export interface CollapseProps {
  headerClassName?: string;
  headerStyle?: CSSProperties;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
  title?: ReactNode | string;
  extra?: ReactNode | string;
  defaultCollapse?: boolean;
  border?: boolean;
  scrollY?: boolean;
  fixedHeaderScrollBody?: boolean;
  children?: ReactNode;
}

export interface CodeBoxPlayGroundProps extends PlayGroundProps {
  type: 'PlayGround';
  renderWrap?: (
    columnIndex: number,
    index: number,
    config: PlayGroundProps,
    children: ReactNode,
  ) => ReactNode;
  renderChildren?: (
    columnIndex: number,
    index: number,
    config: Array<CodeBoxPlayGroundProps>,
  ) => ReactNode;
}

export interface CodeBoxPlayGroundMulitProps extends PlayGroundMulitProps {
  type: 'PlayGroundMulit';
  renderWrap?: (
    columnIndex: number,
    index: number,
    config: Array<CodeBoxPlayGroundMulitProps>,
    children: ReactNode,
  ) => ReactNode;
  renderChildren?: (
    columnIndex: number,
    index: number,
    config: Array<CodeBoxPlayGroundMulitProps>,
  ) => ReactNode;
}

export interface CodeBoxPlayGroundTabProps extends PlayGroundTabProps {
  type: 'PlayGroundTab';
  renderWrap?: (
    columnIndex: number,
    index: number,
    config: PlayGroundTabProps,
    children: ReactNode,
  ) => ReactNode;
  renderChildren?: (
    columnIndex: number,
    index: number,
    config: Array<PlayGroundTabProps>,
  ) => ReactNode;
}

export interface CodeBoxProps {
  title?: string | ReactNode;
  extra?: ReactNode;
  isShowExpandAllBtn: boolean;
  columnCount: number;
  expandAll?: boolean;
  config: Array<CodeBoxPlayGroundProps | CodeBoxPlayGroundMulitProps | CodeBoxPlayGroundTabProps>;
}

export interface CollapseState {
  collapse: boolean;
}

export interface CodeTabPanelItemProps extends CodePanelProps {
  key?: string;
  title: string | ReactNode;
}

export interface CodeTabPanelProps {
  active?: string;
  config?: CodeTabPanelItemProps[];
  onChange?: (activeKey: string) => void;
}

export interface PlayGroundTabProps extends CodeTabPanelProps, PlayGroundProps {}

export interface PlayGroundTabState extends PlayGroundState {
  activeKey?: string;
}

export interface CodeBoxContextValue {
  activeAnchor: string;
}

export interface AnchorNavigationContextValue {
  scrollEl: HTMLElement | null;
}

export interface AnchorNavigationProps {
  activeAnchor?: string;
  anchors?: Array<{
    anchor: string;
    name: string;
  }>;
  anchorPosition: {
    top: number;
    width: number;
  };
  children?: any;
}

export interface TabContextValue {
  activeKey: string;
}

export interface TabPanelProps {
  className?: string;
  index?: number | string;
  children?: any;
}

export interface SimpleTabsFunction<P> extends FunctionComponent<P> {
  TabPanel: FC<TabPanelProps>;
}

export interface SimpleTabsProps {
  activeKey?: string;
  className?: string;
  onChange: (activeKey?: string) => void;
  children?: any;
}

export interface SectionProps {
  className?: string;
  style?: CSSProperties;
  title?: ReactNode | string;
  extra?: ReactNode;
  children?: any;
}

export interface PropsSectionProps extends SectionProps {
  config: Array<PropsProps>;
}

export interface FunctionPropsSectionProps extends SectionProps {
  config: Array<FunctionProps>;
}

export interface PlayGroundPageContextValue {
  scrollEl?: HTMLElement | null;
}

export interface PlayGroundPageHOC<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Section: FC<SectionProps>;
  CodeBoxSection: FC<CodeBoxProps>;
  PropsSection: FC<PropsSectionProps>;
  FunctionPropsSection: FC<FunctionPropsSectionProps>;
}

export interface PlayGroundPageProps {
  className?: string;
  style?: CSSProperties;
  anchorPosition: {
    top: number;
    width: number;
  };
  children?: any;
}
