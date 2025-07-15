import classNames from 'classnames';
import React, { memo } from 'react';

import type { SectionProps } from '../types';

const selectPrefix = 'adhere-ui-playground-page-section';

/**
 * 区块组件
 * @component Section
 * @description 页面区块组件，用于组织内容结构
 * @param props - 组件属性
 * @returns JSX.Element
 */
const Section = memo<SectionProps>((props) => {
  const { title, extra, className = '', style = {}, children } = props;

  return (
    <div className={classNames(selectPrefix, className)} style={style}>
      <div className={`${selectPrefix}-header`}>
        <div className={`${selectPrefix}-header-title`}>{title}</div>
        <div className={`${selectPrefix}-header-extra`}>{extra}</div>
      </div>
      <div className={`${selectPrefix}-body`}>{children}</div>
    </div>
  );
});

Section.displayName = 'Section';

export default Section;
