import React, { ReactElement } from 'react';
import { v1 } from 'uuid';

/**
 * React工具函数集合
 */
interface ReactUtil {
  /**
   * 为数组元素生成带有唯一key的React元素数组
   * @description 迭代数组并返回一个确保每个元素都有唯一key的JSX数组
   * @template T - 数组元素的类型
   * @param arr - 要处理的数组
   * @param handler - 处理函数，接收数组元素和索引，返回React元素
   * @returns 带有唯一key的React元素数组
   * @example
   * ```tsx
   * const items = ['a', 'b', 'c'];
   * const elements = reactUtil.keyMap(items, (item, index) => (
   *   <div>{item}</div>
   * ));
   * ```
   */
  keyMap<T = any>(
    arr: T[],
    handler: (item: T, index: number) => ReactElement
  ): ReactElement[];

  /**
   * 为React元素数组填充唯一的key属性
   * @description 遍历React元素数组，为没有key的元素自动生成唯一key
   * @param elements - React元素数组
   * @returns 所有元素都带有唯一key的React元素数组
   * @example
   * ```tsx
   * const elements = [
   *   <div>Item 1</div>,
   *   <div key="existing-key">Item 2</div>,
   *   <div>Item 3</div>
   * ];
   * const elementsWithKeys = reactUtil.fillKey(elements);
   * ```
   */
  fillKey(elements: ReactElement[]): ReactElement[];
}

/**
 * React工具函数实现
 */
const reactUtil: ReactUtil = {
  keyMap<T = any>(
    arr: T[] = [],
    handler: (item: T, index: number) => ReactElement
  ): ReactElement[] {
    if (!Array.isArray(arr)) {
      console.warn('keyMap: 第一个参数必须是数组类型');
      return [];
    }

    return arr.map((item: T, index: number) => {
      const element: ReactElement = handler.call(this, item, index);

      // 验证返回的元素是否为有效的React元素
      if (!React.isValidElement(element)) {
        console.warn(`keyMap: handler在索引 ${index} 处返回的不是有效的React元素`);
        return React.createElement('div', { key: v1() }, 'Invalid Element');
      }

      // 如果返回的element已经有key则直接返回
      if (element.key != null) {
        return element;
      }

      // 为没有key的元素生成唯一key
      const elementWithKey = element as ReactElement & { props: any };
      return React.cloneElement(
        elementWithKey,
        { ...elementWithKey.props, key: v1() },
        elementWithKey.props.children
      );
    });
  },

  fillKey(elements: ReactElement[] = []): ReactElement[] {
    if (!Array.isArray(elements)) {
      console.warn('fillKey: 参数必须是数组类型');
      return [];
    }

    return elements.map((element: ReactElement) => {
      // 验证元素是否为有效的React元素
      if (!React.isValidElement(element)) {
        console.warn('fillKey: 数组包含无效的React元素');
        return React.createElement('div', { key: v1() }, 'Invalid Element');
      }

      // 如果元素已经有key则直接返回
      if (element.key != null) {
        return element;
      }

      // 为没有key的元素生成唯一key
      const elementWithKey = element as ReactElement & { props: any };
      return React.cloneElement(
        elementWithKey,
        { ...elementWithKey.props, key: v1() },
        elementWithKey.props.children
      );
    });
  },
};

export default reactUtil;
export type { ReactUtil };
