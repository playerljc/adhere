import classNames from 'classnames';
import React, { ReactElement, memo, useCallback, useLayoutEffect, useRef } from 'react';

import { SliderScaleProps } from './types';

const selectorPrefix = 'adhere-ui-slider-scale';

const SliderScale = memo<SliderScaleProps>((props) => {
  const {
    className = '',
    style = {},
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    interval = 5,
    onChange,
  } = props;

  const el = useRef<HTMLDivElement>(null);
  const rangeEl = useRef<HTMLInputElement>(null);
  const preValue = useRef<string | number | undefined>('');

  const renderScale = useCallback(() => {
    const itResult: ReactElement[] = [];

    for (let i = min; i < max; i++) {
      if (max - 1 === min) {
        break;
      }

      let itemJSX: ReactElement | null = null;

      if ((i + 1) % interval === 0) {
        itemJSX = (
          <div
            key={i}
            className={`${selectorPrefix}-scale-item ${selectorPrefix}-scale-item-point`}
          >
            <span className={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
          </div>
        );
      } else if (i === min) {
        itemJSX = (
          <div key={i} className={`${selectorPrefix}-scale-item`}>
            <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
          </div>
        );
      } else if ((i + 1) % interval !== 0 && i === max - 1) {
        itemJSX = (
          <div key={i} className={`${selectorPrefix}-scale-item`}>
            <span className={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
          </div>
        );
      } else {
        itemJSX = <div key={i} className={`${selectorPrefix}-scale-item`} />;
      }

      itResult.push(itemJSX);
    }

    const result: ReactElement[] = [];

    if (min === max) {
      result.push(
        <div key={0} className={`${selectorPrefix}-scale-item`}>
          <span className={`${selectorPrefix}-scale-item-value`}>0</span>
          <span className={`${selectorPrefix}-scale-item-value`} style={{ right: 0, left: 'auto' }}>
            ${max}
          </span>
        </div>,
      );
    } else {
      if (max - 1 === min) {
        result.push(
          <div key={min} className={`${selectorPrefix}-scale-item`}>
            <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
            <span
              className={`${selectorPrefix}-scale-item-value`}
              style={{ right: 0, left: 'auto' }}
            >
              {max}
            </span>
          </div>,
        );
      }
    }

    return result.concat(itResult);
  }, [min, max, interval]);

  const onMousemove = useCallback((e) => {
    touchEvent(e);
  }, []);

  const onTouchmove = useCallback((e) => {
    touchEvent(e);
  }, []);

  function touchEvent(e) {
    const { value } = e.target;

    (rangeEl.current as HTMLInputElement).value = value;

    if (preValue.current !== value) {
      preValue.current = value;

      if (onChange) {
        onChange(value);
      }
    }
  }

  useLayoutEffect(() => {
    (rangeEl.current as HTMLInputElement).value = `${value}`;
  }, [min, max, step, value, interval]);

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}} ref={el}>
      <div className={`${selectorPrefix}-scale`}>{renderScale()}</div>

      <input
        ref={rangeEl}
        className={`${selectorPrefix}-range`}
        type="range"
        min={min}
        max={max}
        step={step}
        onMouseMove={onMousemove}
        onTouchMove={onTouchmove}
      />
    </div>
  );
});

export default SliderScale;
