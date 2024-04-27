import type { FormItemProps, FormProps, PullToRefreshProps, SearchBarProps } from 'antd-mobile';
import type { Action as SheetAction } from 'antd-mobile/es/components/action-sheet';
import type { Action as SwiperAction } from 'antd-mobile/es/components/swipe-action';
import type { FormInstance } from 'rc-field-form/es/interface';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { DialogTriggerProps, ModalTriggerProps, PopupTriggerProps } from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import type { BackTopAnimationProps } from '@baifendian/adhere-ui-backtopanimation/es/types';
import type { TriggerProps as AdherePopupTriggerProps } from '@baifendian/adhere-ui-popup/es/types';
import type { ScrollLoadProps, ScrollLoadRefHandle } from '@baifendian/adhere-ui-scrollload/es/types';
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
export type TriggerProps = PopupTriggerProps<any> | ModalTriggerProps<any> | DialogTriggerProps<any> | AdherePopupTriggerProps;
export interface SearchKeyWordProps {
    className?: string;
    style?: CSSProperties;
    searchKeyWordBarProps?: SearchBarProps;
    searchKeyWordMode?: 'normal' | 'history';
    searchKeyWordHistoryMaxSize: number;
    isSearchKeyWordHistoryIntoStore?: boolean;
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
export interface ToolBarProps extends Omit<FilterItemProps, 'children'>, Omit<SortItemProps, 'children'>, Omit<ViewSettingProps, 'children'> {
    className?: string;
    style?: CSSProperties;
    showTotal?: boolean;
    toolbarWrapperClassName?: string;
    toolbarWrapperStyle?: CSSProperties;
    renderToolBar?: (defaultToolItems: ReactElement[], defaultShowTotalElement?: ReactNode, disabled?: boolean) => ReactNode;
    afterToolBarRender?: () => ReactNode;
    beforeToolBarRender?: () => ReactNode;
    beforeToolBarRenderClassName?: string;
    beforeToolBarRenderStyle?: CSSProperties;
    afterToolBarRenderClassName?: string;
    afterToolBarRenderStyle?: CSSProperties;
    toolbarCollapseCount: number;
    toolbarConfig?: (defaultElements: ReactElement[]) => (ToolbarConfigItem | ReactElement)[];
    isShowFilterTrigger?: boolean;
    renderFilterTrigger: (defaultUI: ReactElement) => ReactElement;
    isShowSortTrigger?: boolean;
    renderSortTrigger: (defaultUI: ReactElement) => ReactElement;
    isShowViewSettingTrigger?: boolean;
    renderViewSettingTrigger: (defaultUI: ReactElement) => ReactElement;
    total?: number;
    disabled?: boolean;
}
export interface FilterItemProps {
    disabled?: boolean;
    children?: (defaultUI: ReactElement) => ReactElement;
    filterTriggerMode?: TriggerMode;
    filterTriggerProps?: TriggerProps;
    renderFilter?: (defaultFilterValues: Record<string, any>) => ReactElement;
    filterFormProps?: FormProps;
    filterConfig?: FilterConfigItem[];
    defaultFilterValues?: Record<string, any>;
    onFilter?: (filterData?: FilterItemProps['defaultFilterValues']) => Promise<DataSource> | Promise<void>;
    onFilterReset?: () => Promise<DataSource> | Promise<void>;
}
export interface SortItemProps {
    disabled?: boolean;
    children?: (defaultUI: ReactElement) => ReactElement;
    sortTriggerMode?: TriggerMode;
    sortTriggerProps?: TriggerProps;
    renderSort?: (defaultSortValues: DefaultSortValue[]) => ReactElement;
    sortConfig?: SortConfigItem[];
    defaultSortValues?: DefaultSortValue[];
    onSort?: (values: DefaultSortValue[]) => Promise<DataSource> | Promise<void>;
    onSortReset?: () => Promise<DataSource> | Promise<void>;
}
export interface ViewSettingProps {
    disabled?: boolean;
    children?: (defaultUI: ReactElement) => ReactElement;
    viewSettingTriggerMode?: TriggerMode;
    viewSettingTriggerProps?: TriggerProps;
    renderViewSetting?: (defaultViewSettingValue: string) => ReactElement;
    viewSettingConfig?: ViewSettingConfigItem[];
    defaultViewSettingValue?: string;
    onViewSetting?: (value: string) => Promise<void>;
    onViewSettingReset?: () => Promise<void>;
}
export interface PRSLItemProps {
    className?: string;
    style?: CSSProperties;
    actions?: ActionConfigItem[];
    record?: Record<string, any>;
    children?: (params: {
        actionSheetTrigger?: ReactNode;
    }) => ReactNode;
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
export type SearchHistoryProps = Pick<SearchKeyWordProps, 'defaultSearchKeyWord' | 'onSearch' | 'onSearchClear' | 'searchKeyWordBarProps'> & {
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
export interface PRSLProps extends Omit<SearchKeyWordProps, 'className' | 'style' | 'onSearch' | 'onSearchClear'>, Omit<ToolBarProps, 'onFilter' | 'onFilterReset' | 'onSort' | 'onSortReset'> {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    rowKey?: string;
    isUseLocal?: boolean;
    loadData?: (params: LoadDataSourceParams) => Promise<DataSource>;
    renderEmpty?: () => ReactElement;
    renderOffLine?: () => ReactElement;
    isUseFirstLoading: boolean;
    firstLoading?: () => ReactNode;
    isLoading: boolean;
    pullToRefreshProps?: Omit<PullToRefreshProps, 'onRefresh'>;
    onRefreshBefore?: (params: LoadDataSourceParams) => Promise<void>;
    onRefresh?: (params: LoadDataSourceParams) => Promise<DataSource>;
    scrollLoadProps?: ScrollLoadProps;
    onLoadMore?: (params: LoadDataSourceParams & {
        handle?: (status?: string) => void;
    }) => Promise<DataSource>;
    loadMoreLoading?: () => ReactNode;
    backTopAnimationProps?: BackTopAnimationProps;
    showBackTopAnimation?: boolean;
    scrollLoadBeforeRender?: () => ReactNode;
    scrollLoadAfterRender?: () => ReactNode;
    scrollLoadBeforeRenderClassName?: string;
    scrollLoadBeforeRenderStyle?: CSSProperties;
    scrollLoadAfterRenderClassName?: string;
    scrollLoadAfterRenderStyle?: CSSProperties;
    paging?: boolean | {
        page: number;
        defaultPageSize: number;
    };
    showKeyWordSearchBar?: boolean;
    searchKeyWordWrapperClassName?: string;
    searchKeyWordWrapperStyle?: CSSProperties;
    showToolBar?: boolean;
    actionTriggerMode?: 'ActionSheet' | 'Swipe';
    renderActionSheetTrigger?: () => ReactNode;
    onAction?: (record: Record<string, any>, rowIndex: number) => ActionsConfig;
    selectionLabel?: ReactNode;
    selectionFinishLabel?: ReactNode;
    selectionCancelLabel?: ReactNode;
    isUseSelection?: boolean;
    selectedRowKeys?: (string | number)[];
    selectionMultiple?: boolean;
    onSelectChange?: (selectedRowKeys: (string | number)[], selectedRows: Record<string, any>[], changeRowKeys: (string | number)[], info: {
        type: 'select' | 'unselect';
    }) => void;
    dndLabel?: ReactNode;
    dndFinishLabel?: ReactNode;
    dndCancelLabel?: ReactNode;
    isUseDND?: boolean;
    dndDragHandle?: ReactNode;
    onDNDChange?: (sortChangeValue: DNDChangeValue) => void;
    headerExtra?: (defaultUI: ReactElement[], mode: ModeType) => ReactNode;
    children?: (params: {
        dataSource: Record<string, any>[];
    }) => ReactNode;
    beforeRenderClassName?: string;
    beforeRenderStyle?: CSSProperties;
    afterRenderClassName?: string;
    afterRenderStyle?: CSSProperties;
    beforeRender?: () => ReactNode;
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
export type PRSLComponent = NamedExoticComponent<PropsWithoutRef<PRSLProps> & RefAttributes<PRSLHandle>> & {
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
