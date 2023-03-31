import React from 'react';

import { SearchList } from '@baifendian/adhere';

import './serviceRegister';

const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

const serviceName = 'user';

/**
 * ProSearchStateListImpl
 * @class ProSearchStateListImpl
 * @classdesc ProSearchStateListImpl
 */
class ProSearchStateListImpl extends ProSearchStateList {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      expandedRowKeys: [],
    };
  }

  getComponentId() {
    return 'ProSearchStateListImpl';
  }

  getServiceName() {
    return serviceName;
  }

  getFetchListPropName() {
    return 'fetchList';
  }

  getDataKey() {
    return 'list';
  }

  getTotalKey() {
    return 'totalCount';
  }

  getRowSelection() {
    return null;
  }

  getColumns() {
    return [
      {
        dataIndex: 'title',
        key: 'title',
        title: '标题',
        $search: {
          visible: true,
          type: 'input',
        },
      },
      {
        dataIndex: 'subTitle',
        key: 'subTitle',
        title: '副标题',
        $search: {
          visible: true,
          type: 'input',
        },
      },
      {
        dataIndex: 'content',
        key: 'subTitle',
        title: '副标题',
        $search: {
          visible: true,
          type: 'textArea',
        },
      },
    ];
  }
}

ProSearchStateListImpl.propTypes = {};

const models = [];
const requireComponent = require.context('./model', false, /.*\.(js)$/);
requireComponent.keys().forEach((fileName) => {
  const model = requireComponent(fileName);
  models.push(model.default());
});

const Wrap = SearchListStateImplementFactory({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models,
})(ProSearchStateListImpl);

export default (props) => (
  <Wrap
    bodyStyle={{ padding: '20px 30px' }}
    antdListProps={{
      renderItem: () => {
        return <div>Custom</div>;
      },
    }}
    {...props}
  />
);
