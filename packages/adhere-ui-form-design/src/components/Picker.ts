import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const PickerSelectStandardDict =
  Components[genDictComponentName(names.Picker as string, ComponentNames.Select.Standard)];
