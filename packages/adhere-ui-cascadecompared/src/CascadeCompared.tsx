import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll-probe';
import React, { forwardRef, memo, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import type { ReactElement } from 'react';

import StickupLayout from '@baifendian/adhere-ui-stickuplayout';
import type { StickupLayoutHandle } from '@baifendian/adhere-ui-stickuplayout/lib/types';

import { CascadeComparedHandle, CascadeComparedProps, ColumnConfig, IMasterItem } from './types';

const selectorPrefix = 'adhere-ui-cascade-compared';

const defaultCellWidth = 120;

const { Item } = StickupLayout;

const StickupLayoutItem = Item!;

/**
 * initTouch
 */
function initTouch() {
  function isPassive() {
    let supportsPassiveOption = false;
    try {
      // @ts-ignore
      addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', {
          get() {
            supportsPassiveOption = true;
          },
        }),
      );
    } catch (e) {}
    return supportsPassiveOption;
  }

  document.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
    },
    isPassive()
      ? {
          capture: false,
          passive: false,
        }
      : false,
  );
}

initTouch();

/**
 * CascadeComparedProps
 * @param props
 * @param ref
 * @constructor
 */
const CascadeCompared = memo<CascadeComparedProps>(
  forwardRef<CascadeComparedHandle, CascadeComparedProps>((props, ref) => {
    const {
      className = '',
      style = {},
      indicatorClassName = '',
      indicatorStyle = {},
      indicatorFixedWrapClassName = '',
      indicatorFixedWrapStyle = {},
      indicatorAutoWrapClassName = '',
      indicatorAutoWrapStyle = {},
      indicator: { columns = [], dataSource = {} },
      masterClassName = '',
      masterStyle = {},
      masterInnerClassName = '',
      masterInnerStyle = {},
      masterStickFixedClassName = '',
      masterStickFixedStyle = {},
      masterStickInnerClassName = '',
      masterStickInnerStyle = {},
      master = [],
      onStickChange,
    } = props;

    const el = useRef<HTMLDivElement | null>(null);
    const stickup = useRef<StickupLayoutHandle | null>(null);
    const scrolls = useRef<IScroll[]>([]);

    /**
     * initScroll
     */
    function initScroll() {
      const wrapEls = el.current!.querySelectorAll(`.${selectorPrefix}-auto-wrap`);

      for (let i = 0; i < scrolls.current.length; i++) {
        scrolls.current[i].destroy();
      }

      scrolls.current = [];

      for (let i = 0; i < wrapEls.length; i++) {
        const scroll = new IScroll(wrapEls[i], {
          probeType: 3,
          eventPassthrough: true,
          scrollX: true,
          scrollY: false,
          preventDefault: false,
        });

        scrolls.current.push(scroll);

        scroll.on('scroll', () => {
          for (let j = 0; j < scrolls.current.length; j++) {
            if (scrolls.current[j] !== scroll) {
              scrolls.current[j].scrollTo(scroll.x, scroll.y);
            }
          }
        });
      }
    }

    /**
     * getFixedColumnConfig
     * @param columns
     */
    function getFixedColumnConfig(columns: ColumnConfig[]): ColumnConfig | null {
      const config = columns.find((t) => t.isFixed);

      if (config) return config;

      return columns.length ? columns[0] : null;
    }

    /**
     * renderCell
     * @param config
     * @param dataSource
     * @param groupIndex
     * @param rowIndex
     * @param columnIndex
     */
    function renderCell(
      config: ColumnConfig | null,
      dataSource: Record<string, any>,
      groupIndex: number,
      rowIndex: number,
      columnIndex: number,
    ): ReactElement | null {
      if (!config) return null;

      if (config.render) {
        return config.render(
          dataSource[config.dataIndex],
          dataSource,
          groupIndex,
          rowIndex,
          columnIndex,
        );
      }

      return dataSource[config.dataIndex];
    }

    /**
     * renderIndicator
     */
    function renderIndicator() {
      const fixedColumnConfig = getFixedColumnConfig(columns);

      return (
        <div
          className={classNames(`${selectorPrefix}-indicator`, indicatorClassName ?? '')}
          style={{ ...indicatorStyle }}
        >
          <div
            className={classNames(
              `${selectorPrefix}-fixed-wrap`,
              indicatorFixedWrapClassName ?? '',
            )}
            style={{
              ...(indicatorFixedWrapStyle ?? {}),
              width: fixedColumnConfig?.width || defaultCellWidth,
            }}
          >
            <div className={`${selectorPrefix}-item`}>
              <div
                className={classNames(`${selectorPrefix}-cell`, fixedColumnConfig?.className ?? '')}
                style={{
                  ...(fixedColumnConfig?.style ?? {}),
                }}
              >
                {renderCell(fixedColumnConfig, dataSource, -1, -1, -1)}
              </div>
            </div>
          </div>
          <div
            className={classNames(`${selectorPrefix}-auto-wrap`, indicatorAutoWrapClassName ?? '')}
            style={{ ...(indicatorAutoWrapStyle ?? {}) }}
          >
            <div className={`${selectorPrefix}-item`}>
              {columns
                .filter((column) => column !== fixedColumnConfig)
                .map((column, columnIndex) => (
                  <div
                    key={column.dataIndex}
                    className={classNames(`${selectorPrefix}-cell`, column.className ?? '')}
                    style={{ ...(column.style ?? {}), width: column?.width || defaultCellWidth }}
                  >
                    {renderCell(column, dataSource, -1, -1, columnIndex)}
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    }

    /**
     * renderMasterGroupContent
     * @param dataSource
     * @param columns
     * @param fixedWrapClassName
     * @param fixedWrapStyle
     * @param autoWrapClassName
     * @param autoWrapStyle
     * @param autoInnerClassName
     * @param autoInnerStyle
     * @param groupIndex
     */
    function renderMasterGroupContent(
      {
        dataSource = [],
        columns = [],
        fixedWrapClassName = '',
        fixedWrapStyle = {},
        autoWrapClassName = '',
        autoWrapStyle = {},
        autoInnerClassName = '',
        autoInnerStyle = {},
      }: IMasterItem,
      groupIndex: number,
    ): ReactElement {
      const fixedColumnConfig = getFixedColumnConfig(columns);

      return (
        <>
          <div
            className={classNames(`${selectorPrefix}-fixed-wrap`, fixedWrapClassName ?? '')}
            style={{
              ...(fixedWrapStyle ?? {}),
              width: fixedColumnConfig?.width || defaultCellWidth,
            }}
          >
            {dataSource.map((record, rowIndex) => (
              <div key={rowIndex} className={`${selectorPrefix}-item`}>
                <div
                  className={classNames(
                    `${selectorPrefix}-cell`,
                    fixedColumnConfig?.className ?? '',
                  )}
                  style={{
                    ...(fixedColumnConfig?.style ?? {}),
                  }}
                >
                  {renderCell(fixedColumnConfig, record, groupIndex, rowIndex, -1)}
                </div>
              </div>
            ))}
          </div>

          <div
            className={classNames(`${selectorPrefix}-auto-wrap`, autoWrapClassName ?? '')}
            style={{ ...(autoWrapStyle ?? {}) }}
          >
            <div
              className={classNames(`${selectorPrefix}-auto-inner`, autoInnerClassName ?? '')}
              style={{ ...autoInnerStyle }}
            >
              {dataSource.map((record, rowIndex) => (
                <div key={rowIndex} className={`${selectorPrefix}-item`}>
                  {columns
                    .filter((column) => column !== fixedColumnConfig)
                    .map((column, columnIndex) => (
                      <div
                        key={column.dataIndex}
                        className={classNames(`${selectorPrefix}-cell`, column.className ?? '')}
                        style={{
                          ...(column.style ?? {}),
                          width: column?.width || defaultCellWidth,
                        }}
                      >
                        {renderCell(column, record, groupIndex, rowIndex, columnIndex)}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

    /**
     * renderMasterGroup
     * @param config
     * @param groupIndex
     */
    function renderMasterGroup(config: IMasterItem, groupIndex): ReactElement {
      const { title = undefined, className = '', style = {} } = config;

      return (
        <StickupLayoutItem
          key={groupIndex}
          className={classNames(className ?? '')}
          style={{ ...(style ?? {}) }}
          title={title}
          content={renderMasterGroupContent(config, groupIndex)}
        />
      );
    }

    /**
     * renderMaster
     */
    function renderMaster(): ReactElement {
      const stickupLayoutProps = {
        ref: stickup,
        className: classNames(`${selectorPrefix}-master-inner`, masterInnerClassName ?? ''),
        style: masterInnerStyle ?? {},
        fixedClassName: classNames(masterStickFixedClassName ?? ''),
        fixedStyle: masterStickFixedStyle ?? {},
        innerClassName: classNames(masterStickInnerClassName ?? ''),
        innerStyle: masterStickInnerStyle ?? {},
        onChange: onStickChange,
      };

      return (
        <div
          className={classNames(`${selectorPrefix}-master`, masterClassName ?? '')}
          style={{ ...(masterStyle ?? {}) }}
        >
          <StickupLayout {...stickupLayoutProps}>
            {master.map((config, index) => renderMasterGroup(config, index))}
          </StickupLayout>
        </div>
      );
    }

    /**
     * useImperativeHandle
     */
    useImperativeHandle(ref, () => ({
      /**
       * scrollToByIndex
       * @param index
       * @param duration
       */
      scrollToByIndex(index: number, duration = 300) {
        stickup.current!.scrollToByIndex(index, duration);
      },

      /**
       * scrollToByHeaderEl
       * @param headerEl
       * @param duration
       */
      scrollToByHeaderEl(headerEl: HTMLElement, duration = 300) {
        stickup.current!.scrollToByHeaderEl(headerEl, duration);
      },

      /**
       * scrollToByColumn
       * @param columnIndex
       */
      scrollToByColumn(columnIndex: number) {
        const scroll = scrolls.current[0];

        const el = scroll.wrapper.querySelector(
          `.${selectorPrefix}-item .${selectorPrefix}-cell:nth-of-type(${columnIndex})`,
        );

        scroll.scrollToElement(el);
      },
    }));

    /**
     * useLayoutEffect
     */
    useLayoutEffect(() => {
      stickup.current!.refresh();
      initScroll();
    });

    return (
      <div
        className={classNames(selectorPrefix, className ?? '')}
        style={{ ...(style ?? {}) }}
        ref={el}
      >
        {renderIndicator()}
        {renderMaster()}
      </div>
    );
  }),
);

export default CascadeCompared;
