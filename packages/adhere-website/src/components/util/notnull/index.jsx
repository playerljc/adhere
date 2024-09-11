import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `对一个null值进行监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '对一个null值进行监控',
            info: '对一个null值进行监控',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `对一个Array值进行监控`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '对一个Array值进行监控',
            info: '对一个Array值进行监控',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="NotNull">
        <h1>一个永远都不为空的操作</h1>
        <p>一般都挂载到接口的返回值上，以免有空值对后续操作带来不便或者使界面挂掉</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'notnull',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'target',
                    desc: '被监控的对象',
                    type: 'Object | Array',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Object | Array',
                returnDesc: '返回被监控的对象',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
