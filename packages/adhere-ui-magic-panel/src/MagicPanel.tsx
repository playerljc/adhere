import classNames from 'classnames';
import merge from 'lodash.merge';
import React, {
  ReactElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ClipPathConverter } from './ClipPathConverter';
import type { Clip, ComputeElementsInfoData, MagicPanelProps } from './types';
import { calculateNewClip, calculateNewElementsInfo } from './utils';

const selectorPrefix = 'adhere-ui-magic-panel';

/**
 * MagicPanel
 * @description 魔法面板组件，一个响应式的面板组件，能够根据容器尺寸变化自动调整内部元素的位置和大小
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
  ({ className, style, metaData, items, onChange, renderBody, renderClip, children }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [newElementsInfo, setNewElementsInfo] = useState<ComputeElementsInfoData>([]);
    const [newClip, setNewClip] = useState<Clip | null | undefined>(metaData?.clip);

    /**
     * 处理容器尺寸变化
     * @param width - 新宽度
     * @param height - 新高度
     */
    const handleResize = useCallback(
      (width: number, height: number) => {
        if (!metaData) return;

        // 计算新的elementsInfo信息
        const computedElements = calculateNewElementsInfo({
          elementsInfo: metaData.elementsInfo,
          widthOrigin: metaData.originWidth,
          heightOrigin: metaData.originHeight,
          widthNew: width,
          heightNew: height,
        });
        setNewElementsInfo(computedElements);
        onChange?.(computedElements);

        // 计算新的Clip信息
        if (!!metaData?.clip) {
          // 根据width,height计算新的Clip的值
          // 计算新的elementsInfo信息
          const computedClip = calculateNewClip({
            clip: metaData.clip,
            widthOrigin: metaData.originWidth,
            heightOrigin: metaData.originHeight,
            widthNew: width,
            heightNew: height,
          });

          setNewClip(computedClip);
        }
      },
      [metaData, onChange],
    );

    // 计算目标项目元素
    const targetItems = useMemo<ReactElement[]>(() => {
      if (!items?.length || items.length !== newElementsInfo?.length) {
        return [];
      }

      return items
        .map(
          ({ key, className: itemClassName, style: itemStyle, children: itemChildren }, index) => {
            const newElement = newElementsInfo[index];

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
          },
        )
        .filter(Boolean) as ReactElement[];
    }, [items, newElementsInfo]);

    const targetClipElement = useMemo<ReactElement | null>(() => {
      if (!newClip) return null;

      const clipPathValue = ClipPathConverter.toCSS(newClip);

      return (
        <div
          className={`${selectorPrefix}-clip`}
          style={{
            clipPath: clipPathValue,
            WebkitClipPath: clipPathValue, // 兼容性前缀
          }}
        >
          {renderClip?.()}
        </div>
      );
    }, [newClip]);

    // 渲染主体内容
    const bodyElement = useMemo(() => renderBody(elementRef), [renderBody]);

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

    useEffect(() => {
      setNewClip(metaData?.clip);
    }, [metaData?.clip]);

    return (
      <div className={classNames(selectorPrefix, className)} style={style ?? {}} ref={elementRef}>
        {targetClipElement}
        {children?.(bodyElement, newElementsInfo, targetItems)}
      </div>
    );
  },
);

MagicPanel.displayName = 'MagicPanel';

export default MagicPanel;
