import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const RulesMenuStandardDict =
  Components[genDictComponentName(names.Rules as string, ComponentNames.Menu.Standard)];
