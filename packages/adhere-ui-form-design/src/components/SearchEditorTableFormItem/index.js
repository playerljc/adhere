/**
 * SystemSearchEditorTableFormItem 导出模块
 * @description 导出可编辑表格组件，包括单元格编辑和行编辑两种模式
 */
import EditableCellTable, {
  SuperTable as EditableCellTableSuperTable,
} from './EditableCellTable';
import EditableRowControlTable, {
  SuperTable as EditableRowControlTableSuperTable,
} from './EditableRowControlTable';

/**
 * @exports EditableRowControlTable
 * @description 行控制可编辑表格组件
 */
/**
 * @exports EditableCellTable
 * @description 单元格可编辑表格组件
 */
/**
 * @exports EditableCellTableSuperTable
 * @description 单元格可编辑表格的超类，用于继承扩展
 */
/**
 * @exports EditableRowControlTableSuperTable
 * @description 行控制可编辑表格的超类，用于继承扩展
 */
export {
  EditableRowControlTable,
  EditableCellTable,
  EditableCellTableSuperTable,
  EditableRowControlTableSuperTable,
};
