import { FormInstance } from 'antd/es/form';
import { Rule } from 'antd/lib/form/index';
import type { TableProps } from 'antd/lib/table/Table';
import type {
  ColumnType, // FilterValue,
  // SorterResult,
  // TableCurrentDataSource,
  // TablePaginationConfig,
  // TableRowSelection,
} from 'antd/lib/table/interface';
import { DataIndex } from 'rc-table/lib/interface';
import type { CSSProperties, ReactElement, ReactNode, RefObject } from 'react';

import type { SuspenseProps, SuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';

import type SearchTable from './SearchTable';

export type FormItemType =
  | 'input'
  | 'textArea'
  | 'inputNumber'
  | 'inputNumberDecimal1'
  | 'inputNumberDecimal2'
  | 'inputNumberInteger'
  | 'select'
  | 'multiSelect'
  | 'checkAllMultiSelect'
  | 'autoCompleteSelect'
  | 'autoCompleteSelectMulti'
  | 'autoCompleteSelectCheckAllMulti'
  | 'radioHorizontal'
  | 'radioButton'
  | 'radioSelect'
  | 'radioCustom'
  | 'checkBoxHorizontal'
  | 'checkBoxCheckAllHorizontal'
  | 'checkboxSelect'
  | 'checkBoxCheckAllSelect'
  | 'checkBoxCustom'
  | 'checkBoxCheckAllCustom'
  | 'transferSelect'
  | 'tableSelect'
  | 'tableMultiSelect'
  | 'tablePagingSelect'
  | 'tablePagingMultiSelect'
  | 'listSelect'
  | 'listMultiSelect'
  | 'listPagingSelect'
  | 'listPagingMultiSelect'
  | 'treeSelect'
  | 'treeMultiSelect'
  | 'treeSelectLeaf'
  | 'treeMultiSelectLeaf'
  | 'cascaderSelect'
  | 'cascaderMultiSelect'
  | 'cascaderSelectLeaf'
  | 'cascaderMultiSelectLeaf'
  | 'datePicker'
  | 'timePicker'
  | 'rangePicker'
  | 'slider'
  | 'sliderRange'
  | 'rate'
  | 'switch'
  | 'custom';

/**
 * ColumnSearchConfig
 * @description 列的查询设置
 */
export interface ColumnSearchConfig {
  type: FormItemType;
  // 是否显示
  visible?: boolean;
  // 是否显示在列头上
  showColumnHeader?: boolean;
  // 控件的props
  props?: any;
  // TableGridLayout的Label的attrs
  labelAttrs?: any;
  // TableGridLayout的Value的attrs
  valueAttrs?: any;
  // 权限码
  authority?: string[];
  // 渲染无权限的UI
  renderNoAuthority?: (params?: any) => ReactNode | null;
  // 如果有此属性，则不用column的dataIndex
  dataIndex?: string; //column.dataIndex;
  // 如果有此属性则不用column的title
  title?: ReactNode; //column.title;
  // dist渲染的组件的字典名称(适用于FormItemGeneratorToDict)
  dictName?: string;
  // children自定义的渲染，适用于FormItemGeneratorToDict的自定义children时候使用
  renderChildren?: (params?: any) => ReactNode | null;
  // 自定义组件的渲染
  render?: () => ReactNode | null;
  // 时间区间控件的startName
  startName?: string;
  // 时间区间控件的endName
  endName?: string;
}

export interface ColumnParams {
  value: string;
  record: any;
  dataIndex?: DataIndex;
  rowIndex: number;
}

export interface EditableCellViewProps extends EditableCellProps {
  editableConfig: ColumnEditableConfig;
  onTriggerChange?: () => void;
}

export interface EditableCellEditProps extends EditableCellProps {
  editableConfig: ColumnEditableConfig;
  onTriggerChange?: () => void;
}

export interface FormItemGeneratorConfig {
  // 编辑控件的类型
  type?: FormItemType | string;
  // 组件的props定义
  props?: any;
  // dist渲染的组件的字典名称(适用于FormItemGeneratorToDict)
  dictName?: string;
  // children自定义的渲染，适用于FormItemGeneratorToDict的自定义children时候使用
  renderChildren?: (params?: any) => ReactNode | null;
  // 表单的实例
  form?: FormInstance<any> | null;
  dataIndex?: DataIndex;
  rowIndex?: number;
}

export interface EditableRowProps {
  record: any;
  rowIndex: number;
  columns: any[];
  $context: SearchTable;
}

export interface EditableCellProps {
  record: any;
  column: ColumnTypeExt;
  rowIndex: number;
  columns: any[];
  $context: SearchTable;
}

/**
 * ColumnEditableConfig
 * @description 可编辑的单元格
 */
export interface ColumnEditableConfig {
  // 单元格是否是可编辑的单元格
  editable: boolean;
  // 缺省的状态
  defaultStatus?: 'view' | 'edit' | string;
  // 编辑控件的类型
  type?: FormItemType | string;
  // 自定义的渲染(type是custom的时候)
  render?: (params: {
    form: FormInstance<any> | null;
    dataIndex: string | number | readonly (string | number)[] | undefined;
    record: any;
    rowIndex: number;
    value: any;
    children?: ReactNode;
  }) => ReactNode;
  // 点击ToEdit句柄之前触发，resolve则将继续，reject则不能切换状态
  onBeforeToEdit?: (params: ColumnParams) => Promise<void>;
  // 点击了save句柄，resolve则切换到view状态
  onSave?: (params: ColumnParams & { values: any }) => Promise<void>;
  // 点击cancel之前，resolve则切换到view状态
  onBeforeCancel?: (params: ColumnParams) => Promise<void>;
  // formItem的Props
  formItemProps?: any;
  // 组件的props定义
  props?: any;
  // 是否使用句柄来切换状态 view的时候有一个句柄点击后变成编辑状态，编辑的时候有2个句柄，save和cancel，如果设置为false，则关于句柄的事件将不会触发
  useTrigger?: boolean;
  // 渲染查看的句柄
  renderToEditTrigger?: (params: ColumnParams) => ReactNode;
  // 渲染保存的句柄
  renderSaveTrigger?: (params: ColumnParams) => ReactNode;
  // 渲染取消的句柄
  renderCancelTrigger?: (params: ColumnParams) => ReactNode;
  // FormItem的rules
  rules?: Rule[];
  // 如果有此属性，则不用column的dataIndex
  dataIndex?: DataIndex;
  // dist渲染的组件的字典名称(适用于FormItemGeneratorToDict)
  dictName?: string;
  // children自定义的渲染，适用于FormItemGeneratorToDict的自定义children时候使用
  renderChildren?: (params?: any) => ReactNode | null;
  // 是否一直保持编辑状态，也就是说view和edit都显示的是控件，如果设置为true则相当于设置了useTrigger是false，useTrigger的设置将失效
  useKeepEdit?: boolean;
}

/**
 * ColumnTypeExt
 * @description Column列的扩展设置
 */
export interface ColumnTypeExt extends ColumnType<any> {
  // 列的权限设置，有权限才显示，没权限不显示
  $authorized?: () => boolean;
  // 列头是否可以拖动
  $resizable?: boolean;
  // 列是否显示
  $hide?: boolean;
  // 列的查询设置
  $search?: ColumnSearchConfig;
  // 可编辑的单元格
  $editable?: ColumnEditableConfig;
}

/**
 * SearchTableProps
 * @interface SearchTableProps
 */
export interface SearchTableProps extends SuspenseProps {
  className?: string;
  style?: CSSProperties;
  tableClassName: string;
  tableStyle: CSSProperties;
  searchClassName: string;
  searchStyle: CSSProperties;
  firstLoading: ReactElement;
  // antdTable的Props
  antdTableProps: TableProps<any>;
  // 是否有展开和收缩的功能
  isShowExpandSearch: boolean;
  // 展开和收缩的默认状态
  defaultExpandSearchCollapse: boolean;
  // 撑开search
  fitSearch: boolean;
  // 撑开表格
  fitTable: boolean;
  // 是否是查询固定，表格自适应
  autoFixed: boolean;
  // 锁定列头，表格滚动
  fixedHeaderAutoTable: boolean;
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedTableSpaceBetween: boolean;
  // 是否显示列设置
  showColumnSetting: boolean;
}

/**
 * SearchTableState
 * @interface SearchTableState
 */
export interface SearchTableState extends SuspenseState {
  [props: string]: any;
  page?: number;
  limit?: number;
  expand?: boolean;
  scrollY?: number;
  columnSetting?: Array<ColumnType<any> & { sort: number; display: boolean }>;
  tableDensity?: TableDensity;
}

export interface ISearchTableImplement {
  /**
   * showLoading - 是否显示遮罩
   */
  showLoading(): boolean;

  /**
   * fetchData - 加载数据
   */
  fetchData(): void;
}

/**
 * SearchTableImplementProps
 * @interface SearchTableImplementProps
 */
export interface SearchTableImplementProps extends SearchTableProps {
  [props: string]: any;
  getTableWrapperInstance?: (ref?: RefObject<HTMLDivElement>) => void;
}

export interface SearchTableImplementState extends SearchTableState {
  [props: string]: any;
  selectedRowKeys?: string[];
  selectedRows?: any[];
  searchParams?: any;
}

export interface AdvancedSearchPanelGroupData {
  className: string;
  style: CSSProperties;
  // group名称
  name: string;
  // group的宽度，默认是100%
  width: string | number;
  // 缺省的Label宽度
  defaultLabelWidth: number;
  // 缺省的padding
  padding: number;
  // 列设置 auto表示自适应
  colgroup: number[];
  // 列数
  columnCount: number;
  data: {
    key: string;
    // Label组件
    label: ReactNode;
    // Value组件
    value: ReactNode;
  }[];
}

export interface AdvancedSearchPanelTableGridLayoutConfig {
  className?: string;
  style?: CSSProperties;
  innerClassName?: string;
  innerStyle?: CSSProperties;
  // 是否有边框
  bordered: boolean;
  // 布局
  layout: 'horizontal' | 'vertical';
  // 密度
  density?: string | number;
  // 是否是奇偶数不同色
  parity?: boolean;
}

export interface AdvancedSearchPanelSearchConfig {
  rowCount: string;
  showStrategy: string;
  advancedSearch: {
    className: string;
    style: CSSProperties;
    width: number | string;
    mask: boolean;
    zIndex: number;
    time: number;
    direction: string;
    collapse: boolean;
    getPopupContainer: Function;
    onBeforeShow: Function;
    onBeforeClose: Function;
    onAfterShow: Function;
    onAfterClose: Function;
  };
  renderTitleLabel?: Function;
  renderCollapse?: Function;
  renderSearchButton?: Function;
  insertSearchButton?: Function;
}

export interface AdvancedSearchPanelProps {
  groupData: AdvancedSearchPanelGroupData[];
  tableGridLayoutConfig: AdvancedSearchPanelTableGridLayoutConfig;
  remainingGroupData: AdvancedSearchPanelGroupData[];
  advancedSearchConfig: AdvancedSearchPanelSearchConfig;
  onSearch: Function;
  onReset: Function;
  onCollapse: Function;
}

/**
 * TableDensity
 */
export enum TableDensity {
  DEFAULT = 'default',
  MIDDLE = 'middle',
  SMALL = 'small',
}
