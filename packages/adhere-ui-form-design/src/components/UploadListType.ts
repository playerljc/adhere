import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const UploadListTypeSelectStandardDict =
  Components[genDictComponentName(names.UploadListType as string, ComponentNames.Select.Standard)];

