import type { ColumnTypeExt, FormItemType, RowEditableConfig } from '../types';
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
        /**
         * valueToFormItemValueMap
         * @description 值和表单控件值之间的转换，现在只涉及到时间控件
         */
        valueToFormItemValueMap: Map<string, (params: {
            record: {
                [prop: string]: any;
            };
            dataIndex: string;
        }) => any>;
        /**
         * onTableRowComponentReducers
         * @param columns
         */
        onTableRowComponentReducers(columns: ColumnTypeExt[]): string[];
        /**
         * onTableCellComponentReducers
         * @param columns
         */
        onTableCellComponentReducers(columns: ColumnTypeExt[]): string[];
        onEditorRow(params: {
            columns: ColumnTypeExt[];
            rowIndex: number;
            record: any;
        }): RowEditableConfig;
        /**
         * cellEditableReducer
         * @description 可编辑单元格的onCell处理
         * @param params
         */
        cellEditableReducer(params: {
            rowIndex: number;
            column: ColumnTypeExt;
            record: {
                [prop: string]: any;
            };
            columns: ColumnTypeExt[];
        }): ColumnTypeExt;
        /**
         * valueToFormItemValue
         * @description 值和表单值的转换
         */
        valueToFormItemValue({ type, record, dataIndex, }: {
            type: FormItemType;
            record: {
                [prop: string]: any;
            };
            dataIndex: string;
        }): any;
        /**
         * setActiveValue
         * @param activeValue
         */
        setActiveValue(activeValue: any): Promise<void>;
        /**
         * getActiveValue
         */
        getActiveValue(): any;
        /**
         * setActiveCells
         * @description cells激活
         * @param params
         */
        setActiveCells(params: {
            rowId: string;
            dataIndex: string;
        }[]): Promise<void>;
        /**
         * validateActiveCells
         * @description 校验指定的单元格
         * @param {{ rowId: string; dataIndex: string }[]} params
         * @return Promise<any> | undefined
         */
        validateActiveCells(params: {
            rowId: string;
            dataIndex: string;
        }[]): Promise<any> | undefined;
    };
    [x: string]: any;
};
