import React from 'react';
import PropTypes, { Requireable, ReactNodeLike, InferType, ReactElementLike, ReactNodeArray } from 'prop-types';
import { ICardProps } from './types';
/**
 * Card
 * @class Card
 * @classdesc Card
 */
declare class Card extends React.Component<ICardProps> {
    static propTypes: {
        headerClassName: any;
        actionStyle: any;
        bodyClassName: any;
        extra: Requireable<ReactNodeLike>;
        bodyStyle: any;
        description: any;
        actionClassName: any;
        title: Requireable<NonNullable<InferType<Requireable<ReactNodeLike> | any>>>;
        actions: Requireable<({} | ReactElementLike | ReactNodeArray | string | number | boolean | null | undefined)[]>;
        headerStyle: any;
    };
    static defaultProps: {
        headerClassName: string;
        actionStyle: {};
        bodyClassName: string;
        extra: null;
        bodyStyle: {};
        description: null;
        actionClassName: string;
        title: null;
        actions: null;
        headerStyle: {};
    };
    protected render(): JSX.Element;
}
export declare const cardPropTypes: {
    headerClassName: PropTypes.Requireable<string>;
    headerStyle: PropTypes.Requireable<object>;
    bodyClassName: PropTypes.Requireable<string>;
    bodyStyle: PropTypes.Requireable<object>;
    actionClassName: PropTypes.Requireable<string>;
    actionStyle: PropTypes.Requireable<object>;
    title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    actions: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
    description: PropTypes.Requireable<PropTypes.InferProps<{
        title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        info: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }>>;
};
export default Card;
