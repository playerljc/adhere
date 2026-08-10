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
  const { onResize, onResizeStart, width, column, ...restProps } = props;

  // Resizable 需要正数宽度；width: {} / "xxpx" / 未就绪时不能落成 0，否则首次拖动会突然变窄
  const numericWidth = (() => {
    if (typeof width === 'number' && !Number.isNaN(width) && width > 0) {
      return width;
    }

    if (typeof width === 'string') {
      const value = parseFloat(width);
      if (!Number.isNaN(value) && value > 0) {
        return value;
      }
    }

    return undefined;
  })();

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

  // 没有有效宽度时先渲染普通 th，等 colgroup 实测宽度后再挂 Resizable
  if (!onResize || !numericWidth) {
    return <th {...restProps} style={styleList} />;
  }

  return (
    // 外包一层Resizable组件
    // 其中onResize属性调用col.onResize方法
    <Resizable
      width={numericWidth}
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
      onResizeStart={onResizeStart}
      onResize={onResize}
    >
      <th {...restProps} style={styleList} />
    </Resizable>
  );
}

SearchTableResizableTitle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),
  onResize: PropTypes.func,
  onResizeStart: PropTypes.func,
  column: PropTypes.object,
};

SearchTableResizableTitle.displayName = 'SearchTableResizableTitle';

export default SearchTableResizableTitle;
