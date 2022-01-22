import React, { Requireable } from 'react';
import { IFunctionProps } from './types';
declare class InferPropsInner<T> {
}
declare class InferType<T> {
}
/**
 * FunctionProps
 * @class FunctionProps
 * @classdesc FunctionProps
 */
declare class FunctionProps extends React.Component<IFunctionProps> {
    static propTypes: {
        data: Requireable<((InferPropsInner<Pick<{
            modifier: Requireable<string>;
            name: Requireable<string>;
            params: Requireable<((InferPropsInner<Pick<{
                defaultVal: Requireable<string>;
                name: Requireable<string>;
                type: Requireable<string>;
                required: Requireable<NonNullable<InferType<Requireable<boolean> | Requireable<string>>>>;
                desc: Requireable<string>;
            }, never>> & Partial<InferPropsInner<Pick<{
                defaultVal: Requireable<string>;
                name: Requireable<string>;
                type: Requireable<string>;
                required: Requireable<NonNullable<InferType<Requireable<boolean> | Requireable<string>>>>;
                desc: Requireable<string>;
            }, 'defaultVal' | 'name' | 'type' | 'required' | 'desc'>>>) | undefined | null)[]>;
            returnDesc: Requireable<string>;
            returnType: Requireable<string>;
            desc: Requireable<string>;
        }, never>> & Partial<InferPropsInner<Pick<{
            modifier: Requireable<string>;
            name: Requireable<string>;
            params: Requireable<((InferPropsInner<Pick<{
                defaultVal: Requireable<string>;
                name: Requireable<string>;
                type: Requireable<string>;
                required: Requireable<NonNullable<InferType<Requireable<boolean> | Requireable<string>>>>;
                desc: Requireable<string>;
            }, never>> & Partial<InferPropsInner<Pick<{
                defaultVal: Requireable<string>;
                name: Requireable<string>;
                type: Requireable<string>;
                required: Requireable<NonNullable<InferType<Requireable<boolean> | Requireable<string>>>>;
                desc: Requireable<string>;
            }, 'defaultVal' | 'name' | 'type' | 'required' | 'desc'>>>) | undefined | null)[]>;
            returnDesc: Requireable<string>;
            returnType: Requireable<string>;
            desc: Requireable<string>;
        }, 'modifier' | 'name' | 'params' | 'returnDesc' | 'returnType' | 'desc'>>>) | undefined | null)[]>;
    };
    static defaultProps: IFunctionProps;
    render(): JSX.Element;
}
export default FunctionProps;
