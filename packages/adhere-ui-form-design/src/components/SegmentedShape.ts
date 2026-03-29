import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const SegmentedShapeSelectStandardDict =
  Components[genDictComponentName(names.SegmentedShape as string, ComponentNames.Select.Standard)];
