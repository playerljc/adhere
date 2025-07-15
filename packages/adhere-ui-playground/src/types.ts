import { NamedExoticComponent } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import CodeBoxSection from './PlayGroundPage/CodeBoxSection';
import FunctionPropsSection from './PlayGroundPage/FunctionPropsSection';
import PropsSection from './PlayGroundPage/PropsSection';
import Section from './PlayGroundPage/Section';
import TabPanel from './SimpleTabs/TabPanel';

/**
 * 卡片组件属性接口
 * @interface CardProps
 * @description 定义卡片组件的所有可配置属性
 */
export interface CardProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 头部CSS类名 */
  headerClassName?: string;
  /** 头部内联样式 */
  headerStyle?: CSSProperties;
  /** 主体CSS类名 */
  bodyClassName?: string;
  /** 主体内联样式 */
  bodyStyle?: CSSProperties;
  /** 操作区域CSS类名 */
  actionClassName?: string;
  /** 操作区域内联样式 */
  actionStyle?: CSSProperties;
  /** 卡片标题 */
  title?: ReactNode;
  /** 卡片额外内容 */
  extra?: ReactNode;
  /** 卡片描述信息 */
  description?: {
    /** 描述标题 */
    title: ReactNode;
    /** 描述内容 */
    info: ReactNode;
  };
  /** 操作按钮列表 */
  actions?: ReactNode[];
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 表格列配置接口
 * @interface TableColumn
 * @description 定义表格列的配置选项
 */
export interface TableColumn {
  /** 列的唯一标识 */
  key: string;
  /** 数据字段名 */
  dataIndex: string;
  /** 列标题 */
  title: ReactNode;
  /** 列宽度 */
  width: string;
  /** 水平对齐方式 */
  align?: 'left' | 'right' | 'center';
  /** 垂直对齐方式 */
  valign?: 'top' | 'middle' | 'bottom';
  /** 自定义渲染函数 */
  render?: (text: any, record: Record<string, any>, rowIndex: number, columnIndex: number) => ReactNode;
  /** 列CSS类名 */
  className?: string;
  /** 列内联样式 */
  style?: CSSProperties;
}

/**
 * 表格组件属性接口
 * @interface TableProps
 * @description 定义表格组件的配置属性
 */
export interface TableProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 表格CSS类名 */
  tableClassName?: string;
  /** 表格内联样式 */
  tableStyle?: CSSProperties;
  /** 列配置 */
  columns: TableColumn[];
  /** 数据源 */
  dataSource: Record<string, any>[];
  /** 行键值字段 */
  rowKey?: string;
}

/**
 * 代码面板属性接口
 * @interface CodePanelProps
 * @description 定义代码面板的配置属性
 */
export interface CodePanelProps {
  /** 代码文本内容 */
  codeText: string;
  /** 代码高亮主题 */
  theme?: string;
}

/**
 * 属性数据项接口
 * @interface PropDataItem
 * @description 定义属性说明的数据结构
 */
export interface PropDataItem {
  /** 参数名称 */
  params: ReactNode;
  /** 参数描述 */
  desc: ReactNode;
  /** 参数类型 */
  type: ReactNode;
  /** 默认值 */
  defaultVal: ReactNode;
}

/**
 * 函数参数接口
 * @interface FunctionParam
 * @description 定义函数参数的详细说明
 */
export interface FunctionParam {
  /** 参数名称 */
  name: ReactNode;
  /** 参数说明 */
  desc: ReactNode;
  /** 参数类型 */
  type: ReactNode;
  /** 默认值 */
  defaultVal: ReactNode;
  /** 是否必填 */
  required: boolean;
}

/**
 * 函数数据项接口
 * @interface FunctionDataItem
 * @description 定义函数说明的完整数据结构
 */
export interface FunctionDataItem {
  /** 函数名称 */
  name: ReactNode;
  /** 函数描述 */
  desc: ReactNode;
  /** 函数修饰符 */
  modifier: 'static' | 'public' | 'private' | 'protected';
  /** 函数参数列表 */
  params: FunctionParam[];
  /** 函数返回值类型 */
  returnType: ReactNode;
  /** 函数返回值说明 */
  returnDesc: ReactNode;
}

/**
 * 可折叠组件属性接口
 * @interface CollapseProps
 * @description 定义可折叠组件的通用属性
 */
