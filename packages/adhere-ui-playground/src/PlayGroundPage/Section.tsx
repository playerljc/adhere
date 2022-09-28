import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { FC, memo } from 'react';

import { SectionProps } from '../types';

const selectPrefix = 'adhere-ui-playground-page-section';

/**
 * Section
 * @param props
 * @constructor
 */
const Section: FC<SectionProps> = (props) => {
  const { title, extra, className = '', style = {}, children } = props;

  return (
    <div className={classNames(selectPrefix, className || '')} style={style || {}}>
      <div className={`${selectPrefix}-header`}>
        <div className={`${selectPrefix}-header-title`}>{title}</div>
        <div className={`${selectPrefix}-header-extra`}>{extra}</div>
      </div>
      <div className={`${selectPrefix}-body`}>{children}</div>
    </div>
  );
};

export const SectionDefaultProps = {
  className: '',
  style: {},
};

export const SectionPropTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  extra: PropTypes.node,
};

Section.defaultProps = SectionDefaultProps;

Section.propTypes = SectionPropTypes;

export default memo(Section);
