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

export default () => {
  return (
    <PlayGroundPage>
      <Section title="DateDisplay">
        <p>时间显示组件</p>
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
            name: `分隔符`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '分隔符',
                info: '分隔符',
              },
            },
            type: 'PlayGround',
            codeText: P2CodeText,
            renderChildren: () => <P2 />,
          },
          {
            id: `p3`,
            name: `本地化`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '本地化',
                info: '本地化',
              },
            },
            codeText: P3CodeText,
            type: 'PlayGround',
            renderChildren: () => <P3 />,
          },
          {
            id: `p4`,
            name: `自定义format`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '自定义format',
                info: '自定义format',
              },
            },
            codeText: P4CodeText,
            type: 'PlayGround',
            renderChildren: () => <P4 />,
          },
          {
            id: `p5`,
            name: `使用toString方法`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '使用toString方法',
                info: '使用toString方法',
              },
            },
            codeText: P5CodeText,
            type: 'PlayGround',
            renderChildren: () => <P5 />,
          },
          {
            id: `p6`,
            name: `本地化组件`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '本地化组件',
                info: '本地化组件',
              },
            },
            codeText: P6CodeText,
            type: 'PlayGround',
            renderChildren: () => <P6 />,
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ResourceMomentFormat2',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat4',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat6',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat7',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat8',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat10',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat13',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat15',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat16',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat18',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'DateDisplayFromNow',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'locale',
                desc: '国际化',
                type: 'string',
                defaultVal: 'zh-cn',
              },
              {
                params: 'now',
                desc: '',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'DateDisplayToNow',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'locale',
                desc: '国际化',
                type: 'string',
                defaultVal: 'zh-cn',
              },
              {
                params: 'now',
                desc: '',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'DateDisplay',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'locale',
                desc: '国际化',
                type: 'string',
                defaultVal: 'zh-cn',
              },
              {
                params: 'format',
                desc: '自定义的format字串',
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
