import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DateRangePickerEventsSelectStandardDict =
  Components[
    genDictComponentName(names.DateRangePickerEvents as string, ComponentNames.Select.Standard)
  ];

