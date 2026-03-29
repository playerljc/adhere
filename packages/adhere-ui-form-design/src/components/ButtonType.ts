import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ButtonTypeSelectStandardDict =
  Components[genDictComponentName(names.ButtonType as string, ComponentNames.Select.Standard)];
