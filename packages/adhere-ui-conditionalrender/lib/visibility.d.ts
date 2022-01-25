/// <reference types="react" />
import PropTypes from 'prop-types';
import { IConditionalRenderShowProps } from './types';
/**
 * ConditionalRenderVisibility - 知识用于切换css的visibility
 * @class ConditionalRenderVisibility
 * @classdesc 只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 * 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
 */
declare function ConditionalRenderVisibility({ conditional, noMatch, children, }: IConditionalRenderShowProps): JSX.Element;
declare namespace ConditionalRenderVisibility {
    var defaultProps: {
        conditional: boolean;
        noMatch: null;
    };
    var propTypes: {
        conditional: PropTypes.Requireable<boolean>;
        noMatch: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export default ConditionalRenderVisibility;
