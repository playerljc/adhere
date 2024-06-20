import { FormProps, FormRule } from 'antd';
import type { CheckListProps as AntMobileCheckListProps, CheckboxProps as AntMobileCheckbox, CheckboxGroupProps as AntMobileCheckboxGroupProps, RadioGroupProps as AntMobileRadioGroupProps, RadioProps as AntMobileRadioProps, CalendarPickerViewProps, CascaderViewProps, CheckListItemProps, DatePickerViewProps, DialogProps, Form, ListItemProps, ListProps, ModalProps, PopupProps, PullToRefreshProps, SearchBarProps, SelectorOption, SelectorProps, SpaceProps } from 'antd-mobile';
import type { CascaderOption } from 'antd-mobile/es/components/cascader-view';
import type { CheckListValue } from 'antd-mobile/es/components/check-list';
import type { Action } from 'antd-mobile/es/components/modal';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { Context, FC } from 'react';
import type { AutoCompleteProps as AdhereMobileAutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';
import type { TimePickerViewProps } from '@baifendian/adhere-mobile-ui-time-picker-view/es/types';
import type { ScrollLoadProps, ScrollLoadRefHandle } from '@baifendian/adhere-ui-scrollload/es/types';
import { createFactory } from './util';
type BaseType = {
    className?: string;
    style?: CSSProperties;
};
export type AntMobileCheckboxItem = AntMobileCheckbox & {
    title?: string;
};
export type AntMobileRadioItem = AntMobileRadioProps & {
    title?: string;
};
export type CheckListProps = AntMobileCheckListProps & {
    options?: CheckListItemProps[];
};
export type CheckboxGroupProps = AntMobileCheckboxGroupProps & {
    spaceClassName?: string;
    spaceStyle?: CSSProperties;
    spaceProps?: SpaceProps;
    options?: AntMobileCheckboxItem[];
};
export type RadioGroupProps = AntMobileRadioGroupProps & {
    spaceClassName?: string;
    spaceStyle?: CSSProperties;
    spaceProps?: SpaceProps;
    options?: AntMobileRadioItem[];
};
export type DisplayNameInternal<T> = T & {
    displayName: string;
};
type checkAllLabelFun = (value: CheckListValue[]) => ReactNode;
export type CheckAllWrapperStyleProps = {
    checkAllWrapperClassName?: string;
    checkAllWrapperStyle?: CSSProperties;
    checkAllBodyWrapperClassName?: string;
    checkAllBodyWrapperStyle?: CSSProperties;
    renderCheckAll?: (checkAllOrigin: ReactElement, childrenOrigin: ReactNode) => ReactElement;
    checkAllLabel?: ReactNode | checkAllLabelFun;
};
type CheckAllChangeFun = CheckAllWrapperProps['onCheckAllChange'];
export type CheckAllCheckListProps = CheckAllWrapperStyleProps & CheckListProps & {
    onCheckAllChange?: CheckAllChangeFun;
};
export type CheckAllCheckboxProps = CheckAllWrapperStyleProps & CheckboxGroupProps & {
    onCheckAllChange?: CheckAllChangeFun;
};
export type CheckAllSelectorProps = CheckAllWrapperStyleProps & SelectorProps<any>;
export type CheckAllWrapperProps = {
    value?: CheckListValue[];
    options?: CheckListValue[];
    onCheckAllChange?: (checkedValue: CheckListValue[], checked: boolean, changeValue: CheckListValue[]) => void;
    children?: ReactNode;
};
export type FilterOption<Option> = (inputValue: string, option: Option) => boolean;
type filterProps<Option> = SearchBarProps & {
    optionFilterProp?: string;
    filterOption?: FilterOption<Option> | boolean;
};
type FilterProps<Option> = {
    filterWrapperClassName?: string;
    filterWrapperStyle?: CSSProperties;
    bodyWrapperClassName?: string;
    bodyWrapperStyle?: CSSProperties;
    filterProps: filterProps<Option>;
    renderEmpty?: () => ReactNode;
};
export type FilterCheckListProps = BaseType & CheckListProps & FilterProps<CheckListItemProps>;
export type FilterCheckboxProps = BaseType & CheckboxGroupProps & FilterProps<AntMobileCheckboxItem>;
export type FilterRadioProps = BaseType & RadioGroupProps & FilterProps<AntMobileRadioItem>;
export type FilterSelectorProps = BaseType & SelectorProps<any> & FilterProps<SelectorOption<any>> & {
    selectorClassName?: string;
    selectorStyle?: CSSProperties;
};
export type FilterCheckAllCheckListProps = BaseType & CheckAllCheckListProps & FilterProps<CheckListItemProps> & {
    checkListClassName?: string;
    checkListStyle?: CSSProperties;
};
export type FilterCheckAllCheckboxProps = BaseType & CheckAllCheckboxProps & FilterProps<AntMobileCheckboxItem>;
export type FilterCheckAllSelectorProps = BaseType & CheckAllSelectorProps & FilterProps<SelectorOption<any>> & {
    selectorClassName?: string;
    selectorStyle?: CSSProperties;
};
export type ListCheckAllProps = CheckAllWrapperStyleProps & CheckAllWrapperProps & {
    selectorPrefix: string;
    childrenOrigin: ReactElement;
};
export type ListFilterProps<Option> = {
    options: Option[];
    filterProps: filterProps<Option>;
    children: (options: Option[], filterValue: string) => ReactElement;
    wrapperClassName?: string;
    filterWrapperClassName?: string;
    bodyWrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    filterWrapperStyle?: CSSProperties;
    bodyWrapperStyle?: CSSProperties;
    renderEmpty?: FilterProps<Option>['renderEmpty'];
};
export type TreeFilterProps = Omit<ListFilterProps<any>, 'options'> & {
    treeData?: CascaderOption[] | (Omit<CascaderOption, 'children'> & {
        pId: string | number;
    })[];
    treeDataSimpleMode?: boolean;
};
export type CheckListHOCComponent = ReturnType<typeof createFactory<CheckListProps>> & {
    CheckAllCheckList: FC<CheckAllCheckListProps>;
    FilterCheckList: FC<FilterCheckListProps>;
    FilterCheckAllCheckList: FC<FilterCheckAllCheckListProps>;
    CheckboxCheckAllCheckList: FC<CheckboxCheckAllCheckListProps>;
    CheckboxCheckList: FC<CheckboxCheckListProps>;
    FilterCheckboxCheckAllCheckList: FC<FilterCheckboxCheckAllCheckListProps>;
    FilterCheckboxCheckList: FC<FilterCheckboxCheckListProps>;
    AutoCompleteCheckList: FC<AutoCompleteCheckListProps>;
    AutoCompleteCheckboxCheckList: FC<AutoCompleteCheckboxCheckListProps>;
    PagingCheckList: FC<PagingCheckListProps>;
    PagingCheckboxCheckList: FC<PagingCheckboxCheckListProps>;
    FilterPagingCheckList: FC<FilterPagingCheckListProps>;
    FilterPagingCheckboxCheckList: FC<FilterPagingCheckboxCheckListProps>;
    AutoCompletePagingCheckList: FC<AutoCompletePagingCheckListProps>;
    AutoCompletePagingCheckboxCheckList: FC<AutoCompletePagingCheckboxCheckListProps>;
};
export type CheckboxHOCComponent = ReturnType<typeof createFactory<CheckboxGroupProps>> & {
    CheckAllCheckbox: FC<CheckAllCheckboxProps>;
    FilterCheckbox: FC<FilterCheckboxProps>;
    FilterCheckAllCheckbox: FC<FilterCheckAllCheckboxProps>;
    CheckboxGroup: FC<CheckboxGroupProps>;
    AutoCompleteCheckbox: FC<AutoCompleteCheckboxProps>;
    PagingCheckbox: FC<PagingCheckboxProps>;
    FilterPagingCheckbox: FC<FilterPagingCheckboxProps>;
    AutoCompletePagingCheckbox: FC<AutoCompletePagingCheckboxProps>;
};
export type ModalHOCComponent = ReturnType<typeof createFactory<ModalProps>> & {
    ModalTriggerContext: Context<ModalTriggerContext>;
    Trigger: FC<ModalTriggerProps<any>>;
    TriggerPrompt: FC<ModalTriggerPromptProps<any>>;
};
export type DialogHOCComponent = ReturnType<typeof createFactory<DialogProps>> & {
    Context: Context<DialogTriggerContext>;
    Trigger: FC<DialogTriggerProps<any>>;
    TriggerPrompt: FC<DialogTriggerPromptProps<any>>;
};
export type PopupShowProps = Omit<PopupProps, 'visible' | 'destroyOnClose' | 'forceRender'> & {
    title?: ReactNode;
    header?: ReactNode;
    actions?: ModalProps['actions'];
    closeOnAction?: boolean;
};
export type PopupShowHandler = {
    close: () => void;
    setConfig: (callback: (originProps: PopupShowProps) => PopupShowProps) => void;
} | undefined;
export type PopupHOCComponent = ReturnType<typeof createFactory<PopupProps>> & {
    show: (props: PopupShowProps) => PopupShowHandler;
    clear: () => void;
    Context: Context<PopupTriggerContext>;
    Trigger: FC<PopupTriggerProps<any>>;
    TriggerPrompt: FC<PopupTriggerPromptProps<any>>;
};
export type SelectorHOCComponent = ReturnType<typeof createFactory<SelectorProps<any>>> & {
    CheckAllSelector: FC<CheckAllSelectorProps>;
    FilterSelector: FC<FilterSelectorProps>;
    FilterCheckAllSelector: FC<FilterCheckAllSelectorProps>;
    AutoCompleteSelector: FC<AutoCompleteSelectorProps>;
    PagingSelector: FC<PagingSelectorProps>;
    FilterPagingSelector: FC<FilterPagingSelectorProps>;
    AutoCompletePagingSelector: FC<AutoCompletePagingSelectorProps>;
};
export type RadioHOCComponent = ReturnType<typeof createFactory<RadioGroupProps>> & {
    FilterRadio: FC<FilterRadioProps>;
    RadioGroup: FC<RadioGroupProps>;
    AutoCompleteRadio: FC<AutoCompleteRadioProps>;
    PagingRadio: FC<PagingRadioProps>;
    FilterPagingRadio: FC<FilterPagingRadioProps>;
    AutoCompletePagingRadio: FC<AutoCompletePagingRadioProps>;
};
export type CheckboxCheckListProps = BaseType & CheckListProps & {
    checkListClassName?: string;
    checkListStyle?: CSSProperties;
};
export type CheckboxCheckAllCheckListProps = CheckboxCheckListProps & CheckAllCheckListProps;
export type FilterCheckboxCheckListProps = CheckboxCheckListProps & FilterCheckListProps;
export type FilterCheckboxCheckAllCheckListProps = CheckboxCheckListProps & FilterCheckAllCheckListProps;
export type AutoCompleteCheckListProps = AdhereMobileAutoCompleteProps & {
    checkListProps?: CheckListProps;
};
export type AutoCompleteCheckboxCheckListProps = AdhereMobileAutoCompleteProps & {
    checkListProps?: CheckboxCheckListProps;
};
export type AutoCompleteCheckboxProps = AdhereMobileAutoCompleteProps & {
    checkboxGroupProps?: CheckboxGroupProps;
};
export type AutoCompleteRadioProps = AdhereMobileAutoCompleteProps & {
    radioGroupProps?: RadioGroupProps;
};
export type AutoCompleteSelectorProps = AdhereMobileAutoCompleteProps & {
    selectorProps?: SelectorProps<any>;
};
export type AutoCompleteProps = AdhereMobileAutoCompleteProps;
export type PRSLProps = {
    className?: string;
    style?: CSSProperties;
    scrollLoadProps?: ScrollLoadProps;
    pullToRefreshProps?: PullToRefreshProps;
    isLoading: boolean;
    firstLoading?: () => ReactNode;
    loading?: () => ReactNode;
    onRefreshBefore?: () => Promise<void>;
    onRefresh: () => void;
    onLoadMore: ScrollLoadProps['onScrollBottom'];
    children?: any;
    pages: number;
};
export type PRSLHandle = {
    getScrollEl: () => HTMLElement;
    hideAll: ScrollLoadRefHandle['hideAll'];
};
export type PagingProps<Option> = Omit<PRSLProps, 'hasMore' | 'isLoading' | 'onLoadMore' | 'onRefresh'> & {
    options?: Option[];
    defaultPaging?: {
        page: number;
        limit: number;
        total?: number;
    };
    children?: any;
    isLocal?: boolean;
    onLoad?: (page: number, limit: number) => Promise<{
        total: number;
        data: Option[];
    }>;
    onDataSourceChange?: (page: number, dataSource: Option[]) => void;
};
export type PagingCheckListProps = CheckListProps & {
    pagingProps: PagingProps<CheckListItemProps>;
};
export type PagingCheckboxCheckListProps = CheckboxCheckListProps & {
    pagingProps: PagingProps<CheckListItemProps>;
};
export type PagingCheckboxProps = CheckboxGroupProps & {
    pagingProps: PagingProps<AntMobileCheckboxItem>;
};
export type PagingRadioProps = RadioGroupProps & {
    pagingProps: PagingProps<AntMobileRadioItem>;
};
export type PagingSelectorProps = SelectorProps<any> & {
    pagingProps: PagingProps<SelectorOption<any>>;
};
export type FilterPagingCheckListProps = FilterCheckListProps & PagingCheckListProps;
export type FilterPagingCheckboxCheckListProps = FilterCheckboxCheckListProps & PagingCheckboxCheckListProps;
export type FilterPagingCheckboxProps = FilterCheckboxProps & PagingCheckboxProps;
export type FilterPagingRadioProps = FilterRadioProps & PagingRadioProps;
export type FilterPagingSelectorProps = FilterSelectorProps & PagingSelectorProps;
export type AutoCompletePagingProps = Omit<AutoCompleteProps, 'loadData'> & {
    loadData?: (kw: string | undefined, page?: number, limit?: number) => Promise<{
        total: number;
        data: any[];
    }>;
    onDataSourceChange?: (page: number, dataSource: any[]) => void;
};
export type AutoCompletePagingCheckListProps = AutoCompletePagingProps & {
    pagingCheckListProps: Omit<PagingCheckListProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingCheckboxCheckListProps = AutoCompletePagingProps & {
    pagingCheckboxCheckListProps: Omit<PagingCheckboxCheckListProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingCheckboxProps = AutoCompletePagingProps & {
    pagingCheckboxProps: Omit<PagingCheckboxProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingRadioProps = AutoCompletePagingProps & {
    pagingRadioProps: Omit<PagingRadioProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingSelectorProps = AutoCompletePagingProps & {
    pagingSelectorProps: Omit<PagingSelectorProps, 'value' | 'onChange' | 'options'>;
};
export type PopoverTriggerProps = BaseType & {
    value?: any;
    disabled?: boolean;
    renderTrigger?: (changeValue: any) => ReactNode;
    renderPopover?: () => void;
};
export type ModalTriggerProps<Value> = Omit<ModalProps, 'content' | 'actions'> & {
    value?: Value;
    onChange?: (_value: Value) => void;
    actions?: (Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    })[];
    disabled?: boolean;
    children?: ReactElement;
    popoverTriggerProps?: Omit<PopoverTriggerProps, 'renderPopover'>;
};
export type ModalTriggerContext = {
    close: () => void;
};
export type ModalTriggerPromptProps<Value> = Omit<ModalTriggerProps<Value>, 'actions'> & {
    submitAction?: Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    };
};
export type DialogTriggerProps<Value> = Omit<DialogProps, 'content' | 'actions'> & {
    showCloseButton?: boolean;
    closeActionText?: ReactNode;
    closeActionKey?: string;
    value?: Value;
    onChange?: (_value: Value) => void;
    actions?: (Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    })[];
    disabled?: boolean;
    children?: ReactElement;
    popoverTriggerProps?: Omit<PopoverTriggerProps, 'renderPopover'>;
};
export type DialogTriggerContext = {
    close: () => void;
};
export type DialogTriggerPromptProps<Value> = Omit<DialogTriggerProps<Value>, 'actions'> & {
    submitAction?: Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    };
};
export type PopupTriggerProps<Value> = Omit<PopupShowProps, 'children' | 'actions'> & {
    popupClassName?: string;
    popupStyle?: CSSProperties;
    value?: Value;
    onChange?: (_value: Value) => void;
    actions?: (Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    })[];
    disabled?: boolean;
    children?: ReactElement;
    popoverTriggerProps?: Omit<PopoverTriggerProps, 'renderPopover'>;
};
export type PopupTriggerContext = {
    close: () => void;
};
export type PopupTriggerPromptProps<Value> = Omit<PopupTriggerProps<Value>, 'actions'> & {
    submitAction?: Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    };
};
export type DateTimeViewProps = DatePickerViewProps | TimePickerViewProps | CalendarPickerViewProps;
export type DateTimePopoverProps<T extends DateTimeViewProps> = T & {
    placeholder?: string;
    okLabel?: ReactNode;
    cancelLabel?: ReactNode;
    clearLabel?: ReactNode;
    locale?: string;
    renderDisplay?: (value: T['value'], locale: string) => ReactNode;
    allowClearValue?: boolean;
};
export type DateModalProps = DateTimePopoverProps<DatePickerViewProps> & {
    modalTriggerProps?: Omit<ModalTriggerProps<DatePickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type TimeModalProps = DateTimePopoverProps<TimePickerViewProps> & {
    modalTriggerProps?: Omit<ModalTriggerProps<TimePickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type CalendarModalProps = DateTimePopoverProps<CalendarPickerViewProps> & {
    modalTriggerProps?: Omit<ModalTriggerProps<CalendarPickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type TimeDialogProps = DateTimePopoverProps<TimePickerViewProps> & {
    dialogTriggerProps?: Omit<DialogTriggerProps<TimePickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type DateDialogProps = DateTimePopoverProps<DatePickerViewProps> & {
    dialogTriggerProps?: Omit<DialogTriggerProps<DatePickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type CalendarDialogProps = DateTimePopoverProps<CalendarPickerViewProps> & {
    dialogTriggerProps?: Omit<DialogTriggerProps<CalendarPickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type DatePopupProps = DateTimePopoverProps<DatePickerViewProps> & {
    popupTriggerProps?: Omit<PopupTriggerProps<DatePickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type CalendarPopupProps = DateTimePopoverProps<CalendarPickerViewProps> & {
    popupTriggerProps?: Omit<PopupTriggerProps<CalendarPickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type TimePopupProps = DateTimePopoverProps<TimePickerViewProps> & {
    popupTriggerProps?: Omit<PopupTriggerProps<TimePickerViewProps['value']>, 'value' | 'onChange' | 'actions'>;
};
export type UseDateTimerPopover<T extends DateTimeViewProps, Value> = (props: Pick<DateTimePopoverProps<T>, 'allowClearValue' | 'placeholder' | 'okLabel' | 'cancelLabel' | 'clearLabel'> & {
    popoverTriggerClassName?: string;
    popoverTriggerStyle?: CSSProperties;
    value?: Value;
    defaultValue?: Value;
    formatValue: ReactNode;
}) => {
    key: Symbol;
    setInternalValue: (value: DateTimePopoverProps<T>['value']) => void;
    actions: (Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    })[];
    popoverTriggerProps: {
        className: string;
        style: CSSProperties;
        renderTrigger: PopoverTriggerProps['renderTrigger'];
    };
};
export type UseDatePopover<Value> = DateTimePopoverProps<DatePickerViewProps> & Omit<Parameters<UseDateTimerPopover<DatePickerViewProps, Value>>[0], 'formatValue'>;
export type UseTimePopover<Value> = DateTimePopoverProps<TimePickerViewProps> & Omit<Parameters<UseDateTimerPopover<TimePickerViewProps, Value>>[0], 'formatValue'>;
export type UseCalendarPopover<Value> = DateTimePopoverProps<CalendarPickerViewProps> & Omit<Parameters<UseDateTimerPopover<CalendarPickerViewProps, Value>>[0], 'formatValue'>;
export type RangeCalendarModalProps = Omit<CalendarModalProps, 'selectionMode'>;
export type RangeCalendarDialogProps = Omit<CalendarDialogProps, 'selectionMode'>;
export type RangeCalendarPopupProps = Omit<CalendarPopupProps, 'selectionMode'>;
export type CalendarModalHOCComponent = ReturnType<typeof createFactory<CalendarModalProps>> & {
    RangeCalendarModal: FC<RangeCalendarModalProps>;
};
export type CalendarDialogHOCComponent = ReturnType<typeof createFactory<CalendarDialogProps>> & {
    RangeCalendarModal: FC<RangeCalendarDialogProps>;
};
export type CalendarPopupHOCComponent = ReturnType<typeof createFactory<CalendarPopupProps>> & {
    RangeCalendarModal: FC<RangeCalendarPopupProps>;
};
export type DateTimestampValueHOCProps = Omit<DatePickerViewProps | DateModalProps | DateDialogProps | DatePopupProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: number | null;
    value?: number | null;
    onChange?: (data: number | null | undefined) => void;
    type?: 'milliseconds' | 'seconds';
    children: ReactElement;
};
export type DateFormatValueHOCProps = Omit<DatePickerViewProps | DateModalProps | DateDialogProps | DatePopupProps, 'value' | 'onChange' | 'defaultValue'> & {
    defaultValue?: string | null;
    value?: string | null;
    onChange?: (data: string | null | undefined) => void;
    children: ReactElement;
    format?: string;
};
export type TimeTimestampValueHOCProps = Omit<TimePickerViewProps | TimeModalProps | TimeDialogProps | TimePopupProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: number | null;
    value?: number | null;
    onChange?: (data: number | null | undefined) => void;
    type?: 'milliseconds' | 'seconds';
    children: ReactElement;
};
export type TimeFormatValueHOCProps = Omit<TimePickerViewProps | TimeModalProps | TimeDialogProps | TimePopupProps, 'value' | 'onChange' | 'defaultValue'> & {
    defaultValue?: string | null;
    value?: string | null;
    onChange?: (data: string | null | undefined) => void;
    children: ReactElement;
    format?: string;
};
export type CalendarFormatValueHOCProps = Omit<CalendarPickerViewProps | CalendarModalProps | CalendarDialogProps | CalendarPopupProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: string[] | string | null;
    value?: string[] | string | null;
    onChange?: (data: [string, string] | string | null | undefined) => void;
    children: ReactElement;
    format?: string;
};
export type CalendarTimestampValueHOCProps = Omit<CalendarPickerViewProps | CalendarModalProps | CalendarDialogProps | CalendarPopupProps, 'defaultValue' | 'value' | 'onChange'> & {
    defaultValue?: number[] | number | null;
    value?: number[] | number | null;
    onChange?: (data: [number, number] | number | null | undefined) => void;
    type?: ['milliseconds' | 'seconds', 'milliseconds' | 'seconds'] | 'milliseconds' | 'seconds';
    children: ReactElement;
};
export type InternalCascaderViewProps = Omit<CascaderViewProps, 'options'> & {
    treeDataSimpleMode?: boolean;
    options: (CascaderOption | (Omit<CascaderOption, 'children'> & {
        pId: string | number;
    }))[];
};
export type FilterCascaderViewProps = BaseType & InternalCascaderViewProps & {
    treeDataSimpleMode?: boolean;
    renderLabel?: (option: CascaderOption | (Omit<CascaderOption, 'children'> & {
        pId: string | number;
    }), filterValue: string) => ReactNode;
} & FilterProps<CascaderOption | (Omit<CascaderOption, 'children'> & {
    pId: string | number;
})>;
export type CascaderViewHOCComponent = ReturnType<typeof createFactory<InternalCascaderViewProps>> & {
    FilterCascaderView: FC<FilterCascaderViewProps>;
    AsyncCascaderView: FC<AsyncCascaderViewProps>;
};
export type AsyncCascaderViewProps = Omit<InternalCascaderViewProps, 'options'> & {
    options: InternalCascaderViewProps['options'] & {
        isLoaded?: boolean;
    };
    isEveryAsync?: boolean;
    loadData?: (defaultId: string | number | undefined, cascadeParams?: any) => Promise<InternalCascaderViewProps['options']>;
    onDataSourceChange?: (treeData: InternalCascaderViewProps['options']) => void;
};
export type DataSourceListProps = ListProps & {
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    dataSource?: (Omit<ListItemProps, 'onClick' | 'children'> & {
        key: string | number;
    })[];
    renderItem?: (item: Omit<ListItemProps, 'onClick' | 'children'>) => ReactNode;
    onClick?: (item: Omit<ListItemProps, 'onClick' | 'children'>) => void;
};
export type ListHOCComponent = ReturnType<typeof createFactory<ListProps>> & {
    DataSourceList: FC<DataSourceListProps>;
};
export type ValueHOCProps = BaseType & {
    defaultFormItemValue?: any;
    value?: any;
    onChange?: (...params: any[]) => any;
    children?: any;
    [key: string]: any;
};
export type ValueHOCHandle = {
    getValue: () => any;
};
export type FormHOCComponent = typeof Form & {
    defaultProps?: Partial<FormProps>;
} & {
    ValidatorRules: FormValidatorRulesType;
};
export type FormValidatorRulesType = {
    [prop: string]: (argv?: {
        params?: any;
        invalidMessage?: string;
    }) => FormRule;
};
export {};
