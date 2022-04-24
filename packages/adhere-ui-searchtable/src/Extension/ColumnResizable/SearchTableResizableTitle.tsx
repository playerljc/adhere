import React from 'react';
import PropTypes from 'prop-types';
import { Resizable } from 'react-resizable';

import { selectorPrefix } from '../../searchtable';

/**
 * SearchTableResizableTitle.tsx
 * @description 重写Table组件header单元格渲染方式
 * @param props
 * @constructor
 */
function SearchTableResizableTitle(props) {
  const { onResize, width, ...restProps } = props;

  if (!onResize && !width) {
    return <th {...restProps} />;
  }

  return (
    // 外包一层Resizable组件
    // 其中onResize属性调用col.onResize方法
    <Resizable
      width={width}
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
      <th {...restProps} />
    </Resizable>
  );
}

SearchTableResizableTitle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),
  onResize: PropTypes.func,
};

export default SearchTableResizableTitle;
