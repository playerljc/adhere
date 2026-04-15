import {
  AlignLeftOutlined,
  ApartmentOutlined,
  BgColorsOutlined,
  BorderInnerOutlined,
  BorderOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  ClockCircleOutlined,
  ColumnWidthOutlined,
  EditOutlined,
  FieldNumberOutlined,
  FieldTimeOutlined,
  FontColorsOutlined,
  FontSizeOutlined,
  GroupOutlined,
  LinkOutlined,
  LockOutlined,
  PartitionOutlined,
  QrcodeOutlined,
  ScheduleOutlined,
  SearchOutlined,
  SecurityScanOutlined,
  SelectOutlined,
  SlidersOutlined,
  StarOutlined,
  SwapOutlined,
  SwitcherOutlined,
  TableOutlined,
  UnorderedListOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';
import React from 'react';

import { DesignItem, ToolBoxGroup } from '../../../types';
import { define as AlertDefine } from './Alert';
import { define as ButtonDefine } from './Button';
import { define as CascaderDefine } from './Cascader';
import { define as CheckboxDefine } from './Checkbox';
import { define as CheckboxGroupDefine } from './CheckboxGroup';
import { define as ColorPickerDefine } from './ColorPicker';
import { define as DatePickerDefine } from './DatePicker';
import { define as DateRangePickerDefine } from './DateRangePicker';
import { define as EditorTableDefine } from './EditorTable';
import { define as InputDefine } from './Input';
import { define as InputNumberDefine } from './InputNumber';
import { define as InputOTPDefine } from './InputOTP';
import { define as InputSearchDefine } from './InputSearch';
import { define as LinkDefine } from './Link';
import { define as PasswordDefine } from './Password';
import { define as QRCodeDefine } from './QRCode';
import { define as SignaturePadDefine } from './SignaturePad';
import { define as RadioDefine } from './Radio';
import { define as RadioGroupDefine } from './RadioGroup';
import { define as RateDefine } from './Rate';
import { define as SegmentedDefine } from './Segmented';
import { define as SelectDefine } from './Select';
import { define as SliderDefine } from './Slider';
import { define as SubmitButtonDefine } from './SubmitButton';
import { define as SwitchDefine } from './Switch';
import { define as TextDefine } from './Text';
import { define as TextAreaDefine } from './TextArea';
import { define as TimePickerDefine } from './TimePicker';
import { define as TimeRangePickerDefine } from './TimeRangePicker';
import { define as TransferDefine } from './Transfer';
import { define as TreeSelectDefine } from './TreeSelect';

const Input = InputDefine();
const DatePicker = DatePickerDefine();
const DateRangePicker = DateRangePickerDefine();
const TimePicker = TimePickerDefine();
const TimeRangePicker = TimeRangePickerDefine();
const ColorPicker = ColorPickerDefine();
const InputNumber = InputNumberDefine();
const TextArea = TextAreaDefine();
const InputSearch = InputSearchDefine();
const Password = PasswordDefine();
const Text = TextDefine();
const Alert = AlertDefine();
const Link = LinkDefine();
const QRCode = QRCodeDefine();
const SignaturePad = SignaturePadDefine();
const Button = ButtonDefine();
const SubmitButton = SubmitButtonDefine();
const InputOTP = InputOTPDefine();
const Switch = SwitchDefine();
const Checkbox = CheckboxDefine();
const CheckboxGroup = CheckboxGroupDefine();
const Radio = RadioDefine();
const RadioGroup = RadioGroupDefine();
const Rate = RateDefine();
const Slider = SliderDefine();
const Segmented = SegmentedDefine();
const Select = SelectDefine();
const TreeSelect = TreeSelectDefine();
const Cascader = CascaderDefine();
const Transfer = TransferDefine();
const EditorTable = EditorTableDefine();

export function install(): {
  toolBox: ToolBoxGroup['items'];
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        type: Input.type,
        icon: React.createElement(FontSizeOutlined),
        label: Intl.get('single_line_text'),
        searchLabel: Intl.get('single_line_text'),
        tooltip: Intl.get('single_line_text'),
      },
      {
        type: TextArea.type,
        icon: React.createElement(AlignLeftOutlined),
        label: Intl.get('multi_line_text'),
        searchLabel: Intl.get('multi_line_text'),
        tooltip: Intl.get('multi_line_text'),
      },
      {
        type: InputSearch.type,
        icon: React.createElement(SearchOutlined),
        label: Intl.get('search_input'),
        searchLabel: Intl.get('search_input'),
        tooltip: Intl.get('search_input'),
      },
      {
        type: Password.type,
        icon: React.createElement(LockOutlined),
        label: Intl.get('password_input'),
        searchLabel: Intl.get('password_input'),
        tooltip: Intl.get('password_input'),
      },
      {
        type: InputOTP.type,
        icon: React.createElement(SecurityScanOutlined),
        label: Intl.get('otp_input'),
        searchLabel: Intl.get('otp_input'),
        tooltip: Intl.get('otp_input'),
      },
      {
        type: InputNumber.type,
        icon: React.createElement(FieldNumberOutlined),
        label: Intl.get('number_input'),
        searchLabel: Intl.get('number_input'),
        tooltip: Intl.get('number_input'),
      },
      {
        type: DatePicker.type,
        icon: React.createElement(CalendarOutlined),
        label: Intl.get('date_picker'),
        searchLabel: Intl.get('date_picker'),
        tooltip: Intl.get('date_picker'),
      },
      {
        type: DateRangePicker.type,
        icon: React.createElement(ScheduleOutlined),
        label: Intl.get('date_range_picker'),
        searchLabel: Intl.get('date_range_picker'),
        tooltip: Intl.get('date_range_picker'),
      },
      {
        type: TimePicker.type,
        icon: React.createElement(ClockCircleOutlined),
        label: Intl.get('time_picker'),
        searchLabel: Intl.get('time_picker'),
        tooltip: Intl.get('time_picker'),
      },
      {
        type: TimeRangePicker.type,
        icon: React.createElement(FieldTimeOutlined),
        label: Intl.get('time_range_picker'),
        searchLabel: Intl.get('time_range_picker'),
        tooltip: Intl.get('time_range_picker'),
      },
      {
        type: ColorPicker.type,
        icon: React.createElement(BgColorsOutlined),
        label: Intl.get('color_picker'),
        searchLabel: Intl.get('color_picker'),
        tooltip: Intl.get('color_picker'),
      },
      {
        type: QRCode.type,
        icon: React.createElement(QrcodeOutlined),
        label: Intl.get('qr_code'),
        searchLabel: Intl.get('qr_code'),
        tooltip: Intl.get('qr_code'),
      },
      {
        type: SignaturePad.type,
        icon: React.createElement(EditOutlined),
        label: Intl.get('signature_pad'),
        searchLabel: Intl.get('signature_pad'),
        tooltip: Intl.get('signature_pad'),
      },
      {
        type: Text.type,
        icon: React.createElement(FontColorsOutlined),
        label: Intl.get('text'),
        searchLabel: Intl.get('text'),
        tooltip: Intl.get('text'),
      },
      {
        type: Alert.type,
        icon: React.createElement(WarningOutlined),
        label: Intl.get('alert'),
        searchLabel: Intl.get('alert'),
        tooltip: Intl.get('alert'),
      },
      {
        type: Link.type,
        icon: React.createElement(LinkOutlined),
        label: Intl.get('link'),
        searchLabel: Intl.get('link'),
        tooltip: Intl.get('link'),
      },
      {
        type: Button.type,
        icon: React.createElement(BorderOutlined),
        label: Intl.get('button'),
        searchLabel: Intl.get('button'),
        tooltip: Intl.get('button'),
      },
      {
        type: SubmitButton.type,
        icon: React.createElement(CheckCircleOutlined),
        label: Intl.get('submit_button'),
        searchLabel: Intl.get('submit_button'),
        tooltip: Intl.get('submit_button'),
      },
      {
        type: Switch.type,
        icon: React.createElement(SwitcherOutlined),
        label: Intl.get('switch_input'),
        searchLabel: Intl.get('switch_input'),
        tooltip: Intl.get('switch_input'),
      },
      {
        type: Checkbox.type,
        icon: React.createElement(CheckSquareOutlined),
        label: Intl.get('checkbox_input'),
        searchLabel: Intl.get('checkbox_input'),
        tooltip: Intl.get('checkbox_input'),
      },
      {
        type: CheckboxGroup.type,
        icon: React.createElement(UnorderedListOutlined),
        label: Intl.get('checkbox_group_input'),
        searchLabel: Intl.get('checkbox_group_input'),
        tooltip: Intl.get('checkbox_group_input'),
      },
      {
        type: Radio.type,
        icon: React.createElement(BorderInnerOutlined),
        label: Intl.get('radio_input'),
        searchLabel: Intl.get('radio_input'),
        tooltip: Intl.get('radio_input'),
      },
      {
        type: RadioGroup.type,
        icon: React.createElement(GroupOutlined),
        label: Intl.get('radio_group_input'),
        searchLabel: Intl.get('radio_group_input'),
        tooltip: Intl.get('radio_group_input'),
      },
      {
        type: Rate.type,
        icon: React.createElement(StarOutlined),
        label: Intl.get('rate_input'),
        searchLabel: Intl.get('rate_input'),
        tooltip: Intl.get('rate_input'),
      },
      {
        type: Slider.type,
        icon: React.createElement(SlidersOutlined),
        label: Intl.get('slider_input'),
        searchLabel: Intl.get('slider_input'),
        tooltip: Intl.get('slider_input'),
      },
      {
        type: Segmented.type,
        icon: React.createElement(ColumnWidthOutlined),
        label: Intl.get('segmented_input'),
        searchLabel: Intl.get('segmented_input'),
        tooltip: Intl.get('segmented_input'),
      },
      {
        type: Select.type,
        icon: React.createElement(SelectOutlined),
        label: Intl.get('select_text'),
        searchLabel: Intl.get('select_text'),
        tooltip: Intl.get('select_text'),
      },
      {
        type: TreeSelect.type,
        icon: React.createElement(ApartmentOutlined),
        label: Intl.get('tree_select_text'),
        searchLabel: Intl.get('tree_select_text'),
        tooltip: Intl.get('tree_select_text'),
      },
      {
        type: Cascader.type,
        icon: React.createElement(PartitionOutlined),
        label: Intl.get('cascader_text'),
        searchLabel: Intl.get('cascader_text'),
        tooltip: Intl.get('cascader_text'),
      },
      {
        type: Transfer.type,
        icon: React.createElement(SwapOutlined),
        label: Intl.get('transfer_text'),
        searchLabel: Intl.get('transfer_text'),
        tooltip: Intl.get('transfer_text'),
      },
      {
        type: EditorTable.type,
        icon: React.createElement(TableOutlined),
        label: Intl.get('editor_table_text'),
        searchLabel: Intl.get('editor_table_text'),
        tooltip: Intl.get('editor_table_text'),
      },
    ],
    designItems: [
      Input,
      TextArea,
      InputSearch,
      Password,
      InputOTP,
      InputNumber,
      DatePicker,
      DateRangePicker,
      TimePicker,
      TimeRangePicker,
      ColorPicker,
      QRCode,
      SignaturePad,
      Text,
      Alert,
      Link,
      Button,
      SubmitButton,
      Switch,
      Checkbox,
      CheckboxGroup,
      Radio,
      RadioGroup,
      Rate,
      Slider,
      Segmented,
      Select,
      TreeSelect,
      Cascader,
      Transfer,
      EditorTable,
    ],
  };
}
