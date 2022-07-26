import PropTypes from 'prop-types';
import { IBackLayoutProps } from './types';
/**
 * BackLayout
 * @class BackLayout
 * @classdesc BackLayout
 */
declare const BackLayout: {
    ({ topToolBarItems, isShowBack, backPath, enforceBackPath, history, backTitle, children, ...otherProps }: IBackLayoutProps): JSX.Element;
    defaultProps: {
        topToolBarItems: never[];
        backPath: string;
        isShowBack: boolean;
    };
    propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        topClassName: PropTypes.Requireable<string>;
        topStyle: PropTypes.Requireable<object>;
        bottomClassName: PropTypes.Requireable<string>;
        bottomStyle: PropTypes.Requireable<object>;
        mainClassName: PropTypes.Requireable<string>;
        mainStyle: PropTypes.Requireable<object>;
        mainAutoWrapClassName: PropTypes.Requireable<string>;
        mainAutoStyle: PropTypes.Requireable<object>;
        mainWrapClassName: PropTypes.Requireable<string>;
        mainWrapStyle: PropTypes.Requireable<object>;
        topToolBarItems: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        topProps: PropTypes.Requireable<object>;
        mainProps: PropTypes.Requireable<object>;
        mainAutoWrapProps: PropTypes.Requireable<object>;
        backPath: PropTypes.Requireable<string>;
        enforceBackPath: PropTypes.Requireable<string>;
        isShowBack: PropTypes.Requireable<boolean>;
        history: PropTypes.Requireable<object>;
        backTitle: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
export default BackLayout;
