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
                params: 'zIndex',
                desc: '层级',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'duration',
                desc: '动画持续的事件',
                type: 'number',
                defaultVal: '300',
              },
              {
                params: 'onScrollTop',
                desc: '获取滚动的目标元素',
                type: '() => HtmlElement',
                defaultVal: '',
              },
              {
                params: 'onTrigger',
                desc: '点击事件',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'onScrollTop',
                desc: '滚动',
                type: '(value: number) => void',
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
                name: 'scrollToByIndex',
                desc: '滚动到指定所引出',
                modifier: 'public',
                params: [
                  {
                    name: 'index',
                    desc: '滚动到的索引',
                    type: 'number',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '滚动的时间',
                    type: 'number',
                    defaultVal: '600',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'scrollToByHeaderEl',
                desc: '滚动到指定el',
                modifier: 'public',
                params: [
                  {
                    name: 'headerEl',
                    desc: '指定的el',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '滚动的时间',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'scrollToByColumn',
                desc: '滚动到指定列',
                modifier: 'public',
                params: [
                  {
                    name: 'columnIndex',
                    desc: '列的索引从1开始',
                    type: 'number',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
