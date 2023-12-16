import { Slider } from 'antd';
import classNames from 'classnames';
import omit from 'omit.js';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { FontSizeSettingProps } from './types';

const selectorPrefix = 'adhere-ui-font-size-setting';

const FontSizeSetting = memo<FontSizeSettingProps>((props) => {
  const { className, style, onChange } = props;

  const [value, setValue] = useState<number>(props.value ?? 0);

  const rootELRef = useRef<HTMLDivElement | null>(null);

  const onSliderChange = useCallback(
    (v) => {
      setValue(v);
      onChange?.(v);
    },
    [value],
  );

  useEffect(() => {
    setValue(props.value ?? 0);
  }, [props.value]);

  return (
    <div
      className={classNames(selectorPrefix, className ?? '')}
      style={style ?? {}}
      ref={rootELRef}
    >
      <div className={`${selectorPrefix}-range-wrap`}>
        <div className={`${selectorPrefix}-separated-tool`}>
          <div className={`${selectorPrefix}-separated`}>
            <span>{Intl.v('小')}</span>
          </div>

          <div className={`${selectorPrefix}-separated`}>
            <span>{Intl.v('中')}</span>
          </div>

          <div className={`${selectorPrefix}-separated`}>
            <span>{Intl.v('大')}</span>
          </div>

          <div className={`${selectorPrefix}-separated`}>
            <span>{Intl.v('特大')}</span>
          </div>
        </div>

        <Slider
          {...omit(props, ['className', 'style', 'value', 'onChange'])}
          value={value}
          onChange={onSliderChange}
        />
      </div>
    </div>
  );
});

FontSizeSetting.displayName = 'FontSizeSetting';

export default FontSizeSetting;
