import { Modal, Toast } from 'antd-mobile';
import type { ToastShowProps } from 'antd-mobile';
import { ExclamationCircleOutline } from 'antd-mobile-icons';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { WarnDialog } from './types';

const selectorPrefix = 'adhere-mobile-warn-prompt';

let handler;

export const openWarnMessage = (props?: ToastShowProps) =>
  Toast.show({
    content: Intl.get('error_occurred_ext1'),
    maskClickable: false,
    icon: <ExclamationCircleOutline />,
    ...(props ?? {}),
  });

export const openWarnDialog: WarnDialog = ({ duration = 3000, ...props }) => {
  const result = Modal.show({
    title: Intl.get('hint'),
    actions: [],
    closeOnMaskClick: true,
    ...(props ?? {}),
    content: (
      <div className={`${selectorPrefix}`}>
        <div className={`${selectorPrefix}-dialog-icon`}>
          <ExclamationCircleOutline />
        </div>

        <div className={`${selectorPrefix}-dialog-content`}>
          {props.content ?? Intl.get('error_occurred_ext1')}
        </div>
      </div>
    ),
  });

  if (duration) {
    if (handler) {
      clearTimeout(handler);
    }

    handler = setTimeout(() => {
      result.close();
    }, duration as number);
  }

  return result;
};
