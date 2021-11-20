import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Input, Select, DatePicker, InputNumber } from 'antd';

import { SearchTable, Resource, Ajax } from '@baifendian/adhere';

const { Table, TableImplement } = SearchTable;

const { SearchForm } = Table;

const { SearchFormRow } = SearchForm;

const { SearchFormLabel, SearchFormValue } = SearchFormRow;

const { Option } = Select;

const { RangePicker } = DatePicker;

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
        ? `${startTime.format(Resource.Dict.value.ResourceMomentFormat10.value)} 00:00:00`
        : null,
      endTime: endTime
        ? `${endTime.format(Resource.Dict.value.ResourceMomentFormat10.value)} 23:59:59`
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
          val ? moment(val).format(Resource.Dict.value.ResourceMomentFormat10.value) : '',
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
      // eslint-disable-next-line react/jsx-no-undef
      <SearchForm>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <SearchFormRow>
          <SearchFormLabel style={{ width: 120 }}>姓名：</SearchFormLabel>
          <SearchFormValue>
            <Input
              style={{ width: '90%' }}
              placeholder="姓名"
              value={this.state.name}
              onChange={(e) => {
                this.onInputChange('name', e);
              }}
            />
          </SearchFormValue>

          <SearchFormLabel style={{ width: 120 }}>性别：</SearchFormLabel>
          <SearchFormValue>
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
          </SearchFormValue>

          <SearchFormLabel style={{ width: 120 }}>出生年月：</SearchFormLabel>
          <SearchFormValue>
            <RangePicker
              style={{ width: '90%' }}
              value={[this.state.startTime, this.state.endTime]}
              onChange={(moments) => {
                this.onDateTimeRangeChange(['startTime', 'endTime'], moments);
              }}
              getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
            />
          </SearchFormValue>
        </SearchFormRow>

        {/* eslint-disable-next-line react/jsx-no-undef */}
        <SearchFormRow>
          <SearchFormLabel style={{ width: 120 }}>籍贯：</SearchFormLabel>
          <SearchFormValue>
            <Input
              style={{ width: '90%' }}
              placeholder="籍贯"
              value={this.state.homeTown}
              onChange={(e) => {
                this.onInputChange('homeTown', e);
              }}
            />
          </SearchFormValue>

          <SearchFormLabel style={{ width: 120 }}>身高：</SearchFormLabel>
          <SearchFormValue>
            <InputNumber
              style={{ width: '90%' }}
              placeholder="身高"
              value={this.state.height}
              onChange={(v) => {
                this.onSelectChange('height', v);
              }}
            />
          </SearchFormValue>

          <SearchFormLabel style={{ width: 120 }}>体重：</SearchFormLabel>
          <SearchFormValue>
            <InputNumber
              style={{ width: '90%' }}
              placeholder="体重"
              value={this.state.width}
              onChange={(v) => {
                this.onSelectChange('width', v);
              }}
            />
          </SearchFormValue>
        </SearchFormRow>

        {/* eslint-disable-next-line react/jsx-no-undef */}
        <SearchFormRow>
          <SearchFormLabel style={{ width: 120 }}>所在部门：</SearchFormLabel>
          <SearchFormValue>
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
          </SearchFormValue>
        </SearchFormRow>
      </SearchForm>
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
              .then((result) => {
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
