import { SearchTable } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';

import { fetchSSQList } from './service/user';
import './serviceRegister';

const { City } = Mock;
const { ProSearchRowDragSortStateTable, SearchTableStateImplementFactory, DragSortColumn } =
  SearchTable;

const serviceName = 'user';

/**
 * RowDragSort
 * @class RowDragSort
 * @classdesc RowDragSort
 */
class RowDragSort extends ProSearchRowDragSortStateTable {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      selectedRowKeys: City['330000000000'].map(({ id }) => id),
    };
  }

  getComponentId() {
    return 'RowDragSort';
  }

  getServiceName() {
    return serviceName;
  }

  getFetchListPropName() {
    return 'fetchSSQList';
  }

  getOrderFieldValue() {
    return 'height';
  }

  /**
   * getDataKey
   * @description - 获取数据的key
   * @protected
   */
  getDataKey() {
    return 'list';
  }

  /**
   * getTotalKey
   * @description - 获取total的key
   * @protected
   */
  getTotalKey() {
    return 'total';
  }

  /**
   * Table的列
   * @override
   * @return {*[]}
   */
  getColumns() {
    return super.getColumns([
      DragSortColumn(),
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        $search: {
          type: 'input',
          visible: true,
        },
      },
    ]);
  }

  isUseCheckedStrategy() {
    return true;
  }

  getRowSelectionMode() {
    return SearchTable.Table.ROW_SELECTION_CONTINUOUS_MODE;
  }
}

RowDragSort.propTypes = {};

const models = [];
const requireComponent = require.context('./model', false, /.*\.(js)$/);
requireComponent.keys().forEach((fileName) => {
  const model = requireComponent(fileName);
  models.push(model.default());
});

const Wrap = SearchTableStateImplementFactory({
  serviceNames: [serviceName],
  middleWares: [],
  reducer: null,
  models,
})(RowDragSort);

export default Wrap;
