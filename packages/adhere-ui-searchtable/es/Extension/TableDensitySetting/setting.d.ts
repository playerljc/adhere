/// <reference types="react" />
import PropTypes from 'prop-types';
import { TableDensity } from '../../types';
/**
 * TableDensitySetting
 * @param props
 * @constructor
 */
declare function TableDensitySetting({ density, onReset, onChange }: {
    density: any;
    onReset: any;
    onChange: any;
}): JSX.Element;
declare namespace TableDensitySetting {
    var defaultProps: {
        density: TableDensity;
    };
    var propTypes: {
        density: PropTypes.Requireable<string>;
        onReset: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default TableDensitySetting;
