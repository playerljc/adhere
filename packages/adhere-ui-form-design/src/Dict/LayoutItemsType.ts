import { TYPE as FlowLayoutType } from '../Fields/layout/FlowLayout/constant';
import { TYPE as TableGridLayoutType } from '../Fields/layout/TableGridLayout/constant';

export const LayoutItemsType = {
  handler: () => {
    return [FlowLayoutType, TableGridLayoutType];
  },
};
