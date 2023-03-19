import classNames from 'classnames';
import React, { FC, Fragment, memo } from 'react';

import { SpaceFunction, SpaceGroupProps, SpaceProps } from './types';

const selectorPrefix = 'adhere-ui-space';

const SpaceGroup: FC<SpaceGroupProps> = (props) => {
  const { children, ...others } = props;

  return (
    <>
      {Array.isArray(children)
        ? children.map((component, index) => {
            if (index !== 0) {
              return (
                <Fragment key={index}>
                  <Space {...others} />
                  {component}
                </Fragment>
              );
            }

            return component;
          })
        : children}
    </>
  );
};

const Space: FC<SpaceProps> = (props) => {
  const { className = '', style = {}, direction = 'horizontal', size = 20 } = props;

  function getStyle() {
    if (direction === 'horizontal') {
      return {
        display: 'inline-block',
        height: '100%',
        margin: `0 ${size}px`,
      };
    }

    return {
      width: '100%',
      margin: `${size}px 0`,
    };
  }

  return (
    <div
      className={classNames(selectorPrefix, className || '')}
      style={{ ...getStyle(), ...(style || {}) }}
    />
  );
};

// @ts-ignore
const MemoWrap: SpaceFunction<SpaceProps> = memo(Space);

MemoWrap.Group = SpaceGroup;

export default MemoWrap;
