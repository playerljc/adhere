import React from 'react';

import { OrderedListOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import type { DesignItem, ToolBoxGroup } from '../../types';
import { define as defineImageCaptcha } from './ImageCaptcha';

const ImageCaptcha = defineImageCaptcha();

export function install(): {
  toolBox: ToolBoxGroup['items'];
  designItems: DesignItem[];
} {
  return {
    toolBox: [
      {
        type: ImageCaptcha.type,
        icon: React.createElement(OrderedListOutlined),
        label: Intl.get('image_captcha'),
        searchLabel: Intl.get('image_captcha'),
        tooltip: Intl.get('image_captcha'),
      },
    ],
    designItems: [ImageCaptcha],
  };
}
