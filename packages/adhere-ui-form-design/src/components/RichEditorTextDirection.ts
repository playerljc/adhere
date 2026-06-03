import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const RichEditorTextDirectionSelectStandardDict =
  Components[
    genDictComponentName(names.RichEditorTextDirection as string, ComponentNames.Select.Standard)
  ];
