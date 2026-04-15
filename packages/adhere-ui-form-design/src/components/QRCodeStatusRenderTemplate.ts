import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const QRCodeStatusRenderTemplateSelectStandardDict =
  Components[
    genDictComponentName(
      names.QRCodeStatusRenderTemplate as string,
      ComponentNames.Select.Standard,
    )
  ];

