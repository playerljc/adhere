import { Dialog } from 'antd-mobile';
import type { DialogConfirmProps } from 'antd-mobile';
import classNames from 'classnames';
import React, { MouseEvent } from 'react';
import type { FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { DelConfirmProps } from './types';

const selectorPrefix = 'adhere-ui-mobile-del-confirm';

/**
 * DelConform
 * @param props
 * @constructor
 */
const DelConform: FC<DelConfirmProps> = (props) => {
  const { className, style, children, ...restProps } = props;

  function onClick(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();

    // @ts-ignore
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
};

// @ts-ignore
DelConform.open = (props: DialogConfirmProps): Promise<boolean> =>
  Dialog.confirm({
    title: Intl.v('提示'),
    content: `${Intl.v('确定删除吗')}?`,
    ...(props ?? {}),
  });

export default DelConform;
