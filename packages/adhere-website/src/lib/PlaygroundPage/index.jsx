import React, { useEffect, useRef, useState } from 'react';

import { PlayGround } from '@baifendian/adhere';

const { PlayGroundPageContext, PlayGroundPage } = PlayGround;

const { Section, CodeBoxSection, PropsSection, FunctionPropsSection } = PlayGroundPage;

export { Section, CodeBoxSection, PropsSection, FunctionPropsSection };

/**
 * Wrap
 * @param children
 * @param onScrollBottom
 * @param distance
 * @param props
 * @return {*}
 * @constructor
 */
function Wrap({ children, onScrollBottom, distance = 50, ...props }) {
  const [scrollEl, setScrollEl] = useState();
  const ref = useRef();
  const lock = useRef(false); // 锁

  useEffect(() => {
    function onScroll() {
      const bottomHeight = scrollEl.scrollHeight - scrollEl.offsetHeight;
      const scrollTop = scrollEl.scrollTop;

      // console.log('scrollTop', scrollTop);
      // console.log('bottomHeight', bottomHeight);
      // console.log('scrollTop - bottomHeight', scrollTop - bottomHeight);

      /**
       * 条件完全相等或误差值在1之间
       */
      if (onScrollBottom && Math.abs(scrollTop - bottomHeight) <= distance) {
        if (lock.current) return;

        lock.current = true;

        onScrollBottom?.().then(() => {
          lock.current = false;
        });
      }
    }

    const scrollEl = ref.current.parentElement.parentElement;

    scrollEl.addEventListener('scroll', onScroll);

    setScrollEl(scrollEl);

    return () => {
      scrollEl.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <PlayGroundPageContext.Provider
      value={{
        scrollEl,
      }}
    >
      <PlayGroundPage ref={ref} {...props}>
        {children}
      </PlayGroundPage>
    </PlayGroundPageContext.Provider>
  );
}

export default Wrap;
