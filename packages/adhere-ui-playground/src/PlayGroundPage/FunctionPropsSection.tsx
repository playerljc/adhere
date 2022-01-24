import PropTypes from 'prop-types';
import React from 'react';
import Space from '@baifendian/adhere-ui-space';

import Section, { SectionDefaultProps, SectionPropTypes } from './Section';
import FunctionProps, { FunctionPropsPropTypes } from '../FunctionProps';

/**
 * FunctionPropsSection
 * @param title
 * @param extra
 * @param props
 * @constructor
 */
function FunctionPropsSection({ title, extra, config }) {
  return (
    // @ts-ignore
    <Section title={title} extra={extra}>
      <Space.Group direction="vertical">
        {(config || []).map((c, index) => (
          // @ts-ignore*
          <FunctionProps key={index + 1} {...c} />
        ))}
      </Space.Group>
    </Section>
  );
}

FunctionPropsSection.defaultProps = {
  ...SectionDefaultProps,
  config: [],
};

// @ts-ignore
FunctionPropsSection.propTypes = {
  ...SectionPropTypes,
  // @ts-ignore*
  config: PropTypes.arrayOf(FunctionPropsPropTypes),
};

export default FunctionPropsSection;
