import React, { memo } from 'react';

import Space from '@baifendian/adhere-ui-space';

import FunctionProps from '../FunctionProps';
import type { FunctionPropsSectionProps } from '../types';
import Section from './Section';

/**
 * 函数属性区块组件
 * @component FunctionPropsSection
 * @description 用于展示函数属性说明的区块组件
 * @param props - 组件属性
 * @returns JSX.Element
 */
const FunctionPropsSection = memo<FunctionPropsSectionProps>((props) => {
  const { title, extra, config = [] } = props;

  return (
    <Section title={title} extra={extra}>
      <Space.Group direction="vertical">
        {config.map((c, index) => (
          <FunctionProps key={index + 1} {...c} />
        ))}
      </Space.Group>
    </Section>
  );
});

FunctionPropsSection.displayName = 'FunctionPropsSection';

export default FunctionPropsSection;
