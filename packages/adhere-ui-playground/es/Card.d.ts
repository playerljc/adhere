import PropTypes from 'prop-types';
import React from 'react';
import type { CardProps } from './types';
/**
 * 卡片组件
 * @component Card
 * @description 一个可配置的卡片组件，支持标题、内容、操作按钮等
 * @param props - 组件属性
 * @returns JSX.Element
 */
declare const Card: React.NamedExoticComponent<CardProps>;
/**
 * 卡片组件属性类型定义
 * @constant cardPropTypes
 * @description PropTypes类型检查定义
 */
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
export default Card;
