import React, { Requireable } from 'react';
import { ICollapseProps, ICollapseState } from './types';
declare class ReactNodeLike {
}
declare class InferType<T> {
}
/**
 * Collapse
 * @class Collapse
 * @classdesc Collapse
 */
declare class Collapse extends React.Component<ICollapseProps, ICollapseState> {
    static propTypes: {
        border: Requireable<boolean>;
        headerClassName: Requireable<string>;
        fixedHeaderScrollBody: Requireable<boolean>;
        bodyClassName: Requireable<string>;
        extra: Requireable<ReactNodeLike>;
        defaultCollapse: Requireable<boolean>;
        bodyStyle: Requireable<object>;
        scrollY: Requireable<boolean>;
        title: Requireable<NonNullable<InferType<Requireable<ReactNodeLike> | Requireable<string>>>>;
        headerStyle: Requireable<object>;
    };
    static defaultProps: ICollapseProps;
    state: ICollapseState;
    componentWillReceiveProps(nextProps: Readonly<ICollapseProps>, nextContext: any): void;
    protected onClickHeader: () => void;
    protected render(): JSX.Element;
}
export default Collapse;
