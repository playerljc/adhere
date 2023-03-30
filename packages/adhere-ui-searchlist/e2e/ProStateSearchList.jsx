import { Avatar, List } from 'antd';
import React from 'react';

import SearchList from '../src/index';
import './serviceRegister';

const { ProSearchStateList, SearchListStateImplementFactor } = SearchList;

const serviceName = 'user';

/**
 * ProSearchStateListImpl
 * @class ProSearchStateListImpl
 * @classdesc ProSearchStateListImpl
 */
class ProSearchStateListImpl extends ProSearchStateList {
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

  renderItem(item) {
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.picture.large} />}
          title={<a href="https://ant.design">{item.name.last}</a>}
          description={item.email}
        />
        <div>Content</div>
      </List.Item>
    );
  }
}

ProSearchStateListImpl.propTypes = {};

const models = [];
const requireComponent = require.context('./model', false, /.*\.(js)$/);
requireComponent.keys().forEach((fileName) => {
  const model = requireComponent(fileName);
  models.push(model.default());
});

const Wrap = SearchListStateImplementFactor({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models,
})(ProSearchStateListImpl);

export default Wrap;
