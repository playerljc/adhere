import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const ColorPickerTriggerSelectStandardDict =
  Components[
    genDictComponentName(names.ColorPickerTrigger as string, ComponentNames.Select.Standard)
  ];
