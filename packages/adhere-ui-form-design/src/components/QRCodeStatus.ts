import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const QRCodeStatusSelectStandardDict =
  Components[genDictComponentName(names.QRCodeStatus as string, ComponentNames.Select.Standard)];
