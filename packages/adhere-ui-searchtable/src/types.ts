import type { FormInstance } from 'antd/es/form';
import type { TableProps } from 'antd/es/table/InternalTable';
import type { Rule } from 'antd/lib/form/index';
import type {
  ColumnType, // FilterValue,
  // SorterResult,
  // TableCurrentDataSource,
  // TablePaginationConfig,
  // TableRowSelection,
} from 'antd/lib/table/interface';
import type { DataIndex } from 'rc-table/lib/interface';
import type {
  CSSProperties,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactElement,
  ReactNode,
  RefAttributes,
  RefObject,
} from 'react';

import type { SuspenseProps, SuspenseState } from '@baifendian/adhere-ui-suspense/lib/types';

import type SearchTableImplement from './SearchTableImplement';
import type { SearchTableStateImplement } from './SearchTableStateImplement';

// 控件的类型
export type FormItemType =
  // | 'select'
  // | 'multiSelect'
  // | 'checkAllMultiSelect'
  // | 'autoCompleteSelect'
  // | 'autoCompleteSelectMulti'
  // | 'autoCompleteSelectCheckAllMulti'
  // | 'radioHorizontal'
  // | 'radioButton'
  // | 'radioSelect'
  // | 'radioCustom'
  // | 'checkBoxHorizontal'
  // | 'checkBoxCheckAllHorizontal'
  // | 'checkboxSelect'
  // | 'checkBoxCheckAllSelect'
  // | 'checkBoxCustom'
  // | 'checkBoxCheckAllCustom'
  // | 'transferSelect'
  // | 'tableSelect'
  // | 'tableMultiSelect'
  // | 'tablePagingSelect'
  // | 'tablePagingMultiSelect'
  // | 'listSelect'
  // | 'listMultiSelect'
  // | 'listPagingSelect'
  // | 'listPagingMultiSelect'
  // | 'treeSelect'
  // | 'treeMultiSelect'
  // | 'treeSelectLeaf'
  // | 'treeMultiSelectLeaf'
  // | 'cascaderSelect'
  // | 'cascaderMultiSelect'
  // | 'cascaderSelectLeaf'
  // | 'cascaderMultiSelectLeaf'
  | 'input'
  | 'textArea'
  | 'inputNumber'
  | 'inputNumberDecimal1'
  | 'inputNumberDecimal2'
  | 'inputNumberInteger'
  | 'datePicker'
  | 'timePicker'
  | 'rangePicker'
  | 'slider'
  | 'sliderRange'
  | 'rate'
  | 'switch'
  // 字典类型
  | 'dict'
  // 自定义类型
  | 'custom'
  | string;

/**
 * ColumnSearchConfig
 * @description 列的查询设置
 */
