import PropTypes from 'prop-types';
import React from 'react';
import { SectionProps } from '../types';
export declare const SectionDefaultProps: {
    className: string;
    style: {};
};
export declare const SectionPropTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
    extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
};
declare const _default: React.NamedExoticComponent<SectionProps>;
export default _default;
