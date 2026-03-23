import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ColorPickerEventsSelectStandardDict =
  Components[
    genDictComponentName(names.ColorPickerEvents as string, ComponentNames.Select.Standard)
  ];
