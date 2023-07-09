// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { oneData } from './mock';
import Table from './table';

/**
 * FewTable
 * @classdesc
 */
class FewTable extends Table {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                path: oneData.data,
              })
              .promise.then((result) => {
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

export default FewTable;
