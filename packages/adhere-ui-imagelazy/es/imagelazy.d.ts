import React from 'react';
import { IImageLazyProps } from './types';
/**
 * ImageLazy
 * @class ImageLazy
 * @classdesc ImageLazy
 */
declare class ImageLazy extends React.Component<IImageLazyProps, any> {
    static defaultProps: any;
    static propTypes: any;
    private el;
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(): boolean;
    componentDidMount(): void;
    update(props: any): void;
    render(): JSX.Element;
}
export default ImageLazy;
