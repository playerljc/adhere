import Intl from '@baifendian/adhere-util-intl';

import { DesignItem, ToolBoxGroup } from '../../../types';
import { define as InputDefine } from './Input';

const Input = InputDefine();

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
    ],
    designItems: [Input],
  };
}
