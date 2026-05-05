import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const QRCodeTypeSelectStandardDict =
  Components[genDictComponentName(names.QRCodeType as string, ComponentNames.Select.Standard)];
