import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const PaginationSizeSelectStandardDict =
  Components[genDictComponentName(names.PaginationSize as string, ComponentNames.Select.Standard)];
