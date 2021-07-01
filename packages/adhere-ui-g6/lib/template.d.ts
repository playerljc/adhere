import React from 'react';
import { ITemplateProps } from './types';
/**
 * Template
 * @class Template
 * @classdesc Template
 */
declare class Template extends React.Component<ITemplateProps> {
    static defaultProps: any;
    static propTypes: any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<ITemplateProps>, nextContext: any): void;
    render(): JSX.Element;
}
export default Template;
