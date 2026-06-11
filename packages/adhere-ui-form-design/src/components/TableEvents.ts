import FieldGeneratorToDict from '@baifendian/adhere-ui-fieldgeneratortodict';

import { names } from '../Dict';

const { ComponentNames, Components, genDictComponentName } = FieldGeneratorToDict;

export const TableEventsSelectStandardDict =
  Components[genDictComponentName(names.TableEvents as string, ComponentNames.Select.Standard)];
