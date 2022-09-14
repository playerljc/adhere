import { Button, Card, Empty } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender } from '@baifendian/adhere';

import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

export default () => {
  const [baseUseShow, setBaseUserShow] = useState(true);
  const [noMatchUseShow, setNoMatchUserShow] = useState(true);

  return (
    <div className="Page">
      <h1>ConditionalRender</h1>
      <p>条件渲染</p>
      <p>适用于自定义显示条件的情况下是否显示组件</p>

      <Props
        border
        title="属性"
        data={[
          {
            params: 'conditional',
            desc: '条件',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'noMatch',
            desc: '条件部匹配时显示的UI',
            type: 'React.ReactElement',
            defaultVal: 'null',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { ConditionalRender } from '@baifendian/adhere';
  import { Button, Card } from 'antd';

  const [baseUseShow, setBaseUserShow] = useState(true);

  <Card
    actions={[
      // eslint-disable-next-line react/jsx-key
      <Button
        type="primary"
        onClick={() => {
          setBaseUserShow(!baseUseShow);
        }}
      >
        {baseUseShow ? '隐藏' : '显示'}
      </Button>,
    ]}
  >
    <ConditionalRender conditional={baseUseShow}>
      {
        () => (<p>
        In the process of internal desktop applications development, many different design
        specs and implementations would be involved, which might cause designers and
        developers difficulties and duplication and reduce the efficiency of development.
      </p>)
      }
    </ConditionalRender>
  </Card>
      `}
      >
        <Card
          actions={[
            // eslint-disable-next-line react/jsx-key
            <Button
              type="primary"
              onClick={() => {
                setBaseUserShow(!baseUseShow);
              }}
            >
              {baseUseShow ? '隐藏' : '显示'}
            </Button>,
          ]}
        >
          <ConditionalRender conditional={baseUseShow}>
            {() => (
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            )}
          </ConditionalRender>
        </Card>
      </Playground>

      <h2>自定义不匹配时的UI</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { ConditionalRender } from '@baifendian/adhere';
  import { Button, Card, Empty } from 'antd';

  const [noMatchUseShow, setNoMatchUserShow] = useState(true);

  <Card
    actions={[
      // eslint-disable-next-line react/jsx-key
      <Button
        type="primary"
        onClick={() => {
          setNoMatchUserShow(!noMatchUseShow);
        }}
      >
        {noMatchUseShow ? '隐藏' : '显示'}
      </Button>,
    ]}
  >
    <ConditionalRender conditional={noMatchUseShow} noMatch={() => <Empty />}>
      {
        () => (
          <p>
            In the process of internal desktop applications development, many different design
            specs and implementations would be involved, which might cause designers and
            developers difficulties and duplication and reduce the efficiency of development.
          </p>
        )
      }
    </ConditionalRender>
  </Card>
      `}
      >
        <Card
          actions={[
            // eslint-disable-next-line react/jsx-key
            <Button
              type="primary"
              onClick={() => {
                setNoMatchUserShow(!noMatchUseShow);
              }}
            >
              {noMatchUseShow ? '隐藏' : '显示'}
            </Button>,
          ]}
        >
          <ConditionalRender conditional={noMatchUseShow} noMatch={() => <Empty />}>
            {() => (
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            )}
          </ConditionalRender>
        </Card>
      </Playground>
    </div>
  );
};
