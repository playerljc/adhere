import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import TabContext from '@rc-component/tabs/es/TabContext';
import classNames from 'classnames';
import merge from 'lodash.merge';
import React, { memo, useContext, useEffect, useMemo, useRef } from 'react';
import type { CSSProperties, KeyboardEvent, MouseEvent, ReactElement, ReactNode } from 'react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { SegmentedTabsProps } from '../types';

const selectorPrefix = 'adhere-ui-anthoc-segmented-tabs';

type TabBarExtraMap = Partial<Record<'left' | 'right', ReactNode>>;

export type SegmentedTabBarProps = {
  id?: string;
  activeKey: string;
  tabPosition: 'top' | 'right' | 'bottom' | 'left';
  rtl?: boolean;
  extra?: SegmentedTabsProps['tabBarExtraContent'];
  editable?: {
    onEdit: (
      type: 'add' | 'remove',
      info: { key?: string; event: MouseEvent | KeyboardEvent },
    ) => void;
    showAdd?: boolean;
    removeIcon?: ReactNode;
    addIcon?: ReactNode;
  };
  locale?: { removeAriaLabel?: string; addAriaLabel?: string };
  tabBarGutter?: number;
  onTabClick: (key: string, e: MouseEvent | KeyboardEvent) => void;
  onTabScroll?: (info: { direction: 'left' | 'right' | 'top' | 'bottom' }) => void;
  style?: CSSProperties;
  items?: SegmentedTabsProps['items'];
  size?: SegmentedTabsProps['size'];
  centered?: boolean;
  type?: SegmentedTabsProps['type'];
  swiperProps?: SegmentedTabsProps['tabBarSwiperProps'];
  className?: string;
};

function parseExtra(extra: SegmentedTabsProps['tabBarExtraContent']): TabBarExtraMap {
  if (!extra) {
    return {};
  }

  if (typeof extra === 'object' && !React.isValidElement(extra)) {
    return extra as TabBarExtraMap;
  }

  return { right: extra };
}

function isRemovable(
  closable: boolean | undefined,
  closeIcon: ReactNode,
  editable: SegmentedTabBarProps['editable'],
  disabled: boolean | undefined,
): boolean {
  if (!editable || disabled || closable === false) {
    return false;
  }

  if (closable === undefined && (closeIcon === false || closeIcon === null)) {
    return false;
  }

  return true;
}

function normalizeSize(size: SegmentedTabsProps['size']): 'small' | 'middle' | 'large' {
  if (size === 'small' || size === 'large') {
    return size;
  }

  // antd SizeType: medium 为推荐值，middle 为兼容别名
  return 'middle';
}

/**
 * SegmentedTabBar
 * @description Segmented 外观的 TabBar，溢出时用 Swiper 横/纵滑动
 */
