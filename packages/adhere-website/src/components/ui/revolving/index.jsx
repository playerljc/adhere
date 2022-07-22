import React, { useRef } from 'react';
import { Button } from 'antd';
import { Revolving, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `left`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'left',
            info: 'direction - left',
          },
        },
        codeText: `
  import { Revolving, Space } from '@baifendian/adhere';

  <Revolving direction="left">
    <Revolving.Item>Slide 1</Revolving.Item>
    <Revolving.Item>Slide 2</Revolving.Item>
    <Revolving.Item>Slide 3</Revolving.Item>
    <Revolving.Item>Slide 4</Revolving.Item>
    <Revolving.Item>Slide 5</Revolving.Item>
    <Revolving.Item>Slide 6</Revolving.Item>
    <Revolving.Item>Slide 7</Revolving.Item>
    <Revolving.Item>Slide 8</Revolving.Item>
    <Revolving.Item>Slide 9</Revolving.Item>
    <Revolving.Item>Slide 10</Revolving.Item>
  </Revolving>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Revolving direction="left">
            <Revolving.Item>Slide 1</Revolving.Item>
            <Revolving.Item>Slide 2</Revolving.Item>
            <Revolving.Item>Slide 3</Revolving.Item>
            <Revolving.Item>Slide 4</Revolving.Item>
            <Revolving.Item>Slide 5</Revolving.Item>
            <Revolving.Item>Slide 6</Revolving.Item>
            <Revolving.Item>Slide 7</Revolving.Item>
            <Revolving.Item>Slide 8</Revolving.Item>
            <Revolving.Item>Slide 9</Revolving.Item>
            <Revolving.Item>Slide 10</Revolving.Item>
          </Revolving>
        ),
      },
      {
        id: `p2`,
        name: `right`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'right',
            info: 'direction - right',
          },
        },
        codeText: `
  import { Revolving, Space } from '@baifendian/adhere';

  <Revolving direction="right">
    <Revolving.Item>Slide 1</Revolving.Item>
    <Revolving.Item>Slide 2</Revolving.Item>
    <Revolving.Item>Slide 3</Revolving.Item>
    <Revolving.Item>Slide 4</Revolving.Item>
    <Revolving.Item>Slide 5</Revolving.Item>
    <Revolving.Item>Slide 6</Revolving.Item>
    <Revolving.Item>Slide 7</Revolving.Item>
    <Revolving.Item>Slide 8</Revolving.Item>
    <Revolving.Item>Slide 9</Revolving.Item>
    <Revolving.Item>Slide 10</Revolving.Item>
  </Revolving>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Revolving direction="right">
            <Revolving.Item>Slide 1</Revolving.Item>
            <Revolving.Item>Slide 2</Revolving.Item>
            <Revolving.Item>Slide 3</Revolving.Item>
            <Revolving.Item>Slide 4</Revolving.Item>
            <Revolving.Item>Slide 5</Revolving.Item>
            <Revolving.Item>Slide 6</Revolving.Item>
            <Revolving.Item>Slide 7</Revolving.Item>
            <Revolving.Item>Slide 8</Revolving.Item>
            <Revolving.Item>Slide 9</Revolving.Item>
            <Revolving.Item>Slide 10</Revolving.Item>
          </Revolving>
        ),
      },
      {
        id: `p3`,
        name: `top`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'top',
            info: 'direction - top',
          },
        },
        codeText: `
  import { Revolving, Space } from '@baifendian/adhere';

  <Revolving direction="top" style={{ height: 50 }}>
    <Revolving.Item>Slide 1</Revolving.Item>
    <Revolving.Item>Slide 2</Revolving.Item>
    <Revolving.Item>Slide 3</Revolving.Item>
    <Revolving.Item>Slide 4</Revolving.Item>
    <Revolving.Item>Slide 5</Revolving.Item>
    <Revolving.Item>Slide 6</Revolving.Item>
    <Revolving.Item>Slide 7</Revolving.Item>
    <Revolving.Item>Slide 8</Revolving.Item>
    <Revolving.Item>Slide 9</Revolving.Item>
    <Revolving.Item>Slide 10</Revolving.Item>
  </Revolving>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Revolving direction="top" style={{ height: 50 }}>
            <Revolving.Item>Slide 1</Revolving.Item>
            <Revolving.Item>Slide 2</Revolving.Item>
            <Revolving.Item>Slide 3</Revolving.Item>
            <Revolving.Item>Slide 4</Revolving.Item>
            <Revolving.Item>Slide 5</Revolving.Item>
            <Revolving.Item>Slide 6</Revolving.Item>
            <Revolving.Item>Slide 7</Revolving.Item>
            <Revolving.Item>Slide 8</Revolving.Item>
            <Revolving.Item>Slide 9</Revolving.Item>
            <Revolving.Item>Slide 10</Revolving.Item>
          </Revolving>
        ),
      },
      {
        id: `p4`,
        name: `bottom`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'bottom',
            info: 'direction - bottom',
          },
        },
        codeText: `
  import { Revolving, Space } from '@baifendian/adhere';

  <Revolving direction="bottom" style={{ height: 50 }}>
    <Revolving.Item>Slide 1</Revolving.Item>
    <Revolving.Item>Slide 2</Revolving.Item>
    <Revolving.Item>Slide 3</Revolving.Item>
    <Revolving.Item>Slide 4</Revolving.Item>
    <Revolving.Item>Slide 5</Revolving.Item>
    <Revolving.Item>Slide 6</Revolving.Item>
    <Revolving.Item>Slide 7</Revolving.Item>
    <Revolving.Item>Slide 8</Revolving.Item>
    <Revolving.Item>Slide 9</Revolving.Item>
    <Revolving.Item>Slide 10</Revolving.Item>
  </Revolving>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Revolving direction="bottom" style={{ height: 50 }}>
            <Revolving.Item>Slide 1</Revolving.Item>
            <Revolving.Item>Slide 2</Revolving.Item>
            <Revolving.Item>Slide 3</Revolving.Item>
            <Revolving.Item>Slide 4</Revolving.Item>
            <Revolving.Item>Slide 5</Revolving.Item>
            <Revolving.Item>Slide 6</Revolving.Item>
            <Revolving.Item>Slide 7</Revolving.Item>
            <Revolving.Item>Slide 8</Revolving.Item>
            <Revolving.Item>Slide 9</Revolving.Item>
            <Revolving.Item>Slide 10</Revolving.Item>
          </Revolving>
        ),
      },
      {
        id: `p5`,
        name: `speed`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'speed',
            info: 'speed - 过度时间',
          },
        },
        codeText: `
  import { Revolving, Space } from '@baifendian/adhere';

  <Revolving direction="bottom" speed={1000 * 3} style={{ height: 50 }}>
    <Revolving.Item>Slide 1</Revolving.Item>
    <Revolving.Item>Slide 2</Revolving.Item>
    <Revolving.Item>Slide 3</Revolving.Item>
    <Revolving.Item>Slide 4</Revolving.Item>
    <Revolving.Item>Slide 5</Revolving.Item>
    <Revolving.Item>Slide 6</Revolving.Item>
    <Revolving.Item>Slide 7</Revolving.Item>
    <Revolving.Item>Slide 8</Revolving.Item>
    <Revolving.Item>Slide 9</Revolving.Item>
    <Revolving.Item>Slide 10</Revolving.Item>
  </Revolving>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Revolving direction="bottom" speed={1000 * 3} style={{ height: 50 }}>
            <Revolving.Item>Slide 1</Revolving.Item>
            <Revolving.Item>Slide 2</Revolving.Item>
            <Revolving.Item>Slide 3</Revolving.Item>
            <Revolving.Item>Slide 4</Revolving.Item>
            <Revolving.Item>Slide 5</Revolving.Item>
            <Revolving.Item>Slide 6</Revolving.Item>
            <Revolving.Item>Slide 7</Revolving.Item>
            <Revolving.Item>Slide 8</Revolving.Item>
            <Revolving.Item>Slide 9</Revolving.Item>
            <Revolving.Item>Slide 10</Revolving.Item>
          </Revolving>
        ),
      },
      {
        id: `p6`,
        name: `delay`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'delay',
            info: 'delay - 转换时间',
          },
        },
        codeText: `
  import { Revolving, Space } from '@baifendian/adhere';

  <Revolving direction="bottom" delay={1000 * 3} style={{ height: 50 }}>
    <Revolving.Item>Slide 1</Revolving.Item>
    <Revolving.Item>Slide 2</Revolving.Item>
    <Revolving.Item>Slide 3</Revolving.Item>
    <Revolving.Item>Slide 4</Revolving.Item>
    <Revolving.Item>Slide 5</Revolving.Item>
    <Revolving.Item>Slide 6</Revolving.Item>
    <Revolving.Item>Slide 7</Revolving.Item>
    <Revolving.Item>Slide 8</Revolving.Item>
    <Revolving.Item>Slide 9</Revolving.Item>
    <Revolving.Item>Slide 10</Revolving.Item>
  </Revolving>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Revolving direction="bottom" delay={1000 * 3} style={{ height: 50 }}>
            <Revolving.Item>Slide 1</Revolving.Item>
            <Revolving.Item>Slide 2</Revolving.Item>
            <Revolving.Item>Slide 3</Revolving.Item>
            <Revolving.Item>Slide 4</Revolving.Item>
            <Revolving.Item>Slide 5</Revolving.Item>
            <Revolving.Item>Slide 6</Revolving.Item>
            <Revolving.Item>Slide 7</Revolving.Item>
            <Revolving.Item>Slide 8</Revolving.Item>
            <Revolving.Item>Slide 9</Revolving.Item>
            <Revolving.Item>Slide 10</Revolving.Item>
          </Revolving>
        ),
      },
      {
        id: `p7`,
        name: `api控制`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'api控制',
            info: 'api控制',
          },
        },
        codeText: `
  import React, { useRef } from 'react';
  import { Button } from 'antd';
  import { Revolving, Space } from '@baifendian/adhere';

  const ref = useRef();

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Space.Group direction="horizontal">
      <Button
        type="primary"
        onClick={() => {
          ref.current.start();
        }}
      >
        start
      </Button>
      <Button
        onClick={() => {
          ref.current.stop();
        }}
      >
        stop
      </Button>
    </Space.Group>
  </div>

  <Space />

  <Revolving direction="bottom" delay={1000 * 3} style={{ height: 50 }} ref={ref}>
    <Revolving.Item>Slide 1</Revolving.Item>
    <Revolving.Item>Slide 2</Revolving.Item>
    <Revolving.Item>Slide 3</Revolving.Item>
    <Revolving.Item>Slide 4</Revolving.Item>
    <Revolving.Item>Slide 5</Revolving.Item>
    <Revolving.Item>Slide 6</Revolving.Item>
    <Revolving.Item>Slide 7</Revolving.Item>
    <Revolving.Item>Slide 8</Revolving.Item>
    <Revolving.Item>Slide 9</Revolving.Item>
    <Revolving.Item>Slide 10</Revolving.Item>
  </Revolving>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Space.Group direction="horizontal">
                <Button
                  type="primary"
                  onClick={() => {
                    ref.current.start();
                  }}
                >
                  start
                </Button>
                <Button
                  onClick={() => {
                    ref.current.stop();
                  }}
                >
                  stop
                </Button>
              </Space.Group>
            </div>

            <Space />

            <Revolving direction="bottom" delay={1000 * 3} style={{ height: 50 }} ref={ref}>
              <Revolving.Item>Slide 1</Revolving.Item>
              <Revolving.Item>Slide 2</Revolving.Item>
              <Revolving.Item>Slide 3</Revolving.Item>
              <Revolving.Item>Slide 4</Revolving.Item>
              <Revolving.Item>Slide 5</Revolving.Item>
              <Revolving.Item>Slide 6</Revolving.Item>
              <Revolving.Item>Slide 7</Revolving.Item>
              <Revolving.Item>Slide 8</Revolving.Item>
              <Revolving.Item>Slide 9</Revolving.Item>
              <Revolving.Item>Slide 10</Revolving.Item>
            </Revolving>
          </>
        ),
      },
    ];
  }

  const ref = useRef();

  return (
    <PlayGroundPage>
      <Section title="Revolving">
        <p>走马灯</p>
        <p>此组件是基于Swiper编写的</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Revolving',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'classNameWrapper',
                desc: 'wrapper附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'styleWrapper',
                desc: 'wrapper附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'speed',
                desc: '速度',
                type: 'number',
                defaultVal: '1000',
              },
              {
                params: 'delay',
                desc: '过度的时间',
                type: 'number',
                defaultVal: '1000',
              },
              {
                params: 'direction',
                desc: '方向 top | right | bottom | left',
                type: 'string',
                defaultVal: 'top',
              },
              {
                params: 'loop',
                desc: '是否循环播放',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'stopOnLastSlide',
                desc: '启用此参数并在到达最后一张幻灯片时停止自动播放',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'listeners',
                desc: '事件注册句柄，具体型参考Swiper的事件',
                type: 'Object',
                defaultVal: '{}',
              },
            ],
          },
          {
            border: true,
            title: 'Revolving.Item',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'start',
                desc: '开始播放',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'stop',
                desc: '停止播放',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'isRunning',
                desc: '是否处于播放状态',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '播放返回true,为播放返回false',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
