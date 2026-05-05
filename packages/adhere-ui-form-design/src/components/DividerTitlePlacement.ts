import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DividerTitlePlacementSelectStandardDict =
  Components[
    genDictComponentName(names.DividerTitlePlacement as string, ComponentNames.Select.Standard)
  ];
