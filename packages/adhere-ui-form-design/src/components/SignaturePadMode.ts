import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const SignaturePadModeSelectStandardDict =
  Components[
    genDictComponentName(names.SignaturePadMode as string, ComponentNames.Select.Standard)
  ];
