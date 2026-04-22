import type { FormInstance } from 'antd/es/form';
import type { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';
export default function <P, S>(SuperClass: any): {
    new (props: any): {
        [x: string]: any;
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
         * 设置当前处于编辑态的行 id 集合（整体替换）
         * @param rowIds 行主键值列表，空数组表示无编辑行
         */
        setActiveEditorRowIds(rowIds: readonly string[]): Promise<void>;
        /**
         * 校验指定激活编辑行对应的表单
         * @param rowId 行主键值
         * @param opt antd Form.validateFields 的参数
         */
        validateActiveEditorRow(rowId: string, opt?: Parameters<FormInstance["validateFields"]>[0]): Promise<any> | undefined;
        /**
         * fetchData
         */
        fetchData(): any;
    };
    [x: string]: any;
};
