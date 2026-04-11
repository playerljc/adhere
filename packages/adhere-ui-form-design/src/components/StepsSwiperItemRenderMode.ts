import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const StepsSwiperItemRenderModeSelectStandardDict =
  Components[
    genDictComponentName(names.StepsSwiperItemRenderMode as string, ComponentNames.Select.Standard)
  ];
