import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Resizable } from 'react-resizable';

import { selectorPrefix } from '../../SearchTable';

/**
 * SearchTableResizableTitle.tsx
 * @description 重写Table组件header单元格渲染方式
 * @param props
 * @constructor
 */
function SearchTableResizableTitle(props) {
  const { onResize, width, column, ...restProps } = props;

  // Resizable / virtual 都需要 number 宽度，避免 "200px" 导致 header/body 错位
  const numericWidth =
    typeof width === 'number'
      ? width
      : typeof width === 'string'
        ? parseFloat(width)
        : undefined;

  const styleList = useMemo(() => {
    if (column) {
      let textAlign = 'center';

      if ('headerCellAlign' in column) {
        textAlign = column.headerCellAlign;
      } else {
        if ('align' in column) {
          textAlign = column.align;
        }
      }

      return {
        ...(restProps.style ?? {}),
        textAlign,
      };
    }

    return restProps?.style ?? {};
  }, [restProps]);

  if (!onResize && !numericWidth) {
    return <th {...restProps} style={styleList} />;
  }

  return (
    // 外包一层Resizable组件
    // 其中onResize属性调用col.onResize方法
    <Resizable
      width={numericWidth || 0}
      height={0}
      handle={
        <span
          className={`${selectorPrefix}-resizable-handle`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      draggableOpts={{ enableUserSelectHack: false }}
      onResize={onResize}
    >
      <th {...restProps} style={styleList} />
    </Resizable>
  );
}

SearchTableResizableTitle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),
  onResize: PropTypes.func,
  column: PropTypes.object,
};

SearchTableResizableTitle.displayName = 'SearchTableResizableTitle';

export default SearchTableResizableTitle;
