import React from 'react';
import { Requireable } from 'prop-types';
import { IPropsProps } from './types';
declare class InferPropsInner<T> {
}
declare class InferType<T> {
}
declare class ReactNodeLike {
}
/**
 * Props
 * @class Props
 * @classdesc Props
 */
declare class Props extends React.Component<IPropsProps, any> {
    static propTypes: {
        data: Requireable<((InferPropsInner<Pick<{
            defaultVal: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
            params: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
            type: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
            desc: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
        }, never>> & Partial<InferPropsInner<Pick<{
            defaultVal: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
            params: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
            type: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
            desc: Requireable<NonNullable<InferType<Requireable<string> | Requireable<ReactNodeLike>>>>;
        }, 'defaultVal' | 'params' | 'type' | 'desc'>>>) | undefined | null)[]>;
    };
    static defaultProps: IPropsProps;
    protected getColumns(): ({
        title: string;
        key: string;
        dataIndex: string;
        width: string;
        render?: undefined;
    } | {
        title: string;
        key: string;
        dataIndex: string;
        width: string;
        render: (value: any) => JSX.Element;
    })[];
    protected render(): JSX.Element;
}
export default Props;
