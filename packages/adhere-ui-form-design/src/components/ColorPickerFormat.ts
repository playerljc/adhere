import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ColorPickerFormatSelectStandardDict =
  Components[
    genDictComponentName(names.ColorPickerFormat as string, ComponentNames.Select.Standard)
  ];
