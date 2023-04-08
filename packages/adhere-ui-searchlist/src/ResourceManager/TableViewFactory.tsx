import React from 'react';

import ViewFactory from './ViewFactory';

/**
 * TableViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends ViewFactory<P, S>(SuperClass) {
    /**
     * getOrderFieldValue
     * @description - 获取默认排序字段的值
     * @override
     * @protected
     * @return {string}
     */
    getOrderFieldValue(): string {
      return 'resourceType';
    }
  };
}
