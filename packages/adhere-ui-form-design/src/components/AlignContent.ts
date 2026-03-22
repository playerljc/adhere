import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const AlignContentSelectStandardDict =
  Components[genDictComponentName(names.AlignContent as string, ComponentNames.Select.Standard)];