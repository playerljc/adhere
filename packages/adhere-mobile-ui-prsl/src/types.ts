import type { FormItemProps, FormProps, PullToRefreshProps, SearchBarProps } from 'antd-mobile';
import type { Action as SheetAction } from 'antd-mobile/es/components/action-sheet';
import type { Action as SwiperAction } from 'antd-mobile/es/components/swipe-action';
import type { CSSProperties, ReactElement, ReactNode } from 'react';

import type {
  DialogTriggerProps,
  ModalTriggerProps,
  PopupTriggerProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import { BackTopAnimationProps } from '@baifendian/adhere-ui-backtopanimation/es/types';
import { TriggerProps as AdherePopupTriggerProps } from '@baifendian/adhere-ui-popup/es/types';
import type {
  ScrollLoadProps,
  ScrollLoadRefHandle,
} from '@baifendian/adhere-ui-scrollload/es/types';

/**
 * FilterConfigItem
 * @description 筛选配置项
 */
export type FilterConfigItem = {
  key: string;
  name: string;
  label?: string | ReactElement;
  formItemProps?: FormItemProps;
  render: () => ReactElement;
};

/**
 * SortConfigItem
 * @description 排序配置项
 */
export type SortConfigItem = {
  name: string;
  label: ReactNode;
};

/**
 * DefaultSortValue
 * @description 缺省排序值
 */
export type DefaultSortValue = {
  name: string;
  order: 'asc' | 'desc' | '' | undefined | null;
};

/**
 * ViewSettingConfigItem
 * @description 视图设置配置项
 */
export type ViewSettingConfigItem = {
  name: 'normal' | 'multi' | 'waterfal';
  label: string | ReactElement;
};

/**
 * ActionConfigItem
 * @description 操作配置项
 */
export type ActionConfigItem = SheetAction | SwiperAction;

export type TriggerMode = 'popup-top' | 'popup-bottom' | 'modal' | 'dialog' | 'adhere-popup';

export type TriggerProps =
  | PopupTriggerProps<any>
  | ModalTriggerProps<any>
  | DialogTriggerProps<any>
  | AdherePopupTriggerProps;

export interface SearchKeyWordProps {
  className?: string;
  style?: CSSProperties;
  searchKeyWordBarProps?: SearchBarProps;
  // 关键字搜索模式
  searchKeyWordMode?: 'normal' | 'history';
  // 搜索历史最大历史数量，超过则替换最早的
  searchKeyWordHistoryMaxSize?: number;
  defaultSearchKeyWord?: string;
  onSearch?: (value: string) => void;
  onSearchClear?: () => void;
}

export interface ToolbarConfigItem {
  key: string;
  label?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface ToolbarItemProps extends ToolbarConfigItem {
  className?: string;
  style?: CSSProperties;
}

export interface ToolBarProps
  extends Omit<FilterItemProps, 'children'>,
    Omit<SortItemProps, 'children'>,
    Omit<ViewSettingProps, 'children'> {
  className?: string;
  style?: CSSProperties;
  // 是否显示总条数
  showTotal?: boolean;
  toolbarWrapperClassName?: string;
  toolbarWrapperStyle?: CSSProperties;
  // 渲染工具栏
  renderToolBar?: (
    defaultToolItems: ReactElement[],
    defaultShowTotalElement?: ReactNode,
  ) => ReactNode;
  // 工具栏之前的渲染
  afterToolBarRender?: () => ReactNode;
  // 工具栏之后的渲染
  beforeToolBarRender?: () => ReactNode;
  // 工具栏之前的渲染
  beforeToolBarRenderClassName?: string;
  beforeToolBarRenderStyle?: CSSProperties;
  // 工具栏之后的渲染
  afterToolBarRenderClassName?: string;
  afterToolBarRenderStyle?: CSSProperties;
  toolbarCollapseCount: number;
  toolbarConfig?: (defaultElements: ReactElement[]) => (ToolbarConfigItem | ReactElement)[];
  isShowFilterTrigger?: boolean;
  // 渲染筛选按钮(ok)
  renderFilterTrigger: (defaultUI: ReactElement) => ReactElement;
  isShowSortTrigger?: boolean;
  // 渲染排序按钮
  renderSortTrigger: (defaultUI: ReactElement) => ReactElement;
  isShowViewSettingTrigger?: boolean;
  // 渲染视图设置按钮
  renderViewSettingTrigger: (defaultUI: ReactElement) => ReactElement;
  total?: number;
}

export interface FilterItemProps {
  children?: (defaultUI: ReactElement) => ReactElement;
  // Trigger的弹出方式(ok)
  filterTriggerMode?: TriggerMode;
  // Trigger的配置(ok)
  filterTriggerProps?: TriggerProps;
  // 渲染筛选UI
  renderFilter?: (defaultFilterValues: Record<string, any>) => ReactElement;
  // 搜索表单的props
  filterFormProps?: FormProps;
  // 筛选配置
  filterConfig?: FilterConfigItem[];
  // 缺省的筛选数据
  defaultFilterValues?: Record<string, any>;
  onFilter?: (
    filterData?: FilterItemProps['defaultFilterValues'],
  ) => Promise<DataSource> | Promise<void>;
  onFilterReset?: () => Promise<DataSource> | Promise<void>;
}

export interface SortItemProps {
  children?: (defaultUI: ReactElement) => ReactElement;
  // 排序UI的弹出方式
  sortTriggerMode?: TriggerMode;
  // Trigger的配置
  sortTriggerProps?: TriggerProps;
  // 渲染排序UI
  renderSort?: (defaultSortValues: DefaultSortValue[]) => ReactElement;
  // 排序配置
  sortConfig?: SortConfigItem[];
  // 缺省的排序数据
  defaultSortValues?: DefaultSortValue[];
  // 进行排序的hook
  onSort?: (values: DefaultSortValue[]) => Promise<DataSource> | Promise<void>;
  // 重置排序的hook
  onSortReset?: () => Promise<DataSource> | Promise<void>;
}

export interface ViewSettingProps {
  children?: (defaultUI: ReactElement) => ReactElement;
  // 视图设置UI的弹出方式
  viewSettingTriggerMode?: TriggerMode;
  // Trigger的配置
  viewSettingTriggerProps?: TriggerProps;
  // 渲染视图设置UI
  renderViewSetting?: (viewSettingDefaultValue: string) => ReactElement;
  // 视图设置配置
  viewSettingConfig?: ViewSettingConfigItem[];
  // 缺省的视图设置数据
  viewSettingDefaultValue?: string;
  // 视图设置切换的hook
  onViewSettingChange?: (value: string) => Promise<void>;
  // 视图设置重置的hook
  onViewSettingReset?: () => Promise<void>;
}

export interface PRSLItemProps {
  actions?: ActionConfigItem[];
  children?: (
    record: Record<string, any>,
    rowIndex: number,
    actionTrigger?: ReactElement,
  ) => ReactNode;
}

export interface DataSource {
  data: Record<string, any>[];
  total: number;
}

export interface LoadDataSourceParams {
  page: number;
  pageSize: number;
  searchKeyWord: SearchKeyWordProps['defaultSearchKeyWord'];
  filterValues: FilterItemProps['defaultFilterValues'];
  sortValues: SortItemProps['defaultSortValues'];
}

export interface PRSLProps
  extends Omit<SearchKeyWordProps, 'className' | 'style' | 'onSearch' | 'onSearchClear'>,
    Omit<ToolBarProps, 'onFilter' | 'onFilterReset' | 'onSort' | 'onSortReset'> {
  // ------------------------------ 样式 ----------------------
  className?: string;
  style?: CSSProperties;
  innerClassName?: string;
  innerStyle?: CSSProperties;

  // ------------------------------ 数据 ----------------------
  // dataSource中的primary key
  rowKey?: string;
  // // 数据源
  // dataSource?: {
  //   data: Record<string, any>[];
  //   total: number;
  // };
  // 是否是本数据
  isUseLocal?: boolean;
  // 首次加载数据
  loadData?: (params: LoadDataSourceParams) => Promise<DataSource>;
  // 自定义无数据UI
  renderEmpty?: () => ReactElement;
  // 自定义无网络UI
  renderOffLine?: () => ReactElement;
  isUseFirstLoading: boolean;
  // 首次渲染UI
  firstLoading?: () => ReactNode;
  isLoading: boolean;

  // ---------------------------- 下拉重置设置 -------------
  // 下拉刷新的配置
  pullToRefreshProps?: Omit<PullToRefreshProps, 'onRefresh'>;
  // 下拉刷新之前(返回then则执行onRefresh)
  onRefreshBefore?: (params: LoadDataSourceParams) => Promise<void>;
  // 下拉刷新(完全重置)
  onRefresh?: (params: LoadDataSourceParams) => Promise<DataSource>;

  // ---------------------------- 上拉加载更多 --------------
  // ScrollLoad的配置
  scrollLoadProps?: ScrollLoadProps;
  // 加载更多hook
  onLoadMore?: (
    params: LoadDataSourceParams & {
      handle?: (status?: string) => void;
    },
  ) => Promise<DataSource>;
  // 自定义加载更多loading
  loadMoreLoading?: () => ReactNode;
  backTopAnimationProps?: BackTopAnimationProps;
  showBackTopAnimation?: boolean;
  scrollLoadBeforeRender?: () => ReactNode;
  scrollLoadAfterRender?: () => ReactNode;
  scrollLoadBeforeRenderClassName?: string;
  scrollLoadBeforeRenderStyle?: CSSProperties;
  scrollLoadAfterRenderClassName?: string;
  scrollLoadAfterRenderStyle?: CSSProperties;

  // ----------------------------- 分页 --------------------
  paging?:
    | boolean
    | {
        page: number;
        defaultPageSize: number;
      };

  // --------------------------- 搜索框设置 -----------------
  // 是否显示搜索框
  showKeyWordSearchBar?: boolean;
  searchKeyWordWrapperClassName?: string;
  searchKeyWordWrapperStyle?: CSSProperties;

  showToolBar?: boolean;
  // --------------------------- 工具栏设置 -----------------
  // 是否显示工具栏

  // ----------------------------- 筛选工具 ---------------------------
  // 是否显示筛选按(ok)

  // ------------------------------ 排序按钮 ----------------------------
  // 是否显示排序按钮

  // ------------------------------ 视图设置按钮 -------------------------------
  // 是否显示视图设置按钮

  // ------------------------------ 操作项(Action) -------------------------------
  // 操作项弹出模式
  actionTriggerMode?: 'ActionSheet' | 'Swipe';
  // actionSheetProps?: ActionSheetProps;
  // swiperActionProps?: SwipeActionProps;
  // 操作配置
  // renderAction?: (record: Record<string, any>, rowIndex: number) => ActionConfigItem[];

  // ----------------------------- 选择模式 ------------------------------
  // 选择的数据
  selectedRowKeys?: (string | number)[];
  // 是否是多选模式
  selectionMultiple?: boolean;
  // 自定义选择模式按钮
  renderSelectionTrigger?: (defaultUI: ReactElement) => ReactElement;
  // 选择发生改变的hook
  onSelectChange?: (
    // 选择的keys
    selectedRowKeys: (string | number)[],
    // 选择的rows
    selectedRows: Record<string, any>[],
    // 发生改变的keys
    changeRowKeys: (string | number)[],
    info: {
      type: 'select' | 'unselect';
    },
  ) => void;

  // --------------------------- DND操作(元素互换) -------------------------
  // 是否显示拖拽控制按钮
  isShowDNDTrigger?: boolean;

  // ------------------------------ 内容体 -------------------------------
  // 内容体
  children?: (dataSource?: Record<string, any>[]) => ReactNode;
  beforeRenderClassName?: string;
  beforeRenderStyle?: CSSProperties;
  afterRenderClassName?: string;
  afterRenderStyle?: CSSProperties;
  // 内容体之前的渲染
  beforeRender?: () => ReactNode;
  // 内容体之后的渲染
  afterRender?: () => ReactNode;
}

/**
 * PRSLHandle
 * @description 暴漏的方法
 */
export type PRSLHandle = {
  getScrollEl: () => HTMLElement;
  hideAll: ScrollLoadRefHandle['hideAll'];
};