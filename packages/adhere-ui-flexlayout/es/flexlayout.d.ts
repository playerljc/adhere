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
    static Context: React.Context<{
        direction: string;
    }>;
    static selectorPrefix: string;
    static Fixed: typeof Fixed;
    static Auto: typeof Auto;
    static HorizontalFlexLayout: (props: IHorizontalFlexLayoutProps) => React.ReactElement;
    static VerticalFlexLayout: (props: IVerticalFlexLayoutProps) => React.ReactElement;
    static ToolBarLayout: (props: IToolBarLayoutProps) => React.ReactElement;
    static BackLayout: (props: IBackLayoutProps) => React.ReactElement;
    static HorizontalFlexLayoutDefaultProps: any;
    static HorizontalFlexLayoutPropTypes: any;
    static VerticalFlexLayoutDefaultProps: any;
    static VerticalFlexLayoutPropTypes: any;
    render(): React.ReactElement;
}
export default FlexLayout;
