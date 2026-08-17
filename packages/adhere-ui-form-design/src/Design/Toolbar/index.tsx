import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import classNames from 'classnames';
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { FC } from 'react';
import type { ItemType } from 'antd/es/menu/interface';

import { SELECT_PREFIX } from '../../constant';
import type { MenuItem, Terminal, ToolBar, ToolBarItem, ToolbarProps } from '../../types';
import { DesignContext } from '../Context';

const selectPrefix = `${SELECT_PREFIX}-design-toolbar`;

type ToolbarFlatDivider = { type: 'divider' };
type ToolbarFlatItem = { type: 'item'; item: ToolBarItem; groupIndex: number };
type ToolbarFlatEntry = ToolbarFlatDivider | ToolbarFlatItem;

function flattenToolbarGroups(groups: ToolBar): ToolbarFlatEntry[] {
  const nonEmpty = groups.filter((g) => g.length > 0);
  const out: ToolbarFlatEntry[] = [];
  nonEmpty.forEach((group, idx) => {
    if (idx > 0) out.push({ type: 'divider' });
    group.forEach((item) => out.push({ type: 'item', item, groupIndex: idx }));
  });
  return out;
}

function parseGapPx(el: HTMLElement | null): number {
  if (!el) return 0;
  const g = getComputedStyle(el).gap;
  if (!g || g === 'normal') return 0;
  const v = parseFloat(g.split(/\s+/)[0] ?? '');
  return Number.isFinite(v) ? v : 0;
}

function parseCssVarPx(el: HTMLElement | null, varName: string, fallback: number): number {
  if (!el) return fallback;
  const raw = getComputedStyle(el).getPropertyValue(varName).trim();
  if (!raw) return fallback;
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}

/**
 * 在 k <= limit 的前提下，取最大 k 使「前 k 段 +（若 k<n 则加省略按钮）」总宽不超过容器。
 */
function computeVisibleCount(args: {
  containerWidth: number;
  childWidths: number[];
  gapPx: number;
  ellipsisReservePx: number;
  maxVisible?: number;
}): number {
  const { containerWidth, childWidths, gapPx, ellipsisReservePx, maxVisible } = args;
  const n = childWidths.length;
  if (n === 0 || containerWidth <= 0) return 0;

  const limit =
    maxVisible !== undefined && Number.isFinite(maxVisible)
      ? Math.min(n, Math.max(0, maxVisible))
      : n;

  const prefixWidth = (k: number) => {
    if (k <= 0) return 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += childWidths[i] ?? 0;
    return sum + (k > 1 ? gapPx * (k - 1) : 0);
  };

  let best = 0;
  for (let k = 0; k <= limit; k++) {
    const pw = prefixWidth(k);
    const needEllipsis = k < n;
    const total = pw + (needEllipsis ? (k > 0 ? gapPx : 0) + ellipsisReservePx : 0);
    if (total <= containerWidth) best = k;
    else break;
  }
  return best;
}

function buildToolbarOverflowMenuItems(
  overflowEntries: ToolbarFlatEntry[],
  terminal: Terminal,
): ItemType[] {
  const items: ItemType[] = [];
  let prevGroup: number | null = null;

  overflowEntries.forEach((entry, idx) => {
    if (entry.type === 'divider') {
      if (items.length > 0) items.push({ type: 'divider' });
      return;
    }
    const { item, groupIndex } = entry;
    if (prevGroup !== null && groupIndex !== prevGroup && items.length > 0) {
      items.push({ type: 'divider' });
    }
    prevGroup = groupIndex;
    const isTerminalToggle =
      item.key === 'changeDesktopMode' || item.key === 'changeMobileMode';
    const isActive =
      isTerminalToggle &&
      ((item.key === 'changeDesktopMode' && terminal === 'desktop') ||
        (item.key === 'changeMobileMode' && terminal === 'mobile'));
    items.push({
      key: `overflow-${item.key}-${idx}`,
      label: (
        <div
          className={classNames(`${selectPrefix}-overflow-menu-el`, {
            [`${selectPrefix}-overflow-menu-el-active`]: isActive,
          })}
        >
          {item.el}
        </div>
      ),
    });
  });

  return items;
}

function buildMenuOverflowItems(overflowItems: MenuItem[]): ItemType[] {
  return overflowItems.map((item, idx) => ({
    key: `overflow-menu-${item.key}-${idx}`,
    label: (
      <div className={classNames(`${selectPrefix}-overflow-menu-el`)}>{item.el}</div>
    ),
  }));
}

