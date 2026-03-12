import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ThousandsSelectStandardDict =
  Components[genDictComponentName(names.Thousands as string, ComponentNames.Select.Standard)];
