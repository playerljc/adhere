import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const RadioGroupButtonStyleSelectStandardDict =
  Components[genDictComponentName(names.RadioGroupButtonStyle as string, ComponentNames.Select.Standard)];
