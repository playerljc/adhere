import type { FormItemProps, FormProps, PullToRefreshProps, SearchBarProps } from 'antd-mobile';
import type { Action as SheetAction } from 'antd-mobile/es/components/action-sheet';
import type { Action as SwiperAction } from 'antd-mobile/es/components/swipe-action';
import type { FormInstance } from 'rc-field-form/es/interface';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';

import type {
  DialogTriggerProps,
  ModalTriggerProps,
  PopupTriggerProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import type { BackTopAnimationProps } from '@baifendian/adhere-ui-backtopanimation/es/types';
import type { TriggerProps as AdherePopupTriggerProps } from '@baifendian/adhere-ui-popup/es/types';
import type {
  ScrollLoadProps,
  ScrollLoadRefHandle,
} from '@baifendian/adhere-ui-scrollload/es/types';

import PRSLItem from './PRSLItem';

/**
 * FilterConfigItem
 * @description 筛选配置项
 */
export interface FilterConfigItem {
  key: string;
  name: string;
  label?: string | ReactElement;
  formItemProps?: FormItemProps;
  render: (formIns: FormInstance<any>) => ReactElement;
}

/**
 * SortConfigItem
 * @description 排序配置项
 */
export interface SortConfigItem {
  name: string;
  label: ReactNode;
}

/**
 * DefaultSortValue
 * @description 缺省排序值
 */
export interface DefaultSortValue {
  name: string;
  order: 'asc' | 'desc' | '' | undefined | null;
}

/**
 * ViewSettingConfigItem
 * @description 视图设置配置项
 */
export interface ViewSettingConfigItem {
  name: 'normal' | 'multi' | 'waterfal' | string;
  label: string | ReactElement;
}

/**
 * ActionConfigItem
 * @description 操作配置项
 */
export type ActionConfigItem = SheetAction | SwiperAction;

/**
 * TriggerMode
 * @description Trigger的弹出方式
 */
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
  searchKeyWordHistoryMaxSize: number;
  // 是否将搜索历史放入store
  isSearchKeyWordHistoryIntoStore?: boolean;
  // 存入store的类型
  searchKeyWordHistoryStoreType?: 'session' | 'local';
  disabled?: boolean;
  defaultSearchKeyWord?: string;
  onSearch?: (value: string) => void;
  onSearchClear?: () => void;
}

export interface ToolbarConfigItem {
  key: string;
  label?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
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
    disabled?: boolean,
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
  disabled?: boolean;
}

export interface FilterItemProps {
  disabled?: boolean;
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
  disabled?: boolean;
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
  disabled?: boolean;
  children?: (defaultUI: ReactElement) => ReactElement;
  // 视图设置UI的弹出方式
  viewSettingTriggerMode?: TriggerMode;
  // Trigger的配置
  viewSettingTriggerProps?: TriggerProps;
  // 渲染视图设置UI
  renderViewSetting?: (defaultViewSettingValue: string) => ReactElement;
  // 视图设置配置
  viewSettingConfig?: ViewSettingConfigItem[];
  // 缺省的视图设置数据
  defaultViewSettingValue?: string;
  // 视图设置切换的hook
  onViewSetting?: (value: string) => Promise<void>;
  // 视图设置重置的hook
  onViewSettingReset?: () => Promise<void>;
}

