import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';

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

export default () => {
  return (
    <PlayGroundPage>
      <Section title="WritingBoard">
        <p>写字板</p>
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
            type: 'PlayGround',
            codeText: P1CodeText,
            renderChildren: () => <P1 />,
          },
          {
            id: `p2`,
            name: `简易写字板`,
            cardProps: {
              description: {
                title: '简易写字板',
                info: '切换类型、颜色和粗细',
              },
            },
            type: 'PlayGround',
            codeText: P2CodeText,
            renderChildren: () => <P2 />,
          },
          {
            id: `p3`,
            name: `签名`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '签名',
                info: '签名',
              },
            },
            type: 'PlayGround',
            codeText: P3CodeText,
            renderChildren: () => <P3 />,
          },
        ]}
      />

      <PropsSection
        title="WritingBoard"
        config={[
          {
            border: true,
            title: '属性',
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
                params: 'defaultMode',
                desc: '绘制模式',
                type: `
                  {
                    // 直线
                    LINE = 'line',
                    // 矩形
                    RECTANGLE = 'rectangle',
                    // 圆形
                    CIRCLE = 'circle',
                    // 三角形
                    TRIANGLE = 'triangle',
                    // 自由绘制
                    FREE = 'free',
                    // 橡皮
                    RUBBER = 'rubber',
                  }
                `,
                defaultVal: 'line',
              },
              {
                params: 'defaultStrokeStyle',
                desc: '线条颜色',
                type: 'string',
                defaultVal: '#000',
              },
              {
                params: 'defaultLineWidth',
                desc: '线条宽度',
                type: 'number',
                defaultVal: '1',
              },
              {
                params: 'resizeTime',
                desc: '防抖的事件',
                type: 'number',
                defaultVal: '300',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="Signature"
        config={[
          {
            border: true,
            title: '属性',
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
                params: 'modalProps',
                desc: '弹出窗口设置',
                type: `ModalProps`,
                defaultVal: '',
              },
              {
                params: 'coreProps',
                desc: 'SignatureCore设置',
                type: 'SignatureCoreProps',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: 'base64',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '获取base64',
                type: '(base64?: string) => void',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="SignatureCore"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'defaultWidth',
                desc: '线条默认宽度',
                type: 'number',
                defaultVal: '2',
              },
              {
                params: 'defaultColor',
                desc: '默认颜色',
                type: 'string',
                defaultVal: '#000',
              },
              {
                params: 'wrapProps',
                desc: '最外层配置',
                type: `SignatureCoreWrapProps`,
                defaultVal: '',
              },
              {
                params: 'toolProps',
                desc: '工具栏设置',
                type: 'SignatureCoreToolProps',
                defaultVal: '',
              },
              {
                params: 'areaProps',
                desc: '编辑区设置',
                type: 'SignatureCoreAreaProps',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="WritingBoard"
        config={[
          {
            border: true,
            title: 'WritingBoard',
            data: [
              {
                name: 'setMode',
                desc: '设置模式',
                modifier: 'public',
                params: [
                  {
                    name: 'mode',
                    desc: '模式',
                    type: `
                      {
                        // 直线
                        LINE = 'line',
                        // 矩形
                        RECTANGLE = 'rectangle',
                        // 圆形
                        CIRCLE = 'circle',
                        // 三角形
                        TRIANGLE = 'triangle',
                        // 自由绘制
                        FREE = 'free',
                        // 橡皮
                        RUBBER = 'rubber',
                      }
                    `,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'setStrokeStyle',
                desc: '设置描边样式',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: '样式',
                    type: `style`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'setLineWidth',
                desc: '设置线条样式',
                modifier: 'public',
                params: [
                  {
                    name: 'width',
                    desc: '样式',
                    type: `number`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'clear',
                desc: '清空画布',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'isEmpty',
                desc: '判断是否为空',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'toDataURL',
                desc: '获取画布数据',
                modifier: 'public',
                params: [
                  {
                    name: 'backgroundColor',
                    desc: '背景颜色',
                    type: `string`,
                    defaultVal: '#fff',
                    required: '',
                  },
                  {
                    name: 'type',
                    desc: 'mimeType',
                    type: `string`,
                    defaultVal: 'image/png',
                    required: '',
                  },
                  {
                    name: 'quality',
                    desc: '图片质量',
                    type: `number`,
                    defaultVal: '1.0',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="SignatureCore"
        config={[
          {
            border: true,
            title: 'SignatureCore',
            data: [
              {
                name: 'save',
                desc: '保存',
                modifier: 'public',
                params: [
                  {
                    name: 'backgroundColor',
                    desc: '背景颜色',
                    type: `string`,
                    defaultVal: '#fff',
                    required: '',
                  },
                  {
                    name: 'type',
                    desc: 'mimeType',
                    type: `string`,
                    defaultVal: 'image/png',
                    required: '',
                  },
                  {
                    name: 'quality',
                    desc: '图片质量',
                    type: `number`,
                    defaultVal: '1.0',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'isEmpty',
                desc: '判断是否为空',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Signature"
        config={[
          {
            border: true,
            title: 'Signature',
            data: [
              {
                name: 'isEmpty',
                desc: '判断是否为空',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
