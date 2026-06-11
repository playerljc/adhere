import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableRowSelectionTypeSelectStandardDict =
  Components[
    genDictComponentName(names.TableRowSelectionType as string, ComponentNames.Select.Standard)
  ];
