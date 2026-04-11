import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const StepsTypeSelectStandardDict =
  Components[genDictComponentName(names.StepsType as string, ComponentNames.Select.Standard)];
