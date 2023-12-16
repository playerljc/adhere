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
  const [collapse5, setCollapse5] = useState(true);

  const [collapse6, setCollapse6] = useState(true);

  return (
    <FlexLayout direction="horizontal">
      <FlexLayout.Auto>
        <div>
          <h3>left</h3>
          <div>
            <Button
              type="primary"
              onClick={() => {
                setCollapse5(true);
              }}
            >
              打开
            </Button>
            <Space size={10} direction="horizontal" />
            <Button
              onClick={() => {
                setCollapse5(false);
              }}
            >
              关闭
            </Button>
          </div>

          <Space direction="vertical" />

          <div style={{ ...horizontalCSS }}>
            <SlideLayout.Push
              onAfterClose={() => {
                setCollapse5(false);
              }}
              collapse={collapse5}
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
                setCollapse6(true);
              }}
            >
              打开
            </Button>
            <Space size={10} direction="horizontal" />
            <Button
              onClick={() => {
                setCollapse6(false);
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
            <SlideLayout.Push
              direction="right"
              onAfterClose={() => {
                setCollapse6(false);
              }}
              collapse={collapse6}
              slide={<div>right</div>}
              master={<div>Master</div>}
            />
          </div>
        </div>
      </FlexLayout.Auto>
    </FlexLayout>
  );
};
