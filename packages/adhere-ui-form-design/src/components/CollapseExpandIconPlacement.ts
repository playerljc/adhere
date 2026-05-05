import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const CollapseExpandIconPlacementSelectStandardDict =
  Components[
    genDictComponentName(
      names.CollapseExpandIconPlacement as string,
      ComponentNames.Select.Standard,
    )
  ];