export interface ColumnSearchConfig {
  // 编辑控件的类型
  type: FormItemType | string;
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
  // 查询项的排序
  sort?: boolean;
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
  record: { [prop: string]: any };
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

export interface TableRowComponentProps {
  record: { [prop: string]: any };
  rowIndex: number;
  columns: any[];
  rowKey: string;
  rowConfig: RowConfig;
  [p: string]: any;
}

export interface TableCellComponentProps {
  record: { [prop: string]: any };
  column: ColumnTypeExt;
  rowIndex: number;
  columns: ColumnTypeExt[];
  [p: string]: any;
}

export interface EditableCellProps {
  record: { [prop: string]: any };
  column: ColumnTypeExt;
  rowIndex: number;
  columns: ColumnTypeExt[];
}

/**
 * RowEditableConfig
 */
export interface RowEditableConfig {
  // 行是否可以编辑
  editable: boolean;
}

/**
 * RowDragSortConfig
 */
export interface RowDragSortConfig {
  override?: {
    type?: string;
    dropOverDownwardClassName?: string;
    dropOverUpwardClasName?: string;
    dragConfig?: (defaultDragConfig?: any) => { [prop: string]: any };
    dropConfig?: (defaultDropConfig?: any) => { [prop: string]: any };
  };
  dropHooks?: {
    collect?: (monitor?: any) => any;
    drop?: (params?: { sourceRecord: any; targetRecord: any; item: any }) => Promise<void>;
  };
}

/**
 * RowConfig
 */
export interface RowConfig {
  $editable?: RowEditableConfig;
  $rowDragSort?: RowDragSortConfig;
}

export interface CellConfigReducer {
  (params: {
    rowIndex: number;
    column: ColumnTypeExt;
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
  }): ColumnTypeExt;
}

export interface RowConfigReducer {
  (params: {
    rowIndex: number;
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
    rowConfig: RowConfig;
  }): RowConfig;
}

export interface TableRowComponentReducer {
  (params: {
    rowIndex: number;
    record: { [prop: string]: any };
    columns: ColumnTypeExt[];
    rowKey: string;
    rowConfig: RowConfig;
  }): (trREL: ReactElement) => ReactElement;
}

/**
 * TableCellComponentReducer
 */
export interface TableCellComponentReducer {
  (params: {
    record: { [prop: string]: any };
    column: ColumnTypeExt;
    rowIndex: number;
    columns: ColumnTypeExt[];
  }): (tdREL: ReactElement) => ReactElement;
}

export interface EditorRowControlProps {
  className?: string;
  styles?: CSSProperties;
  rowKey: string;
  editorRowId: string;
  record: { [prop: string]: any };
  renderEditorRow?: () => ReactNode;
  renderSave?: () => ReactNode;
  renderCancel?: () => ReactNode;
  onSave: (values: { [props: string]: any }) => Promise<void>;
  onEditor: (id: string) => Promise<void>;
}

export interface EditorTableControlProps {
  className?: string;
  styles?: CSSProperties;
  rowKey: string;
  renderEditorTable?: () => ReactNode;
  renderSave?: () => ReactNode;
  renderCancel?: () => ReactNode;
  onEditor: () => Promise<void>;
  onSave: (values: { [prop: string]: any }[]) => Promise<void>;
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
  // 行的索引值
  dataIndex?: DataIndex;
  // 列的索引值
  rowIndex?: number;
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
    record: { [prop: string]: any };
    rowIndex: number;
    value: any;
    // 已经生成好的孩子节点
    children?: ReactNode;
    // 更新单元格数据的方法
    updateEditorCellData?: () => Promise<void>;
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
  // 最好不使用这种模式
  useKeepEdit?: boolean;
}

/**
 * ColumnRowDragSortConfig
 */
export interface ColumnRowDragSortConfig {}

/**
 * ColumnTypeExt
 * @description Column列的扩展设置
 */
export interface ColumnTypeExt extends ColumnType<any> {
  // 列头的提示信息，同时也是此列筛选项label的提示信息
  $tip?: ReactNode;
  // 自定义渲染tip
  renderTip?: (tip: ReactNode) => ReactNode;
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
  // 行拖动排序
  $rowDragSort?: ColumnRowDragSortConfig;
  // 列头的对其方式
  headerCellAlign?: 'left' | 'center' | 'right';
  // 列头属性设置
  // onHeaderCell?: () => any;
}

/**
 * SearchProps
 */
export interface SearchProps extends SuspenseProps {
  className?: string;
  style?: CSSProperties;
  searchClassName: string;
  searchStyle: CSSProperties;
  firstLoading: ReactElement;
  // 是否有展开和收缩的功能
  isShowExpandSearch: boolean;
  // 展开和收缩的默认状态
  defaultExpandSearchCollapse: boolean;
  // 撑开search
  // fitSearch: boolean;
  // 撑开表格
  fitBody: boolean;
  // 是否是查询固定，表格自适应
  autoFixed: boolean;
  bodyClassName: string;
  bodyStyle: CSSProperties;
  title: string;
}

/**
 * SearchState
 */
export interface SearchState extends SuspenseState {
  expand?: boolean;
  prePage?: number | undefined;
  page?: number;
  limit?: number;
}

/**
 * SearchTableProps
 * @interface SearchTableProps
 */
export interface SearchTableProps extends SearchProps {
  // antdTable的Props
  antdTableProps: TableProps<any>;
  // 锁定列头，表格滚动
  fixedHeaderAutoTable: boolean;
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedTableSpaceBetween: boolean;
}

/**
 * SearchTableState
 * @interface SearchTableState
 */
export interface SearchTableState extends SearchState {
  [props: string]: any;
  scrollY?: number;
  columnSetting?: (ColumnType<any> & { sort: number; display: boolean })[];
  tableDensity?: TableDensity;
}

export interface ISearchTableImplement {
  /**
   * showLoading - 是否显示遮罩
   */
  showLoading: () => boolean;

