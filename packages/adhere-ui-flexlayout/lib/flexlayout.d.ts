import React from 'react';
import { IFlexLayoutProps, IHorizontalFlexLayoutProps, IVerticalFlexLayoutProps, IToolBarLayoutProps, IBackLayoutProps } from './types';
import Fixed from './fixed';
import Auto from './auto';
export declare const selectorPrefix = "adhere-ui-flexlayout";
/**
 * FlexLayout
 * @class FlexLayout
 * @classdesc FlexLayout
 */
declare class FlexLayout extends React.Component<IFlexLayoutProps, any> {
    static propTypes: any;
    static defaultProps: any;
    static Fixed: typeof Fixed;
    static Auto: typeof Auto;
    static Context: React.Context<{
        direction: string;
    }>;
    static selectorPrefix: string;
    static HorizontalFlexLayout: (props: IHorizontalFlexLayoutProps) => JSX.Element;
    static VerticalFlexLayout: (props: IVerticalFlexLayoutProps) => JSX.Element;
    static ToolBarLayout: (props: IToolBarLayoutProps) => JSX.Element;
    static BackLayout: (props: IBackLayoutProps) => JSX.Element;
    private props;
    render(): JSX.Element;
}
export default FlexLayout;
