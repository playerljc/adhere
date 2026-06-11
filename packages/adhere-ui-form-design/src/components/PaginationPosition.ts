import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const PaginationPositionSelectStandardDict =
  Components[
    genDictComponentName(names.PaginationPosition as string, ComponentNames.Select.Standard)
  ];
