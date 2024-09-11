import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';

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

export default () => {
  return (
    <PlayGroundPage>
      <Section title="RichTextSandBox">
        <p>对富文本进行样式隔离的包装</p>
      </Section>

      <CodeBoxSection
        config={[
          {
            id: `p1`,
            name: `ReactQuillSandBox基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ReactQuillSandBox基本使用',
                info: 'ReactQuillSandBox基本使用',
              },
            },
            type: 'PlayGround',
            codeText: P1CodeText,
            renderChildren: () => <P1 />,
          },
          {
            id: `p2`,
            name: `ReactQuillSandBox结合Form`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ReactQuillSandBox结合Form',
                info: 'ReactQuillSandBox结合Form',
              },
            },
            type: 'PlayGround',
            codeText: P2CodeText,
            renderChildren: () => <P2 />,
          },
          {
            id: `p3`,
            name: `ReactQuillSandBox的只读模式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ReactQuillSandBox的只读模式',
                info: 'ReactQuillSandBox的只读模式',
              },
            },
            type: 'PlayGround',
            codeText: P3CodeText,
            renderChildren: () => <P3 />,
          },
          {
            id: `p4`,
            name: `WangEditorSandBox基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'WangEditorSandBox基本使用',
                info: 'WangEditorSandBox基本使用',
              },
            },
            type: 'PlayGround',
            codeText: P4CodeText,
            renderChildren: () => <P4 />,
          },
          {
            id: `p5`,
            name: `WangEditorSandBox结合Form`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'WangEditorSandBox结合Form',
                info: 'WangEditorSandBox结合Form',
              },
            },
            type: 'PlayGround',
            codeText: P5CodeText,
            renderChildren: () => <P5 />,
          },
          {
            id: `p6`,
            name: `WangEditorSandBox的只读模式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'WangEditorSandBox的只读模式',
                info: 'WangEditorSandBox的只读模式',
              },
            },
            type: 'PlayGround',
            codeText: P6CodeText,
            renderChildren: () => <P6 />,
          },
        ]}
        title="代码演示"
      />

      <PropsSection
        title="ReactQuillSandbox - Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'wrapClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'wrapStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'quillStyle',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bounds',
                desc: '',
                type: 'string | HTMLElement',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'React.ReactElement<any>',
                defaultVal: '',
              },
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'defaultValue',
                desc: '',
                type: 'Value',
                defaultVal: '',
              },
              {
                params: 'formats',
                desc: '',
                type: 'string[]',
                defaultVal: '',
              },
              {
                params: 'id',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'modules',
                desc: '',
                type: 'StringMap',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'onChangeSelection',
                desc: '',
                type: '(selection: Range, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'onFocus',
                desc: '',
                type: '(selection: Range, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'onBlur',
                desc: '',
                type: '(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },

              {
                params: 'onKeyDown',
                desc: '',
                type: 'React.EventHandler<any>',
                defaultVal: '',
              },
              {
                params: 'onKeyPress',
                desc: '',
                type: 'React.EventHandler<any>',
                defaultVal: '',
              },
              {
                params: 'onKeyUp',
                desc: '',
                type: 'React.EventHandler<any>',
                defaultVal: '',
              },
              {
                params: 'placeholder',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'preserveWhitespace',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'readOnly',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'scrollingContainer',
                desc: '',
                type: 'string | HTMLElement',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'tabIndex',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'theme',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'Value',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="WangEditorSandbox - Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'wrapClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'wrapStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'wangEditorStyle',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'Value',
                defaultVal: '',
              },
              {
                params: 'toolBarProps',
                desc: '工具栏配置',
                type: 'ToolBarProps',
                defaultVal: '',
              },
              {
                params: 'editorProps',
                desc: '编辑器配置',
                type: 'EditorProps',
                defaultVal: '',
              },
              {
                params: 'readOnly',
                desc: '是否是只读状态',
                type: 'boolean',
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
                name: 'focus',
                desc: '',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'blur',
                desc: '',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getEditor',
                desc: '',
                modifier: 'public',
                params: [],
                returnType: 'Quill',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
