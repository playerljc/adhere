import { useMount, useUpdateEffect } from 'ahooks';
import { Toast } from 'antd-mobile';
import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';
import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { SpinProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-spin';

const Spin = memo<SpinProps>(({ className, style, spinning, zIndex, text, ...toastProps }) => {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const toastHandler = useRef<ToastHandler>({} as ToastHandler);

  const targetSpinning = useMemo(() => !!spinning, [spinning]);

  const targetZIndex = useMemo(() => zIndex ?? 999, [zIndex]);

  const targetStyle = useMemo(() => {
    return {
      zIndex: targetZIndex,
      ...(style ?? {}),
    };
  }, [style, targetZIndex]);

  const DEFAULT_SHOW_CONFIG = useMemo(
    () => ({
      icon: 'loading',
      content: `${Intl.v('加载中')}...`,
    }),
    [],
  );

  useMount(() => {
    if (targetSpinning) {
      toastHandler.current = Toast.show({
        ...DEFAULT_SHOW_CONFIG,
        ...(toastProps ?? {}),
        content: text ?? DEFAULT_SHOW_CONFIG.content,
        duration: 0,
        getContainer: () => containerRef.current,
      });
    }
  });

  useUpdateEffect(() => {
    if (targetSpinning) {
      toastHandler.current = Toast.show({
        ...DEFAULT_SHOW_CONFIG,
        ...(toastProps ?? {}),
        content: text ?? DEFAULT_SHOW_CONFIG.content,
        duration: 0,
        getContainer: () => containerRef.current,
      });
    } else {
      toastHandler?.current?.close();
    }
  }, [targetSpinning]);

  return (
    targetSpinning && (
      <div
        ref={containerRef}
        className={classNames(selectorPrefix, className)}
        style={targetStyle}
      />
    )
  );
});

export default Spin;
