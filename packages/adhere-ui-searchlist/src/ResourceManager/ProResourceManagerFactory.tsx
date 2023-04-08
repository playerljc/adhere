import { Radio } from 'antd';
import React, { createRef } from 'react';

import { CreditCardOutlined, InsertRowAboveOutlined } from '@ant-design/icons';

export const selectorPrefix = 'adhere-ui-searchtable-protable';

/**
 * ProResourceManagerFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    constructor(props) {
      super(props);

      // 存储view的引用
      this.ref = createRef();

      this.state = {
        ...this.state,
        viewType: 'info', // thumbnail
      };
    }

    getParams() {
      const view = this?.ref?.current;

      return {
        ...(view?.getParams?.() || {}),
      };
    }

    getColumns(columns) {
      return columns ?? [];
    }

    renderSearchFooterItemsImpl(defaultItems) {
      const superItems = super.renderSearchFooterItemsImpl(defaultItems);

      return [
        <div className={`${selectorPrefix}-headeritem`}>
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            value={this.state.viewType}
            onChange={(e) => this.setState({ viewType: e.target.value })}
          >
            <Radio value="info">
              <CreditCardOutlined className={`${selectorPrefix}-resource-type-change-btn`} />
            </Radio>

            <Radio value="thumbnail">
              <InsertRowAboveOutlined className={`${selectorPrefix}-resource-type-change-btn`} />
            </Radio>
          </Radio.Group>
        </div>,
        ...(superItems || []),
      ];
    }
  };
}
