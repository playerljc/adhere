/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * ColumnSetting
 * @param props
 * @constructor
 */
declare function ColumnSetting({ columns, onShowColumns, onReset, onDisplayColumn, onSortEnd }: {
    columns: any;
    onShowColumns: any;
    onReset: any;
    onDisplayColumn: any;
    onSortEnd: any;
}): JSX.Element;
declare namespace ColumnSetting {
    var defaultProps: {
        columns: never[];
    };
    var propTypes: {
        columns: PropTypes.Requireable<any[]>;
        onShowColumns: PropTypes.Requireable<(...args: any[]) => any>;
        onReset: PropTypes.Requireable<(...args: any[]) => any>;
        onDisplayColumn: PropTypes.Requireable<(...args: any[]) => any>;
        onSortEnd: PropTypes.Requireable<(...args: any[]) => any>;
    };
}
export default ColumnSetting;
