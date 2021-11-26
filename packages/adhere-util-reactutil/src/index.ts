import React, { ReactElement } from 'react';
import { v1 } from 'uuid';

export default {
  /**
   * keyMap
   * @description - 迭代数组返回一个肯定含有key的JSX数组
   * @param arr
   * @param handler
   * @return Array
   */
  keyMap(
    arr: Array<any>,
    handler: (item: any, index: number) => ReactElement,
  ): Array<ReactElement> {
    return arr.map((item: any, index) => {
      const element: ReactElement = handler.call(this, item, index);

      // 如果返回的element有key则返回
      if (element.key) {
        return element;
      }

      // 返回的element没有key则使用v1创建一个key
      return React.cloneElement(element, { ...element.props, key: v1() }, element.props.children);
    });
  },
};
