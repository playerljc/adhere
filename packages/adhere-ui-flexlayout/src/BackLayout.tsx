import { Button } from 'antd';
import React, { memo, useMemo } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import HistoryBack from '@baifendian/adhere-ui-historyback';
import Intl from '@baifendian/adhere-util-intl';

import ToolBarLayout from './ToolBarLayout';
import type { BackLayoutProps } from './types';

/**
 * BackLayout 组件
 * 带返回按钮的布局组件，继承自 ToolBarLayout
 * 
 * @param {BackLayoutProps} props - 组件属性
 * @returns {JSX.Element} BackLayout 组件
 */
const BackLayout = memo<BackLayoutProps>((props) => {
  const {
    topToolBarItems = [],
    isShowBack = true,
    backPath = '/',
    enforceBackPath = '',
    history,
    backTitle,
    children,
    ...resetProps
  } = props;

  /**
   * 计算工具栏项目
   */
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
              {backTitle || Intl.get('back')}
            </Button>
          )}
        </ConditionalRender>,
      ].filter((item) => {
        if ('props' in item && 'conditional' in item.props) {
          return item.props.conditional;
        }
        return true;
      }),
    [topToolBarItems, isShowBack, enforceBackPath, backPath, backTitle, history],
  );

  return (
    <ToolBarLayout {...resetProps} topToolBarItems={toolbar}>
      {children}
    </ToolBarLayout>
  );
});

BackLayout.displayName = 'BackLayout';

export default BackLayout;
