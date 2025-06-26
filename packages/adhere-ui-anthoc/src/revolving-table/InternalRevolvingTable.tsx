import classNames from 'classnames';
import merge from 'lodash.merge';
import React, { CSSProperties, forwardRef, memo, useContext, useMemo, useRef } from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import Empty from '../empty';
import type { RevolvingTableColumn, RevolvingTableProps } from '../types';
import { getValue } from '../util';

const selectorPrefix = 'adhere-ui-anthoc-revolving-table';

const defaultSlidesPerView = 5;

const { useTheme } = ConfigProvider;

const InternalRevolvingTable = memo<
  PropsWithoutRef<RevolvingTableProps<any, any>> & RefAttributes<SwiperRef>
>(
  forwardRef<SwiperRef, RevolvingTableProps<any, any>>(
    (
      {
        className,
        style,
        headerClassName,
        headerStyle,
        bodyClassName,
        bodyStyle,
        rowKey,
        columns,
        dataSource,
        revolvingConfig,
        renderHeaderAfter,
        renderHeaderBefore,
        renderBodyAfter,
        renderBodyBefore,
        // renderBodyScrollAfter,
        // renderBodyScrollBefore,
        renderEmpty,
        size,
        parity,
      },
      ref,
    ) => {
      const wrapperRef = useRef<HTMLElement | undefined>();

      const { media } = useContext(ConfigProvider.Context);

      useTheme<HTMLElement>({
        elRef: wrapperRef,
        group: 'normal-hoc',
      });

      const targetDataSource = useMemo(() => dataSource ?? [], [dataSource]);

      const isEmpty = useMemo(() => !targetDataSource?.length, [targetDataSource]);

      const targetRevolvingConfig = useMemo(
        () =>
          merge(
            {
              slidesPerView: defaultSlidesPerView,
            },
            revolvingConfig ?? {},
          ),
        [revolvingConfig],
      );

      function cellStyle({
        width,
        align,
      }: {
        width: RevolvingTableColumn<any, any>['width'];
        align: RevolvingTableColumn<any, any>['align'];
      }) {
        const style: CSSProperties = {};

        if (typeof width === 'number' || (typeof width === 'string' && width.endsWith('%'))) {
          style.width = getValue(media, width);
          style.flexShrink = 0;
        } else {
          style.flex = 1;
          style.minWidth = 0;
        }

        const alignMap = new Map([
          ['left', 'flex-start'],
          ['center', 'center'],
          ['right', 'flex-end'],
        ]);
        style.justifyContent = alignMap.get(align ?? 'left');
        style.textAlign = align ?? 'left';

        return style;
      }

      return (
        <div
          // @ts-ignore
          rel={wrapperRef}
          className={classNames(
            selectorPrefix,
            `${selectorPrefix}-size-${size ?? 'middle'}`,
            className,
            {
              [`${selectorPrefix}-parity`]: !!parity,
            },
          )}
          style={style ?? {}}
        >
          {!!renderHeaderBefore && (
            <div className={`${selectorPrefix}-header-before`}>{renderHeaderBefore?.()}</div>
          )}

          <ul
            className={classNames(`${selectorPrefix}-header`, headerClassName)}
            style={headerStyle ?? {}}
          >
            {columns?.map(({ key, title, align, width, ellipsis, tooltip }) => (
              <li
                key={key}
                title={tooltip}
                className={classNames(`${selectorPrefix}-header-cell`, {
                  [`${selectorPrefix}-header-cell-ellipsis`]: !!ellipsis,
                })}
                style={cellStyle({ width, align })}
              >
                {title}
              </li>
            ))}
          </ul>

          {!!renderHeaderAfter && (
            <div className={`${selectorPrefix}-header-after`}>{renderHeaderAfter?.()}</div>
          )}

          <div
            className={classNames(`${selectorPrefix}-body`, bodyClassName)}
            style={bodyStyle ?? {}}
          >
            {!!renderBodyBefore && (
              <div className={`${selectorPrefix}-body-before`}>{renderBodyBefore?.()}</div>
            )}

            <div className={classNames(`${selectorPrefix}-body-list`)}>
              <Swiper
                ref={ref}
                className={classNames(`${selectorPrefix}-revolving`)}
                direction="vertical"
                loop={targetDataSource?.length >= targetRevolvingConfig.slidesPerView}
                mousewheel={{
                  releaseOnEdges: true,
                  sensitivity: 1,
                }}
                autoplay={{
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, Mousewheel]}
                {...(targetRevolvingConfig ?? {})}
              >
                {isEmpty && (
                  <div className={`${selectorPrefix}-empty`}>{renderEmpty?.() ?? <Empty />}</div>
                )}

                {!isEmpty &&
                  targetDataSource?.map((record, _rowIndex) => (
                    <SwiperSlide
                      key={record[rowKey ?? 'id']}
                      className={classNames(`${selectorPrefix}-revolving-row`)}
                    >
                      <ul className={classNames(`${selectorPrefix}-row`)}>
                        {columns?.map(
                          ({ width, align, ellipsis, dataIndex, render }, _columnIndex) => {
                            return (
                              <li
                                key={dataIndex}
                                className={classNames(`${selectorPrefix}-row-cell`, {
                                  [`${selectorPrefix}-row-cell-ellipsis`]: !!ellipsis,
                                })}
                                style={cellStyle({ width, align })}
                                title={record[dataIndex]}
                              >
                                {render?.(record[dataIndex], record, _rowIndex) ??
                                  record[dataIndex]}
                              </li>
                            );
                          },
                        )}
                      </ul>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            {!!renderBodyAfter && (
              <div className={`${selectorPrefix}-body-after`}>{renderBodyAfter?.()}</div>
            )}
          </div>
        </div>
      );
    },
  ),
);

export default InternalRevolvingTable;
