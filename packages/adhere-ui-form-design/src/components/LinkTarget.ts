import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const LinkTargetSelectStandardDict =
  Components[genDictComponentName(names.LinkTarget as string, ComponentNames.Select.Standard)];
