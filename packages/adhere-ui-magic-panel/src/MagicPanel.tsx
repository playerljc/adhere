import classNames from 'classnames';
import merge from 'lodash/merge';
import React, { ReactElement, memo, useEffect, useMemo, useRef, useState } from 'react';

import Util from '@baifendian/adhere-util';

import { ComputeData, MagicPanelProps } from './types';

const selectorPrefix = 'adhere-ui-magic-panel';

/**
 * MagicPanel
 * @param props
 * @constructor
 */
const MagicPanel = memo<MagicPanelProps>(
  ({ className, style, metaData, items, onChange, renderBody, children }) => {
    const elementRef = useRef<HTMLDivElement>(null);

    const [newElements, setNewElements] = useState<ComputeData>([]);

    const targetItems = useMemo<ReactElement[]>(() => {
      if (items?.length !== newElements?.length) return [];

      return (items ?? []).map(({ key, className, style, children }, _index) => {
        const newElement = newElements[_index];

        return (
          <div
            key={key}
            className={classNames(`${selectorPrefix}-item`, className)}
            style={merge(
              {
                left: `${newElement.x}px`,
                top: `${newElement.y}px`,
                width: `${newElement.width}px`,
                height: `${newElement.height}px`,
              },
              style ?? {},
            )}
          >
            {children?.({ ...newElement })}
          </div>
        );
      });
    }, [items, newElements]);

    useEffect(() => {
      if (!elementRef?.current) return () => {};

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;

          const arg = {
            elementsInfo: metaData?.elementsInfo ?? [],
            widthOrigin: metaData?.originWidth ?? 0,
            heightOrigin: metaData?.originHeight ?? 0,
            widthNew: width ?? 0,
            heightNew: height ?? 0,
          };

          const newElements: ComputeData = Util.calculateNewElementsInfo(arg).map(
            ({ newX, newY, newWidth, newHeight }, _index) => ({
              x: newX,
              y: newY,
              width: newWidth,
              height: newHeight,
              attrs: arg?.elementsInfo?.[_index]?.attrs,
            }),
          );

          setNewElements(newElements);

          onChange?.(newElements);
        }
      });

      resizeObserver.observe(elementRef.current as HTMLDivElement);

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    return (
      <div className={classNames(selectorPrefix, className)} style={style ?? {}}>
        {children?.(renderBody?.(elementRef), newElements, targetItems)}
      </div>
    );
  },
);

MagicPanel.displayName = 'MagicPanel';

export default MagicPanel;
