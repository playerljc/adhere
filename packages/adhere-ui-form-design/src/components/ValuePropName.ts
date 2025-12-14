import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ValuePropNameSelectStandardDict =
  Components[genDictComponentName(names.ValuePropName as string, ComponentNames.Select.Standard)];
