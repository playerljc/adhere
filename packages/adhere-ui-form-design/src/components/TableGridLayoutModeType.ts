import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableGridLayoutModeTypeSelectStandardDict =
  Components[
    genDictComponentName(names.TableGridLayoutModeType as string, ComponentNames.Select.Standard)
  ];
