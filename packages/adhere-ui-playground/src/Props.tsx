import React from 'react';
import PropTypes from 'prop-types';
import Intl from '@baifendian/adhere-util-intl';

import Table from './Table';

import { IPropsProps } from './types';

const selectPrefix = 'adhere-ui-playground-props';

/**
 * Props
 * @class Props
 * @classdesc Props
 */
class Props extends React.Component<IPropsProps, any> {
  protected getColumns() {
    return [
      {
        title: Intl.v('参数'),
        key: 'params',
        dataIndex: 'params',
        width: '20%',
      },
      {
        title: Intl.v('说明'),
        key: 'desc',
        dataIndex: 'desc',
        width: '50%',
      },
      {
        title: Intl.v('类型'),
        key: 'type',
        dataIndex: 'type',
        width: '15%',
        render: (value) => <code className={`${selectPrefix}-highlight`}>{value}</code>,
      },
      {
        title: Intl.v('默认值'),
        key: 'defaultVal',
        dataIndex: 'defaultVal',
        width: '15%',
        render: (value) => <code>{value ? value : '-'}</code>,
      },
    ];
  }

  protected render() {
    return (
      <div className={selectPrefix}>
        <Table
          columns={this.getColumns()}
          dataSource={this.props.data.map((t, i) => ({ ...t, id: `${i + 1}` }))}
          rowKey="id"
        />
      </div>
    );
  }
}

Props.defaultProps = {
  data: [],
};

Props.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      params: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      desc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      type: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      defaultVal: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  ),
};

export default Props;
