import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const SelectModeSelectStandardDict =
  Components[genDictComponentName(names.SelectMode as string, ComponentNames.Select.Standard)];
