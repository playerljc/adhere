import classNames from 'classnames';
import merge from 'lodash/merge';
import React, { ReactElement, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';

import { ComputeData, ElementInfo, Item, MagicPanelProps } from './types';

const selectorPrefix = 'adhere-ui-magic-panel';

/**
 * 计算新元素信息的参数接口
 * @interface CalculateElementsParams
 */
interface CalculateElementsParams {
  elementsInfo: ElementInfo[];
  widthOrigin: number;
  heightOrigin: number;
  widthNew: number;
  heightNew: number;
}

/**
 * 魔法面板组件
 * @description 一个响应式的面板组件，能够根据容器尺寸变化自动调整内部元素的位置和大小
 * @param props - 组件属性
 * @returns React 元素
 * @example
 * ```tsx
 * <MagicPanel
 *   metaData={{
 *     elementsInfo: [{ x: 0, y: 0, width: 100, height: 100 }],
 *     originWidth: 800,
 *     originHeight: 600
 *   }}
 *   renderBody={(ref) => <div ref={ref}>内容</div>}
 *   items={[{ key: 'item1', children: () => <span>项目1</span> }]}
 *   onChange={(elements) => console.log('元素信息变化:', elements)}
 * />
 * ```
 */
const MagicPanel = memo<MagicPanelProps>(
  ({ className, style, metaData, items, onChange, renderBody, children }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [newElements, setNewElements] = useState<ComputeData>([]);

    /**
     * 计算新的元素信息
     * @param params - 计算参数
     * @returns 新的元素信息数组
     */
    const calculateNewElements = useCallback((params: CalculateElementsParams): ComputeData => {
      const { elementsInfo, widthOrigin, heightOrigin, widthNew, heightNew } = params;
      
      return Util.calculateNewElementsInfo({
        elementsInfo,
        widthOrigin,
        heightOrigin,
        widthNew,
        heightNew,
      }).map(({ newX, newY, newWidth, newHeight }, index) => ({
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight,
        attrs: elementsInfo?.[index]?.attrs,
      }));
    }, []);

    /**
     * 处理容器尺寸变化
     * @param width - 新宽度
     * @param height - 新高度
     */
    const handleResize = useCallback((width: number, height: number) => {
      if (!metaData) return;

      const params: CalculateElementsParams = {
        elementsInfo: metaData.elementsInfo,
        widthOrigin: metaData.originWidth,
        heightOrigin: metaData.originHeight,
        widthNew: width,
        heightNew: height,
      };

      const computedElements = calculateNewElements(params);
      setNewElements(computedElements);
      onChange?.(computedElements);
    }, [metaData, calculateNewElements, onChange]);

    // 计算目标项目元素
    const targetItems = useMemo<ReactElement[]>(() => {
      if (!items?.length || items.length !== newElements?.length) {
        return [];
      }

      return items.map(({ key, className: itemClassName, style: itemStyle, children: itemChildren }, index) => {
        const newElement = newElements[index];
        
        if (!newElement) return null;

        return (
          <div
            key={key}
            className={classNames(`${selectorPrefix}-item`, itemClassName)}
            style={merge(
              {
                position: 'absolute',
                left: `${newElement.x}px`,
                top: `${newElement.y}px`,
                width: `${newElement.width}px`,
                height: `${newElement.height}px`,
              },
              itemStyle ?? {},
            )}
          >
            {itemChildren?.({ ...newElement })}
          </div>
        );
      }).filter(Boolean) as ReactElement[];
    }, [items, newElements]);

    // 设置 ResizeObserver 监听容器尺寸变化
    useEffect(() => {
      const currentElement = elementRef?.current;
      if (!currentElement) return;

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          handleResize(width, height);
        }
      });

      resizeObserver.observe(currentElement);

      return () => {
        resizeObserver.disconnect();
      };
    }, [handleResize]);

    // 渲染主体内容
    const bodyElement = useMemo(() => renderBody(elementRef), [renderBody]);

    return (
      <div 
        className={classNames(selectorPrefix, className)} 
        style={style ?? {}}
        ref={elementRef}
      >
        {children?.(bodyElement, newElements, targetItems)}
      </div>
    );
  },
);

MagicPanel.displayName = 'MagicPanel';

export default MagicPanel;
