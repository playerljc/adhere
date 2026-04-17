import { TYPE as CollapseLayoutType } from '../Fields/layout/Collapse/constant';
import { TYPE as StepsLayoutType } from '../Fields/layout/Steps/constant';
import { TYPE as TabsLayoutType } from '../Fields/layout/Tabs/constant';

export const ContainerFieldTypes = {
  handler: () => {
    return [TabsLayoutType, CollapseLayoutType, StepsLayoutType];
  },
};
