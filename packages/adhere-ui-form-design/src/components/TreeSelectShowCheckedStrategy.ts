import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TreeSelectShowCheckedStrategySelectStandardDict =
  Components[
    genDictComponentName(
      names.TreeSelectShowCheckedStrategy as string,
      ComponentNames.Select.Standard,
    )
  ];
