import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableLayoutSelectStandardDict =
  Components[genDictComponentName(names.TableLayout as string, ComponentNames.Select.Standard)];
