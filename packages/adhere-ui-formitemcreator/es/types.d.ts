import type { ColProps, ColSize } from 'antd/lib/col';
import type { FormItemProps } from 'antd/lib/form/FormItem';
import type { RowProps } from 'antd/lib/row';
import { NamedExoticComponent } from 'react';
import type { ReactElement } from 'react';
export interface FormItemCreatorFunction<P> extends NamedExoticComponent<P> {
    TEXT: symbol;
    INPUT: symbol;
    SEARCH: symbol;
    PASSWORD: symbol;
    TEXTAREA: symbol;
    NUMBER: symbol;
    RADIO: symbol;
    CHECKBOX: symbol;
    DATEPICKER: symbol;
    RANGEPICKER: symbol;
    TIMEPICKER: symbol;
    SWITCH: symbol;
    SELECT: symbol;
    SLIDER: symbol;
    RATE: symbol;
    UPLOAD: symbol;
    DEFINE: symbol;
}
/**
 * FormItemCreatorProps
 * @interface FormItemCreatorProps
 */
export interface FormItemCreatorProps {
    columns: ColumnItemProps[];
    layout?: FormItemLayoutProps;
    row?: RowProps;
}
/**
 * ColumnItemProps
 */
export interface ColumnItemProps extends FormItemProps {
    name?: string | number | (string | number)[];
    type?: symbol;
    contentProps?: any;
    skip?: boolean;
    content?: ReactElement;
    col?: ColProps;
}
/**
 * FormItemLayoutProps
 */
export interface FormItemLayoutProps {
    labelCol?: ColSize;
    wrapperCol?: ColSize;
}
