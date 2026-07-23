import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import PlayGroundLib from '../src/index';
import { SAMPLE_CODE } from './sample';

import '../src/index.less';
import '../src/PlayGroundPage/index.less';

const { PlayGroundPage, PlayGroundPageContext } = PlayGroundLib;
const { Section, CodeBoxSection, PropsSection, FunctionPropsSection } = PlayGroundPage;

/**
 * PlayGroundPageDemo
 * @description 完整文档页：Section / CodeBox / Props / FunctionProps
 */
export default () => {
  const [scrollEl, setScrollEl] = useState();
  const ref = useRef();

  useEffect(() => {
    setScrollEl(ref.current?.parentElement ?? document.body);
  }, []);

  return (
    <PlayGroundPageContext.Provider value={{ scrollEl }}>
      <PlayGroundPage ref={ref}>
        <Section title="Component">
          <p>PlayGroundPage 组合示例</p>
        </Section>

        <CodeBoxSection
          title="代码演示"
          columnCount={1}
          config={[
            {
              id: 'p1',
              name: 'Basic',
              type: 'PlayGround',
              mode: 'code',
              codeText: SAMPLE_CODE,
              theme: 'github',
              cardProps: {
                description: {
                  title: 'Basic',
                  info: '基础示例',
                },
              },
              renderChildren: () => <Button type="primary">Demo</Button>,
            },
            {
              id: 'p2',
              name: 'Tab',
              type: 'PlayGroundTab',
              active: 'Typescript',
              cardProps: {
                description: {
                  title: 'Tab',
                  info: '多语言示例',
                },
              },
              config: [
                {
                  key: 'Typescript',
                  title: 'Typescript',
                  codeText: SAMPLE_CODE,
                  theme: 'github',
                },
                {
                  key: 'Javascript',
                  title: 'Javascript',
                  codeText: SAMPLE_CODE,
                },
              ],
              renderChildren: () => <Button>Tab Demo</Button>,
            },
          ]}
        />

        <PropsSection
          title="Props"
          config={[
            {
              border: true,
              title: 'DemoProps',
              data: [
                {
                  params: 'className',
                  desc: '附加类名',
                  type: 'string',
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
                  name: 'open',
                  desc: '打开',
                  modifier: 'public',
                  params: [
                    {
                      name: 'id',
                      desc: 'id',
                      type: 'string',
                      defaultVal: '',
                      required: 'true',
                    },
                  ],
                  returnType: 'void',
                  returnDesc: '',
                },
              ],
            },
          ]}
        />
      </PlayGroundPage>
    </PlayGroundPageContext.Provider>
  );
};
