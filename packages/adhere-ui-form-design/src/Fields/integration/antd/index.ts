import Intl from '@baifendian/adhere-util-intl';

import { DesignItem, ToolBoxGroup } from '../../../types';
import { define as CheckboxDefine } from './Checkbox';
import { define as ColorPickerDefine } from './ColorPicker';
import { define as DatePickerDefine } from './DatePicker';
import { define as DateRangePickerDefine } from './DateRangePicker';
import { define as InputDefine } from './Input';
import { define as InputNumberDefine } from './InputNumber';
import { define as InputOTPDefine } from './InputOTP';
import { define as InputSearchDefine } from './InputSearch';
import { define as PasswordDefine } from './Password';
import { define as RadioDefine } from './Radio';
import { define as RateDefine } from './Rate';
import { define as SliderDefine } from './Slider';
import { define as SwitchDefine } from './Switch';
import { define as TextAreaDefine } from './TextArea';
import { define as TimePickerDefine } from './TimePicker';
import { define as TimeRangePickerDefine } from './TimeRangePicker';

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
const InputOTP = InputOTPDefine();
const Switch = SwitchDefine();
const Checkbox = CheckboxDefine();
const Radio = RadioDefine();
const Rate = RateDefine();
const Slider = SliderDefine();

export function install(): {
  toolBox: ToolBoxGroup['items'];
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        type: Input.type,
        label: Intl.get('single_line_text'),
        searchLabel: Intl.get('single_line_text'),
        tooltip: Intl.get('single_line_text'),
      },
      {
        type: TextArea.type,
        label: Intl.get('multi_line_text'),
        searchLabel: Intl.get('multi_line_text'),
        tooltip: Intl.get('multi_line_text'),
      },
      {
        type: InputSearch.type,
        label: Intl.get('search_input'),
        searchLabel: Intl.get('search_input'),
        tooltip: Intl.get('search_input'),
      },
      {
        type: Password.type,
        label: Intl.get('password_input'),
        searchLabel: Intl.get('password_input'),
        tooltip: Intl.get('password_input'),
      },
      {
        type: InputOTP.type,
        label: Intl.get('otp_input'),
        searchLabel: Intl.get('otp_input'),
        tooltip: Intl.get('otp_input'),
      },
      {
        type: InputNumber.type,
        label: Intl.get('number_input'),
        searchLabel: Intl.get('number_input'),
        tooltip: Intl.get('number_input'),
      },
      {
        type: DatePicker.type,
        label: Intl.get('date_picker'),
        searchLabel: Intl.get('date_picker'),
        tooltip: Intl.get('date_picker'),
      },
      {
        type: DateRangePicker.type,
        label: Intl.get('date_range_picker'),
        searchLabel: Intl.get('date_range_picker'),
        tooltip: Intl.get('date_range_picker'),
      },
      {
        type: TimePicker.type,
        label: Intl.get('time_picker'),
        searchLabel: Intl.get('time_picker'),
        tooltip: Intl.get('time_picker'),
      },
      {
        type: TimeRangePicker.type,
        label: Intl.get('time_range_picker'),
        searchLabel: Intl.get('time_range_picker'),
        tooltip: Intl.get('time_range_picker'),
      },
      {
        type: ColorPicker.type,
        label: Intl.get('color_picker'),
        searchLabel: Intl.get('color_picker'),
        tooltip: Intl.get('color_picker'),
      },
      {
        type: Switch.type,
        label: Intl.get('switch_input'),
        searchLabel: Intl.get('switch_input'),
        tooltip: Intl.get('switch_input'),
      },
      {
        type: Checkbox.type,
        label: Intl.get('checkbox_input'),
        searchLabel: Intl.get('checkbox_input'),
        tooltip: Intl.get('checkbox_input'),
      },
      {
        type: Radio.type,
        label: Intl.get('radio_input'),
        searchLabel: Intl.get('radio_input'),
        tooltip: Intl.get('radio_input'),
      },
      {
        type: Rate.type,
        label: Intl.get('rate_input'),
        searchLabel: Intl.get('rate_input'),
        tooltip: Intl.get('rate_input'),
      },
      {
        type: Slider.type,
        label: Intl.get('slider_input'),
        searchLabel: Intl.get('slider_input'),
        tooltip: Intl.get('slider_input'),
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
      Switch,
      Checkbox,
      Radio,
      Rate,
      Slider,
    ],
  };
}
