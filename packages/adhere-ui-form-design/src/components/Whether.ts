import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const WhetherRadioHorizontalDict =
  Components[genDictComponentName(names.Whether as string, ComponentNames.Radio.Horizontal)];
