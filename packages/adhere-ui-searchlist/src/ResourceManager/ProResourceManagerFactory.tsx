import { Radio, Space } from 'antd';
import classNames from 'classnames';
import React, { ReactNode, createRef } from 'react';

import { CreditCardOutlined, InsertRowAboveOutlined } from '@ant-design/icons';
import ContourBlock from '@baifendian/adhere-ui-contourblock';
import DateDisplay from '@baifendian/adhere-ui-datedisplay';
import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';

export const selectorPrefix = 'adhere-ui-searchtable-protable';
// @ts-ignore
const { DateDisplay18 } = DateDisplay;

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

    getViewParams() {
      return {
        name: null,
        resourceType: null,
        size: null,
        modifyTimeStart: undefined,
        modifyTimeEnd: undefined,
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

    getTableViewColumns() {
      return [
        {
          title: Intl.v('文件名称'),
          dataIndex: 'name',
          key: 'name',
          sorter: true,
          sortOrder: this?.sortOrder?.('name'),
          $search: {
            type: 'input',
            visible: true,
          },
          render: (value, record) => (
            <Space size={25}>
              <span className={`${selectorPrefix}-resource-table-file-column-icon`}>
                {Dict.value.AdhereSearchListResourceManagerIconMap.value.get(
                  record.type || 'other',
                )}
              </span>
              <span className={`${selectorPrefix}-resource-table-file-column-name`}>{value}</span>
            </Space>
          ),
        },
        {
          title: Intl.v('类型'),
          dataIndex: 'resourceType',
          key: 'resourceType',
          align: 'center',
          width: 150,
          sorter: true,
          sortOrder: this?.sortOrder?.('resourceType'),
          $search: {
            type: 'select',
            visible: true,
            dictName: 'AdhereSearchListResourceManagerLabelValueSelect',
          },
          render: (value) => (
            <span>
              {Dict.value.AdhereSearchListResourceManagerLabelValueMap.value.get(value || 'other')}
            </span>
          ),
        },
        {
          title: Intl.v('文件大小'),
          dataIndex: 'size',
          key: 'size',
          align: 'center',
          width: 200,
          sorter: true,
          sortOrder: this?.sortOrder?.('size'),
          $search: {
            type: 'inputNumberDecimal2',
            visible: true,
          },
          render: (value) => (value ? <span>{Util.prettyBytes(value)}</span> : '-'),
        },
        {
          title: Intl.v('修改时间'),
          dataIndex: 'modifyTime',
          key: 'modifyTime',
          align: 'center',
          width: 300,
          sorter: true,
          sortOrder: this?.sortOrder?.('modifyTime'),
          $search: {
            type: 'rangePicker',
            visible: true,
            startName: 'modifyTimeStart',
            endName: 'modifyTimeEnd',
          },
          render: (value) => <DateDisplay18 value={value} />,
        },
      ];
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

    renderGridViewCard({ record }): ReactNode {
      const rowSelection = this.getRowSelection();
      const id = record[this.getRowKey()];

      const className = classNames(
        {
          [`${selectorPrefix}-grid-view-item`]: true,
        },
        this.getSelectionClassName(id),
      );

      return (
        <ContourBlock>
          <div className={className}>
            {!!rowSelection && (
              <div className={`${selectorPrefix}-grid-view-item-selection`}>
                {this.renderItemSelection(record)}
              </div>
            )}
            <div className={`${selectorPrefix}-grid-view-item-icon`}>
              {Dict.value.AdhereSearchListResourceManagerIconMap.value.get(record.type || 'other')}
            </div>
            <div className={`${selectorPrefix}-grid-view-item-name`} title={record.name}>
              {record.name}
            </div>
          </div>
        </ContourBlock>
      );
    }
  };
}
