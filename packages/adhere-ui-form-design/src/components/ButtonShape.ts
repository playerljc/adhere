import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ButtonShapeSelectStandardDict =
  Components[genDictComponentName(names.ButtonShape as string, ComponentNames.Select.Standard)];
