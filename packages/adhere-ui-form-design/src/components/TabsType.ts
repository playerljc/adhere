import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TabsTypeSelectStandardDict =
  Components[genDictComponentName(names.TabsType as string, ComponentNames.Select.Standard)];
