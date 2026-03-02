import MobileCascaderViewAsyncStandard from './MobileCascaderView/MobileCascaderViewAsyncStandard';
import MobileCascaderViewDynamicFilter from './MobileCascaderView/MobileCascaderViewDynamicFilter';
import MobileCascaderViewDynamicStandard from './MobileCascaderView/MobileCascaderViewDynamicStandard';
import MobileCascaderViewFilter from './MobileCascaderView/MobileCascaderViewFilter';
import MobileCascaderViewStandard from './MobileCascaderView/MobileCascaderViewStandard';
import MobileCheckListACPaging from './MobileCheckList/MobileCheckListACPaging';
import MobileCheckListACStandard from './MobileCheckList/MobileCheckListACStandard';
import MobileCheckListDynamicCheckAll from './MobileCheckList/MobileCheckListDynamicCheckAll';
import MobileCheckListDynamicFilter from './MobileCheckList/MobileCheckListDynamicFilter';
import MobileCheckListDynamicFilterCheckAll from './MobileCheckList/MobileCheckListDynamicFilterCheckAll';
import MobileCheckListDynamicStandard from './MobileCheckList/MobileCheckListDynamicStandard';
import MobileCheckListPaginationFilter from './MobileCheckList/MobileCheckListPaginationFilter';
import MobileCheckListPaginationStandard from './MobileCheckList/MobileCheckListPaginationStandard';
import MobileCheckboxCheckListDynamicCheckAll from './MobileCheckList/MobileCheckboxCheckListDynamicCheckAll';
import MobileCheckboxCheckListDynamicFilter from './MobileCheckList/MobileCheckboxCheckListDynamicFilter';
import MobileCheckboxCheckListDynamicFilterCheckAll from './MobileCheckList/MobileCheckboxCheckListDynamicFilterCheckAll';
import MobileCheckboxCheckListDynamicStandard from './MobileCheckList/MobileCheckboxCheckListDynamicStandard';
import MobileCheckboxCheckListPaginationDynamicFilter from './MobileCheckList/MobileCheckboxCheckListPaginationDynamicFilter';
import MobileCheckboxCheckListPaginationStandard from './MobileCheckList/MobileCheckboxCheckListPaginationStandard';
import MobileCheckboxACPaging from './MobileCheckbox/MobileCheckboxACPaging';
import MobileCheckboxACStandard from './MobileCheckbox/MobileCheckboxACStandard';
import MobileCheckboxCheckAll from './MobileCheckbox/MobileCheckboxCheckAll';
import MobileCheckboxDynamicCheckAll from './MobileCheckbox/MobileCheckboxDynamicCheckAll';
import MobileCheckboxDynamicFilter from './MobileCheckbox/MobileCheckboxDynamicFilter';
import MobileCheckboxDynamicFilterCheckAll from './MobileCheckbox/MobileCheckboxDynamicFilterCheckAll';
import MobileCheckboxDynamicStandard from './MobileCheckbox/MobileCheckboxDynamicStandard';
import MobileCheckboxFilter from './MobileCheckbox/MobileCheckboxFilter';
import MobileCheckboxFilterCheckAll from './MobileCheckbox/MobileCheckboxFilterCheckAll';
import MobileCheckboxPaginationDynamicFilter from './MobileCheckbox/MobileCheckboxPaginationDynamicFilter';
import MobileCheckboxPaginationFilter from './MobileCheckbox/MobileCheckboxPaginationFilter';
import MobileCheckboxPaginationStandard from './MobileCheckbox/MobileCheckboxPaginationStandard';
import MobileCheckboxStandard from './MobileCheckbox/MobileCheckboxStandard';
import MobileInputMultipleCheckAll from './MobileInputMultiple/CheckAll';
import MobileInputMultipleCheckAllSelect from './MobileInputMultiple/CheckAllSelect';
import MobileInputMultipleFilter from './MobileInputMultiple/Filter';
import MobileInputMultipleFilterCheckAll from './MobileInputMultiple/FilterCheckAll';
import MobileInputMultipleFilterCheckAllSelect from './MobileInputMultiple/FilterCheckAllSelect';
import MobileInputMultipleFilterSelect from './MobileInputMultiple/FilterSelect';
import MobileInputMultipleSelect from './MobileInputMultiple/Select';
import MobileInputMultipleStandard from './MobileInputMultiple/Standard';
import MobileListDynamicStandard from './MobileList/MobileListDynamicStandard';
import MobileListStandard from './MobileList/MobileListStandard';
import MobileRadioACPaging from './MobileRadio/MobileRadioACPaging';
import MobileRadioACStandard from './MobileRadio/MobileRadioACStandard';
import MobileRadioDynamicFilter from './MobileRadio/MobileRadioDynamicFilter';
import MobileRadioDynamicStandard from './MobileRadio/MobileRadioDynamicStandard';
import MobileRadioFilter from './MobileRadio/MobileRadioFilter';
import MobileRadioPaginationDynamicFilter from './MobileRadio/MobileRadioPaginationDynamicFilter';
import MobileRadioPaginationFilter from './MobileRadio/MobileRadioPaginationFilter';
import MobileRadioPaginationStandard from './MobileRadio/MobileRadioPaginationStandard';
import MobileRadioStandard from './MobileRadio/MobileRadioStandard';
import MobileSelectorACPaging from './MobileSelector/MobileSelectorACPaging';
import MobileSelectorACStandard from './MobileSelector/MobileSelectorACStandard';
import MobileSelectorCheckAll from './MobileSelector/MobileSelectorCheckAll';
import MobileSelectorDynamicCheckAll from './MobileSelector/MobileSelectorDynamicCheckAll';
import MobileSelectorDynamicFilter from './MobileSelector/MobileSelectorDynamicFilter';
import MobileSelectorDynamicFilterCheckAll from './MobileSelector/MobileSelectorDynamicFilterCheckAll';
import MobileSelectorDynamicStandard from './MobileSelector/MobileSelectorDynamicStandard';
import MobileSelectorFilter from './MobileSelector/MobileSelectorFilter';
import MobileSelectorFilterCheckAll from './MobileSelector/MobileSelectorFilterCheckAll';
import MobileSelectorPaginationDynamicFilter from './MobileSelector/MobileSelectorPaginationDynamicFilter';
import MobileSelectorPaginationFilter from './MobileSelector/MobileSelectorPaginationFilter';
import MobileSelectorPaginationStandard from './MobileSelector/MobileSelectorPaginationStandard';
import MobileSelectorStandard from './MobileSelector/MobileSelectorStandard';
import MobileTreeSelectACStandard from './MobileTreeSelect/MobileTreeSelectACStandard';
import MobileTreeSelectAsyncLeaf from './MobileTreeSelect/MobileTreeSelectAsyncLeaf';
import MobileTreeSelectAsyncStandard from './MobileTreeSelect/MobileTreeSelectAsyncStandard';
import MobileTreeSelectLeaf from './MobileTreeSelect/MobileTreeSelectLeaf';
import MobileTreeSelectShowAll from './MobileTreeSelect/MobileTreeSelectShowAll';
import MobileTreeSelectShowChild from './MobileTreeSelect/MobileTreeSelectShowChild';
import MobileTreeSelectStandard from './MobileTreeSelect/MobileTreeSelectStandard';

