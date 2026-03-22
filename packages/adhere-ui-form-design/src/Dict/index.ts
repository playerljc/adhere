import Dict from '@baifendian/adhere-util-dict';

import { AlignContent } from './AlignContent';
import { AlignItems } from './AlignItems';
import { ButtonEvents } from './ButtonEvents';
import { ClipboardEvents } from './ClipboardEvents';
import { ColorPickerEvents } from './ColorPickerEvents';
import { DatePickerEvents } from './DatePickerEvents';
import { DateRangePickerEvents } from './DateRangePickerEvents';
import { DefaultToolBox } from './DefaultToolBox';
import { Density } from './Density';
import { Direction } from './Direction';
import { FocusEvents } from './FocusEvents';
import { InputEvents } from './InputEvents';
import { InputSize } from './InputSize';
import { InputType } from './InputType';
import { JustifyContent } from './JustifyContent';
import { KeyboardEvents } from './KeyboardEvents';
import { LayoutItemsType } from './LayoutItemsType';
import { MouseEvents } from './MouseEvents';
import { Picker } from './Picker';
import { Placement } from './Placement';
import { Rules } from './Rules';
import { SelectMode } from './SelectMode';
import { Size } from './Size';
import { TableGridLayoutModeType } from './TableGridLayoutModeType';
import { Thousands } from './Thousands';
import { TimePickerEvents } from './TimePickerEvents';
import { TimeRangePickerEvents } from './TimeRangePickerEvents';
import { ValuePropName } from './ValuePropName';
import { Variant } from './Variant';
import { VerificationStatus } from './VerificationStatus';
import { Whether } from './Whether';

const { genModuleDict } = Dict;

const dictImpls = {
  Direction,
  Whether,
  ClipboardEvents,
  ButtonEvents,
  DatePickerEvents,
  DateRangePickerEvents,
  TimePickerEvents,
  TimeRangePickerEvents,
  ColorPickerEvents,
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
  DefaultToolBox,
  LayoutItemsType,
  Variant,
  Thousands,
  Size,
  VerificationStatus,
  Placement,
  Picker,
  SelectMode,
  JustifyContent,
  AlignItems,
  AlignContent,
};

const { names, values } = genModuleDict(dictImpls);

export { names, values };