export interface PRSLItemProps {
  className?: string;
  style?: CSSProperties;
  actions?: ActionConfigItem[];
  record?: Record<string, any>;
  children?: (params: { actionSheetTrigger?: ReactNode }) => ReactNode;
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

export type SearchHistoryData = {
  id: string;
  kw: string;
}[];

export type SearchHistoryAction = {
  type: 'add' | 'remove' | 'list';
  addKw?: string;
  removeId?: string;
  list?: SearchHistoryData;
};

/**
 * SearchHistoryProps
 * @description 查询历史props
 */
export type SearchHistoryProps = Pick<
  SearchKeyWordProps,
  'defaultSearchKeyWord' | 'onSearch' | 'onSearchClear' | 'searchKeyWordBarProps'
> & {
  className?: string;
  style?: CSSProperties;
  historyData?: SearchHistoryData;
  addHistory?: (kw: string) => void;
  removeHistory?: (id: string) => void;
  clearHistory?: () => void;
  closeSelf?: () => void;
  title?: ReactNode;
};

/**
 * DNDChangeValue
 * @description 拖拽排序后的结果
 */
export type DNDChangeValue = {
  preValue: string;
  currentValue: string;
}[];

export type ActionConfig = {
  key: string;
  disabled?: boolean;
  text: ReactNode;
  onClick: () => void;
};

export type ActionsConfig = ActionConfig[];

export interface ActionSheetTriggerProps {
  config: ActionsConfig;
  actionSheetTrigger?: ReactNode;
}

export interface ActionSwiperProps {
  children?: ReactNode;
  config: ActionsConfig;
}

/**
 * PRSL
 * @description PRSLProps
 */
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
  // ----------------------------- 筛选工具 ---------------------------
  // ------------------------------ 排序按钮 ----------------------------
  // ------------------------------ 视图设置按钮 -------------------------------

  // ------------------------------ 操作项(Action) -------------------------------
  // 操作项弹出模式
  actionTriggerMode?: 'ActionSheet' | 'Swipe';
  renderActionSheetTrigger?: () => ReactNode;
  onAction?: (record: Record<string, any>, rowIndex: number) => ActionsConfig;
  // actionSheetProps?: ActionSheetProps;
  // swiperActionProps?: SwipeActionProps;
  // 操作配置
  // renderAction?: (record: Record<string, any>, rowIndex: number) => ActionConfigItem[];

  // ----------------------------- 选择模式 ------------------------------
  // 控制选择的名称
  selectionLabel?: ReactNode;
  selectionFinishLabel?: ReactNode;
  selectionCancelLabel?: ReactNode;
  // 是否有选择的功能
  isUseSelection?: boolean;
  // 选择的数据
  selectedRowKeys?: (string | number)[];
  // 是否是多选模式
  selectionMultiple?: boolean;
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
  dndLabel?: ReactNode;
  dndFinishLabel?: ReactNode;
  dndCancelLabel?: ReactNode;
  // 是否有DND的功能
  isUseDND?: boolean;
  // 自定义dragHandle
  dndDragHandle?: ReactNode;
  // 排序的改变
  onDNDChange?: (sortChangeValue: DNDChangeValue) => void;

  // 头的扩展
  headerExtra?: (defaultUI: ReactElement[], mode: ModeType) => ReactNode;

  // ------------------------------ 内容体 -------------------------------
  // 内容体
  children?: (params: { dataSource: Record<string, any>[] }) => ReactNode;
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
export interface PRSLHandle {
  getScrollEl: () => HTMLElement;
  scrollLoadHideAll: ScrollLoadRefHandle['hideAll'];
  resetAll: () => any;
  resetPagination: () => any;
  // 11
  // 12
  // 13

  //  21
  //  23

  //  31
  //  32
  //  33
}

/**
 * PRSLContext
 * @description PRSL上下文
 */
export interface PRSLContext {
  isUseSelectionMode: () => boolean;
  isUseDNDMode: () => boolean;
  isUseNormalMode: () => boolean;
  getRowKey: () => string;
  getOptionSelectedRowKeys: () => (string | number)[];
  selectionChange: (_checked: boolean, id: string) => void;
  selectionAllChange: (_checkAll: boolean) => void;
  getDatasourceLength: () => number;
  getSelectionMultiple: () => boolean;
  getIndexByIdFormOptionDataSource: (id: string) => number;
  getDndDragHandle: () => ReactNode;
  getActionTriggerMode: () => string;
  getRenderActionSheetTrigger: () => ReactNode;
  onAction: (record: Record<string, any>, rowIndex: number) => ActionsConfig;
}

/**
 * PRSLComponent
 */
export type PRSLComponent = NamedExoticComponent<
  PropsWithoutRef<PRSLProps> & RefAttributes<PRSLHandle>
> & {
  Item: typeof PRSLItem;
};

/**
 * Mode
 * @description 模式
 */
export type ModeType = 'normal' | 'selection' | 'dnd';

export interface SortableContainerProps {
  children?: ReactNode;
}

export interface SortableElementProps {
  children?: ReactNode;
}
