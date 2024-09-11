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

      <Revolving direction="bottom" delay={1000 * 3} className={styles.Wrapper} ref={ref}>
        <Revolving.Item>Slide 1</Revolving.Item>
        <Revolving.Item>Slide 2</Revolving.Item>
        <Revolving.Item>Slide 3</Revolving.Item>
        <Revolving.Item>Slide 4</Revolving.Item>
        <Revolving.Item>Slide 5</Revolving.Item>
        <Revolving.Item>Slide 6</Revolving.Item>
        <Revolving.Item>Slide 7</Revolving.Item>
        <Revolving.Item>Slide 8</Revolving.Item>
        <Revolving.Item>Slide 9</Revolving.Item>
        <Revolving.Item>Slide 10</Revolving.Item>
      </Revolving>
    </>
  );
};
