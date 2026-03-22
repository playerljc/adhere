import { TYPE as FlexLayoutType } from '../Fields/layout/FlexLayout/constant';
import { TYPE as TableGridLayoutType } from '../Fields/layout/TableGridLayout/constant';

export const LayoutItemsType = {
  handler: () => {
    return [FlexLayoutType, TableGridLayoutType];
  },
};
