import React from 'react';
import { IImageLazyProps } from './types';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
/**
 * ImageLazy
 * @class ImageLazy
 * @classdesc ImageLazy
 */
declare class ImageLazy extends React.Component<IImageLazyProps, any> {
    static defaultProps: {
        imgArgs: {
            originSrc: string;
            targetSrc: string;
        };
        className: string;
    };
    static propTypes: {
        imgArgs: any;
        className: any;
    };
    render(): JSX.Element;
}
export default ImageLazy;
