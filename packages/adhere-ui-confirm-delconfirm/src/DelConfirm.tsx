import React, { MouseEvent, memo } from 'react';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import { DelConfirmProps } from './types';
import type { DelConfirmComponent, OpenFunction } from './types';

const selectorPrefix = 'adhere-ui-del-confirm';

/**
 * DelConform
 * @param props
 * @constructor
 */
const InternalDelConform = memo<DelConfirmProps>((props) => {
  const { className, style, children } = props;

  function onClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();

    const { children, ...params } = props;

    DelConform.open({ ...params });
  }

  return (
    <div className={`${selectorPrefix} ${className ?? ''}`} style={style ?? {}} onClick={onClick}>
      {children}
    </div>
  );
});

const DelConform = InternalDelConform as DelConfirmComponent;

DelConform.displayName = 'DelConform';

DelConform.open = ({ success, ...params }: OpenFunction) => {
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