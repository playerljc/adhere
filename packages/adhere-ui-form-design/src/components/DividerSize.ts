import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DividerSizeSelectStandardDict =
  Components[genDictComponentName(names.DividerSize as string, ComponentNames.Select.Standard)];
