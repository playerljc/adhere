import classNames from 'classnames';
import React, { FC, memo } from 'react';

import { SplitFunction, SplitGroupProps, SplitProps } from './types';

const selectorPrefix = 'adhere-ui-split';

const SplitGroup: FC<SplitGroupProps> = (props) => {
  const { children, ...others } = props;

  return (
    <>
      {Array.isArray(children)
        ? children.map((component, index) => {
            if (index !== 0) {
              return (
                <>
                  <Split {...others} key={index} />
                  {component}
                </>
              );
            }

            return component;
          })
        : children}
    </>
  );
};

const Split: FC<SplitProps> = (props) => {
  const { className = '', direction = 'vertical', size = 20 } = props;

  function getStyle() {
    if (direction === 'horizontal') {
      return {
        display: 'inline-block',
        width: 1,
        height: '100%',
        margin: `0 ${size}px`,
      };
    }

    return {
      width: '100%',
      height: 1,
      margin: `${size}px 0`,
    };
  }

  return <div className={classNames(selectorPrefix, className || '')} style={getStyle()} />;
};

// @ts-ignore
const MemoWrap: SplitFunction<SplitProps> = memo(Split);

MemoWrap.Group = SplitGroup;

export default MemoWrap;
