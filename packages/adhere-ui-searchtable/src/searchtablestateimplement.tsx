import React from 'react';

import SearchTableImplement from './searchtableimplement';
import { defaultProps, propTypes } from './searchtable';

/**
 * SearchTableStateImplement
 * @class
 * @classdesc - SearchTable的state实现
 */
class SearchTableStateImplement extends SearchTableImplement {
  getData(): object[] {
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()];
  }

  getTotal(): number {
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()];
  }

  showLoading(): boolean {
    return this.state.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  fetchDataExecute(searchParams?: object): Promise<any> {
    return this.state[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }
}

SearchTableStateImplement.defaultProps = {
  ...defaultProps,
};

SearchTableStateImplement.propTypes = {
  ...propTypes,
};

export default SearchTableStateImplement;
