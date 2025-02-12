import { useMount, useUpdateLayoutEffect } from 'ahooks';
import React, { memo, useRef } from 'react';
import { Spinner } from 'spin.js';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Resource from '@baifendian/adhere-util-resource';

import type { SpinProps } from './types';

const selectorPrefix = 'adhere-ui-spin';

const Spin = memo<SpinProps>((props) => {
  const {
    spinning = false,
    text = '',
    zIndex = Resource.Dict.value.ResourceNormalMaxZIndex.value,
    size = 'default',
  } = props;

  const spinRef = useRef<Spinner | null>(null);

  const dotRef = useRef<HTMLElement | null>(null);

  const createSpin = () => {
    if (spinRef.current) {
      spinRef.current?.stop?.();
    }

    const scaleMap = new Map([
      ['small', 0.1],
      ['default', 0.2],
      ['large', 0.3],
    ]);

    const scale = scaleMap.get(size);

    const color = document.documentElement.style.getPropertyValue(`--adhere-color-primary`);

    spinRef.current = new Spinner({
      lines: 4, // The number of lines to draw
      length: 0, // The length of each line
      width: 52, // The line thickness
      radius: 29, // The radius of the inner circle
      scale, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      speed: 2.1, // Rounds per second
      rotate: 19, // The rotation offset
      animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      color, // CSS color or array of colors
      fadeColor: 'transparent', // CSS color or array of colors
      top: '46%', // Top position relative to parent
      left: '50%', // Left position relative to parent
      shadow: '0 0 1px transparent', // Box-shadow for the lines
      zIndex, // The z-index (defaults to 2e9)
      className: `${selectorPrefix}-spinner`, // The CSS class to assign to the spinner
      position: 'absolute', // Element positioning
    }).spin(dotRef.current as HTMLElement);
  };

  useMount(() => {
    if (spinning) {
      createSpin();
    }
  });

  useUpdateLayoutEffect(() => {
    if (spinning) {
      createSpin();
    }
  }, [size, spinning]);

  return (
    <ConditionalRender conditional={spinning}>
      {() => (
        <div className={selectorPrefix} style={{ zIndex: zIndex }}>
          <span ref={dotRef} className={`${selectorPrefix}-dot`}></span>
          {text && <div className={`${selectorPrefix}-text`}>{text}</div>}
        </div>
      )}
    </ConditionalRender>
  );
});

Spin.displayName = 'Spin';

export default Spin;
