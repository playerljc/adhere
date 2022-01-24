import React from 'react';

import SearchTableImplement from './searchtableimplement';
import { defaultProps, propTypes } from './searchtable';

/**
 * SearchTableStateImplement
 * @class
 * @classdesc - SearchTable的state实现
 */
class SearchTableStateImplement extends SearchTableImplement {
  protected getData(): Array<object> {
    // @ts-ignore
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()];
  }

  protected getTotal(): number {
    // @ts-ignore
    return this.state[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()];
  }

  protected showLoading(): boolean {
    // @ts-ignore
    return this.state.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  protected fetchDataExecute(searchParams: object): Promise<any> {
    // @ts-ignore
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
