import { DatePicker, Input, InputNumber, Select } from 'antd';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';

import { Ajax, Resource, SearchTable, TableGridLayout } from '@baifendian/adhere';

const { TableImplement } = SearchTable;

const { Option } = Select;

const { RangePicker } = DatePicker;

const { Label, Value } = TableGridLayout;

/**
 * Table
 * @class TableImpl
 * @classdesc TableImpl
 */
class TableImpl extends TableImplement {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.request = new Ajax('');

    Object.assign(this.state, {
      loading: false,
    });
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);

    if (this.props.pagination !== nextProps.pagination) {
      this.setState({
        scrollY: 0,
      });
    }
  }

  getParams() {
    return {
      name: '',
      sex: '',
      startTime: null,
      endTime: null,
      deptCode: '',
      homeTown: '',
      width: '',
      height: '',
    };
  }

  getFetchDataParams() {
    const {
      searchParams: { startTime, endTime },
    } = this.state;

    return {
      startTime: startTime
        ? `${startTime.format(Resource.Dict.value.ResourceMomentFormat10.value())} 00:00:00`
        : null,
      endTime: endTime
        ? `${endTime.format(Resource.Dict.value.ResourceMomentFormat10.value())} 23:59:59`
        : null,
    };
  }

  getData() {
    return this.state.dataSource.list;
  }

  getPagination() {
    const { pagination } = this.props;

    if (pagination) {
      return super.getPagination();
    }

    return false;
  }

  getColumns() {
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        align: 'center',
        render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
      },
      {
        title: '籍贯',
        dataIndex: 'homeTown',
        key: 'homeTown',
        align: 'center',
      },
      {
        title: '出生年月',
        dataIndex: 'birthday',
        key: 'birthday',
        align: 'center',
        sorter: true,
        sortOrder: this.sortOrder('birthday'),
        render: (val) =>
          val ? dayjs(val).format(Resource.Dict.value.ResourceMomentFormat10.value()) : '',
      },
      {
        title: '所在部门',
        dataIndex: 'deptName',
        key: 'deptName',
        align: 'center',
      },
      {
        title: '身高',
        dataIndex: 'height',
        key: 'height',
        align: 'center',
        sorter: true,
        sortOrder: this.sortOrder('height'),
      },
      {
        title: '体重',
        dataIndex: 'width',
        key: 'width',
        align: 'center',
        sorter: true,
        sortOrder: this.sortOrder('width'),
      },
    ];
  }

  renderSearchForm() {
    return (
      <TableGridLayout
        density="middle"
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 3,
            colgroup: [, 'auto', , 'auto', , 'auto'],
            data: [
              {
                key: 'UserName',
                label: <Label>姓名：</Label>,
                value: (
                  <Value>
                    <Input
                      style={{ width: '90%' }}
                      placeholder="姓名"
                      value={this.state.name}
                      onChange={(e) => {
                        this.onInputChange('name', e);
                      }}
                    />
                  </Value>
                ),
              },
              {
                key: 'sex',
                label: <Label>性别：</Label>,
                value: (
                  <Value>
                    <Select
                      style={{ width: '90%' }}
                      value={this.state.sex}
                      onChange={(v) => {
                        this.onSelectChange('sex', v);
                      }}
                      getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                    >
                      {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                        <Option key={t.value} value={t.value}>
                          {t.label}
                        </Option>
                      ))}
                    </Select>
                  </Value>
                ),
              },
              {
                key: 'birthday',
                label: <Label>出生年月：</Label>,
                value: (
                  <Value>
                    <RangePicker
                      style={{ width: '90%' }}
                      value={[this.state.startTime, this.state.endTime]}
                      onChange={(dayjss) => {
                        this.onDateTimeRangeChange(['startTime', 'endTime'], dayjss);
                      }}
                      getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                    />
                  </Value>
                ),
              },
              {
                key: 'homeTown',
                label: <Label>籍贯：</Label>,
                value: (
                  <Value>
                    <Input
                      style={{ width: '90%' }}
                      placeholder="籍贯"
                      value={this.state.homeTown}
                      onChange={(e) => {
                        this.onInputChange('homeTown', e);
                      }}
                    />
                  </Value>
                ),
              },
              {
                key: 'height',
                label: <Label>身高：</Label>,
                value: (
                  <Value>
                    <InputNumber
                      style={{ width: '90%' }}
                      placeholder="身高"
                      value={this.state.height}
                      onChange={(v) => {
                        this.onSelectChange('height', v);
                      }}
                    />
                  </Value>
                ),
              },
              {
                key: 'width',
                label: <Label>体重：</Label>,
                value: (
                  <Value>
                    <InputNumber
                      style={{ width: '90%' }}
                      placeholder="体重"
                      value={this.state.width}
                      onChange={(v) => {
                        this.onSelectChange('width', v);
                      }}
                    />
                  </Value>
                ),
              },
              {
                key: 'deptCode',
                label: <Label>所在部门：</Label>,
                value: (
                  <Value>
                    <Select
                      style={{ width: '90%' }}
                      value={this.state.deptCode}
                      getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                      onChange={(v) => {
                        this.onSelectChange('deptCode', v);
                      }}
                    >
                      <Option value="">全部</Option>
                      <Option value="0">产品部</Option>
                      <Option value="1">开发部</Option>
                      <Option value="2">工程部</Option>
                    </Select>
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    );
  }

  getTotal() {
    return this.state.dataSource.total;
  }

  getOrderFieldValue() {
    return 'height';
  }

  renderSearchFooterItems() {
    return null;
  }

  showLoading() {
    return this.state.loading;
  }

  // eslint-disable-next-line no-unused-vars
  onSubTableChange(pagination, filters, sorter) {}

  fetchDataExecute(searchParams) {
    return new Promise((resolve) => {
      this.setState(
        {
          loading: true,
        },
        () => {
          setTimeout(() => {
            this.request
              .get({
                mock: true,
                // eslint-disable-next-line global-require
                path: require('./mock.js').default.data,
              })
              .promise.then((result) => {
                this.setState(
                  {
                    dataSource: {
                      total: result.total,
                      list: result.list,
                    },
                    loading: false,
                  },
                  () => {
                    resolve();
                  },
                );
              });
          }, 2000);
        },
      );
    });
  }
}

TableImpl.defaultProps = {
  pagination: true,
};

TableImpl.propTypes = {
  pagination: PropTypes.bool,
};

export default TableImpl;
