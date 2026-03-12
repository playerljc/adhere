import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const VerificationStatusSelectStandardDict =
  Components[
    genDictComponentName(names.VerificationStatus as string, ComponentNames.Select.Standard)
  ];
