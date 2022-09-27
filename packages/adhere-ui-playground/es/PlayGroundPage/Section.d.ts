import PropTypes from 'prop-types';
import { FC } from 'react';
import { SectionProps } from '../types';
/**
 * Section
 * @param props
 * @constructor
 */
declare const Section: FC<SectionProps>;
export declare const SectionDefaultProps: {
    className: string;
    style: {};
};
export declare const SectionPropTypes: {
    className: PropTypes.Requireable<string>;
    style: PropTypes.Requireable<object>;
    title: PropTypes.Requireable<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
};
export default Section;
