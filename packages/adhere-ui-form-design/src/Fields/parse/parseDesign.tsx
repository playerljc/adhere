import { memo, useCallback, useRef, type FC, type ReactNode } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import type { DesignContextType, DesignValue } from '../../types';
import { isDesktop } from '../../utils';

export type ParseDesignArgs = {
  parentId?: string;
  value: DesignValue;
  context: DesignContextType;
};

export type ParseDesignResult = DataItemRow | ReactNode;

/**
 * parseDesign
 * @description 对designValue进行解析
 */
export function parseDesign({
  parentId,
  value,
  context,
}: ParseDesignArgs): ParseDesignResult {
  const { getTerminal, getItems, mode } = context;

  const terminal = getTerminal();
  const items = getItems();

  const item = items.find((_item) => _item.type === value.type);

  const isFormMode = mode === 'form';

  if (isDesktop(terminal)) {
    // form 模式优先调用 renderForm，缺省回退到 renderDesign
    const desktopRenderer = isFormMode && item?.renderForm ? item.renderForm : item?.renderDesign;

    const result = desktopRenderer?.({
      parentId,
      value,
      context,
    });

    // hidden 字段在布局中不占位（TableGridLayout 会过滤 show=false 的行）
    if (
      result &&
      typeof result === 'object' &&
      'key' in result &&
      'label' in result &&
      'value' in result
    ) {
      const hidden = !!value.props?.formItemProps?.hidden;
      if (hidden && !('show' in result)) {
        (result as DataItemRow).show = false;
      }
    }

    return result;
  }

  // form 模式优先调用 renderFormToMobile，缺省回退到 renderDesignToMobile
  const mobileRenderer =
    isFormMode && item?.renderFormToMobile ? item.renderFormToMobile : item?.renderDesignToMobile;

  return mobileRenderer?.({
    parentId,
    value,
    context,
  });
}

/**
 * 按 DesignValue 引用缓存 parseDesign 结果。
 * context 引用变化时清空（选中、切终端、数据源配置等需要整画布感知的变化）。
 */
export function useParseDesignCached() {
  const cacheRef = useRef<{
    context: DesignContextType | null;
    map: WeakMap<DesignValue, { parentId?: string; result: ParseDesignResult }>;
  }>({ context: null, map: new WeakMap() });

  return useCallback((args: ParseDesignArgs): ParseDesignResult => {
    const cache = cacheRef.current;
    if (cache.context !== args.context) {
      cache.context = args.context;
      cache.map = new WeakMap();
    }
    const hit = cache.map.get(args.value);
    if (hit && hit.parentId === args.parentId) {
      return hit.result;
    }
    const result = parseDesign(args);
    cache.map.set(args.value, { parentId: args.parentId, result });
    return result;
  }, []);
}

/**
 * 布局节点按 value 引用跳过重渲染；context 变化时仍会更新（useContext）。
 */
export function memoDesignNode<P extends { value: DesignValue }>(Component: FC<P>) {
  return memo(Component, (prev, next) => prev.value === next.value);
}
