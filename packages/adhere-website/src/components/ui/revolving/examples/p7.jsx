import { Button } from 'antd';
import React, { useRef } from 'react';

import { Revolving, Space } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  const ref = useRef();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Space.Group direction="horizontal">
          <Button
            type="primary"
            onClick={() => {
              ref.current.start();
            }}
          >
            start
          </Button>
          <Button
            onClick={() => {
              ref.current.stop();
            }}
          >
            stop
          </Button>
        </Space.Group>
      </div>

      <Space direction="vertical" />

      <Revolving
        direction="bottom"
        delay={1000 * 3}
        classNameWrapper={styles.Wrapper}
        ref={ref}
        items={Array.from({ length: 10 }).map((_, _index) => ({
          key: `${_index + 1}`,
          children: <span>Slide {_index + 1}</span>,
        }))}
      />
    </>
  );
};
