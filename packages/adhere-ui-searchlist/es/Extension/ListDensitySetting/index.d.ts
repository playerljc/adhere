/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * ListDensitySetting
 * @description 列表密度设置
 * @param props
 * @constructor
 */
declare function ListDensitySetting(props: any): JSX.Element;
declare namespace ListDensitySetting {
    var defaultProps: {
        density: string;
    };
    var propTypes: {
        density: PropTypes.Requireable<string>;
        onReset: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default ListDensitySetting;
