/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * AnchorNavigation
 * @classdesc 带有锚点导航的面板
 * @constructor
 */
declare function AnchorNavigation(props: any): JSX.Element;
declare namespace AnchorNavigation {
    var defaultProps: {
        activeAnchor: string;
        anchors: never[];
        anchorPosition: {
            top: number;
            width: number;
        };
    };
    var propTypes: {
        activeAnchor: PropTypes.Requireable<string>;
        anchors: PropTypes.Requireable<(PropTypes.InferProps<{
            name: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            anchor: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        anchorPosition: PropTypes.Requireable<PropTypes.InferProps<{
            top: PropTypes.Requireable<number>;
            width: PropTypes.Requireable<number>;
        }>>;
    };
}
export default AnchorNavigation;
