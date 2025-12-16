import Intl from '@baifendian/adhere-util-intl';

import type { DesignItem, ToolBoxOption } from '../../../types';
import { define as InputDefine } from './Input';

const Input = InputDefine();

export function install(): {
  toolBox: ToolBoxOption;
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        id: 'base',
        label: Intl.get('base_controls'),
        tooltip: Intl.get('base_controls'),
        items: [
          {
            type: Input.type,
            label: Intl.get('single_line_text'),
            searchLabel: Intl.get('single_line_text'),
            tooltip: Intl.get('single_line_text'),
          },
        ],
      },
    ],
    designItems: [Input],
  };
}
