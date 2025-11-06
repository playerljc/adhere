import { Slider } from 'antd';
import classNames from 'classnames';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import type { FontSizeSettingProps, FontSizePreset, FontSizePresetConfig } from './types';

const selectorPrefix = 'adhere-ui-font-size-setting';

const { useTheme } = ConfigProvider;

/**
 * 字体大小预设配置映射
 */
const FONT_SIZE_PRESETS: Record<FontSizePreset, FontSizePresetConfig> = {
  small: { label: 'small', value: 0 },
  medium: { label: 'medium', value: 33 },
  large: { label: 'large', value: 66 },
  extra_large: { label: 'extra_large', value: 100 },
};

/**
 * 字体大小设置组件
 * 
 * 提供字体大小调节功能，包含预设选项和滑动条控制
 * 
 * @component
 * @param {FontSizeSettingProps} props - 组件属性
 * @param {string} [props.className] - 自定义CSS类名
 * @param {CSSProperties} [props.style] - 自定义内联样式
 * @param {number} [props.min=0] - 字体大小最小值
 * @param {number} [props.max=100] - 字体大小最大值
 * @param {number} [props.step=1] - 滑动步长
 * @param {number} [props.value] - 当前字体大小值
 * @param {(value: number) => void} [props.onChange] - 字体大小变化回调
 * @returns {JSX.Element} 字体大小设置组件
 * 
 * @example
 * ```tsx
 * <FontSizeSetting
 *   value={50}
 *   onChange={(value) => console.log('字体大小:', value)}
 *   min={0}
 *   max={100}
 *   step={1}
 * />
 * ```
 */
const FontSizeSetting = memo<FontSizeSettingProps>((props) => {
  const { 
    className, 
    style, 
    onChange, 
    min = 0, 
    max = 100, 
    step = 1,
    value: propValue,
    ...restProps 
  } = props;

  const wrapperRef = useRef<HTMLElement | undefined>(undefined);

  const [value, setValue] = useState<number>(propValue ?? min);

  /**
   * 处理滑动条值变化
   * @param {number} newValue - 新的字体大小值
   */
  const handleSliderChange = useCallback(
    (newValue: number) => {
      setValue(newValue);
      onChange?.(newValue);
    },
    [onChange],
  );

  /**
   * 处理预设选项点击
   * @param {FontSizePreset} preset - 预设选项
   */
  const handlePresetClick = useCallback(
    (preset: FontSizePreset) => {
      const presetValue = FONT_SIZE_PRESETS[preset].value;
      setValue(presetValue);
      onChange?.(presetValue);
    },
    [onChange],
  );

  // 使用主题配置
  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'normal',
    displayName: 'FontSizeSetting',
  });

  // 同步外部value变化
  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  return (
    <div
      ref={wrapperRef as any}
      className={classNames(selectorPrefix, className)}
      style={style}
    >
      <div className={`${selectorPrefix}-range-wrap`}>
        <div className={`${selectorPrefix}-separated-tool`}>
          {Object.entries(FONT_SIZE_PRESETS).map(([preset, config]) => (
            <div 
              key={preset}
              className={`${selectorPrefix}-separated`}
              onClick={() => handlePresetClick(preset as FontSizePreset)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handlePresetClick(preset as FontSizePreset);
                }
              }}
            >
              <span>{Intl.get(config.label)}</span>
            </div>
          ))}
        </div>

        <Slider
          {...restProps}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
});

FontSizeSetting.displayName = 'FontSizeSetting';

export default FontSizeSetting;
