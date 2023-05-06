/// <reference types="react" />
import PropTypes from 'prop-types';
import { TableDensity } from '../../types';
/**
 * TableDensitySetting
 * @description 表格密度设置
 * @param props
 * @constructor
 */
declare function TableDensitySetting(props: any): JSX.Element;
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
