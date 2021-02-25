import React from 'react';
import { ISubMenuProps } from './types';
/**
 * SubMenu
 * @class SubMenu
 * @classdesc SubMenu
 */
declare class SubMenu extends React.PureComponent<ISubMenuProps, any> {
    static propTypes: any;
    static defaultProps: any;
    private config;
    constructor(props: any);
    private getStyle;
    private renderItems;
    private renderInner;
    render(): JSX.Element;
}
export default SubMenu;
