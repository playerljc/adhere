import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Input, InputNumber, Select, DatePicker } from 'antd';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
import { createState } from '@ctsj/state/lib/react';
import { Resource, SearchTable, TableGridLayout } from '@baifendian/adhere';

import './serviceRegister';

const { Option } = Select;

const { RangePicker } = DatePicker;

const { TableStateImplement } = SearchTable;

const { Label, Value } = TableGridLayout;

const serviceName = 'user';

/**
 * StateTable
 */
class StateTable extends TableStateImplement {
  constructor(props) {
    super(props);

    const models = [];

    const requireComponent = require.context('./model', false, /.*\.(js)$/);

    requireComponent.keys().forEach((fileName) => {
      const model = requireComponent(fileName);
      models.push(model.default());
    });

    this.unsubscribe = createState({
      initialState: { ...this.state },
      models,
      mapState: (state) =>
        Object.assign(
          ServiceRegister.mapStateToProps({
            namespaces: [serviceName],
            state,
          }),
          {
            loading: state.loading,
          },
        ),
      mapDispatch: (dispatch) =>
        ServiceRegister.mapDispatchToProps({
          namespaces: [serviceName],
          dispatch,
        }),
      ref: this,
      middleWares: [],
      reducer: null,
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

  componentWillUnmount() {
    this.unsubscribe();
  }

  getServiceName() {
    return serviceName;
  }

  getOrderFieldValue() {
    return 'height';
  }

  getTotalKey() {
    return 'total';
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
                      onChange={(moments) => {
                        this.onDateTimeRangeChange(['startTime', 'endTime'], moments);
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

  renderSearchFooterItems(defaultItems) {
    return [...defaultItems];
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
          val ? moment(val).format(Resource.Dict.value.ResourceMomentFormat10.value()) : '',
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

  getFetchListPropName() {
    return 'fetchList';
  }

  fetchDataExecute(searchParams) {
    return super.fetchDataExecute(searchParams);
  }

  getPagination() {
    const { pagination } = this.props;

    if (pagination) {
      return super.getPagination();
    }

    return false;
  }

  onSubTableChange(pagination, filters, sorter) {}
}

StateTable.defaultProps = {
  pagination: true,
};

StateTable.propTypes = {
  pagination: PropTypes.bool,
};

export default StateTable;
