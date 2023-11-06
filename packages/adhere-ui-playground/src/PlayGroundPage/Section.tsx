import classNames from 'classnames';
import React, { memo } from 'react';

import { SectionProps } from '../types';

const selectPrefix = 'adhere-ui-playground-page-section';

/**
 * Section
 * @param props
 * @constructor
 */
const Section = memo<SectionProps>((props) => {
  const { title, extra, className = '', style = {}, children } = props;

  return (
    <div className={classNames(selectPrefix, className ?? '')} style={style ?? {}}>
      <div className={`${selectPrefix}-header`}>
        <div className={`${selectPrefix}-header-title`}>{title}</div>
        <div className={`${selectPrefix}-header-extra`}>{extra}</div>
      </div>
      <div className={`${selectPrefix}-body`}>{children}</div>
    </div>
  );
});

export default Section;
