import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TimeHourStepSelectStandardDict =
  Components[genDictComponentName(names.TimeHourStep as string, ComponentNames.Select.Standard)];
