/// <reference types="react" />
import PropTypes from 'prop-types';
import { IConditionalRenderProps } from './types';
import ConditionalRenderShow from './show';
import ConditionalRenderVisibility from './visibility';
/**
 * ConditionalRender - 条件渲染
 * @class ConditionalRender
 * @classdesc ConditionalRender
 */
declare function ConditionalRender({ conditional, noMatch, children }: IConditionalRenderProps): any;
declare namespace ConditionalRender {
    var Show: typeof ConditionalRenderShow;
    var Visibility: typeof ConditionalRenderVisibility;
    var conditionalRender: ({ conditional, match, noMatch, }: {
        conditional: boolean;
        match: JSX.Element;
        noMatch: JSX.Element | null;
    }) => JSX.Element | null;
    var conditionalArr: (arr: any[]) => any[];
    var conditionalNotEmptyArr: (arr: any[]) => any[];
    var defaultProps: {
        conditional: boolean;
        noMatch: () => null;
    };
    var propTypes: {
        conditional: PropTypes.Requireable<boolean>;
        noMatch: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default ConditionalRender;
