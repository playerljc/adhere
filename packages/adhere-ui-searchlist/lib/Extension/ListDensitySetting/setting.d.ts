/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * ListDensitySetting
 * @param props
 * @constructor
 */
declare function ListDensitySetting({ density, onReset, onChange }: {
    density: any;
    onReset: any;
    onChange: any;
}): JSX.Element;
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