export interface CollapseProps {
  /** 头部CSS类名 */
  headerClassName?: string;
  /** 头部内联样式 */
  headerStyle?: CSSProperties;
  /** 主体CSS类名 */
  bodyClassName?: string;
  /** 主体内联样式 */
  bodyStyle?: CSSProperties;
  /** 标题 */
  title?: ReactNode;
  /** 额外内容 */
  extra?: ReactNode;
  /** 默认折叠状态 */
  defaultCollapse?: boolean;
  /** 是否显示边框 */
  border?: boolean;
  /** 是否启用垂直滚动 */
  scrollY?: boolean;
  /** 是否固定头部滚动主体 */
  fixedHeaderScrollBody?: boolean;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 属性说明组件属性接口
 * @interface PropsProps
 * @description 定义属性说明组件的配置
 */
export interface PropsProps extends CollapseProps {
  /** 属性数据列表 */
  data: PropDataItem[];
}

/**
 * 函数说明组件属性接口
 * @interface FunctionProps
 * @description 定义函数说明组件的配置
 */
export interface FunctionProps extends CollapseProps {
  /** 函数数据列表 */
  data: FunctionDataItem[];
}

/**
 * 代码盒子上下文值接口
 * @interface CodeBoxContextValue
 * @description 定义代码盒子组件的上下文值
 */
export interface CodeBoxContextValue {
  /** 当前激活的锚点 */
  activeAnchor: string;
}

/**
 * 锚点导航上下文值接口
 * @interface AnchorNavigationContextValue
 * @description 定义锚点导航组件的上下文值
 */
export interface AnchorNavigationContextValue {
  /** 滚动容器元素 */
  scrollEl: HTMLElement | null;
}

/**
 * 锚点配置接口
 * @interface AnchorConfig
 * @description 定义锚点的配置信息
 */
export interface AnchorConfig {
  /** 锚点标识 */
  anchor: string;
  /** 锚点名称 */
  name: string;
}

/**
 * 锚点位置配置接口
 * @interface AnchorPosition
 * @description 定义锚点导航的位置配置
 */
export interface AnchorPosition {
  /** 距离顶部距离 */
  top: number;
  /** 导航宽度 */
  width: number;
}

/**
 * 锚点导航属性接口
 * @interface AnchorNavigationProps
 * @description 定义锚点导航组件的配置属性
 */
export interface AnchorNavigationProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 自动区域CSS类名 */
  autoClassName?: string;
  /** 自动区域内联样式 */
  autoStyle?: CSSProperties;
  /** 固定区域CSS类名 */
  fixedClassName?: string;
  /** 固定区域内联样式 */
  fixedStyle?: CSSProperties;
  /** 当前激活的锚点 */
  activeAnchor?: string;
  /** 锚点配置列表 */
  anchors?: AnchorConfig[];
  /** 锚点位置配置 */
  anchorPosition: AnchorPosition;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 标签页上下文值接口
 * @interface TabContextValue
 * @description 定义标签页组件的上下文值
 */
export interface TabContextValue {
  /** 当前激活的标签页键值 */
  activeKey: string;
}

/**
 * 标签面板属性接口
 * @interface TabPanelProps
 * @description 定义标签面板的配置属性
 */
export interface TabPanelProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 标签页索引，用于标识当前面板 */
  index?: string;
  /** 标签页标题，显示在标签页头部 */
  title?: ReactNode;
  /** 是否禁用标签页 */
  disabled?: boolean;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 简单标签页组件类型
 * @type SimpleTabsComponent
 * @description 包含TabPanel子组件的简单标签页组件
 */
export type SimpleTabsComponent = NamedExoticComponent<SimpleTabsProps> & {
  TabPanel: typeof TabPanel;
};

/**
 * 简单标签页属性接口
 * @interface SimpleTabsProps
 * @description 定义简单标签页组件的配置属性
 */
export interface SimpleTabsProps {
  /** 当前激活的标签页键值 */
  activeKey?: string;
  /** 自定义CSS类名 */
  className?: string;
  /** 标签页切换回调 */
  onChange?: (activeKey: string) => void;
  /** 标签页头部CSS类名 */
  headClassName?: string;
  /** 标签页主体CSS类名 */
  bodyClassName?: string;
  /** 是否显示标签页头部 */
  showHead?: boolean;
  /** 标签页类型 */
  type?: 'line' | 'card' | 'text';
  /** 标签页大小 */
  size?: 'small' | 'middle' | 'large';
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 区块组件属性接口
 * @interface SectionProps
 * @description 定义区块组件的配置属性
 */
export interface SectionProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 区块标题 */
  title?: ReactNode;
  /** 区块额外内容 */
  extra?: ReactNode;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 属性区块组件属性接口
 * @interface PropsSectionProps
 * @description 定义属性区块组件的配置
 */
export interface PropsSectionProps extends SectionProps {
  /** 属性配置列表 */
  config: PropsProps[];
}

/**
 * 函数属性区块组件属性接口
 * @interface FunctionPropsSectionProps
 * @description 定义函数属性区块组件的配置
 */
export interface FunctionPropsSectionProps extends SectionProps {
  /** 函数属性配置列表 */
  config: FunctionProps[];
}

/**
 * 代码盒子属性接口
 * @interface CodeBoxProps
 * @description 定义代码盒子组件的配置属性
 */
export interface CodeBoxProps {
  /** 标题 */
  title?: ReactNode;
  /** 额外内容 */
  extra?: ReactNode;
  /** 是否显示展开全部按钮 */
  isShowExpandAllBtn?: boolean;
  /** 列数 */
  columnCount?: number;
  /** 是否全部展开 */
  expandAll?: boolean;
  /** 配置列表 */
  config: CodeBoxConfigItem[];
}

/**
 * 代码盒子配置项联合类型
 * @type CodeBoxConfigItem
 * @description 代码盒子支持的所有配置项类型
 */
export type CodeBoxConfigItem = 
  | CodeBoxPlayGroundProps
  | CodeBoxPlayGroundMultiProps
  | CodeBoxPlayGroundTabProps
  | CodeBoxPlayGroundMobileTabProps;

/**
 * 代码盒子PlayGround配置接口
 * @interface CodeBoxPlayGroundProps
 * @description 定义代码盒子中PlayGround类型的配置
 */
export interface CodeBoxPlayGroundProps extends PlayGroundProps {
  /** 组件类型 */
  type: 'PlayGround';
  /** 自定义包装渲染函数 */
  renderWrap?: (
    columnIndex: number,
    index: number,
    config: CodeBoxConfigItem[],
    children: ReactNode,
  ) => ReactNode;
  /** 自定义子元素渲染函数 */
  renderChildren?: (
    columnIndex: number,
    index: number,
    config: CodeBoxConfigItem[],
  ) => ReactNode;
}

/**
 * 代码盒子PlayGroundMulti配置接口
 * @interface CodeBoxPlayGroundMultiProps
 * @description 定义代码盒子中PlayGroundMulti类型的配置
 */
export interface CodeBoxPlayGroundMultiProps extends PlayGroundMultiProps {
  /** 组件类型 */
  type: 'PlayGroundMulti';
  /** 自定义包装渲染函数 */
  renderWrap?: (
    columnIndex: number,
    index: number,
    config: CodeBoxConfigItem[],
    children: ReactNode,
  ) => ReactNode;
  /** 自定义子元素渲染函数 */
  renderChildren?: (
    columnIndex: number,
    index: number,
    config: CodeBoxConfigItem[],
  ) => ReactNode;
}

/**
 * 代码盒子PlayGroundTab配置接口
 * @interface CodeBoxPlayGroundTabProps
 * @description 定义代码盒子中PlayGroundTab类型的配置
 */
export interface CodeBoxPlayGroundTabProps extends PlayGroundTabProps {
  /** 组件类型 */
  type: 'PlayGroundTab';
  /** 自定义包装渲染函数 */
  renderWrap?: (
    columnIndex: number,
    index: number,
    config: CodeBoxConfigItem[],
    children: ReactNode,
  ) => ReactNode;
  /** 自定义子元素渲染函数 */
  renderChildren?: (
    columnIndex: number,
    index: number,
    config: CodeBoxConfigItem[],
  ) => ReactNode;
}

/**
 * 代码盒子PlayGroundMobileTab配置接口
 * @interface CodeBoxPlayGroundMobileTabProps
 * @description 定义代码盒子中PlayGroundMobileTab类型的配置
 */
export interface CodeBoxPlayGroundMobileTabProps extends PlayGroundTabMobileProps {
  /** 组件类型 */
  type: 'PlayGroundTabMobile';
  /** 自定义包装渲染函数 */
  renderWrap?: (
    columnIndex: number,
    index: number,
    config: CodeBoxConfigItem[],
    children: ReactNode,
  ) => ReactNode;
}

/**
 * 代码标签面板项配置接口
 * @interface CodeTabPanelItemProps
 * @description 定义代码标签面板中单个标签页的配置
 */
export interface CodeTabPanelItemProps extends CodePanelProps {
  /** 标签页键值 */
  key: string;
  /** 标签页标题 */
  title: ReactNode;
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
}

/**
 * 代码标签面板属性接口
 * @interface CodeTabPanelProps
 * @description 定义代码标签面板组件的配置属性
 */
export interface CodeTabPanelProps {
  /** 当前激活的标签页 */
  active?: string;
  /** 标签页配置列表 */
  config?: CodeTabPanelItemProps[];
  /** 标签页切换回调 */
  onChange?: (activeKey: string) => void;
}

/**
 * PlayGround属性接口
 * @interface PlayGroundProps
 * @description 定义PlayGround组件的配置属性
 */
export interface PlayGroundProps extends CodePanelProps {
  /** 唯一标识 */
  id?: string;
  /** 卡片属性 */
  cardProps?: Partial<CardProps>;
  /** 是否激活 */
  isActive?: boolean;
  /** 是否展开 */
  expand?: boolean;
  /** 标题 */
  title?: ReactNode;
  /** 当前激活项 */
  active?: string;
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * PlayGround状态接口
 * @interface PlayGroundState
 * @description 定义PlayGround组件的状态
 */
export interface PlayGroundState {
  /** 是否展开 */
  expand?: boolean;
  /** 配置列表 */
  config?: PlayGroundProps[];
  /** 当前激活的键值 */
  activeKey?: string;
}

/**
 * PlayGroundMulti属性接口
 * @interface PlayGroundMultiProps
 * @description 定义PlayGroundMulti组件的配置属性
 */
export interface PlayGroundMultiProps extends PlayGroundProps {
  /** 配置列表 */
  config?: PlayGroundProps[];
}

/**
 * PlayGroundMulti状态接口
 * @interface PlayGroundMultiState
 * @description 定义PlayGroundMulti组件的状态
 */
export interface PlayGroundMultiState extends PlayGroundState {
  /** 配置列表 */
  config?: PlayGroundProps[];
}

/**
 * PlayGroundTab属性接口
 * @interface PlayGroundTabProps
 * @description 定义PlayGroundTab组件的配置属性
 */
export interface PlayGroundTabProps extends CodeTabPanelProps, PlayGroundProps {}

/**
 * PlayGroundTab状态接口
 * @interface PlayGroundTabState
 * @description 定义PlayGroundTab组件的状态
 */
export interface PlayGroundTabState extends PlayGroundState {
  /** 当前激活的键值 */
  activeKey?: string;
}

/**
 * PlayGroundTabMobile属性接口
 * @interface PlayGroundTabMobileProps
 * @description 定义PlayGroundTabMobile组件的配置属性
 */
export interface PlayGroundTabMobileProps extends PlayGroundTabProps {
  /** 移动端URL */
  url: string;
  /** 主体CSS类名 */
  bodyClassName?: string;
  /** 主体内联样式 */
  bodyStyle?: CSSProperties;
  /** 显示主体CSS类名 */
  displayClassName?: string;
  /** 显示主体内联样式 */
  displayBodyStyle?: CSSProperties;
  /** iframe计数 */
  iframeCount?: number;
}

/**
 * PlayGroundTabMobile状态接口
 * @interface PlayGroundTabMobileState
 * @description 定义PlayGroundTabMobile组件的状态
 */
export interface PlayGroundTabMobileState extends PlayGroundTabState {
  /** iframe计数 */
  iframeCount?: number;
  /** 二维码内容 */
  qrcode?: string;
}

/**
 * 可折叠组件状态接口
 * @interface CollapseState
 * @description 定义可折叠组件的状态
 */
export interface CollapseState {
  /** 是否折叠 */
  collapse: boolean;
}

/**
 * PlayGround页面上下文值接口
 * @interface PlayGroundPageContextValue
 * @description 定义PlayGround页面组件的上下文值
 */
export interface PlayGroundPageContextValue {
  /** 滚动容器元素 */
  scrollEl?: HTMLElement | null;
}

/**
 * PlayGround页面组件类型
 * @type PlayGroundPageComponent
 * @description 包含子组件的PlayGround页面组件
 */
export type PlayGroundPageComponent = NamedExoticComponent<PlayGroundPageProps> & {
  Section: typeof Section;
  CodeBoxSection: typeof CodeBoxSection;
  PropsSection: typeof PropsSection;
  FunctionPropsSection: typeof FunctionPropsSection;
};

/**
 * PlayGround页面属性接口
 * @interface PlayGroundPageProps
 * @description 定义PlayGround页面组件的配置属性
 */
export interface PlayGroundPageProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义内联样式 */
  style?: CSSProperties;
  /** 锚点导航CSS类名 */
  anchorNavigationClassName?: string;
  /** 锚点导航内联样式 */
  anchorNavigationStyle?: CSSProperties;
  /** 锚点导航自动区域CSS类名 */
  anchorNavigationAutoClassName?: string;
  /** 锚点导航自动区域内联样式 */
  anchorNavigationAutoStyle?: CSSProperties;
  /** 锚点导航固定区域CSS类名 */
  anchorNavigationFixedClassName?: string;
  /** 锚点导航固定区域内联样式 */
  anchorNavigationFixedStyle?: CSSProperties;
  /** 锚点位置配置 */
  anchorPosition?: AnchorPosition;
  /** 子元素 */
  children?: ReactNode;
}
