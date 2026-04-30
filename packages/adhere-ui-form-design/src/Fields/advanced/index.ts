import React from 'react';

import { OrderedListOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import type { DesignItem, ToolBoxGroup } from '../../types';
import { define as defineImageCaptcha } from './ImageCaptcha';
import { define as definePhoneWithAreaCode } from './PhoneWithAreaCode';
import { define as defineSendSMS } from './SendSMS';

const ImageCaptcha = defineImageCaptcha();
const PhoneWithAreaCode = definePhoneWithAreaCode();
const SendSMS = defineSendSMS();

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
      {
        type: PhoneWithAreaCode.type,
        icon: React.createElement(OrderedListOutlined),
        label: Intl.get('phone_with_area_code'),
        searchLabel: Intl.get('phone_with_area_code'),
        tooltip: Intl.get('phone_with_area_code'),
      },
      {
        type: SendSMS.type,
        icon: React.createElement(OrderedListOutlined),
        label: Intl.get('send_sms'),
        searchLabel: Intl.get('send_sms'),
        tooltip: Intl.get('send_sms'),
      },
    ],
    designItems: [ImageCaptcha, PhoneWithAreaCode, SendSMS],
  };
}
