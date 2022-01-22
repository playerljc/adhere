import React from 'react';
import { IMenuItemProps } from './types';
/**
 * MenuItem
 * @class MenuItem
 * @classdesc MenuItem
 */
declare class MenuItem extends React.PureComponent<IMenuItemProps, any> {
    static propTypes: any;
    private config;
    private el;
    constructor(props: any);
    private onClick;
    private renderIcon;
    private renderName;
    private renderMore;
    private renderSubMenu;
    private renderInner;
    render(): JSX.Element;
}
export default MenuItem;
