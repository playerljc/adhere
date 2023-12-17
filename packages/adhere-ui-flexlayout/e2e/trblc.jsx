import { Card } from 'antd';
import React from 'react';

import FlexLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div style={{ height: 500, padding: 20, background: '#ccc' }}>
      {/*<FlexLayout.TRBLC.TCLayout
        gutter={20}
        tProps={{
          children:<Card>top</Card>,
        }}
        cProps={{
          autoFixed: false,
          children:(
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TCBLayout
        gutter={20}
        tProps={{
          children: <Card>top</Card>,
        }}
        cProps={{
          autoFixed: false,
          children: <Card>Center</Card>,
        }}
        bProps={{
          children: <Card>bottom</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.CBLayout
        gutter={20}
        bProps={{
          span: 12,
          fit: true,
          children:<Card>bottom</Card>,
        }}
        cProps={{
          children:<Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TLCLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          children:<Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 8,
          children:<Card>Left</Card>,
        }}
        cProps={{
          autoFixed: false,
          children:(
            <Card>
              {Array.from({ length: 1 }).map((t) => (
                <p>1</p>
              ))}
            </Card>
          ),
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TRCLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          children:<Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 8,
          children:<Card>Right</Card>,
        }}
        cProps={{
          children:<Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TLRCLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children:<Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          children:<Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        cProps={{
          children:<Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LCBLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children:<Card>Left</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.CRBLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LCRBLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children:<Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LCLayout
        gutter={20}
        lProps={{
          fit: true,
          span: 3,
          children:<Card>Left</Card>,
        }}
        cProps={{
          autoFixed: true,
          children:(
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />*/}

      <FlexLayout.TRBLC.LCRLayout
        gutter={20}
        lProps={{
          fit: true,
          span: 3,
          children: <Card>Left</Card>,
        }}
        cProps={{
          autoFixed: true,
          children: <Card>Center</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children: <Card>Right</Card>,
        }}
      />

      {/*<FlexLayout.TRBLC.CRLayout
        gutter={20}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LTCLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children:<Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          children:<Card>Top</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LTCLayout
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
      />*/}

      {/*<FlexLayout.TRBLC.LBCLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children:<Card>Left</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LTCBLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          children:<Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          children:<Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
        cProps={{
          autoFixed: false,
          children:(
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TCRLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children:<Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.CBRLayout
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        cProps={{
          children:<Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TCBRLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          children:<Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        cProps={{
          autoFixed: false,
          children:(
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TBLCRLayout
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
      />*/}

      {/*<FlexLayout.TRBLC.LRTCBLayout
        gutter={20}
        autoWrapProps={{ autoFixed: false }}
        autoInnerProps={{ autoFixed: true, gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 4,
          children:<Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          children:<Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          children:<Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          style: { width: '50%' },
          children:<Card>Left</Card>,
        }}
        cProps={{
          autoFixed: false,
          children:(
            <Card>
              {Array.from({ length: 100 }).map((t) => (
                <p>
                  111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </p>
              ))}
            </Card>
          ),
        }}
      />*/}
    </div>
  );
};
