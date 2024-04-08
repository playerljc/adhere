import type { FormItemProps, FormProps, PullToRefreshProps, SearchBarProps } from 'antd-mobile';
import type { Action as SheetAction } from 'antd-mobile/es/components/action-sheet';
import type { Action as SwiperAction } from 'antd-mobile/es/components/swipe-action';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import type { DialogTriggerProps, ModalTriggerProps, PopupTriggerProps } from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import { BackTopAnimationProps } from '@baifendian/adhere-ui-backtopanimation/es/types';
import { TriggerProps as AdherePopupTriggerProps } from '@baifendian/adhere-ui-popup/es/types';
import type { ScrollLoadProps, ScrollLoadRefHandle } from '@baifendian/adhere-ui-scrollload/es/types';
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
export type TriggerProps = PopupTriggerProps<any> | ModalTriggerProps<any> | DialogTriggerProps<any> | AdherePopupTriggerProps;
export interface SearchKeyWordProps {
    className?: string;
    style?: CSSProperties;
    searchKeyWordBarProps?: SearchBarProps;
    searchKeyWordMode?: 'normal' | 'history';
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
export interface ToolBarProps extends Omit<FilterItemProps, 'children'>, Omit<SortItemProps, 'children'>, Omit<ViewSettingProps, 'children'> {
    className?: string;
    style?: CSSProperties;
    showTotal?: boolean;
    toolbarWrapperClassName?: string;
    toolbarWrapperStyle?: CSSProperties;
    renderToolBar?: (defaultToolItems: ReactElement[], defaultShowTotalElement?: ReactNode) => ReactNode;
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
}
export interface FilterItemProps {
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
    children?: (defaultUI: ReactElement) => ReactElement;
    viewSettingTriggerMode?: TriggerMode;
    viewSettingTriggerProps?: TriggerProps;
    renderViewSetting?: (viewSettingDefaultValue: string) => ReactElement;
    viewSettingConfig?: ViewSettingConfigItem[];
    viewSettingDefaultValue?: string;
    onViewSettingChange?: (value: string) => Promise<void>;
    onViewSettingReset?: () => Promise<void>;
}
export interface PRSLItemProps {
    actions?: ActionConfigItem[];
    children?: (record: Record<string, any>, rowIndex: number, actionTrigger?: ReactElement) => ReactNode;
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
    selectedRowKeys?: (string | number)[];
    selectionMultiple?: boolean;
    renderSelectionTrigger?: (defaultUI: ReactElement) => ReactElement;
    onSelectChange?: (selectedRowKeys: (string | number)[], selectedRows: Record<string, any>[], changeRowKeys: (string | number)[], info: {
        type: 'select' | 'unselect';
    }) => void;
    isShowDNDTrigger?: boolean;
    children?: (dataSource?: Record<string, any>[]) => ReactNode;
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
export type PRSLHandle = {
    getScrollEl: () => HTMLElement;
    hideAll: ScrollLoadRefHandle['hideAll'];
};
