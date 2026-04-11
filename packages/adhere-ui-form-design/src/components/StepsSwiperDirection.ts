import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const StepsSwiperDirectionSelectStandardDict =
  Components[
    genDictComponentName(names.StepsSwiperDirection as string, ComponentNames.Select.Standard)
  ];
