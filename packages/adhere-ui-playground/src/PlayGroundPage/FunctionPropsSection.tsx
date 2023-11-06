import React, { memo } from 'react';

import Space from '@baifendian/adhere-ui-space';

import FunctionProps from '../FunctionProps';
import type { FunctionPropsSectionProps } from '../types';
import Section from './Section';

/**
 * FunctionPropsSection
 * @param props
 * @constructor
 */
const FunctionPropsSection = memo<FunctionPropsSectionProps>((props) => {
  const { title, extra, config = [] } = props;

  return (
    <Section title={title} extra={extra}>
      <Space.Group direction="vertical">
        {(config || []).map((c, index) => (
          <FunctionProps key={index + 1} {...c} />
        ))}
      </Space.Group>
    </Section>
  );
});

// FunctionPropsSection.defaultProps = {
//   ...SectionDefaultProps,
//   config: [],
// };
//
// FunctionPropsSection.propTypes = {
//   ...SectionPropTypes,
//   config: PropTypes.arrayOf(FunctionPropsPropTypes),
// };

export default memo(FunctionPropsSection);
