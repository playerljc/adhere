import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';

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
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
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
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
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
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
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
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
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
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
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
        type: 'PlayGround',
        codeText: P6CodeText,
        renderChildren: () => <P6 />,
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
        type: 'PlayGround',
        codeText: P7CodeText,
        renderChildren: () => <P7 />,
      },
    ];
  }

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
