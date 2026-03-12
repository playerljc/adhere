import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TimeRangePickerEventsSelectStandardDict =
  Components[
    genDictComponentName(names.TimeRangePickerEvents as string, ComponentNames.Select.Standard)
  ];

