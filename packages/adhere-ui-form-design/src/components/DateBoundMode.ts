import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DateBoundModeSelectStandardDict =
  Components[genDictComponentName(names.DateBoundMode as string, ComponentNames.Select.Standard)];
