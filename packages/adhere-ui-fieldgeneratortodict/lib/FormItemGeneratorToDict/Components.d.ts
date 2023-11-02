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
    readonly AutoComplete: {
        readonly FormItem: "AutoCompleteFormItem";
    };
    readonly AutoCompleteDynamic: {
        readonly FormItem: "AutoCompleteDynamicFormItem";
    };
    readonly AutoSelectComplete: {
        readonly FormItem: "AutoSelectCompleteFormItem";
        readonly MultiFormItem: "AutoSelectCompleteMultiFormItem";
        readonly CheckAllMultiFormItem: "AutoSelectCompleteCheckAllMultiFormItem";
    };
    readonly Breadcrumb: {
        readonly FormItem: "BreadcrumbFormItem";
    };
    readonly BreadcrumbDynamic: {
        readonly FormItem: "BreadcrumbDynamicFormItem";
    };
    readonly Cascader: {
        readonly FormItem: "CascaderFormItem";
        readonly LeafFormItem: "CascaderLeafFormItem";
        readonly MultiFormItem: "CascaderMultiFormItem";
        readonly LeafMultiFormItem: "CascaderLeafMultiFormItem";
    };
    readonly CascaderAsync: {
        readonly FormItem: "CascaderAsyncFormItem";
        readonly MultiFormItem: "CascaderAsyncMultiFormItem";
    };
    readonly CascaderDynamic: {
        readonly FormItem: "CascaderDynamicFormItem";
        readonly LeafFormItem: "CascaderDynamicLeafFormItem";
        readonly MultiFormItem: "CascaderDynamicMultiFormItem";
        readonly LeafMultiFormItem: "CascaderDynamicLeafMultiFormItem";
    };
    readonly CheckBox: {
        readonly VerticalFormItem: "CheckBoxVerticalFormItem";
        readonly HorizontalFormItem: "CheckBoxHorizontalFormItem";
        readonly CheckAllVerticalFormItem: "CheckBoxCheckAllVerticalFormItem";
        readonly CheckAllHorizontalFormItem: "CheckBoxCheckAllHorizontalFormItem";
        readonly SelectFormItem: "CheckBoxSelectFormItem";
        readonly CheckAllSelectFormItem: "CheckBoxCheckAllSelectFormItem";
        readonly CustomFormItem: "CheckBoxCustomFormItem";
        readonly CheckAllCustomFormItem: "CheckBoxCheckAllCustomFormItem";
    };
    readonly CheckBoxDynamic: {
        readonly VerticalFormItem: "CheckBoxDynamicVerticalFormItem";
        readonly HorizontalFormItem: "CheckBoxDynamicHorizontalFormItem";
        readonly CheckAllVerticalFormItem: "CheckBoxDynamicCheckAllVerticalFormItem";
        readonly CheckAllHorizontalFormItem: "CheckBoxDynamicCheckAllHorizontalFormItem";
        readonly SelectFormItem: "CheckBoxDynamicSelectFormItem";
        readonly CheckAllSelectFormItem: "CheckBoxDynamicCheckAllSelectFormItem";
        readonly CustomFormItem: "CheckBoxDynamicCustomFormItem";
        readonly CheckAllCustomFormItem: "CheckBoxDynamicCheckAllCustomFormItem";
    };
    readonly Dropdown: {
        readonly FormItem: "DropdownFormItem";
    };
    readonly DropdownDynamic: {
        readonly FormItem: "DropdownDynamicFormItem";
    };
    readonly List: {
        readonly FormItem: "ListFormItem";
        readonly SelectFormItem: "ListSelectFormItem";
        readonly MultiSelectFormItem: "ListMultiSelectFormItem";
    };
    readonly ListDynamic: {
        readonly FormItem: "ListDynamicFormItem";
        readonly SelectFormItem: "ListDynamicSelectFormItem";
        readonly MultiSelectFormItem: "ListDynamicMultiSelectFormItem";
    };
    readonly ListPagination: {
        readonly FormItem: "ListPaginationFormItem";
        readonly SelectFormItem: "ListPaginationSelectFormItem";
        readonly MultiSelectFormItem: "ListPaginationMultiSelectFormItem";
    };
    readonly Mentions: {
        readonly FormItem: "MentionsFormItem";
    };
    readonly MentionsDynamic: {
        readonly FormItem: "MentionsDynamicFormItem";
    };
    readonly Menu: {
        readonly FormItem: "MenuFormItem";
    };
    readonly MenuDynamic: {
        readonly FormItem: "MenuDynamicFormItem";
    };
    readonly Radio: {
        readonly VerticalFormItem: "RadioVerticalFormItem";
        readonly HorizontalFormItem: "RadioHorizontalFormItem";
        readonly ButtonFormItem: "RadioButtonFormItem";
        readonly SelectFormItem: "RadioSelectFormItem";
        readonly CustomFormItem: "RadioCustomFormItem";
    };
    readonly RadioDynamic: {
        readonly VerticalFormItem: "RadioDynamicVerticalFormItem";
        readonly HorizontalFormItem: "RadioDynamicHorizontalFormItem";
        readonly ButtonFormItem: "RadioDynamicButtonFormItem";
        readonly SelectFormItem: "RadioDynamicSelectFormItem";
        readonly CustomFormItem: "RadioDynamicCustomFormItem";
    };
    readonly Segmented: {
        readonly FormItem: "SegmentedFormItem";
    };
    readonly SegmentedDynamic: {
        readonly FormItem: "SegmentedDynamicFormItem";
    };
    /**
     * 下拉选择器
     */
    readonly Select: {
        /**
         * 下拉单选
         */
        readonly FormItem: "SelectFormItem";
        readonly MultiFormItem: "SelectMultiFormItem";
        readonly CheckAllMultiFormItem: "SelectCheckAllMultiFormItem";
    };
    readonly SelectDynamic: {
        readonly FormItem: "SelectDynamicFormItem";
        readonly MultiFormItem: "SelectDynamicMultiFormItem";
        readonly CheckAllMultiFormItem: "SelectDynamicCheckAllMultiFormItem";
    };
    readonly Steps: {
        readonly FormItem: "StepsFormItem";
    };
    readonly StepsDynamic: {
        readonly FormItem: "StepsDynamicFormItem";
    };
    readonly Table: {
        readonly FormItem: "TableFormItem";
        readonly SelectFormItem: "TableSelectFormItem";
        readonly MultiSelectFormItem: "TableMultiSelectFormItem";
    };
    readonly TableDynamic: {
        readonly FormItem: "TableDynamicFormItem";
        readonly SelectFormItem: "TableDynamicSelectFormItem";
        readonly MultiSelectFormItem: "TableDynamicMultiSelectFormItem";
    };
    readonly TablePagination: {
        readonly FormItem: "TablePaginationFormItem";
        readonly SelectFormItem: "TablePaginationSelectFormItem";
        readonly MultiSelectFormItem: "TablePaginationMultiSelectFormItem";
    };
    readonly Tag: {
        readonly VerticalFormItem: "TagVerticalFormItem";
        readonly HorizontalFormItem: "TagHorizontalFormItem";
        readonly CheckAllVerticalFormItem: "TagCheckAllVerticalFormItem";
        readonly CheckAllHorizontalFormItem: "TagCheckAllHorizontalFormItem";
        readonly SelectFormItem: "TagSelectFormItem";
        readonly MultiSelectFormItem: "TagMultiSelectFormItem";
        readonly CheckAllSelectFormItem: "TagCheckAllSelectFormItem";
    };
    readonly TagDynamic: {
        readonly VerticalFormItem: "TagDynamicVerticalFormItem";
        readonly HorizontalFormItem: "TagDynamicHorizontalFormItem";
        readonly CheckAllVerticalFormItem: "TagDynamicCheckAllVerticalFormItem";
        readonly CheckAllHorizontalFormItem: "TagDynamicCheckAllHorizontalFormItem";
        readonly SelectFormItem: "TagDynamicSelectFormItem";
        readonly MultiSelectFormItem: "TagDynamicMultiSelectFormItem";
        readonly CheckAllSelectFormItem: "TagDynamicCheckAllSelectFormItem";
    };
    readonly Timeline: {
        readonly FormItem: "TimelineFormItem";
    };
    readonly TimelineDynamic: {
        readonly FormItem: "TimelineDynamicFormItem";
    };
    readonly Transfer: {
        readonly FormItem: "TransferFormItem";
        readonly SelectFormItem: "TransferSelectFormItem";
    };
    readonly TransferDynamic: {
        readonly FormItem: "TransferDynamicFormItem";
        readonly SelectFormItem: "TransferDynamicSelectFormItem";
    };
    readonly Tree: {
        readonly FormItem: "TreeFormItem";
        readonly LeafFormItem: "TreeLeafFormItem";
        readonly MultiFormItem: "TreeMultiFormItem";
        readonly LeafMultiFormItem: "TreeLeafMultiFormItem";
    };
    readonly TreeAsync: {
        readonly FormItem: "TreeAsyncFormItem";
        readonly LeafFormItem: "TreeAsyncLeafFormItem";
        readonly MultiFormItem: "TreeAsyncMultiFormItem";
        readonly LeafMultiFormItem: "TreeAsyncLeafMultiFormItem";
    };
    readonly TreeDynamic: {
        readonly FormItem: "TreeDynamicFormItem";
        readonly LeafFormItem: "TreeDynamicLeafFormItem";
        readonly MultiFormItem: "TreeDynamicMultiFormItem";
        readonly LeafMultiFormItem: "TreeDynamicLeafMultiFormItem";
    };
};
export default Components;
