import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const InputTypeSelectStandardDict =
  Components[genDictComponentName(names.InputType as string, ComponentNames.Select.Standard)];
