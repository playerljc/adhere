import { Tag, theme } from 'antd';
import React, { forwardRef, useContext, useMemo } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { getValue } from '../util';
import { resolveTagColors } from './tagTypePreset';
import type { InternalTagProps } from './types';

const InternalTag = forwardRef<HTMLSpanElement | HTMLAnchorElement, InternalTagProps>(
  (
    {
      type,
      textColor,
      bgColor,
      borderColor,
      radius,
      padding,
      color,
      style,
      variant,
      ...rest
    },
    ref,
  ) => {
    const { token } = theme.useToken();
    const { media } = useContext(ConfigProvider.Context);

    const resolved = useMemo(
      () =>
        resolveTagColors(
          {
            type,
            textColor,
            bgColor,
            borderColor,
          },
          token,
        ),
      [type, textColor, bgColor, borderColor, token],
    );

    const mergedStyle = useMemo(() => {
      const nextStyle: React.CSSProperties = { ...(style ?? {}) };

      if (radius != null) {
        nextStyle.borderRadius = getValue(media, radius) as React.CSSProperties['borderRadius'];
      }

      if (padding != null) {
        nextStyle.padding = getValue(media, padding) as React.CSSProperties['padding'];
      }

      if (resolved.useCustomColors) {
        const { colors } = resolved;
        if (colors.textColor != null) {
          nextStyle.color = colors.textColor;
        }
        if (colors.bgColor != null) {
          nextStyle.backgroundColor = colors.bgColor;
        }
        if (colors.borderColor != null) {
          nextStyle.borderColor = colors.borderColor;
        }
        if (
          colors.borderColor != null &&
          nextStyle.borderStyle == null &&
          style?.borderStyle == null
        ) {
          nextStyle.borderStyle = 'solid';
        }
        if (colors.borderColor != null && nextStyle.borderWidth == null && style?.borderWidth == null) {
          nextStyle.borderWidth = 1;
        }
      }

      return nextStyle;
    }, [style, radius, padding, media, resolved]);

    const tagColor = resolved.useCustomColors ? undefined : color;

    const tagVariant = variant ?? (resolved.useCustomColors ? 'outlined' : undefined);

    return (
      <Tag ref={ref} {...rest} color={tagColor} variant={tagVariant} style={mergedStyle} />
    );
  },
);

InternalTag.displayName = 'InternalTag';

export default InternalTag;
