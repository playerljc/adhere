/**
 * 生成器支持的所有组件名称
 *
 * @example
 * ```js
 * import { Components } from 'adhere-ui-fieldgeneratortodict';
 *
 * ITEM_NAMES.AutoComplete.FormItem; // 'AutoCompleteFormItem'
 * ```
 *
 */
const Components = {
  AutoComplete: {
    FormItem: 'AutoCompleteFormItem',
  },
  AutoCompleteDynamic: {
    FormItem: 'AutoCompleteDynamicFormItem',
  },
  AutoSelectComplete: {
    FormItem: 'AutoSelectCompleteFormItem',
    MultiFormItem: 'AutoSelectCompleteMultiFormItem',
    CheckAllMultiFormItem: 'AutoSelectCompleteCheckAllMultiFormItem',
  },
  Breadcrumb: {
    FormItem: 'BreadcrumbFormItem',
  },
  BreadcrumbDynamic: {
    FormItem: 'BreadcrumbDynamicFormItem',
  },
  Cascader: {
    FormItem: 'CascaderFormItem',
    LeafFormItem: 'CascaderLeafFormItem',
    MultiFormItem: 'CascaderMultiFormItem',
    LeafMultiFormItem: 'CascaderLeafMultiFormItem',
  },
  CascaderAsync: {
    FormItem: 'CascaderAsyncFormItem',
    MultiFormItem: 'CascaderAsyncMultiFormItem',
  },
  CascaderDynamic: {
    FormItem: 'CascaderDynamicFormItem',
    LeafFormItem: 'CascaderDynamicLeafFormItem',
    MultiFormItem: 'CascaderDynamicMultiFormItem',
    LeafMultiFormItem: 'CascaderDynamicLeafMultiFormItem',
  },
  CheckBox: {
    VerticalFormItem: 'CheckBoxVerticalFormItem',
    HorizontalFormItem: 'CheckBoxHorizontalFormItem',
    CheckAllVerticalFormItem: 'CheckBoxCheckAllVerticalFormItem',
    CheckAllHorizontalFormItem: 'CheckBoxCheckAllHorizontalFormItem',
    SelectFormItem: 'CheckBoxSelectFormItem',
    CheckAllSelectFormItem: 'CheckBoxCheckAllSelectFormItem',
    CustomFormItem: 'CheckBoxCustomFormItem',
    CheckAllCustomFormItem: 'CheckBoxCheckAllCustomFormItem',
  },
  CheckBoxDynamic: {
    VerticalFormItem: 'CheckBoxDynamicVerticalFormItem',
    HorizontalFormItem: 'CheckBoxDynamicHorizontalFormItem',
    CheckAllVerticalFormItem: 'CheckBoxDynamicCheckAllVerticalFormItem',
    CheckAllHorizontalFormItem: 'CheckBoxDynamicCheckAllHorizontalFormItem',
    SelectFormItem: 'CheckBoxDynamicSelectFormItem',
    CheckAllSelectFormItem: 'CheckBoxDynamicCheckAllSelectFormItem',
    CustomFormItem: 'CheckBoxDynamicCustomFormItem',
    CheckAllCustomFormItem: 'CheckBoxDynamicCheckAllCustomFormItem',
  },
  Dropdown: {
    FormItem: 'DropdownFormItem',
  },
  DropdownDynamic: {
    FormItem: 'DropdownDynamicFormItem',
  },
  List: {
    FormItem: 'ListFormItem',
    SelectFormItem: 'ListSelectFormItem',
    MultiSelectFormItem: 'ListMultiSelectFormItem',
  },
  ListDynamic: {
    FormItem: 'ListDynamicFormItem',
    SelectFormItem: 'ListDynamicSelectFormItem',
    MultiSelectFormItem: 'ListDynamicMultiSelectFormItem',
  },
  ListPagination: {
    FormItem: 'ListPaginationFormItem',
    SelectFormItem: 'ListPaginationSelectFormItem',
    MultiSelectFormItem: 'ListPaginationMultiSelectFormItem',
  },
  Mentions: {
    FormItem: 'MentionsFormItem',
  },
  MentionsDynamic: {
    FormItem: 'MentionsDynamicFormItem',
  },
  Menu: {
    FormItem: 'MenuFormItem',
  },
  MenuDynamic: {
    FormItem: 'MenuDynamicFormItem',
  },
  Radio: {
    VerticalFormItem: 'RadioVerticalFormItem',
    HorizontalFormItem: 'RadioHorizontalFormItem',
    ButtonFormItem: 'RadioButtonFormItem',
    SelectFormItem: 'RadioSelectFormItem',
    CustomFormItem: 'RadioCustomFormItem',
  },
  RadioDynamic: {
    VerticalFormItem: 'RadioDynamicVerticalFormItem',
    HorizontalFormItem: 'RadioDynamicHorizontalFormItem',
    ButtonFormItem: 'RadioDynamicButtonFormItem',
    SelectFormItem: 'RadioDynamicSelectFormItem',
    CustomFormItem: 'RadioDynamicCustomFormItem',
  },
  Segmented: {
    FormItem: 'SegmentedFormItem',
  },
  SegmentedDynamic: {
    FormItem: 'SegmentedDynamicFormItem',
  },
  Select: {
    FormItem: 'SelectFormItem',
    MultiFormItem: 'SelectMultiFormItem',
    CheckAllMultiFormItem: 'SelectCheckAllMultiFormItem',
  },
  SelectDynamic: {
    FormItem: 'SelectDynamicFormItem',
    MultiFormItem: 'SelectDynamicMultiFormItem',
    CheckAllMultiFormItem: 'SelectDynamicCheckAllMultiFormItem',
  },
  Steps: {
    FormItem: 'StepsFormItem',
  },
  StepsDynamic: {
    FormItem: 'StepsDynamicFormItem',
  },
  Table: {
    FormItem: 'TableFormItem',
    SelectFormItem: 'TableSelectFormItem',
    MultiSelectFormItem: 'TableMultiSelectFormItem',
  },
  TableDynamic: {
    FormItem: 'TableDynamicFormItem',
    SelectFormItem: 'TableDynamicSelectFormItem',
    MultiSelectFormItem: 'TableDynamicMultiSelectFormItem',
  },
  TablePagination: {
    FormItem: 'TablePaginationFormItem',
    SelectFormItem: 'TablePaginationSelectFormItem',
    MultiSelectFormItem: 'TablePaginationMultiSelectFormItem',
  },
  Tag: {
    VerticalFormItem: 'TagVerticalFormItem',
    HorizontalFormItem: 'TagHorizontalFormItem',
    CheckAllVerticalFormItem: 'TagCheckAllVerticalFormItem',
    CheckAllHorizontalFormItem: 'TagCheckAllHorizontalFormItem',
    SelectFormItem: 'TagSelectFormItem',
    MultiSelectFormItem: 'TagMultiSelectFormItem',
    CheckAllSelectFormItem: 'TagCheckAllSelectFormItem',
  },
  TagDynamic: {
    VerticalFormItem: 'TagDynamicVerticalFormItem',
    HorizontalFormItem: 'TagDynamicHorizontalFormItem',
    CheckAllVerticalFormItem: 'TagDynamicCheckAllVerticalFormItem',
    CheckAllHorizontalFormItem: 'TagDynamicCheckAllHorizontalFormItem',
    SelectFormItem: 'TagDynamicSelectFormItem',
    MultiSelectFormItem: 'TagDynamicMultiSelectFormItem',
    CheckAllSelectFormItem: 'TagDynamicCheckAllSelectFormItem',
  },
  Timeline: {
    FormItem: 'TimelineFormItem',
  },
  TimelineDynamic: {
    FormItem: 'TimelineDynamicFormItem',
  },
  Transfer: {
    FormItem: 'TransferFormItem',
    SelectFormItem: 'TransferSelectFormItem',
  },
  TransferDynamic: {
    FormItem: 'TransferDynamicFormItem',
    SelectFormItem: 'TransferDynamicSelectFormItem',
  },
  Tree: {
    FormItem: 'TreeFormItem',
    LeafFormItem: 'TreeLeafFormItem',
    MultiFormItem: 'TreeMultiFormItem',
    LeafMultiFormItem: 'TreeLeafMultiFormItem',
  },
  TreeAsync: {
    FormItem: 'TreeAsyncFormItem',
    LeafFormItem: 'TreeAsyncLeafFormItem',
    MultiFormItem: 'TreeAsyncMultiFormItem',
    LeafMultiFormItem: 'TreeAsyncLeafMultiFormItem',
  },
  TreeDynamic: {
    FormItem: 'TreeDynamicFormItem',
    LeafFormItem: 'TreeDynamicLeafFormItem',
    MultiFormItem: 'TreeDynamicMultiFormItem',
    LeafMultiFormItem: 'TreeDynamicLeafMultiFormItem',
  },
} as const;

export default Components;
