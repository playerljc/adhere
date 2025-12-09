import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DensitySelectStandardDict =
  Components[genDictComponentName(names.Density as string, ComponentNames.Select.Standard)];
