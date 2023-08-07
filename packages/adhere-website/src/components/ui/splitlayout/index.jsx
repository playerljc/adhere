import { Card } from 'antd';
import React from 'react';

import { FlexLayout, Space, SplitLayout } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

const { Fixed, Auto } = FlexLayout;

export default () => {
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
            info: '基本使用',
          },
        },
        codeText: `
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Auto />
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Auto />
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout />
              <Auto />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Auto />
              <SplitLayout />
              <Fixed style={{ width: 30 }} />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout style={{ width: 'auto' }} />
              <Auto />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Auto />
              <SplitLayout style={{ width: 'auto' }} />
              <Fixed style={{ height: 30 }} />
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p2`,
        name: `多个分割点`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '多个分割点',
            info: '多个分割点',
          },
        },
        codeText: `
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto />
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto />
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout />
              <Auto />
              <SplitLayout />
              <Fixed style={{ width: 30 }} />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout style={{ width: 'auto' }} />
              <Auto />
              <SplitLayout style={{ width: 'auto' }} />
              <Fixed style={{ height: 30 }} />
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p3`,
        name: `嵌套`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '嵌套',
            info: '嵌套',
          },
        },
        codeText: `
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto>
      <FlexLayout>
        <Fixed style={{ height: 30 }} />
        <SplitLayout style={{ width: 'auto' }} />
        <Auto />
        <SplitLayout style={{ width: 'auto' }} />
        <Fixed style={{ height: 30 }} />
      </FlexLayout>
    </Auto>
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto>
      <FlexLayout direction="horizontal">
        <Fixed style={{ width: 30 }} />
        <SplitLayout />
        <Auto />
        <SplitLayout />
        <Fixed style={{ width: 30 }} />
      </FlexLayout>
    </Auto>
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout />
              <Auto>
                <FlexLayout>
                  <Fixed style={{ height: 30 }} />
                  <SplitLayout style={{ width: 'auto' }} />
                  <Auto />
                  <SplitLayout style={{ width: 'auto' }} />
                  <Fixed style={{ height: 30 }} />
                </FlexLayout>
              </Auto>
              <SplitLayout />
              <Fixed style={{ width: 30 }} />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout style={{ width: 'auto' }} />
              <Auto>
                <FlexLayout direction="horizontal">
                  <Fixed style={{ width: 30 }} />
                  <SplitLayout />
                  <Auto />
                  <SplitLayout />
                  <Fixed style={{ width: 30 }} />
                </FlexLayout>
              </Auto>
              <SplitLayout style={{ width: 'auto' }} />
              <Fixed style={{ height: 30 }} />
            </FlexLayout>
          </>
        ),
      },
      {
        id: `p4`,
        name: `使用minSize和maxSize控制拖放范围`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用minSize和maxSize控制拖放范围',
            info: '使用minSize和maxSize控制拖放范围',
          },
        },
        codeText: `
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout minSize="20%" maxSize="50%" />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 400, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
    <Auto />
  </FlexLayout>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
              <Fixed style={{ width: 30 }} />
              <SplitLayout minSize="20%" maxSize="50%" />
              <Auto />
            </FlexLayout>

            <Space size={30} />

            <FlexLayout style={{ height: 400, border: '1px solid #ccc' }}>
              <Fixed style={{ height: 30 }} />
              <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
              <Auto />
            </FlexLayout>
          </>
        ),
      },
    ];
  }

  function TRBLCBoxPanelConfig() {
    return [
      {
        id: `TC`,
        name: `TC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TC',
            info: 'TC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.TCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        tProps={{
          children: <Card>top</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.TCSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              tProps={{
                span: 12,
                fit: true,
                children: <Card>top</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CB`,
        name: `CB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CB',
            info: 'CB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.CBSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        bProps={{
          span: 12,
          fit: true,
          children: <Card>bottom</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.CBSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              bProps={{
                span: 12,
                fit: true,
                children: <Card>bottom</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TLC`,
        name: `TLC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TLC',
            info: 'TLC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.TLCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          children: <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 8,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.TLCSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 8,
                children: <Card>Top</Card>,
              }}
              lProps={{
                fit: true,
                span: 8,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TRC`,
        name: `TRC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TRC',
            info: 'TRC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.TRCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 8,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.TRCSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 8,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 8,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TLRC`,
        name: `TLRC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TLRC',
            info: 'TLRC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.TLRCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.TLRCSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LCB`,
        name: `LCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCB',
            info: 'LCB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.LCBSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.LCBSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CRB`,
        name: `CRB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CRB',
            info: 'CRB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.CRBSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.CRBSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LCRB`,
        name: `LCRB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LCRB',
            info: 'LCRB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.LCRBSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.LCRBSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LC`,
        name: `LC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LC',
            info: 'LC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.LCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.LCSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CR`,
        name: `CR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CR',
            info: 'CR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.CRSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.CRSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LTC`,
        name: `LTC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LTC',
            info: 'LTC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.LTCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.LTCSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LBC`,
        name: `LBC`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LBC',
            info: 'LBC',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.LBCSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.LBCSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LTCB`,
        name: `LTCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LTCB',
            info: 'LTCB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.LTCBSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.LTCBSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TCR`,
        name: `TCR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TCR',
            info: 'TCR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.TCRSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.TCRSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `CBR`,
        name: `CBR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'CBR',
            info: 'CBR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.CBRSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.CBRSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TCBR`,
        name: `TCBR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TCBR',
            info: 'TCBR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.TCBRSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.TCBRSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TBLCR`,
        name: `TBLCR`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TBLCR',
            info: 'TBLCR',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.TBLCRSplitLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.TBLCRSplitLayout
              style={{ height: '100%' }}
              gutter={20}
              autoInnerProps={{ gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `LRTCB`,
        name: `LRTCB`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LRTCB',
            info: 'LRTCB',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      <SplitLayout.TRBLC.LRTCBSplitLayout
        style={{ height: '100%' }}
        gutter={50}
        autoInnerProps={{ gutter: [0, 30] }}
        tProps={{
          fit: true,
          span: 4,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          style: { width: '50%' },
          children: <Card>Left</Card>,
        }}
        cProps={{
          children: <Card>Center</Card>,
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, padding: 20, background: '#ccc' }}>
            <SplitLayout.TRBLC.LRTCBSplitLayout
              style={{ height: '100%' }}
              gutter={50}
              autoInnerProps={{ gutter: [0, 30] }}
              tProps={{
                fit: true,
                span: 4,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                style: { width: '50%' },
                children: <Card>Left</Card>,
              }}
              cProps={{
                children: <Card>Center</Card>,
              }}
            />
          </div>
        ),
      },
      {
        id: `TBLCRScroll`,
        name: `TBLCR可滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TBLCR可滚动',
            info: 'TBLCR可滚动',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, background: '#ccc', padding: 20 }}>
      <SplitLayout.TRBLC.TBLCRSplitLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          autoFixed: false,
          children: (
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />
    </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, background: '#ccc', padding: 20 }}>
            <SplitLayout.TRBLC.TBLCRSplitLayout
              gutter={20}
              autoWrapProps={{ autoFixed: false }}
              autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                autoFixed: false,
                children: (
                  <Card>
                    {Array.from({ length: 100 }).map((t) => (
                      <p>
                        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                      </p>
                    ))}
                  </Card>
                ),
              }}
            />
          </div>
        ),
      },
      {
        id: `LRTCBScroll`,
        name: `LRTCB可滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'LRTCB可滚动',
            info: 'LRTCB可滚动',
          },
        },
        codeText: `
  import React from 'react';
  import { Card } from 'antd';
  import { SplitLayout } from '@baifendian/adhere';

  export default () => (
    <div style={{ height: 500, background: '#ccc', padding: 20 }}>
      <SplitLayout.TRBLC.LRTCBSplitLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children: <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children: <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          autoFixed: false,
          children: (
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />
          </div>
  )
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, background: '#ccc', padding: 20 }}>
            <SplitLayout.TRBLC.LRTCBSplitLayout
              gutter={20}
              autoWrapProps={{ autoFixed: false }}
              autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
              tProps={{
                fit: true,
                span: 3,
                children: <Card>Top</Card>,
              }}
              rProps={{
                fit: true,
                span: 3,
                children: <Card>Right</Card>,
              }}
              bProps={{
                fit: true,
                span: 3,
                children: <Card>Bottom</Card>,
              }}
              lProps={{
                fit: true,
                span: 3,
                children: <Card>Left</Card>,
              }}
              cProps={{
                autoFixed: false,
                children: (
                  <Card>
                    {Array.from({ length: 100 }).map((t) => (
                      <p>
                        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                      </p>
                    ))}
                  </Card>
                ),
              }}
            />
          </div>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SplitLayout">
        <p>实现分割窗体的布局，可以拉动调整大小</p>
        <p>需要配合FlexLayout一起使用</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <CodeBoxSection
        title="TRBLCSplit布局-代码演示"
        columnCount={1}
        config={TRBLCBoxPanelConfig()}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'SplitLayout',
            data: [
              {
                params: 'maxSize',
                desc: '最大距离，可以使数值或是字符串的百分比',
                type: 'string | number',
                defaultVal: '100%',
              },
              {
                params: 'minSize',
                desc: '最小距离，可以使数值或是字符串的百分比',
                type: 'string | number',
                defaultVal: '10',
              },
              {
                params: 'onCanDrag',
                desc: '是否可以拖动',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onDragStarted',
                desc: '多动开始',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onDragFinished',
                desc: '拖动结束',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onOut',
                desc: '移出拖动范围',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '拖动变化',
                type: 'Function',
                defaultVal: '',
              },
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