  /**
   * fetchData - 加载数据
   */
  fetchData: () => void;
}

/**
 * SearchTableImplementProps
 * @interface SearchTableImplementProps
 */
export interface SearchTableImplementProps extends SearchTableProps {
  [props: string]: any;
  getTableWrapperInstance?: (ref?: RefObject<HTMLDivElement>) => void;
}

/**
 * SearchTableStateImplementProps
 */
export interface SearchTableStateImplementProps extends SearchTableImplementProps {
  $state: {
    serviceNames: string[];
    middleWares: any[];
    reducer: any;
    models: any[];
    mapStateToProps?: (state: any) => any;
    mapDispatchToProps?: (dispatch?: any) => any;
  };
}

export interface SearchTableImplementState extends SearchTableState {
  [props: string]: any;
  selectedRowKeys?: string[];
  selectedRows?: any[];
  searchParams?: any;
}

export interface SearchEditorRowTableState extends SearchTableImplementState {
  editorRowId: string;
}

export interface SearchEditorTableState extends SearchTableImplementState {
  isTableEditor: boolean;
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

export interface SearchTableImplementFactoryFunction<T, P> {
  (params: {
    serviceNames: string[];
    mapStateToProps?: (state: any) => any;
    mapDispatchToProps?: (dispatch?: any) => any;
  }): (
    Component: typeof SearchTableImplement,
  ) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}

export interface SearchTableStateImplementFactoryFunction<T, P> {
  (params: {
    serviceNames: string[];
    models: any[];
    middleWares?: any[];
    reducer?: any;
    mapStateToProps?: (state: any) => any;
    mapDispatchToProps?: (dispatch?: any) => any;
  }): (
    Component: typeof SearchTableStateImplement,
  ) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}

export interface TableDensitySettingProps {
  density: TableDensity;
  onReset: (...args: any[]) => any;
  onChange: (...args: any[]) => any;
  renderDensitySettingBtn?: () => ReactNode;
}

export interface ColumnSettingProps {
  columns: ColumnTypeExt[];
  onShowColumns: (...args: any[]) => any;
  onReset: (...args: any[]) => any;
  onDisplayColumn: (...args: any[]) => any;
  onSortEnd: (...args: any[]) => any;
  renderColumnSettingBtn?: () => ReactNode;
}

export interface ExportExcelProps {
  title: string;
  getDataSource: () => any[];
  getColumns: () => ColumnTypeExt[];
  renderExportExcelBtn?: (onExportExcel: () => void) => ReactNode;
}

export interface ReloadTableProps {
  onReload: () => void;
  showLoading: boolean;
  renderReloadBtn?: ({
    showLoading,
    onReload,
  }: {
    showLoading: boolean;
    onReload: () => void;
  }) => ReactNode;
}

export interface ColumnTipTitleProps {
  tip: ReactNode;
  title: ReactNode;
}

/**
 * TableDensity
 */
export enum TableDensity {
  DEFAULT = 'default',
  MIDDLE = 'middle',
  SMALL = 'small',
}
