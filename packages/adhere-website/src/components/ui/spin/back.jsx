import { Button } from 'antd';
import React, { useState } from 'react';

import { Spin } from '@baifendian/adhere';

import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <div className="Page">
      <h1>Spin</h1>
      <p>无侵入的loading</p>
      <p>放入含有position:relative的元素中则遮罩这个元素，否则遮罩body</p>

      <Props
        border
        title="属性"
        data={[
          {
            params: 'spinning',
            desc: '是否显示这招',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'text',
            desc: '显示的文本',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'zIndex',
            desc: '遮罩的层级',
            type: 'number',
            defaultVal: '19999',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { Spin } from '@baifendian/adhere';

  <div>
    <div style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}>
      In the process of internal desktop applications development, many different design specs
      and implementations would be involved, which might cause designers and developers
      difficulties and duplication and reduce the efficiency of development.
      <Spin text="处理中..." spinning={show} />
    </div>
    <div>
      <Button
        type="primary"
        onClick={() => {
          setShow(true);
        }}
      >
        显示
      </Button>

      <Button
        onClick={() => {
          setShow(false);
        }}
      >
        取消
      </Button>
    </div>
  </div>
      `}
      >
        <div>
          <div style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}>
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
            <Spin text="处理中..." spinning={show} />
          </div>
          <div>
            <Button
              type="primary"
              onClick={() => {
                setShow(true);
              }}
            >
              显示
            </Button>

            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              取消
            </Button>
          </div>
        </div>
      </Playground>
    </div>
  );
};
