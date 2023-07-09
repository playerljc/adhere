/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * SearchTableResizableTitle.tsx
 * @description 重写Table组件header单元格渲染方式
 * @param props
 * @constructor
 */
declare function SearchTableResizableTitle(props: any): JSX.Element;
declare namespace SearchTableResizableTitle {
    var propTypes: {
        width: PropTypes.Requireable<number>;
        onResize: PropTypes.Requireable<(...args: any[]) => any>;
        column: PropTypes.Requireable<object>;
    };
}
export default SearchTableResizableTitle;
