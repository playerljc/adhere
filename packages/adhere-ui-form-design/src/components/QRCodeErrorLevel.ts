import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const QRCodeErrorLevelSelectStandardDict =
  Components[
    genDictComponentName(names.QRCodeErrorLevel as string, ComponentNames.Select.Standard)
  ];

