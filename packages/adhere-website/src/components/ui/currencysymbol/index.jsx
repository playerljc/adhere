import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="CurrencySymbol">
        <p>货币符号</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
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
            codeText: P1CodeText,
            type: 'PlayGround',
            renderChildren: () => <P1 />,
          },
          {
            id: `p2`,
            name: `危险状态`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '危险状态',
                info: '危险状态',
              },
            },
            type: 'PlayGround',
            codeText: P2CodeText,
            renderChildren: () => <P2 />,
          },
          {
            id: `p3`,
            name: `符号的大小`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '符号的大小',
                info: '符号的大小',
              },
            },
            codeText: P3CodeText,
            type: 'PlayGround',
            renderChildren: () => <P3 />,
          },
          {
            id: `p4`,
            name: `使用动画`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '使用动画',
                info: '使用动画',
              },
            },
            codeText: P4CodeText,
            type: 'PlayGround',
            renderChildren: () => <P4 />,
          },
          {
            id: `p5`,
            name: `符号和金额的对其方式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '符号和金额的对其方式',
                info: '符号和金额的对其方式',
              },
            },
            codeText: P5CodeText,
            type: 'PlayGround',
            renderChildren: () => <P5 />,
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'CurrencySymbolProps',
            data: [
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'symbolClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'symbolStyle',
                desc: '',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'amountClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'amountStyle',
                desc: '',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'amountInnerClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'amount',
                desc: '金额',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'code',
                desc: '符号code',
                type: 'string',
                defaultVal: 'CNY',
              },
              {
                params: 'bold',
                desc: '是否加粗显示',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'danger',
                desc: '是否是危险状态',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'symbolSize',
                desc: '符号的大小',
                type: "'small' | 'middle' | 'large'",
                defaultVal: 'middle',
              },
              {
                params: 'isUseKilo',
                desc: '是否使用千分位显示',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'isUseAnimation',
                desc: '是否使用动画显示',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'align',
                desc: '符号和金额的对其方式',
                type: "'top' | 'middle' | 'bottom'",
                defaultVal: 'middle',
              },
              {
                params: 'countUpProps',
                desc: 'react-countup的props',
                type: 'CountUpProps',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'currencies',
            data: [
              {
                params: 'currencies',
                desc: '所有code的字典项',
                type: 'object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'currenciesMap',
            data: [
              {
                params: 'currenciesMap',
                desc: '所有字典项的map',
                type: 'Map<string,{code:string;name:string;symbol:string;}>',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
