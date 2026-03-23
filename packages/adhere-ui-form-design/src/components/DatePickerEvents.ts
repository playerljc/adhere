import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DatePickerEventsSelectStandardDict =
  Components[
    genDictComponentName(names.DatePickerEvents as string, ComponentNames.Select.Standard)
  ];