function useRowOverflowCount(args: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  measureRef: React.RefObject<HTMLDivElement | null>;
  ellipsisMeasureRef: React.RefObject<HTMLDivElement | null>;
  entryCount: number;
  maxVisible?: number;
  ellipsisFallbackPx: number;
  /** 可用宽度；不传则用 container.clientWidth。用于左侧内容撑开时避免自我裁剪 */
  getAvailableWidth?: () => number;
}): number {
  const {
    containerRef,
    measureRef,
    ellipsisMeasureRef,
    entryCount,
    maxVisible,
    ellipsisFallbackPx,
    getAvailableWidth,
  } = args;
  const [visible, setVisible] = useState(entryCount);

  const recalc = useCallback(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure || entryCount === 0) {
      setVisible(entryCount);
      return;
    }

    const children = Array.from(measure.children) as HTMLElement[];
    const childWidths = children.map((c) => c.getBoundingClientRect().width);

    // 测量不到（未挂载 / 尚未布局 / 容器不可见）时全部展示，避免误把工具收进省略菜单
    if (childWidths.length === 0 || childWidths.every((width) => width <= 0)) {
      setVisible(entryCount);
      return;
    }

    const gapPx = parseGapPx(measure);
    const ellipsisReservePx =
      ellipsisMeasureRef.current?.getBoundingClientRect().width ||
      parseCssVarPx(
        container,
        '--fd-design-toolbar-ellipsis-min-width',
        ellipsisFallbackPx,
      );

    const w = getAvailableWidth?.() ?? container.clientWidth;
    // 布局未完成时不要裁成 0，否则内容区塌陷后永远算不出宽度
    if (w <= 0) return;

    const k = computeVisibleCount({
      containerWidth: w,
      childWidths,
      gapPx,
      ellipsisReservePx,
      maxVisible,
    });

    setVisible((prev) => (prev === k ? prev : k));
  }, [
    containerRef,
    measureRef,
    ellipsisMeasureRef,
    entryCount,
    maxVisible,
    ellipsisFallbackPx,
    getAvailableWidth,
  ]);

  useLayoutEffect(() => {
    setVisible(entryCount);
    recalc();
    const id = requestAnimationFrame(() => recalc());
    return () => cancelAnimationFrame(id);
  }, [recalc, entryCount]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const targets = [container, container?.parentElement].filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;

    const ro = new ResizeObserver(() => {
      recalc();
    });
    targets.forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, [containerRef, recalc]);

  return Math.min(visible, entryCount);
}

function renderToolbarEntry(
  entry: ToolbarFlatEntry,
  key: string,
  terminal: Terminal,
): React.ReactElement {
  if (entry.type === 'divider') {
    return <div key={key} className={classNames(`${selectPrefix}-divider`)} aria-hidden />;
  }
  const { item } = entry;
  const isTerminalToggle =
    item.key === 'changeDesktopMode' || item.key === 'changeMobileMode';
  const isActive =
    isTerminalToggle &&
    ((item.key === 'changeDesktopMode' && terminal === 'desktop') ||
      (item.key === 'changeMobileMode' && terminal === 'mobile'));
  return (
    <div
      key={key}
      className={classNames(`${selectPrefix}-item`, {
        [`${selectPrefix}-item-active`]: isActive,
      })}
    >
      {item.el}
    </div>
  );
}

function renderMenuItemNode(item: MenuItem, key: string): React.ReactElement {
  return (
    <div key={key} className={classNames(`${selectPrefix}-item`)}>
      {item.el}
    </div>
  );
}

/**
 * Toolbar
 */
