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
    HorizontalCheckable: 'TagDynamicVerticalCheckable',
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
  /* ------ Table end ------ */

  /* ------ Transfer start ------ */
  Transfer: {
    Standard: 'TransferStandard',
    SuspenseStandard: 'TransferSuspenseStandard',
    Select: 'TransferSelect',
  },
  TransferDynamic: {
    Standard: 'TransferDynamicStandard',
    SuspenseStandard: 'TransferDynamicSuspenseStandard',
    Select: 'TransferDynamicSelect',
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
