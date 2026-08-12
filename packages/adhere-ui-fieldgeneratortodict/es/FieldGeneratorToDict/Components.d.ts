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
declare const Components: {
    readonly Select: {
        readonly Standard: "SelectStandard";
        readonly Multi: "SelectMulti";
        readonly CheckAll: "SelectCheckAll";
        readonly DropdownRender: "SelectDropdownRender";
    };
    readonly SelectDynamic: {
        readonly Standard: "SelectDynamicStandard";
        readonly Multi: "SelectDynamicMulti";
        readonly CheckAll: "SelectDynamicCheckAll";
        readonly DropdownRender: "SelectDynamicDropdownRender";
    };
    readonly SelectAC: {
        readonly Standard: "SelectACStandard";
        readonly Multi: "SelectACMulti";
        readonly CheckAll: "SelectACCheckAll";
    };
    readonly CheckBox: {
        readonly Standard: "CheckBoxStandard";
        readonly GroupExt: "CheckBoxGroupExt";
        readonly Vertical: "CheckBoxVertical";
        readonly CheckAllVertical: "CheckBoxCheckAllVertical";
        readonly Horizontal: "CheckBoxHorizontal";
        readonly CheckAllHorizontal: "CheckBoxCheckAllHorizontal";
        readonly Custom: "CheckBoxCustom";
        readonly CheckAllCustom: "CheckBoxCheckAllCustom";
        readonly SuspenseStandard: "CheckBoxSuspenseStandard";
        readonly SuspenseGroupExt: "CheckBoxSuspenseGroupExt";
        readonly SuspenseVertical: "CheckBoxSuspenseVertical";
        readonly SuspenseCheckAllVertical: "CheckBoxSuspenseCheckAllVertical";
        readonly SuspenseHorizontal: "CheckBoxSuspenseHorizontal";
        readonly SuspenseCheckAllHorizontal: "CheckBoxSuspenseCheckAllHorizontal";
        readonly SuspenseCustom: "CheckBoxSuspenseCustom";
        readonly SuspenseCheckAllCustom: "CheckBoxSuspenseCheckAllCustom";
        readonly Select: "CheckBoxSelect";
        readonly CheckAllSelect: "CheckBoxCheckAllSelect";
        readonly CustomSelect: "CheckBoxCustomSelect";
        readonly CheckAllCustomSelect: "CheckBoxCheckAllCustomSelect";
    };
    readonly CheckBoxDynamic: {
        readonly Standard: "CheckBoxDynamicStandard";
        readonly GroupExt: "CheckBoxDynamicGroupExt";
        readonly Vertical: "CheckBoxDynamicVertical";
        readonly CheckAllVertical: "CheckBoxDynamicCheckAllVertical";
        readonly Horizontal: "CheckBoxDynamicHorizontal";
        readonly CheckAllHorizontal: "CheckBoxDynamicCheckAllHorizontal";
        readonly Custom: "CheckBoxDynamicCustom";
        readonly CheckAllCustom: "CheckBoxDynamicCheckAllCustom";
        readonly SuspenseStandard: "CheckBoxDynamicSuspenseStandard";
        readonly SuspenseGroupExt: "CheckBoxDynamicSuspenseGroupExt";
        readonly SuspenseVertical: "CheckBoxDynamicSuspenseVertical";
        readonly SuspenseCheckAllVertical: "CheckBoxDynamicSuspenseCheckAllVertical";
        readonly SuspenseHorizontal: "CheckBoxDynamicSuspenseHorizontal";
        readonly SuspenseCheckAllHorizontal: "CheckBoxDynamicSuspenseCheckAllHorizontal";
        readonly SuspenseCustom: "CheckBoxDynamicSuspenseCustom";
        readonly SuspenseCheckAllCustom: "CheckBoxDynamicSuspenseCheckAllCustom";
        readonly Select: "CheckBoxDynamicSelect";
        readonly CheckAllSelect: "CheckBoxDynamicCheckAllSelect";
        readonly CustomSelect: "CheckBoxDynamicCustomSelect";
        readonly CheckAllCustomSelect: "CheckBoxDynamicCheckAllCustomSelect";
    };
    readonly CheckBoxAC: {
        readonly Standard: "CheckBoxACStandard";
        readonly CheckAll: "CheckBoxACCheckAll";
        readonly Custom: "CheckBoxACCustom";
        readonly CheckAllCustom: "CheckBoxACCheckAllCustom";
    };
    readonly Radio: {
        readonly Vertical: "RadioVertical";
        readonly Horizontal: "RadioHorizontal";
        readonly Custom: "RadioCustom";
        readonly Button: "RadioButton";
        readonly SuspenseVertical: "RadioSuspenseVertical";
        readonly SuspenseHorizontal: "RadioSuspenseHorizontal";
        readonly SuspenseCustom: "RadioSuspenseCustom";
        readonly SuspenseButton: "RadioSuspenseButton";
        readonly Select: "RadioSelect";
        readonly CustomSelect: "RadioCustomSelect";
        readonly ButtonSelect: "RadioButtonSelect";
    };
    readonly RadioDynamic: {
        readonly Vertical: "RadioDynamicVertical";
        readonly Horizontal: "RadioDynamicHorizontal";
        readonly Custom: "RadioDynamicCustom";
        readonly Button: "RadioDynamicButton";
        readonly SuspenseVertical: "RadioDynamicSuspenseVertical";
        readonly SuspenseHorizontal: "RadioDynamicSuspenseHorizontal";
        readonly SuspenseCustom: "RadioDynamicSuspenseCustom";
        readonly SuspenseButton: "RadioDynamicSuspenseButton";
        readonly Select: "RadioDynamicSelect";
        readonly CustomSelect: "RadioDynamicCustomSelect";
        readonly ButtonSelect: "RadioDynamicButtonSelect";
    };
    readonly RadioAC: {
        readonly Standard: "RadioACStandard";
        readonly Custom: "RadioACCustom";
        readonly Button: "RadioACButton";
    };
    readonly Tag: {
        readonly Vertical: "TagVertical";
        readonly VerticalCheckable: "TagVerticalCheckable";
        readonly CheckAllVerticalCheckable: "TagCheckAllVerticalCheckable";
        readonly Horizontal: "TagHorizontal";
        readonly HorizontalCheckable: "TagHorizontalCheckable";
        readonly CheckAllHorizontalCheckable: "TagCheckAllHorizontalCheckable";
        readonly SuspenseVertical: "TagSuspenseVertical";
        readonly SuspenseVerticalCheckable: "TagSuspenseVerticalCheckable";
        readonly SuspenseCheckAllVerticalCheckable: "TagSuspenseCheckAllVerticalCheckable";
        readonly SuspenseHorizontal: "TagSuspenseHorizontal";
        readonly SuspenseHorizontalCheckable: "TagSuspenseHorizontalCheckable";
        readonly SuspenseCheckAllHorizontalCheckable: "TagSuspenseCheckAllHorizontalCheckable";
        readonly Select: "TagSelect";
        readonly MultiSelect: "TagMultiSelect";
        readonly CheckAllSelect: "TagCheckAllSelect";
    };
    readonly TagDynamic: {
        readonly Vertical: "TagDynamicVertical";
        readonly VerticalCheckable: "TagDynamicVerticalCheckable";
        readonly CheckAllVerticalCheckable: "TagDynamicCheckAllVerticalCheckable";
        readonly Horizontal: "TagDynamicHorizontal";
        readonly HorizontalCheckable: "TagDynamicHorizontalCheckable";
        readonly CheckAllHorizontalCheckable: "TagDynamicCheckAllHorizontalCheckable";
        readonly SuspenseVertical: "TagDynamicSuspenseVertical";
        readonly SuspenseVerticalCheckable: "TagDynamicSuspenseVerticalCheckable";
        readonly SuspenseCheckAllVerticalCheckable: "TagDynamicSuspenseCheckAllVerticalCheckable";
        readonly SuspenseHorizontal: "TagDynamicSuspenseHorizontal";
        readonly SuspenseHorizontalCheckable: "TagDynamicSuspenseHorizontalCheckable";
        readonly SuspenseCheckAllHorizontalCheckable: "TagDynamicSuspenseCheckAllHorizontalCheckable";
        readonly Select: "TagDynamicSelect";
        readonly MultiSelect: "TagDynamicMultiSelect";
        readonly CheckAllSelect: "TagDynamicCheckAllSelect";
    };
    readonly TagAC: {
        readonly Standard: "TagACStandard";
        readonly CheckAll: "TagACCheckAll";
    };
    readonly List: {
        readonly Standard: "ListStandard";
        readonly SuspenseStandard: "ListSuspenseStandard";
        readonly Select: "ListSelect";
        readonly MultiSelect: "ListMultiSelect";
        readonly CheckAllSelect: "ListCheckAllSelect";
    };
    readonly ListDynamic: {
        readonly Standard: "ListDynamicStandard";
        readonly SuspenseStandard: "ListDynamicSuspenseStandard";
        readonly Select: "ListDynamicSelect";
        readonly MultiSelect: "ListDynamicMultiSelect";
        readonly CheckAllSelect: "ListDynamicCheckAllSelect";
    };
    readonly ListPagination: {
        readonly Standard: "ListPaginationStandard";
        readonly Multi: "ListPaginationMulti";
        readonly SuspenseStandard: "ListPaginationSuspenseStandard";
        readonly SuspenseMulti: "ListPaginationSuspenseMulti";
        readonly Select: "ListPaginationSelect";
        readonly MultiSelect: "ListPaginationMultiSelect";
    };
    readonly ListAC: {
        readonly Standard: "ListACStandard";
        readonly Multi: "ListACMulti";
        readonly CheckAll: "ListACCheckAll";
        readonly Paging: "ListACPaging";
        readonly MultiPaging: "ListACMultiPaging";
    };
    readonly Table: {
        readonly Standard: "TableStandard";
        readonly SuspenseStandard: "TableSuspenseStandard";
        readonly Select: "TableSelect";
        readonly MultiSelect: "TableMultiSelect";
    };
    readonly TableDynamic: {
        readonly Standard: "TableDynamicStandard";
        readonly SuspenseStandard: "TableDynamicSuspenseStandard";
        readonly Select: "TableDynamicSelect";
        readonly MultiSelect: "TableDynamicMultiSelect";
    };
    readonly TablePagination: {
        readonly Standard: "TablePaginationStandard";
        readonly Multi: "TablePaginationMulti";
        readonly SuspenseStandard: "TablePaginationSuspenseStandard";
        readonly SuspenseMulti: "TablePaginationSuspenseMulti";
        readonly Select: "TablePaginationSelect";
        readonly MultiSelect: "TablePaginationMultiSelect";
    };
    readonly TableAC: {
        readonly Standard: "TableACStandard";
        readonly Multi: "TableACMulti";
        readonly Paging: "TableACPaging";
        readonly MultiPaging: "TableACMultiPaging";
    };
    readonly TableTreeSelect: {
        readonly Standard: "TableTreeSelectStandard";
        readonly Multi: "TableTreeSelectMulti";
        readonly Paging: "TableTreeSelectPaging";
        readonly MultiPaging: "TableTreeSelectMultiPaging";
    };
    readonly TableTreeSelectDynamic: {
        readonly Standard: "TableTreeSelectDynamicStandard";
        readonly Multi: "TableTreeSelectDynamicMulti";
    };
    readonly TableTreeAC: {
        readonly Standard: "TableTreeACStandard";
        readonly Multi: "TableTreeACMulti";
        readonly Paging: "TableTreeACPaging";
        readonly MultiPaging: "TableTreeACMultiPaging";
    };
    readonly Transfer: {
        readonly Standard: "TransferStandard";
        readonly SuspenseStandard: "TransferSuspenseStandard";
        readonly Select: "TransferSelect";
        readonly Tree: "TransferTree";
        readonly TreeFlat: "TransferTreeFlat";
        readonly TreeLeaf: "TransferTreeLeaf";
        readonly TreeCascade: "TransferTreeCascade";
        readonly Table: "TransferTable";
        readonly TreeSelect: "TransferTreeSelect";
        readonly TreeSelectFlat: "TransferTreeSelectFlat";
        readonly TreeSelectLeaf: "TransferTreeSelectLeaf";
        readonly TreeSelectCascade: "TransferTreeSelectCascade";
        readonly TableSelect: "TransferTableSelect";
    };
    readonly TransferDynamic: {
        readonly Standard: "TransferDynamicStandard";
        readonly SuspenseStandard: "TransferDynamicSuspenseStandard";
        readonly Select: "TransferDynamicSelect";
        readonly Tree: "TransferDynamicTree";
        readonly TreeFlat: "TransferDynamicTreeFlat";
        readonly TreeLeaf: "TransferDynamicTreeLeaf";
        readonly TreeCascade: "TransferDynamicTreeCascade";
        readonly Table: "TransferDynamicTable";
        readonly TreeSelect: "TransferDynamicTreeSelect";
        readonly TreeSelectFlat: "TransferDynamicTreeSelectFlat";
        readonly TreeSelectLeaf: "TransferDynamicTreeSelectLeaf";
        readonly TreeSelectCascade: "TransferDynamicTreeSelectCascade";
        readonly TableSelect: "TransferDynamicTableSelect";
    };
    readonly TransferAC: {
        readonly Standard: "TransferACStandard";
    };
    readonly Tree: {
        readonly Standard: "TreeStandard";
        readonly Multi: "TreeMulti";
        readonly Leaf: "TreeLeaf";
        readonly LeafMulti: "TreeLeafMulti";
        readonly CheckedShowAll: "TreeCheckedShowAll";
        readonly CheckedShowChild: "TreeCheckedShowChild";
        readonly CheckedShowParent: "TreeCheckedShowParent";
        readonly Flat: "TreeFlat";
        readonly FlatMulti: "TreeFlatMulti";
        readonly FlatLeaf: "TreeFlatLeaf";
        readonly FlatLeafMulti: "TreeFlatLeafMulti";
        readonly FlatCheckedShowAll: "TreeFlatCheckedShowAll";
        readonly FlatCheckedShowChild: "TreeFlatCheckedShowChild";
        readonly FlatCheckedShowParent: "TreeFlatCheckedShowParent";
    };
    readonly TreeDynamic: {
        readonly Standard: "TreeDynamicStandard";
        readonly Multi: "TreeDynamicMulti";
        readonly Leaf: "TreeDynamicLeaf";
        readonly LeafMulti: "TreeDynamicLeafMulti";
        readonly CheckedShowAll: "TreeDynamicCheckedShowAll";
        readonly CheckedShowChild: "TreeDynamicCheckedShowChild";
        readonly CheckedShowParent: "TreeDynamicCheckedShowParent";
        readonly Flat: "TreeDynamicFlat";
        readonly FlatMulti: "TreeDynamicFlatMulti";
        readonly FlatLeaf: "TreeDynamicFlatLeaf";
        readonly FlatLeafMulti: "TreeDynamicFlatLeafMulti";
        readonly FlatCheckedShowAll: "TreeDynamicFlatCheckedShowAll";
        readonly FlatCheckedShowChild: "TreeDynamicFlatCheckedShowChild";
        readonly FlatCheckedShowParent: "TreeDynamicFlatCheckedShowParent";
    };
    readonly TreeAsync: {
        readonly Standard: "TreeAsyncStandard";
        readonly Multi: "TreeAsyncMulti";
        readonly Leaf: "TreeAsyncLeaf";
        readonly LeafMulti: "TreeAsyncLeafMulti";
        readonly CheckedShowAll: "TreeAsyncCheckedShowAll";
        readonly CheckedShowChild: "TreeAsyncCheckedShowChild";
        readonly CheckedShowParent: "TreeAsyncCheckedShowParent";
        readonly FlatStandard: "TreeAsyncFlatStandard";
        readonly FlatMulti: "TreeAsyncFlatMulti";
        readonly FlatLeaf: "TreeAsyncFlatLeaf";
        readonly FlatLeafMulti: "TreeAsyncFlatLeafMulti";
        readonly FlatCheckedShowAll: "TreeAsyncFlatCheckedShowAll";
        readonly FlatCheckedShowChild: "TreeAsyncFlatCheckedShowChild";
        readonly FlatCheckedShowParent: "TreeAsyncFlatCheckedShowParent";
    };
    readonly TreeAC: {
        readonly Standard: "TreeACStandard";
        readonly Multi: "TreeACMulti";
        readonly Leaf: "TreeACLeaf";
        readonly MultiLeaf: "TreeACMultiLeaf";
    };
    readonly Cascader: {
        readonly Standard: "CascaderStandard";
        readonly Multi: "CascaderMulti";
        readonly ShowChild: "CascaderShowChild";
        readonly ShowParent: "CascaderShowParent";
        readonly ChangeOnSelect: "CascaderChangeOnSelect";
        readonly TreeSelect: "CascaderTreeSelect";
        readonly FlatStandard: "CascaderFlatStandard";
        readonly FlatMulti: "CascaderFlatMulti";
        readonly FlatShowChild: "CascaderFlatShowChild";
        readonly FlatShowParent: "CascaderFlatShowParent";
        readonly FlatChangeOnSelect: "CascaderFlatChangeOnSelect";
        readonly FlatTreeSelect: "CascaderFlatTreeSelect";
    };
    readonly CascaderDynamic: {
        readonly Standard: "CascaderDynamicStandard";
        readonly Multi: "CascaderDynamicMulti";
        readonly ShowChild: "CascaderDynamicShowChild";
        readonly ShowParent: "CascaderDynamicShowParent";
        readonly ChangeOnSelect: "CascaderDynamicChangeOnSelect";
        readonly TreeSelect: "CascaderDynamicTreeSelect";
        readonly FlatStandard: "CascaderDynamicFlatStandard";
        readonly FlatMulti: "CascaderDynamicFlatMulti";
        readonly FlatShowChild: "CascaderDynamicFlatShowChild";
        readonly FlatShowParent: "CascaderDynamicFlatShowParent";
        readonly FlatChangeOnSelect: "CascaderDynamicFlatChangeOnSelect";
        readonly FlatTreeSelect: "CascaderDynamicFlatTreeSelect";
    };
    readonly CascaderAsync: {
        readonly Standard: "CascaderAsyncStandard";
        readonly Multi: "CascaderAsyncMulti";
        readonly ShowChild: "CascaderAsyncShowChild";
        readonly ShowParent: "CascaderAsyncShowParent";
        readonly ChangeOnSelect: "CascaderAsyncChangeOnSelect";
        readonly FlatStandard: "CascaderAsyncFlatStandard";
        readonly FlatMulti: "CascaderAsyncFlatMulti";
        readonly FlatShowChild: "CascaderAsyncFlatShowChild";
        readonly FlatShowParent: "CascaderAsyncFlatShowParent";
        readonly FlatChangeOnSelect: "CascaderAsyncFlatChangeOnSelect";
    };
    readonly AutoComplete: {
        readonly Standard: "AutoCompleteStandard";
        readonly SelectInput: "AutoCompleteSelectInput";
    };
    readonly AutoCompleteDynamic: {
        readonly Standard: "AutoCompleteDynamicStandard";
        readonly SelectInput: "AutoCompleteDynamicSelectInput";
    };
    readonly InputMultiple: {
        readonly Standard: "InputMultipleStandard";
        readonly Vertical: "InputMultipleVertical";
        readonly Horizontal: "InputMultipleHorizontal";
        readonly VerticalCheckAll: "InputMultipleVerticalCheckAll";
        readonly HorizontalCheckAll: "InputMultipleHorizontalCheckAll";
        readonly Select: "InputMultipleSelect";
        readonly VerticalSelect: "InputMultipleVerticalSelect";
        readonly HorizontalSelect: "InputMultipleHorizontalSelect";
        readonly VerticalCheckAllSelect: "InputMultipleVerticalCheckAllSelect";
        readonly HorizontalCheckAllSelect: "InputMultipleHorizontalCheckAllSelect";
    };
    readonly InputMultipleDynamic: {
        readonly Standard: "InputMultipleDynamicStandard";
        readonly Vertical: "InputMultipleDynamicVertical";
        readonly Horizontal: "InputMultipleDynamicHorizontal";
        readonly VerticalCheckAll: "InputMultipleDynamicVerticalCheckAll";
        readonly HorizontalCheckAll: "InputMultipleDynamicHorizontalCheckAll";
        readonly Select: "InputMultipleDynamicSelect";
        readonly VerticalSelect: "InputMultipleDynamicVerticalSelect";
        readonly HorizontalSelect: "InputMultipleDynamicHorizontalSelect";
        readonly VerticalCheckAllSelect: "InputMultipleDynamicVerticalCheckAllSelect";
        readonly HorizontalCheckAllSelect: "InputMultipleDynamicHorizontalCheckAllSelect";
    };
    readonly SearchTable: {
        readonly Standard: "SearchTableStandard";
        readonly EditorCell: "SearchTableEditorCell";
        readonly EditorRow: "SearchTableEditorRow";
        readonly EditorTable: "SearchTableEditorTable";
        readonly RowDragSort: "SearchTableRowDragSort";
        readonly EditorCellRowDragSort: "SearchTableEditorCellRowDragSort";
        readonly EditorRowDragSort: "SearchTableEditorRowDragSort";
        readonly EditorTableRowDragSort: "SearchTableEditorTableRowDragSort";
        readonly SingleSelect: "SearchTableSingleSelect";
        readonly MultipleSelect: "SearchTableMultipleSelect";
        readonly ContinuousMultipleSelect: "SearchTableContinuousMultipleSelect";
        readonly TreeSingleSelect: "SearchTableTreeSingleSelect";
        readonly TreeMultipleSelect: "SearchTableTreeMultipleSelect";
        readonly TreeContinuousMultipleSelect: "SearchTableTreeContinuousMultipleSelect";
        readonly AsyncSingleSelect: "SearchTableAsyncSingleSelect";
        readonly AsyncMultipleSelect: "SearchTableAsyncMultipleSelect";
        readonly AsyncContinuousMultipleSelect: "SearchTableAsyncContinuousMultipleSelect";
    };
    readonly SearchList: {
        readonly Standard: "SearchListStandard";
        readonly SingleSelect: "SearchListSingleSelect";
        readonly MultipleSelect: "SearchListMultipleSelect";
    };
    readonly MobileInputMultiple: {
        readonly Standard: "MobileInputMultipleStandard";
        readonly CheckAll: "MobileInputMultipleCheckAll";
        readonly Filter: "MobileInputMultipleFilter";
        readonly FilterCheckAll: "MobileInputMultipleFilterCheckAll";
        readonly Select: "MobileInputMultipleSelect";
        readonly CheckAllSelect: "MobileInputMultipleCheckAllSelect";
        readonly FilterSelect: "MobileInputMultipleFilterSelect";
        readonly FilterCheckAllSelect: "MobileInputMultipleFilterCheckAllSelect";
    };
    readonly MobileInputMultipleDynamic: {
        readonly Standard: "MobileInputMultipleDynamicStandard";
        readonly CheckAll: "MobileInputMultipleDynamicCheckAll";
        readonly Filter: "MobileInputMultipleDynamicFilter";
        readonly FilterCheckAll: "MobileInputMultipleDynamicFilterCheckAll";
        readonly Select: "MobileInputMultipleDynamicSelect";
        readonly CheckAllSelect: "MobileInputMultipleDynamicCheckAllSelect";
        readonly FilterSelect: "MobileInputMultipleDynamicFilterSelect";
        readonly FilterCheckAllSelect: "MobileInputMultipleDynamicFilterCheckAllSelect";
    };
    readonly MobileCheckList: {
        readonly Standard: "MobileCheckListStandard";
        readonly CheckAll: "MobileCheckListCheckAll";
        readonly Filter: "MobileCheckListFilter";
        readonly FilterCheckAll: "MobileCheckListFilterCheckAll";
    };
    readonly MobileCheckListDynamic: {
        readonly Standard: "MobileCheckListDynamicStandard";
        readonly CheckAll: "MobileCheckListDynamicCheckAll";
        readonly Filter: "MobileCheckListDynamicFilter";
        readonly FilterCheckAll: "MobileCheckListDynamicFilterCheckAll";
    };
    readonly MobileCheckboxCheckList: {
        readonly Standard: "MobileCheckboxCheckListStandard";
        readonly CheckAll: "MobileCheckboxCheckListCheckAll";
        readonly Filter: "MobileCheckboxCheckListFilter";
        readonly FilterCheckAll: "MobileCheckboxCheckListFilterCheckAll";
    };
    readonly MobileCheckboxCheckListDynamic: {
        readonly Standard: "MobileCheckboxCheckListDynamicStandard";
        readonly CheckAll: "MobileCheckboxCheckListDynamicCheckAll";
        readonly Filter: "MobileCheckboxCheckListDynamicFilter";
        readonly FilterCheckAll: "MobileCheckboxCheckListDynamicFilterCheckAll";
    };
    readonly MobileCheckListPagination: {
        readonly Standard: "MobileCheckListPaginationStandard";
        readonly Filter: "MobileCheckListPaginationFilter";
    };
    readonly MobileCheckListPaginationDynamic: {
        readonly Filter: "MobileCheckListPaginationDynamicFilter";
    };
    readonly MobileCheckboxCheckListPagination: {
        readonly Standard: "MobileCheckboxCheckListPaginationStandard";
        readonly Filter: "MobileCheckboxCheckListPaginationFilter";
    };
    readonly MobileCheckboxCheckListPaginationDynamic: {
        readonly Filter: "MobileCheckboxCheckListPaginationDynamicFilter";
    };
    readonly MobileCheckListAC: {
        readonly Standard: "MobileCheckListACStandard";
        readonly Paging: "MobileCheckListACPaging";
    };
    readonly MobileCheckboxCheckListAC: {
        readonly Standard: "MobileCheckboxCheckListACStandard";
        readonly Paging: "MobileCheckboxCheckListACPaging";
    };
    readonly MobileCheckbox: {
        readonly Standard: "MobileCheckboxStandard";
        readonly CheckAll: "MobileCheckboxCheckAll";
        readonly Filter: "MobileCheckboxFilter";
        readonly FilterCheckAll: "MobileCheckboxFilterCheckAll";
    };
    readonly MobileCheckboxDynamic: {
        readonly Standard: "MobileCheckboxDynamicStandard";
        readonly CheckAll: "MobileCheckboxDynamicCheckAll";
        readonly Filter: "MobileCheckboxDynamicFilter";
        readonly FilterCheckAll: "MobileCheckboxDynamicFilterCheckAll";
    };
    readonly MobileCheckboxPagination: {
        readonly Standard: "MobileCheckboxPaginationStandard";
        readonly Filter: "MobileCheckboxPaginationFilter";
    };
    readonly MobileCheckboxPaginationDynamic: {
        readonly Filter: "MobileCheckboxPaginationDynamicFilter";
    };
    readonly MobileCheckboxAC: {
        readonly Standard: "MobileCheckboxACStandard";
        readonly Paging: "MobileCheckboxACPaging";
    };
    readonly MobileRadio: {
        readonly Standard: "MobileRadioStandard";
        readonly Filter: "MobileRadioFilter";
    };
    readonly MobileRadioDynamic: {
        readonly Standard: "MobileRadioDynamicStandard";
        readonly Filter: "MobileRadioDynamicFilter";
    };
    readonly MobileRadioPagination: {
        readonly Standard: "MobileRadioPaginationStandard";
        readonly Filter: "MobileRadioPaginationFilter";
    };
    readonly MobileRadioPaginationDynamic: {
        readonly Filter: "MobileRadioPaginationDynamicFilter";
    };
    readonly MobileRadioAC: {
        readonly Standard: "MobileRadioACStandard";
        readonly Paging: "MobileRadioACPaging";
    };
    readonly MobileSelector: {
        readonly Standard: "MobileSelectorStandard";
        readonly CheckAll: "MobileSelectorCheckAll";
        readonly Filter: "MobileSelectorFilter";
        readonly FilterCheckAll: "MobileSelectorFilterCheckAll";
    };
    readonly MobileSelectorDynamic: {
        readonly Standard: "MobileSelectorDynamicStandard";
        readonly CheckAll: "MobileSelectorDynamicCheckAll";
        readonly Filter: "MobileSelectorDynamicFilter";
        readonly FilterCheckAll: "MobileSelectorDynamicFilterCheckAll";
    };
    readonly MobileSelectorPagination: {
        readonly Standard: "MobileSelectorPaginationStandard";
        readonly Filter: "MobileSelectorPaginationFilter";
    };
    readonly MobileSelectorPaginationDynamic: {
        readonly Filter: "MobileSelectorPaginationDynamicFilter";
    };
    readonly MobileSelectorAC: {
        readonly Standard: "MobileSelectorACStandard";
        readonly Paging: "MobileSelectorACPaging";
    };
    readonly MobileList: {
        readonly Standard: "MobileListStandard";
    };
    readonly MobileListDynamic: {
        readonly Standard: "MobileListDynamicStandard";
    };
    readonly MobileCascaderView: {
        readonly Standard: "MobileCascaderViewStandard";
        readonly Filter: "MobileCascaderViewFilter";
    };
    readonly MobileCascaderViewDynamic: {
        readonly Standard: "MobileCascaderViewDynamicStandard";
        readonly Filter: "MobileCascaderViewDynamicFilter";
    };
    readonly MobileCascaderViewAsync: {
        readonly Standard: "MobileCascaderViewAsyncStandard";
    };
    readonly MobileTreeSelect: {
        readonly Standard: "MobileTreeSelectStandard";
        readonly Leaf: "MobileTreeSelectLeaf";
        readonly ShowAll: "MobileTreeSelectShowAll";
        readonly ShowChild: "MobileTreeSelectShowChild";
    };
    readonly MobileTreeSelectDynamic: {
        readonly Standard: "MobileTreeSelectDynamicStandard";
        readonly Leaf: "MobileTreeSelectDynamicLeaf";
        readonly ShowAll: "MobileTreeSelectDynamicShowAll";
        readonly ShowChild: "MobileTreeSelectDynamicShowChild";
    };
    readonly MobileTreeSelectAC: {
        readonly Standard: "MobileTreeSelectACStandard";
        readonly Leaf: "MobileTreeSelectACLeaf";
        readonly ShowAll: "MobileTreeSelectACShowAll";
        readonly ShowChild: "MobileTreeSelectACShowChild";
    };
    readonly MobileTreeSelectAsync: {
        readonly Standard: "MobileTreeSelectAsyncStandard";
        readonly Leaf: "MobileTreeSelectAsyncLeaf";
        readonly ShowAll: "MobileTreeSelectAsyncShowAll";
        readonly ShowChild: "MobileTreeSelectAsyncShowChild";
    };
    readonly Breadcrumb: {
        readonly Standard: "BreadcrumbStandard";
        readonly SuspenseStandard: "BreadcrumbSuspenseStandard";
    };
    readonly BreadcrumbDynamic: {
        readonly Standard: "BreadcrumbDynamicStandard";
        readonly SuspenseStandard: "BreadcrumbDynamicSuspenseStandard";
    };
    readonly Dropdown: {
        readonly Standard: "DropdownStandard";
    };
    readonly DropdownDynamic: {
        readonly Standard: "DropdownDynamicStandard";
    };
    readonly Mentions: {
        readonly Standard: "MentionsStandard";
        readonly SuspenseStandard: "MentionsSuspenseStandard";
    };
    readonly MentionsDynamic: {
        readonly Standard: "MentionsDynamicStandard";
        readonly SuspenseStandard: "MentionsDynamicSuspenseStandard";
    };
    readonly Menu: {
        readonly Standard: "MenuStandard";
    };
    readonly MenuDynamic: {
        readonly Standard: "MenuDynamicStandard";
    };
    readonly Segmented: {
        readonly Standard: "SegmentedStandard";
        readonly SuspenseStandard: "SegmentedSuspenseStandard";
    };
    readonly SegmentedDynamic: {
        readonly Standard: "SegmentedDynamicStandard";
        readonly SuspenseStandard: "SegmentedDynamicSuspenseStandard";
    };
    readonly Steps: {
        readonly Standard: "StepsStandard";
        readonly SuspenseStandard: "StepsSuspenseStandard";
    };
    readonly StepsDynamic: {
        readonly Standard: "StepsDynamicStandard";
        readonly SuspenseStandard: "StepsDynamicSuspenseStandard";
    };
    readonly Timeline: {
        readonly Standard: "TimelineStandard";
        readonly SuspenseStandard: "TimelineSuspenseStandard";
    };
    readonly TimelineDynamic: {
        readonly Standard: "TimelineDynamicStandard";
        readonly SuspenseStandard: "TimelineDynamicSuspenseStandard";
    };
};
export default Components;
