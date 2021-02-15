import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';

import styles from './index.less';

function getColumns() {
  return [
    {
      title: '函数名称',
      key: 'name',
      dataIndex: 'name',
      className: styles.center,
    },
    {
      title: '函数描述',
      key: 'desc',
      dataIndex: 'desc',
      className: styles.center,
    },
    {
      title: '函数修饰符',
      key: 'modifier',
      dataIndex: 'modifier',
      className: styles.center,
    },
    {
      title: '参数',
      key: 'params',
      dataIndex: 'params',
      className: styles.center,
      // eslint-disable-next-line no-use-before-define
      render: (val) => renderParams(val),
    },
    {
      title: '返回值类型',
      key: 'returnType',
      dataIndex: 'returnType',
      className: styles.center,
    },
    {
      title: '返回值说明',
      key: 'returnDesc',
      dataIndex: 'returnDesc',
      className: styles.center,
    },
  ];
}

function getParamsColumns() {
  return [
    {
      title: '参数名称',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '参数说明',
      key: 'desc',
      dataIndex: 'desc',
    },
    {
      title: '参数类型',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: '默认值',
      key: 'defaultVal',
      dataIndex: 'defaultVal',
    },
    {
      title: '是否必填',
      key: 'required',
      dataIndex: 'required',
    },
  ];
}

function renderParams(val) {
  return val.length ? (
    <Table dataSource={val} columns={getParamsColumns()} size="small" pagination={false} />
  ) : null;
}

/**
 * FunctionProps
 * @return {*}
 * @constructor
 */
function FunctionProps({ data }) {
  return <Table columns={getColumns()} dataSource={data} pagination={false} size="small" />;
}

FunctionProps.defaultProps = {
  data: [],
};

FunctionProps.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      // 函数名称
      name: PropTypes.string,
      // 函数描述
      desc: PropTypes.string,
      // 函数修饰符
      modifier: PropTypes.oneOf(['static', 'public', 'private']),
      // 函数参数
      params: PropTypes.arrayOf(
        PropTypes.shape({
          // 参数名称
          name: PropTypes.string,
          // 参数说明
          desc: PropTypes.string,
          // 参数类型
          type: PropTypes.string,
          // 默认值
          defaultVal: PropTypes.string,
          // 是否必填
          required: PropTypes.string,
        }),
      ),
      // 函数返回值类型
      returnType: PropTypes.string,
      // 函数返回值说明
      returnDesc: PropTypes.string,
    }),
  ),
};

export default FunctionProps;
