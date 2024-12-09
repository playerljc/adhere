import Mock from 'mockjs';
import React from 'react';

import { RevolvingTable } from '../../src';

import '../../src/index.less';

export default () => {
  return (
    <RevolvingTable
      style={{ height: 300 }}
      // renderHeaderBefore={() => <div>renderHeaderBefore</div>}
      // renderHeaderAfter={() => <div>renderHeaderAfter</div>}
      // renderBodyBefore={() => <div>renderBodyBefore</div>}
      // renderBodyAfter={() => <div>renderBodyAfter</div>}
      parity
      columns={[
        {
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          title: 'name',
          width: 250,
        },
        {
          dataIndex: 'sex',
          key: 'sex',
          title: 'sex',
          ellipsis: true,
          // render: (v) => {
          //   return (
          //     <div style={{ color: 'red' }}>
          //
          //     </div>
          //   );
          // },
        },
        {
          dataIndex: 'address',
          key: 'address',
          title: 'address',
        },
      ]}
      dataSource={Array.from({ length: 2 }).map(() => ({
        id: Mock.mock('@guid'),
        name: Mock.mock('@name'),
        // sex: Mock.mock('@name'),
        sex: 'ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp',
        address: Mock.mock('@name'),
      }))}
      revolvingConfig={{
        loop: false,
        slidesPerView: 3,
        spaceBetween: 16,
      }}
    />
  );
};
