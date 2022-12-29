import { Button } from 'antd';
import React, { useRef, useState } from 'react';

import { ReactQuillSandbox, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

export default () => {
  const [modules, setModules] = useState({});
  const [value, setValue] = useState(
    '<div><span style="font-size: 18px;">Quill Rich Text Editor</span>' +
      '</div><div><br></div><div>Quill is a free, <a href="https://githu' +
      'b.com/quilljs/quill/">open source</a> WYSIWYG editor built for th' +
      'e modern web. With its <a href="http://quilljs.com/docs/modules/"' +
      '>extensible architecture</a> and a <a href="http://quilljs.com/do' +
      'cs/api/">expressive API</a> you can completely customize it to fu' +
      'lfill your needs. Some built in features include:</div><div><br><' +
      '/div><ul><li>Fast and lightweight</li><li>Semantic markup</li><li' +
      '>Standardized HTML between browsers</li><li>Cross browser support' +
      ' including Chrome, Firefox, Safari, and IE 9+</li></ul><div><br><' +
      '/div><div><span style="font-size: 18px;">Downloads</span></div><d' +
      'iv><br></div><ul><li><a href="https://quilljs.com">Quill.js</a>, ' +
      'the free, open source WYSIWYG editor</li><li><a href="https://zen' +
      'oamaro.github.io/react-quill">React-quill</a>, a React component ' +
      'that wraps Quill.js</li></ul>',
  );

  const ref = useRef();

  return (
    <PlayGroundPage>
      <Section title="ReactQuillSandbox">
        <p>对ReactQuill进行样式隔离的包装</p>
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
            codeText: ``,
            type: 'PlayGround',
            renderChildren: () => (
              <div style={{ position: 'relative', height: 300 }}>
                <ReactQuillSandbox
                  style={{ width: '100%', height: 300 - 43 }}
                  wrapStyle={{ width: '100%', height: '100%' }}
                />
              </div>
            ),
          },
          {
            id: `p2`,
            name: `动态设置props`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '动态设置props',
                info: '动态设置props',
              },
            },
            codeText: ``,
            type: 'PlayGround',
            renderChildren: () => (
              <div style={{ position: 'relative' }}>
                <Space.Group direction="vertical">
                  <div>
                    <Button
                      type="primary"
                      onClick={() => {
                        setModules({
                          toolbar: [
                            [{ font: [] }, { size: [] }],
                            [{ align: [] }, 'direction'],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ color: [] }, { background: [] }],
                            [{ script: 'super' }, { script: 'sub' }],
                            ['blockquote', 'code-block'],
                            [
                              { list: 'ordered' },
                              { list: 'bullet' },
                              { indent: '-1' },
                              { indent: '+1' },
                            ],
                            ['link', 'image', 'video'],
                            ['clean'],
                          ],
                        });
                      }}
                    >
                      设置models
                    </Button>
                  </div>
                  <ReactQuillSandbox
                    modules={modules}
                    style={{ width: '100%', height: 300 - 43 }}
                    wrapStyle={{ width: '100%', height: 300 }}
                  />
                </Space.Group>
              </div>
            ),
          },
          {
            id: `p3`,
            name: `查看模式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '查看模式',
                info: '查看模式',
              },
            },
            codeText: ``,
            type: 'PlayGround',
            renderChildren: () => (
              <div style={{ position: 'relative', height: 300 }}>
                <ReactQuillSandbox
                  theme="bubble"
                  readOnly
                  value={`
                    ReactQuill 2 is here, baby! And it brings a full port to TypeScript and React 16+, a refactored build system, and a general tightening of the internal logic.
                    We worked hard to avoid introducing any behavioral changes. For the vast majority of the cases, no migration is necessary at all. However, support for long-deprecated props, the ReactQuill Mixin, and the Toolbar component have been removed. Be sure to read the migration guide.
                  `}
                  wrapStyle={{ width: '100%', height: '100%' }}
                />
              </div>
            ),
          },
          {
            id: `p4`,
            name: `获取ref调用api`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '获取ref调用api',
                info: '获取ref调用api',
              },
            },
            codeText: ``,
            type: 'PlayGround',
            renderChildren: () => (
              <div style={{ position: 'relative', height: 300 }}>
                <ReactQuillSandbox
                  ref={ref}
                  value={value}
                  onChange={setValue}
                  style={{ width: '100%', height: 300 - 43 }}
                  wrapStyle={{ width: '100%', height: '100%' }}
                />
              </div>
            ),
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
