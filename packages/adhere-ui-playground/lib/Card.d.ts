import PropTypes from 'prop-types';
import { FC } from 'react';
import { CardProps } from './types';
declare const Card: FC<CardProps>;
export declare const cardPropTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    headerClassName: PropTypes.Requireable<string>;
    headerStyle: PropTypes.Requireable<object>;
    bodyClassName: PropTypes.Requireable<string>;
    bodyStyle: PropTypes.Requireable<object>;
    actionClassName: PropTypes.Requireable<string>;
    actionStyle: PropTypes.Requireable<object>;
    title: PropTypes.Requireable<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    actions: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
    description: PropTypes.Requireable<PropTypes.InferProps<{
        title: PropTypes.Requireable<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        info: PropTypes.Requireable<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }>>;
};
export default Card;
