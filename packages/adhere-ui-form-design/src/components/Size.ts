import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const SizeSelectStandardDict =
  Components[genDictComponentName(names.Size as string, ComponentNames.Select.Standard)];
