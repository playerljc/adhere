import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const StepsSizeSelectStandardDict =
  Components[genDictComponentName(names.StepsSize as string, ComponentNames.Select.Standard)];
