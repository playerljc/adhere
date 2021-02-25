import React from 'react';
import PropTypes from 'prop-types';

/**
 * IFontSizeSettingProps
 * @interface IFontSizeSettingProps
 */
export interface IFontSizeSettingProps {
  className?: string;
  style?: React.CSSProperties;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: Function;
}

export interface IFontSizeSettingState {
  value: number;
}
