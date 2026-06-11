import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableColumnDefaultSortOrderSelectStandardDict =
  Components[
    genDictComponentName(names.TableColumnDefaultSortOrder as string, ComponentNames.Select.Standard)
  ];