const SegmentedTabBar = memo<SegmentedTabBarProps>(
  ({
    id,
    activeKey,
    tabPosition,
    extra,
    editable,
    locale,
    tabBarGutter,
    onTabClick,
    onTabScroll,
    style,
    items,
    size,
    centered,
    type,
    swiperProps,
    className,
  }) => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const lastTranslateRef = useRef(0);
    const { tabs: contextTabs } = useContext(TabContext);

    const isVertical = tabPosition === 'left' || tabPosition === 'right';
    // 优先用 Tabs 内部 context（已过滤非法 item），与面板状态一致
    const targetItems = useMemo(
      () => (contextTabs?.length ? contextTabs : items ?? []),
      [contextTabs, items],
    );
    const extraMap = useMemo(() => parseExtra(extra), [extra]);
    const sizeClass = normalizeSize(size);

    const targetSwiperProps = useMemo(
      () =>
        merge(
          {},
          {
            slidesPerView: 'auto',
            freeMode: true,
            watchOverflow: true,
            resistanceRatio: 0,
            mousewheel: {
              forceToAxis: true,
              releaseOnEdges: true,
            },
          },
          swiperProps ?? {},
        ),
      [swiperProps],
    );

    const activeIndex = useMemo(
      () => targetItems.findIndex((item) => String(item.key) === String(activeKey)),
      [targetItems, activeKey],
    );

    useEffect(() => {
      const swiper = swiperRef.current;
      if (!swiper || activeIndex < 0) {
        return;
      }

      // freeMode 下 slideTo 保证选中项进入可视区
      swiper.slideTo(activeIndex);
    }, [activeIndex, isVertical, targetItems.length]);

    function handleSwiper(swiper: SwiperClass) {
      swiperRef.current = swiper;
      lastTranslateRef.current = swiper.translate ?? 0;

      if (activeIndex >= 0) {
        swiper.slideTo(activeIndex, 0);
      }
    }

    function handleSetTranslate(swiper: SwiperClass) {
      if (!onTabScroll) {
        return;
      }

      const next = swiper.translate ?? 0;
      const prev = lastTranslateRef.current;

      if (next === prev) {
        return;
      }

      // 与 @rc-component/tabs 方向语义对齐
      if (isVertical) {
        onTabScroll({ direction: next > prev ? 'top' : 'bottom' });
      } else {
        onTabScroll({ direction: next > prev ? 'left' : 'right' });
      }

      lastTranslateRef.current = next;
    }

    function renderExtra(position: 'left' | 'right'): ReactElement | null {
      const content = extraMap[position];
      if (!content) {
        return null;
      }

      return (
        <div className={`${selectorPrefix}-extra ${selectorPrefix}-extra-${position}`}>{content}</div>
      );
    }

    function renderAdd(): ReactElement | null {
      if (!editable || editable.showAdd === false) {
        return null;
      }

      return (
        <button
          type="button"
          className={`${selectorPrefix}-add`}
          aria-label={locale?.addAriaLabel ?? 'Add tab'}
          onClick={(e) => {
            editable.onEdit('add', { event: e });
          }}
        >
          {editable.addIcon ?? <PlusOutlined />}
        </button>
      );
    }

    return (
      <div
        className={classNames(
          'ant-tabs-nav',
          selectorPrefix,
          `${selectorPrefix}-${tabPosition}`,
          `${selectorPrefix}-size-${sizeClass}`,
          {
            [`${selectorPrefix}-centered`]: !!centered,
            [`${selectorPrefix}-editable`]: !!editable,
            [`${selectorPrefix}-card`]: type === 'card' || type === 'editable-card',
            [`${selectorPrefix}-vertical`]: isVertical,
            [`${selectorPrefix}-horizontal`]: !isVertical,
          },
          className,
        )}
        style={style}
      >
        {renderExtra('left')}

        <div className={`${selectorPrefix}-track`} role="tablist">
          <Swiper
            className={`${selectorPrefix}-swiper`}
            {...targetSwiperProps}
            direction={isVertical ? 'vertical' : 'horizontal'}
            modules={[FreeMode, Mousewheel]}
            onSwiper={handleSwiper}
            onSetTranslate={handleSetTranslate}
          >
            {targetItems.map((item) => {
              const { key, label, icon, disabled, closable, closeIcon } = item;
              const active = String(key) === String(activeKey);
              const removable = isRemovable(closable, closeIcon, editable, disabled);
              const gutterStyle =
                typeof tabBarGutter === 'number'
                  ? isVertical
                    ? { marginBottom: tabBarGutter }
                    : { marginInlineEnd: tabBarGutter }
                  : undefined;

              return (
                <SwiperSlide key={key} className={`${selectorPrefix}-slide`} style={gutterStyle}>
                  <div
                    role="tab"
                    id={id ? `${id}-tab-${key}` : undefined}
                    aria-controls={id ? `${id}-panel-${key}` : undefined}
                    aria-selected={active}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : active ? 0 : -1}
                    className={classNames(`${selectorPrefix}-item`, {
                      [`${selectorPrefix}-item-active`]: active,
                      [`${selectorPrefix}-item-disabled`]: !!disabled,
                    })}
                    onClick={(e) => {
                      if (disabled) {
                        return;
                      }
                      onTabClick(String(key), e);
                    }}
                    onKeyDown={(e) => {
                      if (disabled) {
                        return;
                      }
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onTabClick(String(key), e);
                      }
                    }}
                  >
                    <span className={`${selectorPrefix}-item-label`}>
                      {!!icon && <span className={`${selectorPrefix}-item-icon`}>{icon}</span>}
                      {label}
                    </span>

                    {removable && (
                      <button
                        type="button"
                        className={`${selectorPrefix}-remove`}
                        aria-label={locale?.removeAriaLabel ?? 'Remove tab'}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          editable?.onEdit('remove', { key: String(key), event: e });
                        }}
                      >
                        {closeIcon ?? editable?.removeIcon ?? <CloseOutlined />}
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {renderAdd()}
        </div>

        {renderExtra('right')}
      </div>
    );
  },
);

SegmentedTabBar.displayName = 'SegmentedTabBar';

export default SegmentedTabBar;
