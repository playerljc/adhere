import React, { useEffect, useRef } from 'react';

import FlexLayout from '../src/index';

import 'antd/dist/reset.css';

import '../src/index.less';
import './index.less';

const { Fixed, Auto } = FlexLayout;

export default () => {
  const flexRef = useRef();
  const fixedRef = useRef();
  const autoRef = useRef();

  useEffect(() => {
    console.log('flexRef', flexRef.current);
    console.log('fixedRef', fixedRef.current);
    console.log('autoRef', autoRef.current);
  }, []);

  return (
    <FlexLayout ref={flexRef} direction="vertical" style={{ height: '100%' }}>
      <Fixed ref={fixedRef}>Fixed</Fixed>
      <Auto ref={autoRef}>Auto</Auto>
    </FlexLayout>
  );
};
