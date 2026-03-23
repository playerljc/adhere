import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const JustifyContentSelectStandardDict =
  Components[genDictComponentName(names.JustifyContent as string, ComponentNames.Select.Standard)];
