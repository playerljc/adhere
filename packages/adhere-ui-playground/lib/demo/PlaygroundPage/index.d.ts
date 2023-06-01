export default Wrap;
export const Section: React.FC<import("../../types").SectionProps>;
export const CodeBoxSection: React.FC<import("../../types").CodeBoxProps>;
export const PropsSection: React.FC<import("../../types").PropsSectionProps>;
export const FunctionPropsSection: React.FC<import("../../types").FunctionPropsSectionProps>;
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
