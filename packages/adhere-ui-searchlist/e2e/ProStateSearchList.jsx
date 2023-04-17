import React from 'react';

import SearchList from '../src/index';
import './serviceRegister';

const { /*ProSearchStateList*/ ProResourceStateManager, SearchListStateImplementFactory } =
  SearchList;

const serviceName = 'user';

/**
 * ProSearchStateListImpl
 * @class ProSearchStateListImpl
 * @classdesc ProSearchStateListImpl
 */
class ProSearchStateListImpl extends ProResourceStateManager {
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

  // getViewParams() {
  //   return {
  //     title: null,
  //     subTitle: null,
  //     content: null,
  //   };
  // }
  //
  // getTableViewColumns() {
  //   return [
  //     {
  //       dataIndex: 'title',
  //       key: 'title',
  //       title: '标题',
  //       $search: {
  //         visible: true,
  //         type: 'input',
  //       },
  //     },
  //     {
  //       dataIndex: 'subTitle',
  //       key: 'subTitle',
  //       title: '副标题',
  //       $search: {
  //         visible: true,
  //         type: 'input',
  //       },
  //     },
  //     {
  //       dataIndex: 'content',
  //       key: 'subTitle',
  //       title: '副标题',
  //       $search: {
  //         visible: true,
  //         type: 'textArea',
  //       },
  //     },
  //   ];
  // }
  //
  // renderGridViewCard({ record }) {
  //   return <div>111111111111</div>;
  // }

  // getRowSelection() {
  //   return null;
  // }

  // getExpandable() {
  //   return {
  //     expandedRowKeys: this.state.expandedRowKeys,
  //     onExpandedRowsChange: (_expandedRowKeys) => {
  //       this.setState({
  //         expandedRowKeys: _expandedRowKeys,
  //       });
  //     },
  //   };
  // }

  getMetas() {
    return {
      // title: {
      //   dataIndex: 'title',
      //   render: (val) => <div style={{ color: 'red' }}>{val}</div>,
      // },
      // subTitle: {
      //   dataIndex: 'subTitle',
      //   render: (val) => <div style={{ color: 'red' }}>{val}</div>,
      // },
      // description: {
      //   dataIndex: 'description',
      //   render: (val) => <div style={{ color: 'red' }}>{val}</div>,
      // },
      // avatar: {
      //   dataIndex: 'avatar',
      //   render: (val) => <img src={val} alt="" />,
      // },
      // content: {
      //   dataIndex: 'content',
      //   render: (val) => <div style={{ color: 'red' }}>{val}</div>,
      // },
      actions: {
        dataIndex: 'actions',
        // cardActionProps: 'extra',
        render: () => [<a>1</a>, <a>2</a>, <a>3</a>],
      },
      // extra: {
      //   dataIndex: 'extra',
      //   render: () => <div>extra</div>,
      // },
    };
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
    antdListProps={
      {
        // itemLayout: 'vertical',
        // grid: { gutter: 16, column: 4 },
        // renderItem: () => {
        //   return <div>Custom</div>;
        // },
      }
    }
    {...props}
  />
);
