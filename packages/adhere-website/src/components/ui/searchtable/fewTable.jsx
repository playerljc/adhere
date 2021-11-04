import React from 'react';

import Table from './table';
import { oneData } from './mock';

/**
 * FewTable
 * @classdesc
 */
class FewTable extends Table {
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

export default FewTable;
