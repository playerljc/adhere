import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import { glassBorderTint } from './borderColorMix';
import type {
  GlassCornerKey,
  GlassCornerMode,
  GlassCorners,
  GlassEdgeGradientDirection,
  GlassGradientStopPair,
  GlassProps,
  GlassRootCSSVars,
} from './types';

const selectorPrefix = 'adhere-ui-glass';

const Glass = memo<GlassProps>((props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const {
    className,
    style,
    boxClassName,
    boxStyle,
    boxInnerClassName,
    boxInnerStyle,
    autoHeight = true,
    borderWidth,
    borderRadius,
    borderColor,
    strongColorAlpha,
    mediumColorAlpha,
    lightColorAlpha,
    corners,
    children,
    ...rest
  } = props;

  const styles = useMemo<GlassRootCSSVars>(() => {
    const strong = glassBorderTint(strongColorAlpha ?? 0.6);
    const medium = glassBorderTint(mediumColorAlpha ?? 0.7);
    const light = glassBorderTint(lightColorAlpha ?? 0.1);

    const defaultCorners: Required<GlassCorners> = {
      leftTop: 'light',
      rightTop: 'dark',
      rightBottom: 'light',
      leftBottom: 'dark',
    };

    const getCornerMode = (cornerKey: GlassCornerKey): GlassCornerMode =>
      corners?.[cornerKey] ?? defaultCorners[cornerKey];

    const getCornerColor = (cornerKey: GlassCornerKey) =>
      getCornerMode(cornerKey) === 'dark' ? light : strong;

    // 规则：角为 light(亮) 时，相应边端点为亮；角为 dark(暗) 时，相应边端点为暗
    // 这里“边端点亮”用 medium（更接近原来的边缘亮度层次）
    const getEdgeEndpointColor = (cornerKey: GlassCornerKey) =>
      getCornerMode(cornerKey) === 'light' ? medium : light;

    /**
     * 边的渐变 stop 规则（严格参考 test/玻璃效果.html）：
     * - light -> dark：dark 只在靠近末端出现（secondary -> end）
     * - dark -> light：dark 只在起点一小段出现（start -> primary）
     * - 同亮/同暗：整条边同色
     */
    const getEdgeGradient = (
      direction: GlassEdgeGradientDirection,
      startCorner: GlassCornerKey,
      endCorner: GlassCornerKey,
      startStop: GlassGradientStopPair,
      endStop: GlassGradientStopPair,
    ) => {
      const startMode = getCornerMode(startCorner);
      const endMode = getCornerMode(endCorner);

      const startColor = getEdgeEndpointColor(startCorner);
      const endColor = getEdgeEndpointColor(endCorner);

      if (startMode === endMode) {
        // 同亮/同暗：整条边同色
        return `linear-gradient(${direction}, ${startColor} 0%, ${startColor} 100%)`;
      }

      // dark -> light：dark 只在起点一小段
      if (startMode === 'dark') {
        return `linear-gradient(${direction}, ${startColor} ${startStop.a}, ${endColor} ${startStop.b})`;
      }

      // light -> dark：dark 只在末端附近
      return `linear-gradient(${direction}, ${startColor} ${endStop.a}, ${endColor} ${endStop.b})`;
    };

    const topEdge = getEdgeGradient(
      'to right',
      'leftTop',
      'rightTop',
      { a: 'var(--gradient-position-start)', b: 'var(--gradient-position-primary)' },
      { a: 'var(--gradient-position-secondary)', b: 'var(--gradient-position-end)' },
    );

    const rightEdge = getEdgeGradient(
      'to bottom',
      'rightTop',
      'rightBottom',
      { a: 'var(--gradient-position-start)', b: 'var(--gradient-position-primary)' },
      { a: 'var(--gradient-position-secondary)', b: 'var(--gradient-position-end)' },
    );

    const bottomEdge = getEdgeGradient(
      'to right',
      'leftBottom',
      'rightBottom',
      { a: 'var(--gradient-position-start)', b: 'var(--gradient-position-primary)' },
      { a: 'var(--gradient-position-secondary)', b: 'var(--gradient-position-end)' },
    );

    const leftEdge = getEdgeGradient(
      'to bottom',
      'leftTop',
      'leftBottom',
      { a: 'var(--gradient-position-start)', b: 'var(--gradient-position-primary)' },
      { a: 'var(--gradient-position-secondary)', b: 'var(--gradient-position-end)' },
    );

    const cornerLeftTop = getCornerColor('leftTop');
    const cornerRightTop = getCornerColor('rightTop');
    const cornerRightBottom = getCornerColor('rightBottom');
    const cornerLeftBottom = getCornerColor('leftBottom');

    const borderBackgroundImage = [
      // 左上角
      `radial-gradient(circle at 100% 100%, transparent calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerLeftTop} calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerLeftTop} calc(var(--border-radius) + var(--border-width)), transparent calc(var(--border-radius) + var(--border-width)))`,
      // 右上角
      `radial-gradient(circle at 0% 100%, transparent calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerRightTop} calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerRightTop} calc(var(--border-radius) + var(--border-width)), transparent calc(var(--border-radius) + var(--border-width)))`,
      // 右下角
      `radial-gradient(circle at 0% 0%, transparent calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerRightBottom} calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerRightBottom} calc(var(--border-radius) + var(--border-width)), transparent calc(var(--border-radius) + var(--border-width)))`,
      // 左下角
      `radial-gradient(circle at 100% 0%, transparent calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerLeftBottom} calc(var(--border-radius) + var(--border-width) - var(--border-width)), ${cornerLeftBottom} calc(var(--border-radius) + var(--border-width)), transparent calc(var(--border-radius) + var(--border-width)))`,
      // 上中 / 右中 / 下中 / 左中
      topEdge,
      rightEdge,
      bottomEdge,
      leftEdge,
    ].join(', ');

    return {
      '--glass-border-color': (borderColor ?? '').trim() || '#fff',
      '--border-width': borderWidth ? `${borderWidth}px` : '2px',
      '--border-radius': borderRadius ? `${borderRadius}px` : '15px',
      '--gradient-position-start': '0%',
      '--gradient-position-primary': '20%',
      '--gradient-position-secondary': '80%',
      '--gradient-position-end': '100%',
      '--gradient-color-strong': strong,
      '--gradient-color-medium': medium,
      '--gradient-color-light': light,
      '--glass-border-background-image': borderBackgroundImage,
    };
  }, [
    borderWidth,
    borderRadius,
    borderColor,
    strongColorAlpha,
    mediumColorAlpha,
    lightColorAlpha,
    corners,
  ]);

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames(selectorPrefix, className)}
      style={{
        ...styles,
        ...(style ?? {}),
      }}
    >
      <div className={classNames(`${selectorPrefix}-mask`, boxClassName)} style={boxStyle ?? {}}>
        <div
          className={classNames(`${selectorPrefix}-inner`, boxInnerClassName, {
            [`${selectorPrefix}-inner-auto-height`]: autoHeight,
          })}
          style={boxInnerStyle ?? {}}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

Glass.displayName = 'Glass';

export default Glass;
