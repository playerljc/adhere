import PropTypes from 'prop-types';
import { IConditionalRenderProps } from './types';
/**
 * ConditionalRender - 条件渲染
 * @class ConditionalRender
 * @classdesc ConditionalRender
 */
declare function ConditionalRender({ conditional, noMatch, children }: IConditionalRenderProps): any;
declare namespace ConditionalRender {
    var defaultProps: {
        conditional: boolean;
        noMatch: null;
    };
    var propTypes: {
        conditional: PropTypes.Requireable<boolean>;
        noMatch: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export default ConditionalRender;
