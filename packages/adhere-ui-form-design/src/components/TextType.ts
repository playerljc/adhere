import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TextTypeSelectStandardDict =
  Components[genDictComponentName(names.TextType as string, ComponentNames.Select.Standard)];
