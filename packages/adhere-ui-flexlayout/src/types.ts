import React from 'react';

export interface IFlexLayoutProps {
  direction: 'vertical' | 'horizontal';
  className?: '';
  style?: React.CSSProperties;
}

export interface IFixedProps {
  className?: '';
  style?: React.CSSProperties;
}

export interface IAutoProps {
  autoFixed?: boolean;
  fit?: boolean;
  className?: '';
  style?: React.CSSProperties;
}

export interface IVerticalFlexLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  topClassName?: string;
  topStyle?: React.CSSProperties;
  rightClassName?: string;
  rightStyle?: React.CSSProperties;
  bottomClassName?: string;
  bottomStyle?: React.CSSProperties;
  leftClassName?: string;
  leftStyle?: React.CSSProperties;
  mainClassName?: string;
  mainStyle?: React.CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: React.CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: React.CSSProperties;
  renderTop?: JSX.Element;
  renderRight?: JSX.Element;
  renderBottom?: JSX.Element;
  renderLeft?: JSX.Element;
  renderMain?: JSX.Element;
  topProps?: object;
  rightProps?: object;
  bottomProps?: object;
  leftProps?: object;
  mainProps?: object;
  mainAutoWrapProps?: object;
}

export interface IHorizontalFlexLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  topClassName?: string;
  topStyle?: React.CSSProperties;
  rightClassName?: string;
  rightStyle?: React.CSSProperties;
  bottomClassName?: string;
  bottomStyle?: React.CSSProperties;
  leftClassName?: string;
  leftStyle?: React.CSSProperties;
  mainClassName?: string;
  mainStyle?: React.CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: React.CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: React.CSSProperties;
  renderTop?: JSX.Element;
  renderRight?: JSX.Element;
  renderBottom?: JSX.Element;
  renderLeft?: JSX.Element;
  renderMain?: JSX.Element;
  topProps?: object;
  rightProps?: object;
  bottomProps?: object;
  leftProps?: object;
  mainProps?: object;
  mainAutoWrapProps?: object;
}

export interface IToolBarLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  topClassName?: string;
  topStyle?: React.CSSProperties;
  bottomClassName?: string;
  bottomStyle?: React.CSSProperties;
  mainClassName?: string;
  mainStyle?: React.CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: React.CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: React.CSSProperties;
  topToolBarItems: JSX.Element[];
  bottomToolBarItems: JSX.Element[];
  topProps?: object;
  bottomProps?: object;
  mainProps?: object;
  mainAutoWrapProps?: object;
  children?: any;
}

export interface IBackLayoutProps {
  className?: string;
  style?: React.CSSProperties;
  topClassName?: string;
  topStyle?: React.CSSProperties;
  bottomClassName?: string;
  bottomStyle?: React.CSSProperties;
  mainClassName?: string;
  mainStyle?: React.CSSProperties;
  mainAutoWrapClassName?: string;
  mainAutoStyle?: React.CSSProperties;
  mainWrapClassName?: string;
  mainWrapStyle?: React.CSSProperties;
  topToolBarItems: JSX.Element[];
  topProps?: object;
  bottomProps?: object;
  mainProps?: object;
  mainAutoWrapProps?: object;
  backPath?: string;
  enforceBackPath?: string;
  isShowBack?: boolean;
  history: any;
  backTitle?: string | JSX.Element;
  children?: any;
}
