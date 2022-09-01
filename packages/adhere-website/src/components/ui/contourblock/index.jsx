import React from 'react';
import { ContourBlock } from '@baifendian/adhere';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="ContourBlock">
        <p>宽度和高度相等的元素</p>
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
            codeText: `
  import React from 'react';
  import { ContourBlock } from '@baifendian/adhere';

  export default () => {
    return (
      <div style={{ width: 200, height: 300 }}>
        <ContourBlock style={{ border: '1px solid #ccc' }} />
      </div>
    );
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div style={{ width: 200, height: 300 }}>
                <ContourBlock style={{ border: '1px solid #ccc' }} />
              </div>
            ),
          },
          {
            id: `p2`,
            name: `画廊`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '画廊',
                info: '画廊',
              },
            },
            codeText: `
  import React from 'react';
  import { ContourBlock } from '@baifendian/adhere';

  export default () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.from({ length: 30 }).map((t, index) => (
          <ContourBlock key={index} style={{ width: '25%' }}>
            <img
              src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF"
              alt=""
            />
          </ContourBlock>
        ))}
      </div>
    );
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 30 }).map((t, index) => (
                  <ContourBlock key={index} style={{ width: '25%' }}>
                    <img
                      src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF"
                      alt=""
                    />
                  </ContourBlock>
                ))}
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
