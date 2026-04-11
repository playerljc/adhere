import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const StepsStatusSelectStandardDict =
  Components[genDictComponentName(names.StepsStatus as string, ComponentNames.Select.Standard)];
