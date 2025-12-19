import Dict from '@baifendian/adhere-util-dict';

import { ClipboardEvents } from './ClipboardEvents';
import { Density } from './Density';
import { Direction } from './Direction';
import { FocusEvents } from './FocusEvents';
import { InputEvents } from './InputEvents';
import { InputSize } from './InputSize';
import { InputType } from './InputType';
import { KeyboardEvents } from './KeyboardEvents';
import { MouseEvents } from './MouseEvents';
import { Rules } from './Rules';
import { TableGridLayoutModeType } from './TableGridLayoutModeType';
import { ValuePropName } from './ValuePropName';
import { Whether } from './Whether';

const { genModuleDict } = Dict;

const dictImpls = {
  Direction,
  Whether,
  ClipboardEvents,
  Density,
  FocusEvents,
  InputEvents,
  InputType,
  KeyboardEvents,
  MouseEvents,
  Rules,
  TableGridLayoutModeType,
  ValuePropName,
  InputSize,
};

const { names, values } = genModuleDict(dictImpls);

export { names, values };
