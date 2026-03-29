import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ButtonHtmlTypeSelectStandardDict =
  Components[genDictComponentName(names.ButtonHtmlType as string, ComponentNames.Select.Standard)];
