import type { CheckListProps as AntMobileCheckListProps, CheckboxProps as AntMobileCheckbox, CheckboxGroupProps as AntMobileCheckboxGroupProps, RadioGroupProps as AntMobileRadioGroupProps, RadioProps as AntMobileRadioProps, CalendarPickerViewProps, CheckListItemProps, DatePickerViewProps, DialogProps, ModalProps, PopupProps, PullToRefreshProps, SearchBarProps, SelectorOption, SelectorProps, SpaceProps } from 'antd-mobile';
import type { CheckListValue } from 'antd-mobile/es/components/check-list';
import type { Action } from 'antd-mobile/es/components/modal';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { FC } from 'react';
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
export type CheckAllSelectorProps = CheckAllWrapperStyleProps & SelectorProps<any> & {
    onCheckAllChange?: CheckAllChangeFun;
};
export type CheckAllWrapperProps = {
    value?: CheckListValue[];
    options?: CheckListValue[];
    onCheckAllChange?: (checkedValue: CheckListValue[], checked: boolean, changeValue: CheckListValue[]) => void;
    children?: ReactNode;
};
export type ListFilterOption<Option> = (inputValue: string, option: Option) => boolean;
type filterProps<Option> = SearchBarProps & {
    optionFilterProp?: string;
    filterOption?: ListFilterOption<Option> | boolean;
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
    children: (options: Option[]) => ReactElement;
    wrapperClassName?: string;
    filterWrapperClassName?: string;
    bodyWrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    filterWrapperStyle?: CSSProperties;
    bodyWrapperStyle?: CSSProperties;
    renderEmpty?: FilterProps<Option>['renderEmpty'];
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
    Trigger: FC<ModalTriggerProps<any>>;
    TriggerPrompt: FC<ModalTriggerPromptProps<any>>;
};
export type DialogHOCComponent = ReturnType<typeof createFactory<DialogProps>> & {
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
export type PagingProps = {
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
};
export type PagingHandle = {
    getScrollEl: () => HTMLElement;
    hideAll: ScrollLoadRefHandle['hideAll'];
};
export type StaticPagingProps<Option> = Omit<PagingProps, 'hasMore' | 'isLoading' | 'onLoadMore' | 'onRefresh'> & {
    options?: Option[];
    defaultPaging?: {
        page: number;
        limit: number;
    };
    children?: any;
};
export type PagingCheckListProps = CheckListProps & {
    pagingProps: StaticPagingProps<CheckListItemProps>;
};
export type PagingCheckboxCheckListProps = CheckboxCheckListProps & {
    pagingProps: StaticPagingProps<CheckListItemProps>;
};
export type FilterPagingCheckListProps = FilterCheckListProps & PagingCheckListProps;
export type FilterPagingCheckboxCheckListProps = FilterCheckboxCheckListProps & PagingCheckboxCheckListProps;
export type PagingCheckboxProps = CheckboxGroupProps & {
    pagingProps: StaticPagingProps<AntMobileCheckboxItem>;
};
export type FilterPagingCheckboxProps = FilterCheckboxProps & PagingCheckboxProps;
export type PagingRadioProps = RadioGroupProps & {
    pagingProps: StaticPagingProps<AntMobileRadioItem>;
};
export type FilterPagingRadioProps = FilterRadioProps & PagingRadioProps;
export type PagingSelectorProps = SelectorProps<any> & {
    pagingProps: StaticPagingProps<SelectorOption<any>>;
};
export type FilterPagingSelectorProps = FilterSelectorProps & PagingSelectorProps;
export type AutoCompletePagingCheckListProps = AutoCompleteProps & {
    pagingCheckListProps: Omit<PagingCheckListProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingCheckboxCheckListProps = AutoCompleteProps & {
    pagingCheckboxCheckListProps: Omit<PagingCheckboxCheckListProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingCheckboxProps = AutoCompleteProps & {
    pagingCheckboxProps: Omit<PagingCheckboxProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingRadioProps = AutoCompleteProps & {
    pagingRadioProps: Omit<PagingRadioProps, 'value' | 'onChange' | 'options'>;
};
export type AutoCompletePagingSelectorProps = AutoCompleteProps & {
    pagingSelectorProps: Omit<PagingSelectorProps, 'value' | 'onChange' | 'options'>;
};
export type PopoverTriggerProps = BaseType & {
    renderTrigger?: () => ReactNode;
    renderPopover?: () => void;
};
export type ModalTriggerProps<Value> = Omit<ModalProps, 'content' | 'actions'> & {
    value?: Value;
    onChange?: (_value: Value) => void;
    actions?: (Omit<Action, 'onClick'> & {
        onClick?: () => Promise<Value>;
    })[];
    children?: ReactElement;
    popoverTriggerProps?: Omit<PopoverTriggerProps, 'renderPopover'>;
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
    children?: ReactElement;
    popoverTriggerProps?: Omit<PopoverTriggerProps, 'renderPopover'>;
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
    children?: ReactElement;
    popoverTriggerProps?: Omit<PopoverTriggerProps, 'renderPopover'>;
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
export {};
