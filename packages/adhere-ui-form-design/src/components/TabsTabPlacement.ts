import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TabsTabPlacementSelectStandardDict =
  Components[
    genDictComponentName(names.TabsTabPlacement as string, ComponentNames.Select.Standard)
  ];
