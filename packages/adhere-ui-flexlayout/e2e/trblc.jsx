import { Card } from 'antd';
import React from 'react';

import FlexLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div style={{ height: '100%', padding: 20, background: '#ccc' }}>
      {/*<FlexLayout.TRBLC.TCLayout
        style={{ height: '100%' }}
        gutter={20}
        tProps={{
          render: () => <Card>top</Card>,
        }}
        cProps={{
          render: () => <Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.CBLayout
        style={{ height: '100%' }}
        gutter={20}
        bProps={{
          span: 12,
          fit: true,
          render: () => <Card>bottom</Card>,
        }}
        cProps={{
          render: () => <Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TLCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          render: () => <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 8,
          render: () => <Card>Left</Card>,
        }}
        cProps={{
          render: () => <Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TRCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 8,
          render: () => <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 8,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TLRCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          render: () => <Card>Top</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LCBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.CRBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LCRBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LCLayout
        style={{ height: '100%' }}
        gutter={20}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.CRLayout
        style={{ height: '100%' }}
        gutter={20}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LTCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          render: () => <Card>Top</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LBCLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.LTCBLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        tProps={{
          fit: true,
          span: 3,
          render: () => <Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TCRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          render: () => <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.CBRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TCBRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          render: () => <Card>Top</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      {/*<FlexLayout.TRBLC.TBLCRLayout
        style={{ height: '100%' }}
        gutter={20}
        autoInnerProps={{ gutter: [0, 20] }}
        tProps={{
          fit: true,
          span: 3,
          render: () => <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          span: 3,
          render: () => <Card>Left</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />*/}

      <FlexLayout.TRBLC.LRTCBLayout
        style={{ height: '100%' }}
        gutter={50}
        autoInnerProps={{ gutter: [0, 30] }}
        tProps={{
          fit: true,
          span: 4,
          render: () => <Card>Top</Card>,
        }}
        rProps={{
          fit: true,
          span: 3,
          render: () => <Card>Right</Card>,
        }}
        bProps={{
          fit: true,
          span: 3,
          render: () => <Card>Bottom</Card>,
        }}
        lProps={{
          fit: true,
          style: { width: '50%' },
          render: () => <Card>Left</Card>,
        }}
        cProps={{
          render: () => <Card>Center</Card>,
        }}
      />
    </div>
  );
};
