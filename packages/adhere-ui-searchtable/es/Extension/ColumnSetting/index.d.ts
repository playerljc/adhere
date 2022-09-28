import PropTypes from 'prop-types';
/**
 * ColumnSetting
 * @description 列设置
 * @param props
 * @constructor
 */
declare function ColumnSetting(props: any): JSX.Element;
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
