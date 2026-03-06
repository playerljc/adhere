import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const VariantSelectStandardDict =
  Components[genDictComponentName(names.Variant as string, ComponentNames.Select.Standard)];
