import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const AlertTypeSelectStandardDict =
  Components[genDictComponentName(names.AlertType as string, ComponentNames.Select.Standard)];
