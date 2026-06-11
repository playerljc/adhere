import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TreeEventsSelectStandardDict =
  Components[genDictComponentName(names.TreeEvents as string, ComponentNames.Select.Standard)];
