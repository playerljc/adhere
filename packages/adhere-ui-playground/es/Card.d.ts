import PropTypes from 'prop-types';
import React from 'react';
import { CardProps } from './types';
export declare const cardPropTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    headerClassName: PropTypes.Requireable<string>;
    headerStyle: PropTypes.Requireable<object>;
    bodyClassName: PropTypes.Requireable<string>;
    bodyStyle: PropTypes.Requireable<object>;
    actionClassName: PropTypes.Requireable<string>;
    actionStyle: PropTypes.Requireable<object>;
    title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
    extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    actions: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
    description: PropTypes.Requireable<PropTypes.InferProps<{
        title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        info: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
    }>>;
};
declare const _default: React.NamedExoticComponent<CardProps>;
export default _default;
