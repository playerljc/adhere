import { TYPE as CardLayoutType } from '../Fields/layout/Card/constant';
import { TYPE as FlexLayoutType } from '../Fields/layout/FlexLayout/constant';
import { TYPE as TableGridLayoutType } from '../Fields/layout/TableGridLayout/constant';
import { TYPE as TabsLayoutType } from '../Fields/layout/Tabs/constant';

export const LayoutItemsType = {
  handler: () => {
    return [FlexLayoutType, TableGridLayoutType, CardLayoutType, TabsLayoutType];
  },
};
