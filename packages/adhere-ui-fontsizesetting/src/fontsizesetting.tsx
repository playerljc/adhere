import { Slider } from 'antd';
import classNames from 'classnames';
import omit from 'omit.js';
import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { FontSizeSettingProps } from './types';

const selectorPrefix = 'adhere-ui-fontsizesetting';

const FontSizeSetting: FC<FontSizeSettingProps> = (props) => {
  const { className, style, onChange } = props;

  const [value, setValue] = useState<number>(props.value);

  const el = useRef<HTMLDivElement>(null);

  const onSliderChange = useCallback(
    (v) => {
      setValue(v);
      onChange?.(v);
    },
    [value],
  );

  useEffect(() => setValue(props.value), [props.value]);

  return (
    <div className={classNames(selectorPrefix, className || '')} style={style || {}} ref={el}>
      <div className={`${selectorPrefix}-rangewrap`}>
        <div className={`${selectorPrefix}-separatedtool`}>
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
};

export default memo(FontSizeSetting);
