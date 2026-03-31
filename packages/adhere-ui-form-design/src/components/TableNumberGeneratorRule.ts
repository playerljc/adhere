import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableNumberGeneratorRuleSelectStandardDict =
  Components[
    genDictComponentName(names.TableNumberGeneratorRule as string, ComponentNames.Select.Standard)
  ];
