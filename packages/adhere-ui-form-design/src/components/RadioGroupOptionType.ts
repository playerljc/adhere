import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const RadioGroupOptionTypeSelectStandardDict =
  Components[
    genDictComponentName(names.RadioGroupOptionType as string, ComponentNames.Select.Standard)
  ];
