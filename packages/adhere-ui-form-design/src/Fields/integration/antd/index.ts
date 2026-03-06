import Intl from '@baifendian/adhere-util-intl';

import { DesignItem, ToolBoxGroup } from '../../../types';
import { define as InputDefine } from './Input';
import { define as InputOTPDefine } from './InputOTP';
import { define as InputSearchDefine } from './InputSearch';
import { define as PasswordDefine } from './Password';
import { define as TextAreaDefine } from './TextArea';

const Input = InputDefine();
const TextArea = TextAreaDefine();
const InputSearch = InputSearchDefine();
const Password = PasswordDefine();
const InputOTP = InputOTPDefine();

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
    ],
    designItems: [Input, TextArea, InputSearch, Password, InputOTP],
  };
}
