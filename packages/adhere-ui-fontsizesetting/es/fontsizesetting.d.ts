import React from 'react';
import { IFontSizeSettingProps, IFontSizeSettingState } from './types';
/**
 * FontSizeSetting
 * @class FontSizeSetting
 * @classdesc FontSizeSetting
 */
declare class FontSizeSetting extends React.Component<IFontSizeSettingProps, IFontSizeSettingState> {
    static defaultProps: any;
    static propTypes: any;
    private el;
    constructor(props: any);
    componentWillReceiveProps(nextProps: Readonly<IFontSizeSettingProps>, nextContext: any): void;
    render(): JSX.Element;
}
export default FontSizeSetting;
