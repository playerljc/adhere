import Dict from '@baifendian/adhere-util-dict';

import { AlertType } from './AlertType';
import { AlignContent } from './AlignContent';
import { AlignItems } from './AlignItems';
import { AlignSelf } from './AlignSelf';
import { ButtonEvents } from './ButtonEvents';
import { ButtonHtmlType } from './ButtonHtmlType';
import { ButtonShape } from './ButtonShape';
import { ButtonType } from './ButtonType';
import { CascaderShowCheckedStrategy } from './CascaderShowCheckedStrategy';
import { ClipboardEvents } from './ClipboardEvents';
import { ColorPickerEvents } from './ColorPickerEvents';
import { ColorPickerFormat } from './ColorPickerFormat';
import { ColorPickerTrigger } from './ColorPickerTrigger';
import { DateBoundMode } from './DateBoundMode';
import { DatePickerEvents } from './DatePickerEvents';
import { DateRangePickerEvents } from './DateRangePickerEvents';
import { DefaultToolBox } from './DefaultToolBox';
import { Density } from './Density';
import { Direction } from './Direction';
import { FocusEvents } from './FocusEvents';
import { InputEvents } from './InputEvents';
import { InputNumberMode } from './InputNumberMode';
import { InputSize } from './InputSize';
import { InputType } from './InputType';
import { JustifyContent } from './JustifyContent';
import { KeyboardEvents } from './KeyboardEvents';
import { LayoutItemsType } from './LayoutItemsType';
import { LinkTarget } from './LinkTarget';
import { MouseEvents } from './MouseEvents';
import { Picker } from './Picker';
import { Placement } from './Placement';
import { RadioGroupButtonStyle } from './RadioGroupButtonStyle';
import { RadioGroupOptionType } from './RadioGroupOptionType';
import { RateSize } from './RateSize';
import { Rules } from './Rules';
import { SegmentedShape } from './SegmentedShape';
import { SelectMode } from './SelectMode';
import { Size } from './Size';
import { SwitchSize } from './SwitchSize';
import { TableGridLayoutModeType } from './TableGridLayoutModeType';
import { TextType } from './TextType';
import { Thousands } from './Thousands';
import { TimeHourStep } from './TimeHourStep';
import { TimeMinuteSecondStep } from './TimeMinuteSecondStep';
import { TimePickerEvents } from './TimePickerEvents';
import { TimeRangePickerEvents } from './TimeRangePickerEvents';
import { TreeSelectShowCheckedStrategy } from './TreeSelectShowCheckedStrategy';
import { ValuePropName } from './ValuePropName';
import { Variant } from './Variant';
import { VerificationStatus } from './VerificationStatus';
import { Whether } from './Whether';

const { genModuleDict } = Dict;

const dictImpls = {
  AlertType,
  Direction,
  Whether,
  ClipboardEvents,
  ButtonEvents,
  ButtonType,
  ButtonShape,
  ButtonHtmlType,
  DatePickerEvents,
  DateRangePickerEvents,
  TimePickerEvents,
  TimeRangePickerEvents,
  ColorPickerEvents,
  ColorPickerFormat,
  ColorPickerTrigger,
  DateBoundMode,
  Density,
  FocusEvents,
  InputEvents,
  InputNumberMode,
  InputType,
  KeyboardEvents,
  LinkTarget,
  MouseEvents,
  RadioGroupButtonStyle,
  RadioGroupOptionType,
  RateSize,
  Rules,
  SegmentedShape,
  TableGridLayoutModeType,
  TextType,
  TimeHourStep,
  TimeMinuteSecondStep,
  ValuePropName,
  InputSize,
  DefaultToolBox,
  LayoutItemsType,
  Variant,
  Thousands,
  Size,
  SwitchSize,
  VerificationStatus,
  Placement,
  Picker,
  SelectMode,
  TreeSelectShowCheckedStrategy,
  CascaderShowCheckedStrategy,
  JustifyContent,
  AlignItems,
  AlignContent,
  AlignSelf,
};

const { names, values } = genModuleDict(dictImpls);

export { names, values };
