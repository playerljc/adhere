import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const InputSizeSelectStandardDict =
  Components[genDictComponentName(names.InputSize as string, ComponentNames.Select.Standard)];
