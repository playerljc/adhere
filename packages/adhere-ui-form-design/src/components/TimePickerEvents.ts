import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TimePickerEventsSelectStandardDict =
  Components[
    genDictComponentName(names.TimePickerEvents as string, ComponentNames.Select.Standard)
  ];
