import { Button } from 'antd';
import React, { FC, memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import HistoryBack from '@baifendian/adhere-ui-historyback';
import Intl from '@baifendian/adhere-util-intl';

import ToolBarLayout from './toolBarLayout';
import type { BackLayoutProps } from './types';

/**
 * BackLayout
 * @class BackLayout
 * @classdesc BackLayout
 */
const BackLayout: FC<BackLayoutProps> = (props) => {
  const {
    topToolBarItems = [],
    isShowBack = true,
    backPath = '/',
    enforceBackPath = '',
    history,
    backTitle,
    children,
    ...otherProps
  } = props;

  const toolbar = useMemo(
    () =>
      [
        ...(topToolBarItems || []),
        <ConditionalRender key="backBtn" conditional={isShowBack}>
          {() => (
            <Button
              onClick={() => {
                if (enforceBackPath) {
                  history.replace(enforceBackPath);
                } else {
                  HistoryBack(history, backPath);
                }
              }}
            >
              {backTitle || Intl.v('返回')}
            </Button>
          )}
        </ConditionalRender>,
      ].filter((t) => {
        if ('props' in t && 'conditional' in t.props) return t.props.conditional;
        return true;
      }),
    [topToolBarItems, isShowBack, enforceBackPath, backPath, backTitle],
  );

  return (
    <ToolBarLayout {...otherProps} topToolBarItems={toolbar}>
      {children}
    </ToolBarLayout>
  );
};

export default memo(BackLayout);
