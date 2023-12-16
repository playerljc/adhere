import { Button } from 'antd';
import React, { useState } from 'react';

import { FlexLayout, SlideLayout, Space } from '@baifendian/adhere';

const horizontalCSS = {
  position: 'relative',
  width: 400,
  height: 400,
  border: '1px solid rgba(0,0,0,.1)',
  overflow: 'hidden',
};

export default () => {
  const [collapse7, setCollapse7] = useState(true);

  const [collapse8, setCollapse8] = useState(true);

  return (
    <FlexLayout direction="horizontal">
      <FlexLayout.Auto>
        <div>
          <h3>Reveal</h3>
          <div>
            <Button
              type="primary"
              onClick={() => {
                setCollapse7(true);
              }}
            >
              打开
            </Button>
            <Space size={10} direction="horizontal" />
            <Button
              onClick={() => {
                setCollapse7(false);
              }}
            >
              关闭
            </Button>
          </div>

          <Space direction="vertical" />

          <div style={{ ...horizontalCSS }}>
            <SlideLayout.Revolving
              onAfterClose={() => {
                setCollapse7(false);
              }}
              collapse={collapse7}
              slide={<div>left</div>}
              master={<div>Master</div>}
            />
          </div>
        </div>
      </FlexLayout.Auto>

      <FlexLayout.Auto>
        <div>
          <h3>right</h3>
          <div>
            <Button
              type="primary"
              onClick={() => {
                setCollapse8(true);
              }}
            >
              打开
            </Button>
            <Space size={10} direction="horizontal" />
            <Button
              onClick={() => {
                setCollapse8(false);
              }}
            >
              关闭
            </Button>
          </div>

          <Space direction="vertical" />

          <div
            style={{
              ...horizontalCSS,
            }}
          >
            <SlideLayout.Revolving
              direction="right"
              onAfterClose={() => {
                setCollapse8(false);
              }}
              collapse={collapse8}
              slide={<div>right</div>}
              master={<div>Master</div>}
            />
          </div>
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
};
