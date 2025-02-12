export default Wrap;
export const Section: React.NamedExoticComponent<import("../../types").SectionProps>;
export const CodeBoxSection: React.NamedExoticComponent<import("../../types").CodeBoxProps>;
export const PropsSection: React.NamedExoticComponent<import("../../types").PropsSectionProps>;
export const FunctionPropsSection: React.NamedExoticComponent<import("../../types").FunctionPropsSectionProps>;
/**
 * Wrap
 * @param children
 * @param props
 * @return {*}
 * @constructor
 */
declare function Wrap({ children, ...props }: {
    [x: string]: any;
    children: any;
}): any;
declare class Wrap {
    /**
     * Wrap
     * @param children
     * @param props
     * @return {*}
     * @constructor
     */
    constructor({ children, ...props }: {
        [x: string]: any;
        children: any;
    });
}
import React from 'react';
