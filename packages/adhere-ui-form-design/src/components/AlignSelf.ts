import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const AlignSelfSelectStandardDict =
  Components[genDictComponentName(names.AlignSelf as string, ComponentNames.Select.Standard)];
