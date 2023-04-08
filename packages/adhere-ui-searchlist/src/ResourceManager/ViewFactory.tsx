import { Space } from 'antd';
import React from 'react';

import DateDisplay from '@baifendian/adhere-ui-datedisplay';
import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from './ProResourceManagerFactory';

// @ts-ignore
const { DateDisplay18 } = DateDisplay;

/**
 * ViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends SuperClass<P, S> {
    isMount = true;

    constructor(props) {
      super(props);

      this.state = {
        ...(this.state || {}),
        ...this.props.defaultValues,
      };

      this.isFirst = false;
    }

    componentDidMount() {
      super.componentDidMount();

      this.props?.context?.forceUpdate?.();
    }

    fetchData(): Promise<any> {
      if (this.isMount) {
        this.isMount = false;
        return Promise.resolve([]);
      }

      const { context } = this.props;

      return context?.fetchData?.();
    }

    getParams() {
      return {
        name: null,
        resourceType: null,
        size: null,
        modifyTimeStart: undefined,
        modifyTimeEnd: undefined,
      };
    }

    getData(): object[] {
      const { context } = this.props;

      return context?.getData?.();
    }

    getServiceName(): string {
      const { context } = this.props;

      return context?.getServiceName?.();
    }

    getFetchListPropName() {
      const { context } = this.props;

      return context?.getFetchListPropName?.();
    }

    getTotalKey() {
      const { context } = this.props;

      return context?.getTotalKey?.();
    }

    // getColumns() {
    //   const { context } = this.props;
    //
    //   return context?.getColumns?.(this);
    // }

    /**
     * getInnerColumns
     */
    getColumns() {
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

    renderSearchFormBefore() {
      return null;
    }

    renderSearchForm() {
      return null;
    }

    // @ts-ignore
    renderSearchToolBar() {
      return null;
    }

    renderSearchFormAfter() {
      return null;
    }

    renderSearchHeader() {
      return null;
    }

    renderSearchFooter() {
      return null;
    }
  };
}
