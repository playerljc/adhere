import React, { MouseEvent } from 'react';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import { DelConfirmProps, DelConfirmFunction, OpenFunction } from './types';

const selectorPrefix = 'adhere-ui-delconfirm';

/**
 * DelConform
 * @param props
 * @constructor
 */
const DelConform: DelConfirmFunction<DelConfirmProps> = (props) => {
  const { className, style, children } = props;

  function onClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();

    const { children, ...params } = props;

    DelConform.open({ ...params });
  }

  return (
    <div className={`${selectorPrefix} ${className || ''}`} style={style || {}} onClick={onClick}>
      {children}
    </div>
  );
};

DelConform.open = function ({ success, ...params }: OpenFunction) {
  MessageDialog.Confirm({
    ...params,
    title: params.title || Intl.v('提示'),
    text: params.text || `${Intl.v('确定删除吗')}?`,
    zIndex: 'zIndex' in params ? params.zIndex : Resource.Dict.value.ResourceNormalMaxZIndex.value,
    onSuccess: () =>
      new Promise((resolve, reject) => {
        if (success) {
          success()
            .then(() => resolve())
            .catch(() => reject());
        } else {
          resolve();
        }
      }),
  });
};

export default DelConform;
