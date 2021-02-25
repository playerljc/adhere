import React from 'react';
import { IMenuProps } from './types';
/**
 * Menu
 * @class Menu
 * @classdesc Menu
 */
declare class Menu extends React.PureComponent<IMenuProps, any> {
    static propTypes: any;
    static defaultProps: any;
    private config;
    private el;
    constructor(props: any);
    mount(): void;
    private getStyle;
    private renderItems;
    private renderInner;
    render(): JSX.Element;
}
export default Menu;
