import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const AlignItemsSelectStandardDict =
  Components[genDictComponentName(names.AlignItems as string, ComponentNames.Select.Standard)];