/**
 * 生成器支持的所有组件名称
 *
 * @example
 * ```js
 * import { Components } from 'adhere-ui-fieldgeneratortodict';
 *
 * Components.AutoComplete.FormItem; // 'AutoCompleteFormItem'
 * ```
 *
 */
const Components = {
  /* ------ Select下拉 start ------ */
  Select: {
    Standard: 'SelectStandard',
    Multi: 'SelectMulti',
    CheckAll: 'SelectCheckAll',
    DropdownRender: 'SelectDropdownRender',
  },
  SelectDynamic: {
    Standard: 'SelectDynamicStandard',
    Multi: 'SelectDynamicMulti',
    CheckAll: 'SelectDynamicCheckAll',
    DropdownRender: 'SelectDynamicDropdownRender',
  },
  SelectAC: {
    Standard: 'SelectACStandard',
    Multi: 'SelectACMulti',
    CheckAll: 'SelectACCheckAll',
  },
  /* ------ Select下拉 end ------ */

  /* ------ Checkbox start ------*/
  CheckBox: {
    Standard: 'CheckBoxStandard',
    GroupExt: 'CheckBoxGroupExt',
    Vertical: 'CheckBoxVertical',
    CheckAllVertical: 'CheckBoxCheckAllVertical',
    Horizontal: 'CheckBoxHorizontal',
    CheckAllHorizontal: 'CheckBoxCheckAllHorizontal',
    Custom: 'CheckBoxCustom',
    CheckAllCustom: 'CheckBoxCheckAllCustom',
    SuspenseStandard: 'CheckBoxSuspenseStandard',
    SuspenseGroupExt: 'CheckBoxSuspenseGroupExt',
    SuspenseVertical: 'CheckBoxSuspenseVertical',
    SuspenseCheckAllVertical: 'CheckBoxSuspenseCheckAllVertical',
    SuspenseHorizontal: 'CheckBoxSuspenseHorizontal',
    SuspenseCheckAllHorizontal: 'CheckBoxSuspenseCheckAllHorizontal',
    SuspenseCustom: 'CheckBoxSuspenseCustom',
    SuspenseCheckAllCustom: 'CheckBoxSuspenseCheckAllCustom',
    Select: 'CheckBoxSelect',
    CheckAllSelect: 'CheckBoxCheckAllSelect',
    CustomSelect: 'CheckBoxCustomSelect',
    CheckAllCustomSelect: 'CheckBoxCheckAllCustomSelect',
  },
  CheckBoxDynamic: {
    Standard: 'CheckBoxDynamicStandard',
    GroupExt: 'CheckBoxDynamicGroupExt',
    Vertical: 'CheckBoxDynamicVertical',
    CheckAllVertical: 'CheckBoxDynamicCheckAllVertical',
    Horizontal: 'CheckBoxDynamicHorizontal',
    CheckAllHorizontal: 'CheckBoxDynamicCheckAllHorizontal',
    Custom: 'CheckBoxDynamicCustom',
    CheckAllCustom: 'CheckBoxDynamicCheckAllCustom',
    SuspenseStandard: 'CheckBoxDynamicSuspenseStandard',
    SuspenseGroupExt: 'CheckBoxDynamicSuspenseGroupExt',
    SuspenseVertical: 'CheckBoxDynamicSuspenseVertical',
    SuspenseCheckAllVertical: 'CheckBoxDynamicSuspenseCheckAllVertical',
    SuspenseHorizontal: 'CheckBoxDynamicSuspenseHorizontal',
    SuspenseCheckAllHorizontal: 'CheckBoxDynamicSuspenseCheckAllHorizontal',
    SuspenseCustom: 'CheckBoxDynamicSuspenseCustom',
    SuspenseCheckAllCustom: 'CheckBoxDynamicSuspenseCheckAllCustom',
    Select: 'CheckBoxDynamicSelect',
    CheckAllSelect: 'CheckBoxDynamicCheckAllSelect',
    CustomSelect: 'CheckBoxDynamicCustomSelect',
    CheckAllCustomSelect: 'CheckBoxDynamicCheckAllCustomSelect',
  },
  CheckBoxAC: {
    Standard: 'CheckBoxACStandard',
    CheckAll: 'CheckBoxACCheckAll',
    Custom: 'CheckBoxACCustom',
    CheckAllCustom: 'CheckBoxACCheckAllCustom',
  },
  /* ------ Checkbox end ------*/

  /* ------Radio start ------ */
  Radio: {
    Vertical: 'RadioVertical',
    Horizontal: 'RadioHorizontal',
    Custom: 'RadioCustom',
    Button: 'RadioButton',
    SuspenseVertical: 'RadioSuspenseVertical',
    SuspenseHorizontal: 'RadioSuspenseHorizontal',
    SuspenseCustom: 'RadioSuspenseCustom',
    SuspenseButton: 'RadioSuspenseButton',
    Select: 'RadioSelect',
    CustomSelect: 'RadioCustomSelect',
    ButtonSelect: 'RadioButtonSelect',
  },
  RadioDynamic: {
    Vertical: 'RadioDynamicVertical',
    Horizontal: 'RadioDynamicHorizontal',
    Custom: 'RadioDynamicCustom',
    Button: 'RadioDynamicButton',
    SuspenseVertical: 'RadioDynamicSuspenseVertical',
    SuspenseHorizontal: 'RadioDynamicSuspenseHorizontal',
    SuspenseCustom: 'RadioDynamicSuspenseCustom',
    SuspenseButton: 'RadioDynamicSuspenseButton',
    Select: 'RadioDynamicSelect',
    CustomSelect: 'RadioDynamicCustomSelect',
    ButtonSelect: 'RadioDynamicButtonSelect',
  },
  RadioAC: {
    Standard: 'RadioACStandard',
    Custom: 'RadioACCustom',
    Button: 'RadioACButton',
  },
  /* ------Radio end ------ */

  /* ------Tag start ------ */
  Tag: {
    Vertical: 'TagVertical',
    VerticalCheckable: 'TagVerticalCheckable',
    CheckAllVerticalCheckable: 'TagCheckAllVerticalCheckable',
    Horizontal: 'TagHorizontal',
    HorizontalCheckable: 'TagVerticalCheckable',
    CheckAllHorizontalCheckable: 'TagCheckAllHorizontalCheckable',
    SuspenseVertical: 'TagSuspenseVertical',
    SuspenseVerticalCheckable: 'TagSuspenseVerticalCheckable',
    SuspenseCheckAllVerticalCheckable: 'TagSuspenseCheckAllVerticalCheckable',
    SuspenseHorizontal: 'TagSuspenseHorizontal',
    SuspenseHorizontalCheckable: 'TagSuspenseHorizontalCheckable',
    SuspenseCheckAllHorizontalCheckable: 'TagSuspenseCheckAllHorizontalCheckable',
    Select: 'TagSelect',
    MultiSelect: 'TagMultiSelect',
    CheckAllSelect: 'TagCheckAllSelect',
  },
  TagDynamic: {
    Vertical: 'TagDynamicVertical',
    VerticalCheckable: 'TagDynamicVerticalCheckable',
    CheckAllVerticalCheckable: 'TagDynamicCheckAllVerticalCheckable',
    Horizontal: 'TagDynamicHorizontal',
    HorizontalCheckable: 'TagDynamicHorizontalCheckable',
    CheckAllHorizontalCheckable: 'TagDynamicCheckAllHorizontalCheckable',
    SuspenseVertical: 'TagDynamicSuspenseVertical',
    SuspenseVerticalCheckable: 'TagDynamicSuspenseVerticalCheckable',
    SuspenseCheckAllVerticalCheckable: 'TagDynamicSuspenseCheckAllVerticalCheckable',
    SuspenseHorizontal: 'TagDynamicSuspenseHorizontal',
    SuspenseHorizontalCheckable: 'TagDynamicSuspenseHorizontalCheckable',
    SuspenseCheckAllHorizontalCheckable: 'TagDynamicSuspenseCheckAllHorizontalCheckable',
    Select: 'TagDynamicSelect',
    MultiSelect: 'TagDynamicMultiSelect',
    CheckAllSelect: 'TagDynamicCheckAllSelect',
  },
  TagAC: {
    Standard: 'TagACStandard',
    CheckAll: 'TagACCheckAll',
  },
  /* ------Tag end ------ */

  /* ------ List start ------ */
  List: {
    Standard: 'ListStandard',
    SuspenseStandard: 'ListSuspenseStandard',
    Select: 'ListSelect',
    MultiSelect: 'ListMultiSelect',
    CheckAllSelect: 'ListCheckAllSelect',
  },
  ListDynamic: {
    Standard: 'ListDynamicStandard',
    SuspenseStandard: 'ListDynamicSuspenseStandard',
    Select: 'ListDynamicSelect',
    MultiSelect: 'ListDynamicMultiSelect',
    CheckAllSelect: 'ListDynamicCheckAllSelect',
  },
  ListPagination: {
    // 普通列表(少一个ListPaging 文件) ******
    Standard: 'ListPaginationStandard',
    // 普通列表
    Multi: 'ListPaginationMulti',
    SuspenseStandard: 'ListPaginationSuspenseStandard',
    SuspenseMulti: 'ListPaginationSuspenseMulti',
    // 下拉列表
    Select: 'ListPaginationSelect',
    // 下拉列表
    MultiSelect: 'ListPaginationMultiSelect',
  },
  ListAC: {
    Standard: 'ListACStandard',
    Multi: 'ListACMulti',
    CheckAll: 'ListACCheckAll',
    // 下拉分页列表
    Paging: 'ListACPaging',
    // 下拉分页列表
    MultiPaging: 'ListACMultiPaging',
  },
  /* ------ List end ------ */

  /* ------ Table start ------ */
  Table: {
    Standard: 'TableStandard',
    SuspenseStandard: 'TableSuspenseStandard',
    Select: 'TableSelect',
    MultiSelect: 'TableMultiSelect',
  },
  TableDynamic: {
    Standard: 'TableDynamicStandard',
    SuspenseStandard: 'TableDynamicSuspenseStandard',
    Select: 'TableDynamicSelect',
    MultiSelect: 'TableDynamicMultiSelect',
  },
  TablePagination: {
    Standard: 'TablePaginationStandard',
    Multi: 'TablePaginationMulti',
    SuspenseStandard: 'TablePaginationSuspenseStandard',
    SuspenseMulti: 'TablePaginationSuspenseMulti',
    Select: 'TablePaginationSelect',
    MultiSelect: 'TablePaginationMultiSelect',
  },
  TableAC: {
    Standard: 'TableACStandard',
    Multi: 'TableACMulti',
    Paging: 'TableACPaging',
    MultiPaging: 'TableACMultiPaging',
  },
  TableTreeSelect: {
    Standard: 'TableTreeSelectStandard',
    Multi: 'TableTreeSelectMulti',
    Paging: 'TableTreeSelectPaging',
    MultiPaging: 'TableTreeSelectMultiPaging',
  },
  TableTreeSelectDynamic: {
    Standard: 'TableTreeSelectDynamicStandard',
    Multi: 'TableTreeSelectDynamicMulti',
  },
  TableTreeAC: {
    Standard: 'TableTreeACStandard',
    Multi: 'TableTreeACMulti',
    Paging: 'TableTreeACPaging',
    MultiPaging: 'TableTreeACMultiPaging',
  },
  /* ------ Table end ------ */

  /* ------ Transfer start ------ */
  Transfer: {
    Standard: 'TransferStandard',
    SuspenseStandard: 'TransferSuspenseStandard',
    Select: 'TransferSelect',
    Tree: 'TransferTree',
    Table: 'TransferTable',
    TreeSelect: 'TransferTreeSelect',
    TableSelect: 'TransferTableSelect',
  },
  TransferDynamic: {
    Standard: 'TransferDynamicStandard',
    SuspenseStandard: 'TransferDynamicSuspenseStandard',
    Select: 'TransferDynamicSelect',
    Tree: 'TransferDynamicTree',
    Table: 'TransferDynamicTable',
    TreeSelect: 'TransferDynamicTreeSelect',
    TableSelect: 'TransferDynamicTableSelect',
  },
  TransferAC: {
    Standard: 'TransferACStandard',
  },
  /* ------ Transfer end ------ */

  /* ------ TreeSelect start ------ */
  Tree: {
    Standard: 'TreeStandard',
    Multi: 'TreeMulti',
    Leaf: 'TreeLeaf',
    LeafMulti: 'TreeLeafMulti',
    CheckedShowAll: 'TreeCheckedShowAll',
    CheckedShowChild: 'TreeCheckedShowChild',
    CheckedShowParent: 'TreeCheckedShowParent',
    Flat: 'TreeFlat',
    FlatMulti: 'TreeFlatMulti',
    FlatLeaf: 'TreeFlatLeaf',
    FlatLeafMulti: 'TreeFlatLeafMulti',
    FlatCheckedShowAll: 'TreeFlatCheckedShowAll',
    FlatCheckedShowChild: 'TreeFlatCheckedShowChild',
    FlatCheckedShowParent: 'TreeFlatCheckedShowParent',
  },
  TreeDynamic: {
    Standard: 'TreeDynamicStandard',
    Multi: 'TreeDynamicMulti',
    Leaf: 'TreeDynamicLeaf',
    LeafMulti: 'TreeDynamicLeafMulti',
    CheckedShowAll: 'TreeDynamicCheckedShowAll',
    CheckedShowChild: 'TreeDynamicCheckedShowChild',
    CheckedShowParent: 'TreeDynamicCheckedShowParent',
    Flat: 'TreeDynamicFlat',
    FlatMulti: 'TreeDynamicFlatMulti',
    FlatLeaf: 'TreeDynamicFlatLeaf',
    FlatLeafMulti: 'TreeDynamicFlatLeafMulti',
    FlatCheckedShowAll: 'TreeDynamicFlatCheckedShowAll',
    FlatCheckedShowChild: 'TreeDynamicFlatCheckedShowChild',
    FlatCheckedShowParent: 'TreeDynamicFlatCheckedShowParent',
  },
  TreeAsync: {
    Standard: 'TreeAsyncStandard',
    Multi: 'TreeAsyncMulti',
    Leaf: 'TreeAsyncLeaf',
    LeafMulti: 'TreeAsyncLeafMulti',
    CheckedShowAll: 'TreeAsyncCheckedShowAll',
    CheckedShowChild: 'TreeAsyncCheckedShowChild',
    CheckedShowParent: 'TreeAsyncCheckedShowParent',
    FlatStandard: 'TreeAsyncFlatStandard',
    FlatMulti: 'TreeAsyncFlatMulti',
    FlatLeaf: 'TreeAsyncFlatLeaf',
    FlatLeafMulti: 'TreeAsyncFlatLeafMulti',
    FlatCheckedShowAll: 'TreeAsyncFlatCheckedShowAll',
    FlatCheckedShowChild: 'TreeAsyncFlatCheckedShowChild',
    FlatCheckedShowParent: 'TreeAsyncFlatCheckedShowParent',
  },
  TreeAC: {
    Standard: 'TreeACStandard',
    Multi: 'TreeACMulti',
    Leaf: 'TreeACLeaf',
    MultiLeaf: 'TreeACMultiLeaf',
    // ShowAll: 'TreeACShowAll',
    // ShowChild: 'TreeACShowChild',
    // ShowParent: 'TreeACShowParent',
  },
  /* ------ TreeSelect end ------ */

  /* ------ Cascader start ------ */
  Cascader: {
    Standard: 'CascaderStandard',
    Multi: 'CascaderMulti',
    ShowChild: 'CascaderShowChild',
    ShowParent: 'CascaderShowParent',
    ChangeOnSelect: 'CascaderChangeOnSelect',
    TreeSelect: 'CascaderTreeSelect',
    FlatStandard: 'CascaderFlatStandard',
    FlatMulti: 'CascaderFlatMulti',
    FlatShowChild: 'CascaderFlatShowChild',
    FlatShowParent: 'CascaderFlatShowParent',
    FlatChangeOnSelect: 'CascaderFlatChangeOnSelect',
    FlatTreeSelect: 'CascaderFlatTreeSelect',
  },
  CascaderDynamic: {
    Standard: 'CascaderDynamicStandard',
    Multi: 'CascaderDynamicMulti',
    ShowChild: 'CascaderDynamicShowChild',
    ShowParent: 'CascaderDynamicShowParent',
    ChangeOnSelect: 'CascaderDynamicChangeOnSelect',
    TreeSelect: 'CascaderDynamicTreeSelect',
    FlatStandard: 'CascaderDynamicFlatStandard',
    FlatMulti: 'CascaderDynamicFlatMulti',
    FlatShowChild: 'CascaderDynamicFlatShowChild',
    FlatShowParent: 'CascaderDynamicFlatShowParent',
    FlatChangeOnSelect: 'CascaderDynamicFlatChangeOnSelect',
    FlatTreeSelect: 'CascaderDynamicFlatTreeSelect',
  },
  CascaderAsync: {
    Standard: 'CascaderAsyncStandard',
    Multi: 'CascaderAsyncMulti',
    ShowChild: 'CascaderAsyncShowChild',
    ShowParent: 'CascaderAsyncShowParent',
    ChangeOnSelect: 'CascaderAsyncChangeOnSelect',
    FlatStandard: 'CascaderAsyncFlatStandard',
    FlatMulti: 'CascaderAsyncFlatMulti',
    FlatShowChild: 'CascaderAsyncFlatShowChild',
    FlatShowParent: 'CascaderAsyncFlatShowParent',
    FlatChangeOnSelect: 'CascaderAsyncFlatChangeOnSelect',
  },
  /* ------ Cascader end ------ */

  /* ------ AutoComplete start ------ */
  AutoComplete: {
    Standard: 'AutoCompleteStandard',
    SelectInput: 'AutoCompleteSelectInput',
  },
  AutoCompleteDynamic: {
    Standard: 'AutoCompleteDynamicStandard',
    SelectInput: 'AutoCompleteDynamicSelectInput',
  },
  /* ------ AutoComplete end ------ */

  /* ------ InputMultiple start ------ */
  InputMultiple: {
    Standard: 'InputMultipleStandard',
    Vertical: 'InputMultipleVertical',
    Horizontal: 'InputMultipleHorizontal',
    VerticalCheckAll: 'InputMultipleVerticalCheckAll',
    HorizontalCheckAll: 'InputMultipleHorizontalCheckAll',
    Select: 'InputMultipleSelect',
    VerticalSelect: 'InputMultipleVerticalSelect',
    HorizontalSelect: 'InputMultipleHorizontalSelect',
    VerticalCheckAllSelect: 'InputMultipleVerticalCheckAllSelect',
    HorizontalCheckAllSelect: 'InputMultipleHorizontalCheckAllSelect',
  },
  InputMultipleDynamic: {
    Standard: 'InputMultipleDynamicStandard',
    Vertical: 'InputMultipleDynamicVertical',
    Horizontal: 'InputMultipleDynamicHorizontal',
    VerticalCheckAll: 'InputMultipleDynamicVerticalCheckAll',
    HorizontalCheckAll: 'InputMultipleDynamicHorizontalCheckAll',
    Select: 'InputMultipleDynamicSelect',
    VerticalSelect: 'InputMultipleDynamicVerticalSelect',
    HorizontalSelect: 'InputMultipleDynamicHorizontalSelect',
    VerticalCheckAllSelect: 'InputMultipleDynamicVerticalCheckAllSelect',
    HorizontalCheckAllSelect: 'InputMultipleDynamicHorizontalCheckAllSelect',
  },
  /* ------ InputMultiple end ------ */

  /* ------ SearchTable start ------ */
  SearchTable: {
    Standard: 'SearchTableStandard',
    EditorCell: 'SearchTableEditorCell',
    EditorRow: 'SearchTableEditorRow',
    EditorTable: 'SearchTableEditorTable',
    RowDragSort: 'SearchTableRowDragSort',
    EditorCellRowDragSort: 'SearchTableEditorCellRowDragSort',
    EditorRowDragSort: 'SearchTableEditorRowDragSort',
    EditorTableRowDragSort: 'SearchTableEditorTableRowDragSort',
    // 这些是选取功能(不带editor和drag)
    SingleSelect: 'SearchTableSingleSelect',
    MultipleSelect: 'SearchTableMultipleSelect',
    ContinuousMultipleSelect: 'SearchTableContinuousMultipleSelect',
    TreeSingleSelect: 'SearchTableTreeSingleSelect',
    TreeMultipleSelect: 'SearchTableTreeMultipleSelect',
    TreeContinuousMultipleSelect: 'SearchTableTreeContinuousMultipleSelect',
    // async(只有tree才有)
    AsyncSingleSelect: 'SearchTableAsyncSingleSelect',
    AsyncMultipleSelect: 'SearchTableAsyncMultipleSelect',
    AsyncContinuousMultipleSelect: 'SearchTableAsyncContinuousMultipleSelect',
  },
  /* ------ SearchTable end ------ */

  /* ------ SearchList start ------ */
  SearchList: {
    Standard: 'SearchListStandard',
    SingleSelect: 'SearchListSingleSelect',
    MultipleSelect: 'SearchListMultipleSelect',
  },
  /* ------ SearchList end ------ */

  /* ------ MobileInputMultiple start ------ */
  MobileInputMultiple: {
    Standard: 'MobileInputMultipleStandard',
    CheckAll: 'MobileInputMultipleCheckAll',
    Filter: 'MobileInputMultipleFilter',
    FilterCheckAll: 'MobileInputMultipleFilterCheckAll',
    Select: 'MobileInputMultipleSelect',
    CheckAllSelect: 'MobileInputMultipleCheckAllSelect',
    FilterSelect: 'MobileInputMultipleFilterSelect',
    FilterCheckAllSelect: 'MobileInputMultipleFilterCheckAllSelect',
  },
  MobileInputMultipleDynamic: {
    Standard: 'MobileInputMultipleDynamicStandard',
    CheckAll: 'MobileInputMultipleDynamicCheckAll',
    Filter: 'MobileInputMultipleDynamicFilter',
    FilterCheckAll: 'MobileInputMultipleDynamicFilterCheckAll',
    Select: 'MobileInputMultipleDynamicSelect',
    CheckAllSelect: 'MobileInputMultipleDynamicCheckAllSelect',
    FilterSelect: 'MobileInputMultipleDynamicFilterSelect',
    FilterCheckAllSelect: 'MobileInputMultipleDynamicFilterCheckAllSelect',
  },
  /* ------ MobileInputMultiple end ------ */

  /* ------ MobileCheckList ------ */
  MobileCheckList: {
    Standard: 'MobileCheckListStandard',
    CheckAll: 'MobileCheckListCheckAll',
    Filter: 'MobileCheckListFilter',
    FilterCheckAll: 'MobileCheckListFilterCheckAll',
  },
  MobileCheckListDynamic: {
    Standard: 'MobileCheckListDynamicStandard',
    CheckAll: 'MobileCheckListDynamicCheckAll',
    Filter: 'MobileCheckListDynamicFilter',
    FilterCheckAll: 'MobileCheckListDynamicFilterCheckAll',
  },
  MobileCheckboxCheckList: {
    Standard: 'MobileCheckboxCheckListStandard',
    CheckAll: 'MobileCheckboxCheckListCheckAll',
    Filter: 'MobileCheckboxCheckListFilter',
    FilterCheckAll: 'MobileCheckboxCheckListFilterCheckAll',
  },
  MobileCheckboxCheckListDynamic: {
    Standard: 'MobileCheckboxCheckListDynamicStandard',
    CheckAll: 'MobileCheckboxCheckListDynamicCheckAll',
    Filter: 'MobileCheckboxCheckListDynamicFilter',
    FilterCheckAll: 'MobileCheckboxCheckListDynamicFilterCheckAll',
  },
  MobileCheckListPagination: {
    Standard: 'MobileCheckListPaginationStandard',
    Filter: 'MobileCheckListPaginationFilter',
  },
  MobileCheckListPaginationDynamic: {
    Filter: 'MobileCheckListPaginationDynamicFilter',
  },
  MobileCheckboxCheckListPagination: {
    Standard: 'MobileCheckboxCheckListPaginationStandard',
    Filter: 'MobileCheckboxCheckListPaginationFilter',
  },
  MobileCheckboxCheckListPaginationDynamic: {
    Filter: 'MobileCheckboxCheckListPaginationDynamicFilter',
  },
  MobileCheckListAC: {
    Standard: 'MobileCheckListACStandard',
    Paging: 'MobileCheckListACPaging',
  },
  MobileCheckboxCheckListAC: {
    Standard: 'MobileCheckboxCheckListACStandard',
    Paging: 'MobileCheckboxCheckListACPaging',
  },

  /* ------ MobileCheckbox ------ */
  MobileCheckbox: {
    Standard: 'MobileCheckboxStandard',
    CheckAll: 'MobileCheckboxCheckAll',
    Filter: 'MobileCheckboxFilter',
    FilterCheckAll: 'MobileCheckboxFilterCheckAll',
  },
  MobileCheckboxDynamic: {
    Standard: 'MobileCheckboxDynamicStandard',
    CheckAll: 'MobileCheckboxDynamicCheckAll',
    Filter: 'MobileCheckboxDynamicFilter',
    FilterCheckAll: 'MobileCheckboxDynamicFilterCheckAll',
  },
  MobileCheckboxPagination: {
    Standard: 'MobileCheckboxPaginationStandard',
    Filter: 'MobileCheckboxPaginationFilter',
  },
  MobileCheckboxPaginationDynamic: {
    Filter: 'MobileCheckboxPaginationDynamicFilter',
  },
  MobileCheckboxAC: {
    Standard: 'MobileCheckboxACStandard',
    Paging: 'MobileCheckboxACPaging',
  },

  /* ------ MobileRadio ------ */
  MobileRadio: {
    Standard: 'MobileRadioStandard',
    Filter: 'MobileRadioFilter',
  },
  MobileRadioDynamic: {
    Standard: 'MobileRadioDynamicStandard',
    Filter: 'MobileRadioDynamicFilter',
  },
  MobileRadioPagination: {
    Standard: 'MobileRadioPaginationStandard',
    Filter: 'MobileRadioPaginationFilter',
  },
  MobileRadioPaginationDynamic: {
    Filter: 'MobileRadioPaginationDynamicFilter',
  },
  MobileRadioAC: {
    Standard: 'MobileRadioACStandard',
    Paging: 'MobileRadioACPaging',
  },

  /* ------ MobileSelector ------ */
  MobileSelector: {
    Standard: 'MobileSelectorStandard',
    CheckAll: 'MobileSelectorCheckAll',
    Filter: 'MobileSelectorFilter',
    FilterCheckAll: 'MobileSelectorFilterCheckAll',
  },
  MobileSelectorDynamic: {
    Standard: 'MobileSelectorDynamicStandard',
    CheckAll: 'MobileSelectorDynamicCheckAll',
    Filter: 'MobileSelectorDynamicFilter',
    FilterCheckAll: 'MobileSelectorDynamicFilterCheckAll',
  },
  MobileSelectorPagination: {
    Standard: 'MobileSelectorPaginationStandard',
    Filter: 'MobileSelectorPaginationFilter',
  },
  MobileSelectorPaginationDynamic: {
    Filter: 'MobileSelectorPaginationDynamicFilter',
  },
  MobileSelectorAC: {
    Standard: 'MobileSelectorACStandard',
    Paging: 'MobileSelectorACPaging',
  },

  /* ------ MobileList ------ */
  MobileList: {
    Standard: 'MobileListStandard',
  },
  MobileListDynamic: {
    Standard: 'MobileListDynamicStandard',
  },

  /* ------ MobileCascaderView ------ */
  MobileCascaderView: {
    Standard: 'MobileCascaderViewStandard',
    Filter: 'MobileCascaderViewFilter',
  },
  MobileCascaderViewDynamic: {
    Standard: 'MobileCascaderViewDynamicStandard',
    Filter: 'MobileCascaderViewDynamicFilter',
  },
  MobileCascaderViewAsync: {
    Standard: 'MobileCascaderViewAsyncStandard',
  },

  /* MobileTreeSelect */
  MobileTreeSelect: {
    Standard: 'MobileTreeSelectStandard',
    Leaf: 'MobileTreeSelectLeaf',
    ShowAll: 'MobileTreeSelectShowAll',
    ShowChild: 'MobileTreeSelectShowChild',
  },
  MobileTreeSelectDynamic: {
    Standard: 'MobileTreeSelectDynamicStandard',
    Leaf: 'MobileTreeSelectDynamicLeaf',
    ShowAll: 'MobileTreeSelectDynamicShowAll',
    ShowChild: 'MobileTreeSelectDynamicShowChild',
  },
  MobileTreeSelectAC: {
    Standard: 'MobileTreeSelectACStandard',
    Leaf: 'MobileTreeSelectACLeaf',
    ShowAll: 'MobileTreeSelectACShowAll',
    ShowChild: 'MobileTreeSelectACShowChild',
  },
  MobileTreeSelectAsync: {
    Standard: 'MobileTreeSelectAsyncStandard',
    Leaf: 'MobileTreeSelectAsyncLeaf',
    ShowAll: 'MobileTreeSelectAsyncShowAll',
    ShowChild: 'MobileTreeSelectAsyncShowChild',
  },

  Breadcrumb: {
    Standard: 'BreadcrumbStandard',
    SuspenseStandard: 'BreadcrumbSuspenseStandard',
  },
  BreadcrumbDynamic: {
    Standard: 'BreadcrumbDynamicStandard',
    SuspenseStandard: 'BreadcrumbDynamicSuspenseStandard',
  },
  Dropdown: {
    Standard: 'DropdownStandard',
  },
  DropdownDynamic: {
    Standard: 'DropdownDynamicStandard',
  },
  Mentions: {
    Standard: 'MentionsStandard',
    SuspenseStandard: 'MentionsSuspenseStandard',
  },
  MentionsDynamic: {
    Standard: 'MentionsDynamicStandard',
    SuspenseStandard: 'MentionsDynamicSuspenseStandard',
  },
  Menu: {
    Standard: 'MenuStandard',
  },
  MenuDynamic: {
    Standard: 'MenuDynamicStandard',
  },
  Segmented: {
    Standard: 'SegmentedStandard',
    SuspenseStandard: 'SegmentedSuspenseStandard',
  },
  SegmentedDynamic: {
    Standard: 'SegmentedDynamicStandard',
    SuspenseStandard: 'SegmentedDynamicSuspenseStandard',
  },
  Steps: {
    Standard: 'StepsStandard',
    SuspenseStandard: 'StepsSuspenseStandard',
  },
  StepsDynamic: {
    Standard: 'StepsDynamicStandard',
    SuspenseStandard: 'StepsDynamicSuspenseStandard',
  },
  Timeline: {
    Standard: 'TimelineStandard',
    SuspenseStandard: 'TimelineSuspenseStandard',
  },
  TimelineDynamic: {
    Standard: 'TimelineDynamicStandard',
    SuspenseStandard: 'TimelineDynamicSuspenseStandard',
  },
} as const;

export default Components;
