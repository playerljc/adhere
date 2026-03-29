import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const InputNumberModeSelectStandardDict =
  Components[genDictComponentName(names.InputNumberMode as string, ComponentNames.Select.Standard)];
