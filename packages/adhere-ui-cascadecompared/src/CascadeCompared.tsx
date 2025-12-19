import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll-probe';
import React, {
  ReactNode,
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import type { PropsWithoutRef, ReactElement, RefAttributes } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import StickupLayout from '@baifendian/adhere-ui-stickuplayout';
import type {
  StickupLayoutHandle,
  StickupLayoutItemProps,
} from '@baifendian/adhere-ui-stickuplayout/lib/types';

import type {
  CascadeComparedHandle,
  CascadeComparedProps,
  ColumnConfig,
  IMasterItem,
} from './types';

const selectorPrefix = 'adhere-ui-cascade-compared';

const defaultCellWidth = 120;

const { Item } = StickupLayout;

const { useTheme } = ConfigProvider;

const StickupLayoutItem = Item!;

/**
 * 初始化触摸事件处理
 * 防止默认的触摸滚动行为
 */
function initTouch(): void {
  function isPassive(): boolean {
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
    } catch (e) {
      // 忽略错误
    }
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

// 初始化触摸事件
initTouch();

/**
 * 级联对比组件
 *
 * 一个用于对比多组数据的级联表格组件，支持固定列、同步滚动等功能
 *
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 级联对比组件
 *
 * @example
 * ```tsx
 * <CascadeCompared
 *   indicator={{
 *     columns: [
 *       { dataIndex: 'name', width: 100, isFixed: true },
 *       { dataIndex: 'value', width: 120 }
 *     ],
 *     dataSource: { name: '总计', value: 1000 }
 *   }}
 *   master={[
 *     {
 *       title: <span>分组1</span>,
 *       columns: [
 *         { dataIndex: 'name', width: 100, isFixed: true },
 *         { dataIndex: 'value', width: 120 }
 *       ],
 *       dataSource: [
 *         { name: '项目1', value: 100 },
 *         { name: '项目2', value: 200 }
 *       ]
 *     }
 *   ]}
 * />
 * ```
 */
const CascadeCompared = memo<
  PropsWithoutRef<CascadeComparedProps> & RefAttributes<CascadeComparedHandle>
>(
  forwardRef<CascadeComparedHandle, CascadeComparedProps>((props, ref) => {
    const {
      className,
      style = {},
      indicatorClassName,
      indicatorStyle = {},
      indicatorFixedWrapClassName,
      indicatorFixedWrapStyle = {},
      indicatorAutoWrapClassName,
      indicatorAutoWrapStyle = {},
      indicator: { columns = [], dataSource = {} },
      masterClassName,
      masterStyle = {},
      masterInnerClassName,
      masterInnerStyle = {},
      masterStickFixedClassName,
      masterStickFixedStyle = {},
      masterStickInnerClassName,
      masterStickInnerStyle = {},
      master = [],
      onStickChange,
      defaultCellWidth: propDefaultCellWidth,
    } = props;

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const stickup = useRef<StickupLayoutHandle | null>(null);
    const scrolls = useRef<(typeof IScroll)[]>([]);

    // 使用主题
    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal',
      displayName: 'CascadeCompared',
    });

    // 获取实际使用的默认单元格宽度
    const actualDefaultCellWidth = propDefaultCellWidth ?? defaultCellWidth;

    /**
     * 初始化滚动实例
     * 为每个自动滚动区域创建IScroll实例并设置同步滚动
     */
    const initScroll = useCallback((): void => {
      if (!wrapperRef.current) return;

      const wrapEls = wrapperRef.current.querySelectorAll(`.${selectorPrefix}-auto-wrap`);

      // 销毁现有的滚动实例
      for (let i = 0; i < scrolls.current.length; i++) {
        if (scrolls.current[i]) {
          scrolls.current[i].destroy();
        }
      }

      scrolls.current = [];

      // 为每个自动滚动区域创建新的滚动实例
      for (let i = 0; i < wrapEls.length; i++) {
        const scroll = new IScroll(wrapEls[i], {
          probeType: 3,
          eventPassthrough: true,
          scrollX: true,
          scrollY: false,
          preventDefault: false,
        });

        scrolls.current.push(scroll);

        // 设置同步滚动
        scroll.on('scroll', () => {
          for (let j = 0; j < scrolls.current.length; j++) {
            if (scrolls.current[j] && scrolls.current[j] !== scroll) {
              scrolls.current[j].scrollTo(scroll.x, scroll.y);
            }
          }
        });
      }
    }, []);

    /**
     * 获取固定列配置
     * @param columns - 列配置数组
     * @returns 固定列配置或第一列配置，如果没有列则返回null
     */
    const getFixedColumnConfig = useCallback((columns: ColumnConfig[]): ColumnConfig | null => {
      const config = columns.find((t) => t.isFixed);
      if (config) return config;
      return columns.length ? columns[0] : null;
    }, []);

    /**
     * 渲染单元格内容
     * @param config - 列配置
     * @param record - 数据记录
     * @param groupIndex - 分组索引
     * @param rowIndex - 行索引
     * @param columnIndex - 列索引
     * @returns 渲染的单元格内容
     */
    const renderCell = useCallback(
      (
        config: ColumnConfig | null,
        record: Record<string, any>,
        groupIndex: number,
        rowIndex: number,
        columnIndex: number,
      ): ReactNode => {
        if (!config) return null;

        if (config.render) {
          return config.render(record[config.dataIndex], record, groupIndex, rowIndex, columnIndex);
        }

        return record[config.dataIndex];
      },
      [],
    );

    /**
     * 渲染指示器区域
     * @returns 指示器区域的JSX元素
     */
    const renderIndicator = useCallback((): ReactElement => {
      const fixedColumnConfig = getFixedColumnConfig(columns);

      return (
        <div
          className={classNames(`${selectorPrefix}-indicator`, indicatorClassName)}
          style={indicatorStyle}
        >
          <div
            className={classNames(`${selectorPrefix}-fixed-wrap`, indicatorFixedWrapClassName)}
            style={{
              ...indicatorFixedWrapStyle,
              width: fixedColumnConfig?.width || actualDefaultCellWidth,
            }}
          >
            <div className={`${selectorPrefix}-item`}>
              <div
                className={classNames(`${selectorPrefix}-cell`, fixedColumnConfig?.className)}
                style={fixedColumnConfig?.style}
              >
                {renderCell(fixedColumnConfig, dataSource, -1, -1, -1)}
              </div>
            </div>
          </div>
          <div
            className={classNames(`${selectorPrefix}-auto-wrap`, indicatorAutoWrapClassName)}
            style={indicatorAutoWrapStyle}
          >
            <div className={`${selectorPrefix}-item`}>
              {columns
                .filter((column) => column !== fixedColumnConfig)
                .map((column, columnIndex) => (
                  <div
                    key={column.dataIndex}
                    className={classNames(`${selectorPrefix}-cell`, column.className)}
                    style={{
                      ...column.style,
                      width: column?.width || actualDefaultCellWidth,
                    }}
                  >
                    {renderCell(column, dataSource, -1, -1, columnIndex)}
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    }, [
      columns,
      dataSource,
      indicatorClassName,
      indicatorStyle,
      indicatorFixedWrapClassName,
      indicatorFixedWrapStyle,
      indicatorAutoWrapClassName,
      indicatorAutoWrapStyle,
      getFixedColumnConfig,
      renderCell,
      actualDefaultCellWidth,
    ]);

    /**
     * 渲染主内容组的内容
     * @param config - 主内容项配置
     * @param groupIndex - 分组索引
     * @returns 主内容组内容的JSX元素
     */
    const renderMasterGroupContent = useCallback(
      (config: IMasterItem, groupIndex: number): ReactElement => {
        const {
          dataSource = [],
          columns = [],
          fixedWrapClassName,
          fixedWrapStyle = {},
          autoWrapClassName,
          autoWrapStyle = {},
          autoInnerClassName,
          autoInnerStyle = {},
        } = config;

        const fixedColumnConfig = getFixedColumnConfig(columns);

        return (
          <>
            <div
              className={classNames(`${selectorPrefix}-fixed-wrap`, fixedWrapClassName)}
              style={{
                ...fixedWrapStyle,
                width: fixedColumnConfig?.width || actualDefaultCellWidth,
              }}
            >
              {dataSource.map((record, rowIndex) => (
                <div key={rowIndex} className={`${selectorPrefix}-item`}>
                  <div
                    className={classNames(`${selectorPrefix}-cell`, fixedColumnConfig?.className)}
                    style={fixedColumnConfig?.style}
                  >
                    {renderCell(fixedColumnConfig, record, groupIndex, rowIndex, -1)}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={classNames(`${selectorPrefix}-auto-wrap`, autoWrapClassName)}
              style={autoWrapStyle}
            >
              <div
                className={classNames(`${selectorPrefix}-auto-inner`, autoInnerClassName)}
                style={autoInnerStyle}
              >
                {dataSource.map((record, rowIndex) => (
                  <div key={rowIndex} className={`${selectorPrefix}-item`}>
                    {columns
                      .filter((column) => column !== fixedColumnConfig)
                      .map((column, columnIndex) => (
                        <div
                          key={column.dataIndex}
                          className={classNames(`${selectorPrefix}-cell`, column.className)}
                          style={{
                            ...column.style,
                            width: column?.width || actualDefaultCellWidth,
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
      },
      [getFixedColumnConfig, renderCell, actualDefaultCellWidth],
    );

    /**
     * 渲染主内容组
     * @param config - 主内容项配置
     * @param groupIndex - 分组索引
     * @returns 主内容组的JSX元素
     */
    const renderMasterGroup = useCallback(
      (config: IMasterItem, groupIndex: number): ReactElement => {
        const { title, className, style = {} } = config;

        return (
          <StickupLayoutItem
            key={groupIndex}
            className={classNames(className)}
            style={style}
            title={title}
            content={renderMasterGroupContent(config, groupIndex)}
          />
        );
      },
      [renderMasterGroupContent],
    );

    /**
     * 渲染主内容区域
     * @returns 主内容区域的JSX元素
     */
    const renderMaster = useCallback((): ReactElement => {
      const stickupLayoutProps = {
        ref: stickup,
        className: classNames(`${selectorPrefix}-master-inner`, masterInnerClassName),
        style: masterInnerStyle,
        fixedClassName: classNames(masterStickFixedClassName),
        fixedStyle: masterStickFixedStyle,
        innerClassName: classNames(masterStickInnerClassName),
        innerStyle: masterStickInnerStyle,
        onChange: onStickChange,
      };

      return (
        <div
          className={classNames(`${selectorPrefix}-master`, masterClassName)}
          style={masterStyle}
        >
          <StickupLayout {...stickupLayoutProps}>
            {
              master.map((config, index) =>
                renderMasterGroup(config, index),
              ) as React.ReactElement<StickupLayoutItemProps>[]
            }
          </StickupLayout>
        </div>
      );
    }, [
      masterInnerClassName,
      masterInnerStyle,
      masterStickFixedClassName,
      masterStickFixedStyle,
      masterStickInnerClassName,
      masterStickInnerStyle,
      onStickChange,
      masterClassName,
      masterStyle,
      master,
      renderMasterGroup,
    ]);

    /**
     * 暴露给父组件的方法
     */
    useImperativeHandle(ref, () => ({
      /**
       * 根据索引滚动到指定位置
       * @param index - 目标索引
       * @param duration - 滚动动画持续时间（毫秒）
       */
      scrollToByIndex(index: number, duration = 300): void {
        if (stickup.current) {
          stickup.current.scrollToByIndex(index, duration);
        }
      },

      /**
       * 根据头部元素滚动到指定位置
       * @param headerEl - 目标头部元素
       * @param duration - 滚动动画持续时间（毫秒）
       */
      scrollToByHeaderEl(headerEl: HTMLElement, duration = 300): void {
        if (stickup.current) {
          stickup.current.scrollToByHeaderEl(headerEl, duration);
        }
      },

      /**
       * 根据列索引滚动到指定列
       * @param columnIndex - 目标列索引
       */
      scrollToByColumn(columnIndex: number): void {
        const scroll = scrolls.current[0];
        if (!scroll || !scroll.wrapper) return;

        const el = scroll.wrapper.querySelector(
          `.${selectorPrefix}-item .${selectorPrefix}-cell:nth-of-type(${columnIndex})`,
        );

        if (el) {
          scroll.scrollToElement(el);
        }
      },
    }));

    /**
     * 布局效果：刷新粘性布局和初始化滚动
     */
    useLayoutEffect(() => {
      if (stickup.current) {
        stickup.current.refresh();
      }
      initScroll();
    }, [columns, dataSource, master]);

    return (
      <div ref={wrapperRef} className={classNames(selectorPrefix, className)} style={style}>
        {renderIndicator()}
        {renderMaster()}
      </div>
    );
  }),
);

CascadeCompared.displayName = 'CascadeCompared';

export default CascadeCompared;
