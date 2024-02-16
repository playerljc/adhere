import type { CheckListProps as AntMobileCheckListProps, CheckboxProps as AntMobileCheckbox, CheckboxGroupProps as AntMobileCheckboxGroupProps, RadioGroupProps as AntMobileRadioGroupProps, RadioProps as AntMobileRadioProps, CheckListItemProps, SearchBarProps, SelectorOption, SelectorProps, SpaceProps } from 'antd-mobile';
import type { CheckListValue } from 'antd-mobile/es/components/check-list';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { FC } from 'react';
import type { AutoCompleteProps } from '@baifendian/adhere-mobile-ui-auto-complete/es/types';
import { createFactory } from './util';
type BaseType = {
    className?: string;
    style?: CSSProperties;
};
type AntMobileCheckboxItem = AntMobileCheckbox & {
    title?: string;
};
type AntMobileRadioItem = AntMobileRadioProps & {
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
export type UseListCheckAll = (props: CheckAllWrapperStyleProps & CheckAllWrapperProps & {
    selectorPrefix: string;
    childrenOrigin: ReactElement;
}) => ReactElement;
export type UseListFilterProps<Option> = {
    options: Option[];
    filterProps: filterProps<Option>;
    children: (options: Option[]) => ReactElement;
    wrapperClassName?: string;
    filterWrapperClassName?: string;
    bodyWrapperClassName?: string;
    wrapperStyle?: CSSProperties;
    filterWrapperStyle?: CSSProperties;
    bodyWrapperStyle?: CSSProperties;
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
};
export type CheckboxHOCComponent = ReturnType<typeof createFactory<CheckboxGroupProps>> & {
    CheckAllCheckbox: FC<CheckAllCheckboxProps>;
    FilterCheckbox: FC<FilterCheckboxProps>;
    FilterCheckAllCheckbox: FC<FilterCheckAllCheckboxProps>;
    CheckboxGroup: FC<CheckboxGroupProps>;
    AutoCompleteCheckbox: FC<AutoCompleteCheckboxProps>;
};
export type SelectorHOCComponent = ReturnType<typeof createFactory<SelectorProps<any>>> & {
    CheckAllSelector: FC<CheckAllSelectorProps>;
    FilterSelector: FC<FilterSelectorProps>;
    FilterCheckAllSelector: FC<FilterCheckAllSelectorProps>;
    AutoCompleteSelector: FC<AutoCompleteSelectorProps>;
};
export type RadioHOCComponent = ReturnType<typeof createFactory<RadioGroupProps>> & {
    FilterRadio: FC<FilterRadioProps>;
    RadioGroup: FC<RadioGroupProps>;
    AutoCompleteRadio: FC<AutoCompleteRadioProps>;
};
export type CheckboxCheckListProps = BaseType & CheckListProps & {
    checkListClassName?: string;
    checkListStyle?: CSSProperties;
};
export type CheckboxCheckAllCheckListProps = CheckboxCheckListProps & CheckAllCheckListProps;
export type FilterCheckboxCheckListProps = CheckboxCheckListProps & FilterCheckListProps;
export type FilterCheckboxCheckAllCheckListProps = CheckboxCheckListProps & FilterCheckAllCheckListProps;
export type AutoCompleteCheckListProps = AutoCompleteProps & {
    checkListProps?: CheckListProps;
};
export type AutoCompleteCheckboxCheckListProps = AutoCompleteProps & {
    checkListProps?: CheckboxCheckListProps;
};
export type AutoCompleteCheckboxProps = AutoCompleteProps & {
    checkboxGroupProps?: CheckboxGroupProps;
};
export type AutoCompleteRadioProps = AutoCompleteProps & {
    radioGroupProps?: RadioGroupProps;
};
export type AutoCompleteSelectorProps = AutoCompleteProps & {
    selectorProps?: SelectorProps<any>;
};
export type UseAutoComplete = (autoCompleteProps: AutoCompleteProps, children: AutoCompleteProps['children']) => ReactElement;
export {};
