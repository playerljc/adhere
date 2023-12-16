import React from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';

const { Fixed, Auto } = FlexLayout;

export default () => {
  return (
    <>
      <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed>
          <div
            style={{
              padding: '15px 20px',
              borderBottom: '1px solid #ccc',
              textAlign: 'center',
            }}
          >
            Top
          </div>
        </Fixed>
        <Auto style={{ justifyContent: 'center', alignItems: 'center' }}>Center</Auto>
        <Fixed>
          <div
            style={{
              padding: '15px 20px',
              borderTop: '1px solid #ccc',
              textAlign: 'center',
            }}
          >
            Bottom
          </div>
        </Fixed>
      </FlexLayout>

      <Space direction="vertical" />

      <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed>
          <div
            style={{
              padding: '15px 20px',
              borderBottom: '1px solid #ccc',
              textAlign: 'center',
            }}
          >
            Top
          </div>
        </Fixed>
        <Auto>
          <FlexLayout direction="horizontal">
            <Fixed
              style={{
                padding: '0 20px',
                borderRight: '1px solid #ccc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Left
            </Fixed>
            <Auto
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Center
            </Auto>
            <Fixed
              style={{
                padding: '0 20px',
                borderLeft: '1px solid #ccc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Right
            </Fixed>
          </FlexLayout>
        </Auto>
        <Fixed>
          <div
            style={{
              padding: '15px 20px',
              borderTop: '1px solid #ccc',
              textAlign: 'center',
            }}
          >
            Bottom
          </div>
        </Fixed>
      </FlexLayout>

      <Space direction="vertical" />

      <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed
          style={{
            borderRight: '1px solid #ccc',
            padding: '0 15px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Left
        </Fixed>
        <Auto>
          <FlexLayout>
            <Fixed
              style={{
                padding: '15px 0',
                borderBottom: '1px solid #ccc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Top
            </Fixed>
            <Auto style={{ justifyContent: 'center', alignItems: 'center' }}>Center</Auto>
            <Fixed
              style={{
                padding: '15px 0',
                borderTop: '1px solid #ccc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Bottom
            </Fixed>
          </FlexLayout>
        </Auto>
        <Fixed
          style={{
            borderLeft: '1px solid #ccc',
            padding: '0 15px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Right
        </Fixed>
      </FlexLayout>
    </>
  );
};