const Toolbar: FC<ToolbarProps> = ({
  toolbarGroup,
  menu,
  toolbarEllipseCount,
  menuBarEllipseCount,
}) => {
  const { getTerminal } = useContext(DesignContext);
  const terminal = getTerminal();

  const toolbarEntries = useMemo(() => flattenToolbarGroups(toolbarGroup), [toolbarGroup]);

  const toolbarRootRef = useRef<HTMLDivElement>(null);
  const groupContainerRef = useRef<HTMLDivElement>(null);
  const groupMeasureRef = useRef<HTMLDivElement>(null);
  const groupEllipsisMeasureRef = useRef<HTMLDivElement>(null);

  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuMeasureRef = useRef<HTMLDivElement>(null);
  const menuEllipsisMeasureRef = useRef<HTMLDivElement>(null);

  const getGroupAvailableWidth = useCallback(() => {
    const root = toolbarRootRef.current;
    const menuMeasure = menuMeasureRef.current;
    if (!root) return 0;
    const rootStyle = getComputedStyle(root);
    const gapPx = parseFloat(rootStyle.columnGap || rootStyle.gap || '0') || 0;
    // 用菜单真实内容宽，而不是 flex 拉伸后的容器宽，避免左侧可用宽度被算成接近 0
    const menuContentWidth = menuMeasure?.scrollWidth ?? 0;
    const menuEllipsisWidth =
      menuEllipsisMeasureRef.current?.getBoundingClientRect().width || 32;
    // 预留右侧菜单省略按钮，避免极端窄屏互相挤压
    const menuReserve = menuContentWidth > 0 ? menuContentWidth + menuEllipsisWidth : 0;
    return Math.max(0, root.clientWidth - menuReserve - gapPx);
  }, []);

  const toolbarVisible = useRowOverflowCount({
    containerRef: groupContainerRef,
    measureRef: groupMeasureRef,
    ellipsisMeasureRef: groupEllipsisMeasureRef,
    entryCount: toolbarEntries.length,
    maxVisible: toolbarEllipseCount,
    ellipsisFallbackPx: 32,
    getAvailableWidth: getGroupAvailableWidth,
  });

  const menuVisible = useRowOverflowCount({
    containerRef: menuContainerRef,
    measureRef: menuMeasureRef,
    ellipsisMeasureRef: menuEllipsisMeasureRef,
    entryCount: menu.length,
    maxVisible: menuBarEllipseCount,
    ellipsisFallbackPx: 32,
  });

  const visibleToolbarEntries = toolbarEntries.slice(0, toolbarVisible);
  const overflowToolbarEntries = toolbarEntries.slice(toolbarVisible);
  const toolbarOverflowItems = useMemo(() => {
    return buildToolbarOverflowMenuItems(toolbarEntries.slice(toolbarVisible), terminal);
  }, [toolbarEntries, toolbarVisible, terminal]);

  const visibleMenu = menu.slice(0, menuVisible);
  const menuOverflowItems = useMemo(() => {
    return buildMenuOverflowItems(menu.slice(menuVisible));
  }, [menu, menuVisible]);

  const showToolbarEllipsis = overflowToolbarEntries.length > 0;
  const showMenuEllipsis = menu.slice(menuVisible).length > 0;

  return (
    <div ref={toolbarRootRef} className={classNames(selectPrefix)}>
      <div className={classNames(`${selectPrefix}-group`)}>
        <div className={classNames(`${selectPrefix}-group-inner`)} ref={groupContainerRef}>
          <div
            ref={groupMeasureRef}
            className={classNames(`${selectPrefix}-measure`)}
            aria-hidden
          >
            {toolbarEntries.map((entry, i) =>
              renderToolbarEntry(
                entry,
                `m-${i}-${entry.type === 'item' ? entry.item.key : 'd'}`,
                terminal,
              ),
            )}
          </div>
          {toolbarEntries.length > 0 && (
            <div
              ref={groupEllipsisMeasureRef}
              className={classNames(`${selectPrefix}-ellipsis-measure`)}
              aria-hidden
            >
              <Button type="text" icon={<EllipsisOutlined />} tabIndex={-1} />
            </div>
          )}
          <div className={classNames(`${selectPrefix}-row`)}>
            {visibleToolbarEntries.map((entry, i) =>
              renderToolbarEntry(
                entry,
                `v-${i}-${entry.type === 'item' ? entry.item.key : 'd'}`,
                terminal,
              ),
            )}
            {showToolbarEllipsis && (
              <div className={classNames(`${selectPrefix}-ellipsis`)}>
                <Dropdown
                  menu={{ items: toolbarOverflowItems }}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <Button type="text" icon={<EllipsisOutlined />} />
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={classNames(`${selectPrefix}-menu`)}>
        <div className={classNames(`${selectPrefix}-menu-inner`)} ref={menuContainerRef}>
          <div ref={menuMeasureRef} className={classNames(`${selectPrefix}-measure`)} aria-hidden>
            {menu.map((item, i) => renderMenuItemNode(item, `mm-${i}-${item.key}`))}
          </div>
          {menu.length > 0 && (
            <div
              ref={menuEllipsisMeasureRef}
              className={classNames(`${selectPrefix}-ellipsis-measure`)}
              aria-hidden
            >
              <Button type="text" icon={<EllipsisOutlined />} tabIndex={-1} />
            </div>
          )}
          <div className={classNames(`${selectPrefix}-row`)}>
            {visibleMenu.map((item, i) => renderMenuItemNode(item, `mv-${i}-${item.key}`))}
            {showMenuEllipsis && (
              <div className={classNames(`${selectPrefix}-ellipsis`)}>
                <Dropdown
                  menu={{ items: menuOverflowItems }}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <Button type="text" icon={<EllipsisOutlined />} />
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
