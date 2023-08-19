import { Button, Select } from 'antd';
import React, { useState } from 'react';

import { Space, Spin } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [size, setSize] = useState('default');

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { Spin, Space } from '@baifendian/adhere';

  <div>
    <div style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}>
      In the process of internal desktop applications development, many different design specs
      and implementations would be involved, which might cause designers and developers
      difficulties and duplication and reduce the efficiency of development.
      <Spin spinning={show} text="处理中..." />
    </div>

    <div>
      <Space.Group direction="horizontal" size={5}>
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
      </Space.Group>
    </div>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <div style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
              <Spin spinning={show1} text="处理中..." />
            </div>

            <div>
              <Space.Group direction="horizontal" size={5}>
                <Button
                  type="primary"
                  onClick={() => {
                    setShow1(true);
                  }}
                >
                  显示
                </Button>

                <Button
                  onClick={() => {
                    setShow1(false);
                  }}
                >
                  取消
                </Button>
              </Space.Group>
            </div>
          </div>
        ),
      },
      {
        id: `p2`,
        name: `各种尺寸`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '各种尺寸',
            info: '各种尺寸',
          },
        },
        codeText: `
  import React, { useState } from 'react';
  import { Button, Select } from 'antd';
  import { Spin, Space } from '@baifendian/adhere';

  <div>
    <div style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}>
      In the process of internal desktop applications development, many different design specs
      and implementations would be involved, which might cause designers and developers
      difficulties and duplication and reduce the efficiency of development.
      <Spin spinning={show} text="处理中..." size={size} />
    </div>

    <div>
      <Space.Group direction="horizontal" size={5}>
        <Select value={size} onChange={(e) => setSize(e)}>
          <Select.Option value="small">small</Select.Option>
          <Select.Option value="default">default</Select.Option>
          <Select.Option value="large">large</Select.Option>
        </Select>

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
      </Space.Group>
    </div>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <div style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
              <Spin spinning={show2} text="处理中..." size={size} />
            </div>

            <div>
              <Space.Group direction="horizontal" size={5}>
                <Select value={size} onChange={(e) => setSize(e)}>
                  <Select.Option value="small">small</Select.Option>
                  <Select.Option value="default">default</Select.Option>
                  <Select.Option value="large">large</Select.Option>
                </Select>

                <Button
                  type="primary"
                  onClick={() => {
                    setShow2(true);
                  }}
                >
                  显示
                </Button>

                <Button
                  onClick={() => {
                    setShow2(false);
                  }}
                >
                  取消
                </Button>
              </Space.Group>
            </div>
          </div>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Spin">
        <p>无侵入的loading</p>
        <p>放入含有position:relative的元素中则遮罩这个元素，否则遮罩body</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
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
              {
                params: 'size',
                desc: '大小',
                type: 'default | small | large',
                defaultVal: 'default',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
