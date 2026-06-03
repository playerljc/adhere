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
import { CollapseCollapsible } from './CollapseCollapsible';
import { CollapseExpandIconPlacement } from './CollapseExpandIconPlacement';
import { CollapseSize } from './CollapseSize';
import { ColorPickerEvents } from './ColorPickerEvents';
import { ColorPickerFormat } from './ColorPickerFormat';
import { ColorPickerTrigger } from './ColorPickerTrigger';
import { ContainerFieldTypes } from './ContainerFieldTypes';
import { DateBoundMode } from './DateBoundMode';
import { DatePickerEvents } from './DatePickerEvents';
import { DateRangePickerEvents } from './DateRangePickerEvents';
import { DefaultToolBox } from './DefaultToolBox';
import { Density } from './Density';
import { Direction } from './Direction';
import { DividerOrientation } from './DividerOrientation';
import { DividerSize } from './DividerSize';
import { DividerTitlePlacement } from './DividerTitlePlacement';
import { DividerVariant } from './DividerVariant';
import { FocusEvents } from './FocusEvents';
import { InputEvents } from './InputEvents';
import { InputNumberMode } from './InputNumberMode';
import { InputSize } from './InputSize';
import { InputType } from './InputType';
import { JustifyContent } from './JustifyContent';
import { KeyboardEvents } from './KeyboardEvents';
import { LayoutFieldTypes } from './LayoutFieldTypes';
import { LinkTarget } from './LinkTarget';
import { MouseEvents } from './MouseEvents';
import { NoFormFieldTypes } from './NoFormFieldTypes';
import { Picker } from './Picker';
import { Placement } from './Placement';
import { PhoneAreaCode } from './PhoneAreaCode';
import { PhoneAreaCodeAreaEvents } from './PhoneAreaCodeAreaEvents';
import { SendSMSCountdownEvents } from './SendSMSCountdownEvents';
import { QRCodeErrorLevel } from './QRCodeErrorLevel';
import { QRCodeStatus } from './QRCodeStatus';
import { QRCodeStatusRenderTemplate } from './QRCodeStatusRenderTemplate';
import { QRCodeType } from './QRCodeType';
import { RadioGroupButtonStyle } from './RadioGroupButtonStyle';
import { RadioGroupOptionType } from './RadioGroupOptionType';
import { RateSize } from './RateSize';
import { RichEditorEvents } from './RichEditorEvents';
import { RichEditorMediaInsertMode } from './RichEditorMediaInsertMode';
import { RichEditorTextDirection } from './RichEditorTextDirection';
import { RichEditorToolbarPreset } from './RichEditorToolbarPreset';
import { Rules } from './Rules';
import { SegmentedShape } from './SegmentedShape';
import { SelectMode } from './SelectMode';
import { SignaturePadMode } from './SignaturePadMode';
import { Size } from './Size';
import { StepsSize } from './StepsSize';
import { StepsStatus } from './StepsStatus';
import { StepsSwiperDirection } from './StepsSwiperDirection';
import { StepsSwiperItemLayoutMode } from './StepsSwiperItemLayoutMode';
import { StepsSwiperItemRenderMode } from './StepsSwiperItemRenderMode';
import { StepsType } from './StepsType';
import { SwitchSize } from './SwitchSize';
import { TableGridLayoutModeType } from './TableGridLayoutModeType';
import { TableNumberGeneratorRule } from './TableNumberGeneratorRule';
import { TabsSize } from './TabsSize';
import { TabsTabPlacement } from './TabsTabPlacement';
import { TabsType } from './TabsType';
import { TextType } from './TextType';
import { Thousands } from './Thousands';
import { TimeHourStep } from './TimeHourStep';
import { TimeMinuteSecondStep } from './TimeMinuteSecondStep';
import { TimePickerEvents } from './TimePickerEvents';
import { TimeRangePickerEvents } from './TimeRangePickerEvents';
import { TreeSelectShowCheckedStrategy } from './TreeSelectShowCheckedStrategy';
import { UploadEvents } from './UploadEvents';
import { UploadListType } from './UploadListType';
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
  CollapseCollapsible,
  CollapseExpandIconPlacement,
  CollapseSize,
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
  QRCodeType,
  QRCodeErrorLevel,
  QRCodeStatus,
  QRCodeStatusRenderTemplate,
  DividerOrientation,
  DividerSize,
  DividerTitlePlacement,
  DividerVariant,
  Rules,
  SegmentedShape,
  TableGridLayoutModeType,
  TextType,
  TimeHourStep,
  TimeMinuteSecondStep,
  ValuePropName,
  InputSize,
  PhoneAreaCode,
  PhoneAreaCodeAreaEvents,
  SendSMSCountdownEvents,
  DefaultToolBox,
  LayoutFieldTypes,
  Variant,
  Thousands,
  Size,
  SwitchSize,
  VerificationStatus,
  Placement,
  Picker,
  SelectMode,
  SignaturePadMode,
  TreeSelectShowCheckedStrategy,
  CascaderShowCheckedStrategy,
  JustifyContent,
  AlignItems,
  AlignContent,
  AlignSelf,
  TableNumberGeneratorRule,
  StepsSize,
  StepsStatus,
  StepsSwiperDirection,
  StepsSwiperItemLayoutMode,
  StepsSwiperItemRenderMode,
  StepsType,
  TabsType,
  TabsSize,
  TabsTabPlacement,
  UploadEvents,
  UploadListType,
  RichEditorEvents,
  RichEditorToolbarPreset,
  RichEditorMediaInsertMode,
  RichEditorTextDirection,
  NoFormFieldTypes,
  ContainerFieldTypes,
};

const { names, values } = genModuleDict(dictImpls);

export { names, values };
