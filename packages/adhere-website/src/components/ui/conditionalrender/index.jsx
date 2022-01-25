import React, { useState } from 'react';
import { Button, Card, Empty } from 'antd';
import { ConditionalRender } from '@baifendian/adhere';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

export default () => {
  const [baseUseShow, setBaseUserShow] = useState(true);
  const [noMatchUseShow, setNoMatchUserShow] = useState(true);
  const [rShow, setRShow] = useState(true);
  const [rNoMatchShow, setRNoMatchShow] = useState(true);
  const [rFragmentShow, setRFragmentShow] = useState(true);
  const [rVisibility, setRVisibility] = useState(true);
  const [rNoMatchVisibility, setRNoMatchVisibility] = useState(true);
  const [rFragmentVisibility, setRFragmentVisibility] = useState(true);

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本的显示隐藏',
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card } from 'antd';

       const [baseUseShow, setBaseUserShow] = useState(true);

       <Card
         actions={[
           // eslint-disable-next-line react/jsx-key
           <Button
             type="primary"
             onClick={() => {
               setBaseUserShow(!baseUseShow);
             }}
           >
             {baseUseShow ? '隐藏' : '显示'}
           </Button>,
         ]}
       >
         <ConditionalRender conditional={baseUseShow}>
           {
             () => (<p>
             In the process of internal desktop applications development, many different design
             specs and implementations would be involved, which might cause designers and
             developers difficulties and duplication and reduce the efficiency of development.
           </p>)
           }
         </ConditionalRender>
       </Card>
           `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              // eslint-disable-next-line react/jsx-key
              <Button
                type="primary"
                onClick={() => {
                  setBaseUserShow(!baseUseShow);
                }}
              >
                {baseUseShow ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender conditional={baseUseShow}>
              {() => (
                <p>
                  In the process of internal desktop applications development, many different design
                  specs and implementations would be involved, which might cause designers and
                  developers difficulties and duplication and reduce the efficiency of development.
                </p>
              )}
            </ConditionalRender>
          </Card>
        ),
      },
      {
        id: `p2`,
        name: `自定义不匹配时的UI`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义不匹配时的UI',
            info: '自定义UI',
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card, Empty } from 'antd';

       const [noMatchUseShow, setNoMatchUserShow] = useState(true);

       <Card
         actions={[
           // eslint-disable-next-line react/jsx-key
           <Button
             type="primary"
             onClick={() => {
               setNoMatchUserShow(!noMatchUseShow);
             }}
           >
             {noMatchUseShow ? '隐藏' : '显示'}
           </Button>,
         ]}
       >
         <ConditionalRender conditional={noMatchUseShow} noMatch={() => <Empty />}>
           {
             () => (
               <p>
                 In the process of internal desktop applications development, many different design
                 specs and implementations would be involved, which might cause designers and
                 developers difficulties and duplication and reduce the efficiency of development.
               </p>
             )
           }
         </ConditionalRender>
       </Card>
           `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              // eslint-disable-next-line react/jsx-key
              <Button
                type="primary"
                onClick={() => {
                  setNoMatchUserShow(!noMatchUseShow);
                }}
              >
                {noMatchUseShow ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender conditional={noMatchUseShow} noMatch={() => <Empty />}>
              {() => (
                <p>
                  In the process of internal desktop applications development, many different design
                  specs and implementations would be involved, which might cause designers and
                  developers difficulties and duplication and reduce the efficiency of development.
                </p>
              )}
            </ConditionalRender>
          </Card>
        ),
      },
      {
        id: `p3`,
        name: `show操作`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'show操作',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card, Empty } from 'antd';

       const [rShow, setRShow] = useState(true);

       <Card
          actions={[
            <Button
              type="primary"
              onClick={() => {
                setRShow(!rShow);
              }}
            >
              {rShow ? '隐藏' : '显示'}
            </Button>,
          ]}
       >
          <ConditionalRender.Show conditional={rShow}>
            <p>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </p>
          </ConditionalRender.Show>
       </Card>
           `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  setRShow(!rShow);
                }}
              >
                {rShow ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender.Show conditional={rShow}>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </ConditionalRender.Show>
          </Card>
        ),
      },
      {
        id: `p4`,
        name: `show操作noMatch`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'show操作noMatch',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card, Empty } from 'antd';

       const [rNoMatchShow, setRNoMatchShow] = useState(true);

       <Card
          actions={[
            <Button
              type="primary"
              onClick={() => {
                setRNoMatchShow(!rNoMatchShow);
              }}
            >
              {rNoMatchShow ? '隐藏' : '显示'}
            </Button>,
          ]}
        >
          <ConditionalRender.Show conditional={rNoMatchShow} noMatch={<p>noMatch</p>}>
            <p>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </p>
          </ConditionalRender.Show>
        </Card>
           `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  setRNoMatchShow(!rNoMatchShow);
                }}
              >
                {rNoMatchShow ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender.Show conditional={rNoMatchShow} noMatch={<p>noMatch</p>}>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </ConditionalRender.Show>
          </Card>
        ),
      },
      {
        id: `p5`,
        name: `show操作Fragment`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'show操作Fragment',
            info: `
              只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
            `,
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card, Empty } from 'antd';

       const [rFragmentShow, setRFragmentShow] = useState(true);

       <Card
          actions={[
            <Button
              type="primary"
              onClick={() => {
                setRFragmentShow(!rFragmentShow);
              }}
            >
              {rFragmentShow ? '隐藏' : '显示'}
            </Button>,
          ]}
        >
          <ConditionalRender.Show
            conditional={rFragmentShow}
            noMatch={
              <>
                <p>NoMatchFragment1</p>
                <p>NoMatchFragment2</p>
                <p>NoMatchFragment3</p>
              </>
            }
          >
            <p>Fragment1</p>
            <p>Fragment2</p>
            <p>Fragment3</p>
          </ConditionalRender.Show>
        </Card>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  setRFragmentShow(!rFragmentShow);
                }}
              >
                {rFragmentShow ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender.Show
              conditional={rFragmentShow}
              noMatch={
                <>
                  <p>NoMatchFragment1</p>
                  <p>NoMatchFragment2</p>
                  <p>NoMatchFragment3</p>
                </>
              }
            >
              <p>Fragment1</p>
              <p>Fragment2</p>
              <p>Fragment3</p>
            </ConditionalRender.Show>
          </Card>
        ),
      },
      {
        id: `p6`,
        name: `visibility操作`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'visibility操作',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card } from 'antd';

       const [rVisibility, setRVisibility] = useState(true);

       <Card
          actions={[
            <Button
              type="primary"
              onClick={() => {
                setRVisibility(!rVisibility);
              }}
            >
              {rVisibility ? '隐藏' : '显示'}
            </Button>,
          ]}
        >
          <ConditionalRender.Visibility conditional={rVisibility}>
            <p>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </p>
          </ConditionalRender.Visibility>
        </Card>
           `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  setRVisibility(!rVisibility);
                }}
              >
                {rVisibility ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender.Visibility conditional={rVisibility}>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </ConditionalRender.Visibility>
          </Card>
        ),
      },
      {
        id: `p7`,
        name: `visibility操作noMatch`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'visibility操作noMatch',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card } from 'antd';

       const [rNoMatchVisibility, setRNoMatchVisibility] = useState(true);

       <Card
          actions={[
            <Button
              type="primary"
              onClick={() => {
                setRNoMatchVisibility(!rNoMatchVisibility);
              }}
            >
              {rNoMatchVisibility ? '隐藏' : '显示'}
            </Button>,
          ]}
        >
          <ConditionalRender.Visibility conditional={rNoMatchVisibility} noMatch={<p>noMatch</p>}>
            <p>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </p>
          </ConditionalRender.Visibility>
        </Card>
           `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  setRNoMatchVisibility(!rNoMatchVisibility);
                }}
              >
                {rNoMatchVisibility ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender.Visibility conditional={rNoMatchVisibility} noMatch={<p>noMatch</p>}>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </ConditionalRender.Visibility>
          </Card>
        ),
      },
      {
        id: `p8`,
        name: `visibility操作Fragment`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'visibility操作Fragment',
            info: `
              只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
            `,
          },
        },
        codeText: `
       import React, { useState } from 'react';
       import { ConditionalRender } from '@baifendian/adhere';
       import { Button, Card } from 'antd';

       const [rFragmentVisibility, setRFragmentVisibility] = useState(true);

       <Card
        actions={[
          <Button
            type="primary"
            onClick={() => {
              setRFragmentVisibility(!rFragmentVisibility);
            }}
          >
            {rFragmentVisibility ? '隐藏' : '显示'}
          </Button>,
        ]}
      >
        <ConditionalRender.Visibility
          conditional={rFragmentVisibility}
          noMatch={
            <>
              <p>NoMatchFragment1</p>
              <p>NoMatchFragment2</p>
              <p>NoMatchFragment3</p>
            </>
          }
        >
          <p>Fragment1</p>
          <p>Fragment2</p>
          <p>Fragment3</p>
        </ConditionalRender.Visibility>
      </Card>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Card
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  setRFragmentVisibility(!rFragmentVisibility);
                }}
              >
                {rFragmentVisibility ? '隐藏' : '显示'}
              </Button>,
            ]}
          >
            <ConditionalRender.Visibility
              conditional={rFragmentVisibility}
              noMatch={
                <>
                  <p>NoMatchFragment1</p>
                  <p>NoMatchFragment2</p>
                  <p>NoMatchFragment3</p>
                </>
              }
            >
              <p>Fragment1</p>
              <p>Fragment2</p>
              <p>Fragment3</p>
            </ConditionalRender.Visibility>
          </Card>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ConditionalRender">
        <p>条件渲染</p>
        <p>适用于自定义显示条件的情况下是否显示组件</p>
        <p>实现了React的条件渲染</p>
        <p>实现了元素display切换</p>
        <p>实现了元素visibility切换</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ConditionalRender',
            data: [
              {
                params: 'conditional',
                desc: '条件',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'noMatch',
                desc: '条件部匹配时显示的UI',
                type: '() => React.ReactElement | null',
                defaultVal: 'null',
              },
              {
                params: 'children',
                desc: 'children',
                type: '() => React.ReactElement | null',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ConditionalRender.Show',
            data: [
              {
                params: 'conditional',
                desc: '条件',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'noMatch',
                desc: '条件部匹配时显示的UI',
                type: 'React.ReactElement | null',
                defaultVal: 'null',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'React.ReactElement',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ConditionalRender.Visibility',
            data: [
              {
                params: 'conditional',
                desc: '条件',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'noMatch',
                desc: '条件部匹配时显示的UI',
                type: 'React.ReactElement | null',
                defaultVal: 'null',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'React.ReactElement',
                defaultVal: 'null',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
