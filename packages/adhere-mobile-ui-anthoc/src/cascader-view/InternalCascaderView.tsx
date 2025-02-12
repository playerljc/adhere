import { CascaderView } from 'antd-mobile';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import Util from '@baifendian/adhere-util';

import { treeTransformConfig } from '../TreeFilter';
import type { InternalCascaderViewProps } from '../types';

/**
 * InternalCascaderView
 * @param treeDataSimpleMode
 * @param options
 * @param cascaderViewProps
 * @constructor
 */
const InternalCascaderView: FC<InternalCascaderViewProps> = ({
  treeDataSimpleMode,
  options,
  ...cascaderViewProps
}) => {
  const targetOptions = useMemo(() => {
    if (treeDataSimpleMode) {
      return Util.arrayToAntdTree(options, treeTransformConfig);
    }

    return options;
  }, [options, treeDataSimpleMode]);

  return <CascaderView options={targetOptions} {...cascaderViewProps} />;
};

export default InternalCascaderView;
