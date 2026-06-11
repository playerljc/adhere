import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableColumnAlignSelectStandardDict =
  Components[genDictComponentName(names.TableColumnAlign as string, ComponentNames.Select.Standard)];
