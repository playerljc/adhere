import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const CollapseCollapsibleSelectStandardDict =
  Components[
    genDictComponentName(names.CollapseCollapsible as string, ComponentNames.Select.Standard)
  ];
