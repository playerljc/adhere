import { Dialog } from 'antd-mobile';
import classNames from 'classnames';
import React, { MouseEvent, memo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { DelConfirmComponent, DelConfirmProps } from './types';

const selectorPrefix = 'adhere-ui-mobile-del-confirm';

/**
 * DelConform
 * @param props
 * @constructor
 */
const InternalDelConform = memo<DelConfirmProps>((props) => {
  const { className, style, children, ...restProps } = props;

  function onClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();

    return DelConform.open(restProps);
  }

  return (
    <div
      className={classNames(selectorPrefix, className ?? '')}
      style={style ?? {}}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

const DelConform = InternalDelConform as DelConfirmComponent;

/**
 * DelConform.open
 * @param props
 */
DelConform.open = (props) =>
  Dialog.confirm({
    title: Intl.get('hint'),
    content: `${Intl.get('confirm_delete')}?`,
    ...(props ?? {}),
  });

DelConform.displayName = 'DelConform';

export default DelConform;
