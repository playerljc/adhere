import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const PhoneAreaCodeSelectStandardDict =
  Components[genDictComponentName(names.PhoneAreaCode as string, ComponentNames.Select.Standard)];
