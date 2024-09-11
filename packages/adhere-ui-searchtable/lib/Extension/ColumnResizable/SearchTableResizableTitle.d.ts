import PropTypes from 'prop-types';
import React from 'react';
/**
 * SearchTableResizableTitle.tsx
 * @description 重写Table组件header单元格渲染方式
 * @param props
 * @constructor
 */
declare function SearchTableResizableTitle(props: any): React.JSX.Element;
declare namespace SearchTableResizableTitle {
    var propTypes: {
        width: PropTypes.Requireable<number>;
        onResize: PropTypes.Requireable<(...args: any[]) => any>;
        column: PropTypes.Requireable<object>;
    };
    var displayName: string;
}
export default SearchTableResizableTitle;
