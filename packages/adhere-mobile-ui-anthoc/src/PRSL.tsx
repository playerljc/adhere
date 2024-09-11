import { Skeleton } from 'antd';
import { DotLoading, PullToRefresh } from 'antd-mobile';
import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import type { ReactElement } from 'react';

import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import type { ScrollLoadRefHandle } from '@baifendian/adhere-ui-scrollload/es/types';
import Intl from '@baifendian/adhere-util-intl';

import type { PRSLHandle, PRSLProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-prsl';

/**
 * PRSL
 * @description PullToRefresh + ScrollLoad
 * @example
 * ```jsx
 *
 * ```
 */
const PRSL = memo<PropsWithoutRef<PRSLProps> & RefAttributes<PRSLHandle>>(
  forwardRef<PRSLHandle, PRSLProps>(
    (
      {
        className,
        style,
        scrollLoadProps,
        pullToRefreshProps,
        isLoading,
        firstLoading,
        loading,
        pages,
        onRefreshBefore,
        onRefresh,
        onLoadMore,
        children,
      },
      ref,
    ) => {
      function getScrollEl() {
        return scrollLoadRef.current?.getScrollContainer() ?? document.body;
      }

      function renderChildren() {
        if (isFirst.current && !isFirstLoading.current && isLoading) {
          isFirstLoading.current = true;
        }

        if (isFirst.current && isFirstLoading.current && !isLoading) {
          isFirst.current = false;
          isFirstLoading.current = false;
        }

        if (isFirst.current) {
          return renderFirstLoading();
        }

        return renderNormal();
      }

      const scrollLoadRef = useRef<ScrollLoadRefHandle>();

      const isFirst = useRef(true);

      const isFirstLoading = useRef(false);

      const renderFirstLoading = useCallback(() => {
        if (firstLoading) {
          return firstLoading();
        }

        const result: ReactElement[] = [];

        for (let i = 0; i < 15; i++) {
          result.push(<Skeleton key={i + 1} loading active avatar />);
        }

        return <div className={`${selectorPrefix}-first-loading`}>{result}</div>;
      }, [firstLoading]);

      const renderLoading = useCallback(() => {
        if (loading) return loading();

        return (
          <div className={`${selectorPrefix}-loading`}>
            <div className={`${selectorPrefix}-loading-dot`}>
              <DotLoading color="primary" />
            </div>
            <div>{`${Intl.v('数据加载中')}`}...</div>
          </div>
        );
      }, [loading]);

      const renderNormal = useCallback(
        () => (
          <PullToRefresh
            {...(pullToRefreshProps ?? {})}
            onRefresh={() => {
              const resolve = onRefreshBefore ? onRefreshBefore() : Promise.resolve();

              return resolve.then(() => onRefresh?.());
            }}
          >
            <ScrollLoad
              // @ts-ignore
              ref={scrollLoadRef}
              renderLoading={renderLoading}
              onScrollBottom={onLoadMore}
              distance={scrollLoadProps?.distance || 50}
              disabled={pages <= 1}
              {...(scrollLoadProps || {})}
              className={classNames(
                scrollLoadProps?.className ?? '',
                `${selectorPrefix}-scroll-load`,
              )}
            >
              {children}
            </ScrollLoad>

            <BackTopAnimation
              getContainer={() => getScrollEl()}
              onTrigger={() => Promise.resolve()}
            />
          </PullToRefresh>
        ),
        [onRefreshBefore, onRefresh, onLoadMore, scrollLoadProps, pullToRefreshProps, children],
      );

      useImperativeHandle(ref, () => ({
        getScrollEl,
        hideAll: () => scrollLoadRef?.current?.hideAll?.(),
      }));

      return (
        <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
          {renderChildren()}
        </div>
      );
    },
  ),
);

export default PRSL;
