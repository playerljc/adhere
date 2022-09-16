import React, { useEffect, useRef, useState } from 'react';

import { PlayGround } from '@baifendian/adhere';

const { PlayGroundPageContext, PlayGroundPage } = PlayGround;

const { Section, CodeBoxSection, PropsSection, FunctionPropsSection } = PlayGroundPage;

export { Section, CodeBoxSection, PropsSection, FunctionPropsSection };

/**
 * Wrap
 * @param children
 * @param props
 * @return {*}
 * @constructor
 */
function Wrap({ children, ...props }) {
  const [scrollEl, setScrollEl] = useState();
  const ref = useRef();

  useEffect(() => {
    setScrollEl(ref.current.parentElement.parentElement);
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
