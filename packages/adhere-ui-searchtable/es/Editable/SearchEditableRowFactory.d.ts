import type { FormInstance } from 'antd/es/form';
import type { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
        /**
         * isUseExclusiveEditorRow
         * @description 是否开启互斥单行编辑策略（开启后进入编辑会退出其它编辑行）
         */
        isUseExclusiveEditorRow(): boolean;
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
         * setActiveEditorRowIds
         * @description 设置当前处于编辑态的行 id 集合（整体替换）
         * @param {string[]} rowIds 行主键值列表，空数组表示无编辑行
         * @return {Promise<void>}
         */
        setActiveEditorRowIds(rowIds: readonly string[]): Promise<void>;
        /**
         * validateActiveEditorRow
         * @description 校验指定激活编辑行对应的表单
         * @param {string} rowId 行主键值
         * @param {Parameters<FormInstance['validateFields']>[0]} opt antd Form.validateFields 的参数
         * @return {Promise<any> | undefined}
         */
        validateActiveEditorRow(rowId: string, opt?: Parameters<FormInstance["validateFields"]>[0]): Promise<any> | undefined;
        /**
         * fetchData
         */
        fetchData(): any;
    };
    [x: string]: any;
};
