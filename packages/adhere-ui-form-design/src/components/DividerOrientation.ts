import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const DividerOrientationSelectStandardDict =
  Components[
    genDictComponentName(names.DividerOrientation as string, ComponentNames.Select.Standard)
  ];

