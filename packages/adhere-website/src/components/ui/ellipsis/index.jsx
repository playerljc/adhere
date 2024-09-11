import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';

import P6LessCodeText from '!!raw-loader!./index.less';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="Ellipsis">
        <p>文字省略</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `单行省略`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '单行省略',
                info: '单行省略',
              },
            },
            codeText: P1CodeText,
            type: 'PlayGround',
            renderChildren: () => <P1 />,
          },
          {
            id: `p2`,
            name: `多行省略`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '多行省略',
                info: '多行省略',
              },
            },
            codeText: P2CodeText,
            type: 'PlayGround',
            renderChildren: () => <P2 />,
          },
          {
            id: `p3`,
            name: `使用html的提示`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '使用html的提示',
                info: '使用html的提示',
              },
            },
            codeText: P3CodeText,
            type: 'PlayGround',
            renderChildren: () => <P3 />,
          },
          {
            id: `p4`,
            name: `提示字符数超过规大小后`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '提示字符数超过规大小后',
                info: '提示字符数超过规大小后',
              },
            },
            codeText: P4CodeText,
            type: 'PlayGround',
            renderChildren: () => <P4 />,
          },
          {
            id: `p5`,
            name: `内容是html字符串`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '内容是html字符串',
                info: '内容是html字符串',
              },
            },
            codeText: P5CodeText,
            type: 'PlayGround',
            renderChildren: () => <P5 />,
          },
          {
            id: `p6`,
            name: `列表综合例子`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '列表综合例子',
                info: '列表综合例子',
              },
            },
            active: 'p6.jsx',
            config: [
              {
                key: 'p6.jsx',
                title: 'p6.jsx',
                codeText: P6CodeText,
              },
              {
                key: 'index.less',
                title: 'index.less',
                codeText: P6LessCodeText,
              },
            ],

            type: 'PlayGroundTab',
            renderChildren: () => <P6 />,
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附件Style',
                type: 'CSSProperties',
                defaultVal: '{}',
              },
              {
                params: 'tooltip',
                desc: '提示内容(如果没有则是children，只能是纯文本)',
                type: 'string',
                defaultVal: '19999',
              },
              {
                params: 'wrap',
                desc: '是否换行',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'wrapLines',
                desc: '显示的行数',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'tooltipMaxLength',
                desc: 'tooltip最大字符数',
                type: 'number',
                defaultVal: '1024',
              },
              {
                params: 'isUseNativeTooltip',
                desc: '是否使用原生提示',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'trigger',
                desc: '触发的事件类型',
                type: "'hover' | 'click' | 'focus' | ['hover', 'click', 'focus']",
                defaultVal: '',
              },
              {
                params: 'tooltipClassName',
                desc: 'tooltip的className(isUseNativeTooltip是false生效)',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'tooltipStyle',
                desc: 'tooltip的style(isUseNativeTooltip是false生效)',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'tooltipArrowClassName',
                desc: 'tooltip的Arrow的className(isUseNativeTooltip是false生效)',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'tooltipArrowStyle',
                desc: 'tooltip的Arrow的style(isUseNativeTooltip是false生效)',
                type: 'CSSProperties',
                defaultVal: '{}',
              },
              {
                params: 'tooltipMore',
                desc: '更多(tooltip长度大于tooltipMaxLength时生效)',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'tooltipClose',
                desc: '收起更多(tooltip长度大于tooltipMaxLength时生效)',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'customTooltipOptions',
                desc: '自定义tooltip的options',
                type: 'Options',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'dangerouslySetInnerHTML',
                desc: '同Html的dangerouslySetInnerHTML',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
