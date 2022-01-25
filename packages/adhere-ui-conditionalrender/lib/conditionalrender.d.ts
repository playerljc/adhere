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
