import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const CollapseSizeSelectStandardDict =
  Components[genDictComponentName(names.CollapseSize as string, ComponentNames.Select.Standard)];
