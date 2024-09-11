import { Spin } from 'antd';
import React, { useMemo } from 'react';

import { UseAutoCompleteFetchLoading } from './types';

const selectorPrefix = 'adhere-ui-ant-hoc-auto-complete-fetch-loading';

const useAutoCompleteFetchLoading: UseAutoCompleteFetchLoading = (renderLoading) =>
  useMemo(
    () =>
      renderLoading?.() ?? (
        <div className={selectorPrefix}>
          <Spin size="large" />
        </div>
      ),
    [renderLoading],
  );

export default useAutoCompleteFetchLoading;
