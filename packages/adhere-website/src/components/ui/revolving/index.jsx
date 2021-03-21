import React, { useRef } from 'react';
import { Button } from 'antd';
import { Revolving, Space } from '@baifendian/adhere';

import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

// import 'swiper/dist/css/swiper.css';

export default () => {
  const ref = useRef();

  return (
    <div className="Page">
      <h1>Revolving</h1>
      <p>走马灯</p>
      <p>此组件是基于Swiper编写的</p>

      <h3>Revolving</h3>
      <Props
        data={[
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
        ]}
      />

      <h3>方法</h3>
      <FunctionProps
        data={[
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
        ]}
      />

      <h3>Revolving.Item</h3>
      <Props
        data={[
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
        ]}
      />

      <h2>direction - left</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>direction - right</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>direction - top</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>direction - bottom</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>speed - 过度时间</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>delay - 转换时间</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>api控制</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>
    </div>
  );
};
