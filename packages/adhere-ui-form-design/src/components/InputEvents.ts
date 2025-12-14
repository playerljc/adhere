import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const InputEventsSelectStandardDict =
  Components[genDictComponentName(names.InputEvents as string, ComponentNames.Select.Standard)];
