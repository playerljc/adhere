import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const RateSizeSelectStandardDict =
  Components[genDictComponentName(names.RateSize as string, ComponentNames.Select.Standard)];
