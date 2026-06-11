import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableColumnFixedSelectStandardDict =
  Components[genDictComponentName(names.TableColumnFixed as string, ComponentNames.Select.Standard)];
