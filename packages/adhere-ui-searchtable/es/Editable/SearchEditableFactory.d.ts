import { FormInstance } from 'antd/es/form';
import React, { ReactElement } from 'react';
import { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
        formRef: React.RefObject<FormInstance<any> | null>;
        onTableRowComponentReducers(columns: ColumnTypeExt[]): string[];
        onTableCellComponentReducers(columns: ColumnTypeExt[]): string[];
        /**
         * rowEditableReducer
         * @description 可编辑row的处理
         * @param params
         */
        rowEditableReducer(params: {
            rowIndex: number;
            record: {
                [prop: string]: any;
            };
            columns: ColumnTypeExt[];
            rowConfig: RowConfig;
        }): RowConfig;
        /**
         * onEditorRow
         * @param params
         */
        onEditorRow(params: {
            columns: ColumnTypeExt[];
            rowIndex: number;
            record: any;
        }): RowEditableConfig;
        /**
         * onEditorCell
         * @param record
         * @param editorConfig
         */
        onEditorCell({ record, editorConfig }: {
            record: any;
            editorConfig: any;
        }): void;
        /**
         * setFieldValues
         */
        setFieldValues(): void;
        /**
         * fetchData
         */
        fetchData(): any;
        /**
         * render
         * @protected
         */
        render(): ReactElement;
    };
    [x: string]: any;
};