import React, { Suspense, lazy } from 'react';

import e2e from '@baifendian/adhere-e2e';

// import { createLoggerMiddleware } from '@ctsj/state/lib/middleware';
// import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
// import { Provider } from '@ctsj/state/lib/react';
// import { applyMiddleware, createStore } from '@ctsj/state/lib/state';
// import DictConfig from '@/dict/dict.config';
import FieldGeneratorToDict from '../src/index';
import AutoCompleteTest from './AutoComplete/Standard';
import BreadcrumbTest from './Breadcrumb/SuspenseStandard';
import CascaderAsyncEntityValueHOC from './Cascader/CascaderAsyncEntityValueHOC';
import CascaderTest from './Cascader/CascaderAsyncFlatChangeOnSelect';
import CascaderAsyncFlatEntityValueHOC from './Cascader/CascaderAsyncFlatEntityValueHOC';
import CascaderEntityValueHOC from './Cascader/CascaderEntityValueHOC';
import CascaderFlatEntityValueHOC from './Cascader/CascaderFlatEntityValueHOC';
import CascaderMulitEntityValueHOC from './Cascader/CascaderMulitEntityValueHOC';
import CascaderMulti from './Cascader/Multi';
import CheckboxTest from './Checkbox/Vertical.tsx';
import DropdownTest from './Dropdown/Standard';
import InputMultipleHorizontal from './InputMultiple/Horizontal';
import InputMultipleHorizontalCheckAll from './InputMultiple/HorizontalCheckAll';
import InputMultipleHorizontalSelect from './InputMultiple/HorizontalSelect';
import InputMultipleSelect from './InputMultiple/Select';
import InputMultipleStandard from './InputMultiple/Standard';
import InputMultipleVertical from './InputMultiple/Vertical';
import InputMultipleVerticalCheckAll from './InputMultiple/VerticalCheckAll';
import InputMultipleVerticalSelect from './InputMultiple/VerticalSelect';
import ListTest from './List/AutoCompleteCheckboxPagin';
import MentionsTest from './Mentions/Standard';
import MenuTest from './Menu/Standard';
import RadioTest from './Radio/AutoCompleteButtonRadioSelect';
import SegmentedTest from './Segmented/SuspenseStandard';
import SelectTest from './Select/ArrayEntityValueHOC';
import AutoCompleteCheckAllMultipleSelect from './Select/AutoCompleteCheckAllMultipleSelect';
import AutoCompleteSelect from './Select/AutoCompleteSelect';
import MultipleSelect from './Select/MultipleSelect';
import StepsTest from './Steps/SuspenseStandard';
import TableTest from './Table/AutoCompleteCheckboxPagin';
import AutoCompleteTableTreeMulti from './Table/AutoCompleteTableTreeMulti';
import AutoCompleteTableTreeMultiPaging from './Table/AutoCompleteTableTreeMultiPaging';
import AutoCompleteTableTreeMultiPagingValueHOC from './Table/AutoCompleteTableTreeMultiPagingValueHOC';
import AutoCompleteTableTreeMultiValueHOC from './Table/AutoCompleteTableTreeMultiValueHOC';
import AutoCompleteTableTreePaging from './Table/AutoCompleteTableTreePaging';
import AutoCompleteTableTreeStandard from './Table/AutoCompleteTableTreeStandard';
import CheckboxTablePagingEntityValueHOC from './Table/CheckboxTablePagingEntityValueHOC';
import CheckboxTablePagingSelectEntityValueHOC from './Table/CheckboxTablePagingSelectEntityValueHOC';
import MultiSelect from './Table/MultiSelect';
import RadioTablePagingEntityValueHOC from './Table/RadioTablePagingEntityValueHOC';
import RadioTablePagingSelectEntityValueHOC from './Table/RadioTablePagingSelectEntityValueHOC';
import TagTest from './Tag/HorizontalCheckable';
import TimelineTest from './Timeline/SuspenseStandard';
import TransferTest from './Transfer/AutoComplete';
import Transfer from './Transfer/Standard';
import TreeAsyncEntityValueHOC from './Tree/TreeAsyncEntityValueHOC';
import TreeTest from './Tree/TreeAsyncFlatCheckedShowParent';
import TreeAsyncFlatEntityValueHOC from './Tree/TreeAsyncFlatEntityValueHOC';
import TreeAsyncFlatMulitEntityValueHOC from './Tree/TreeAsyncFlatMulitEntityValueHOC';
import TreeAsyncMulitEntityValueHOC from './Tree/TreeAsyncMulitEntityValueHOC';
import TreeAutoCompleteLeaf from './Tree/TreeAutoCompleteLeaf.jsx';
import TreeAutoCompleteMulti from './Tree/TreeAutoCompleteMulti.jsx';
import TreeAutoCompleteMultiLeaf from './Tree/TreeAutoCompleteMultiLeaf';
import TreeAutoCompleteMultiValueHOC from './Tree/TreeAutoCompleteMultiValueHOC';
import TreeAutoCompleteShowAll from './Tree/TreeAutoCompleteShowAll';
import TreeAutoCompleteShowChild from './Tree/TreeAutoCompleteShowChild';
import TreeAutoCompleteShowParent from './Tree/TreeAutoCompleteShowParent';
import TreeAutoCompleteStandard from './Tree/TreeAutoCompleteStandard';
import TreeEntityValueHOC from './Tree/TreeEntityValueHOC';
import TreeFlatCheckedShowAllEntityValueHOC from './Tree/TreeFlatCheckedShowAllEntityValueHOC';
import TreeFlatEntityValueHOC from './Tree/TreeFlatEntityValueHOC';
import TreeFlatMultiEntityValueHOC from './Tree/TreeFlatMultiEntityValueHOC';
import TreeLeafEntityValueHOC from './Tree/TreeLeafEntityValueHOC';
import TreeMultiEntityValueHOC from './Tree/TreeMultiEntityValueHOC';

// import sage from './saga';
import '../src/index.less';

// 设置Saga实例
// ServiceRegister.setSage(sage);

// DictConfig();

// store初始化
// const store = createStore(null, {}, applyMiddleware(createLoggerMiddleware(), sage));

// const SearchTable = lazy(() =>
//   import(/* webpackChunkName: "searchtable" */ './SearchTable/SingleSelect.jsx'),
// );

// e2e.PC({
//   children: (
//     /*<Provider store={store}>
//       <Suspense fallback={<div>loading</div>}>
//         <SearchTable />
//       </Suspense>
//     </Provider>*/
//     <AutoCompleteSelect />
//   ),
// });

e2e.Mobile({
  children: <MobileCascaderViewAsyncStandard />,
});
