import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DividerVariantSelectStandardDict =
  Components[genDictComponentName(names.DividerVariant as string, ComponentNames.Select.Standard)];

