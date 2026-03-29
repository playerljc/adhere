import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const SwitchSizeSelectStandardDict =
  Components[genDictComponentName(names.SwitchSize as string, ComponentNames.Select.Standard)];
