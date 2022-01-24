import React, { useRef, useState, useEffect } from 'react';
import { PlayGround } from '@baifendian/adhere';

const { PlayGroundPageContext, PlaygroundPage } = PlayGround;

const { Section, CodeBoxSection, PropsSection, FunctionPropsSection } = PlaygroundPage;

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
      <PlaygroundPage ref={ref} {...props}>
        {children}
      </PlaygroundPage>
    </PlayGroundPageContext.Provider>
  );
}

export default Wrap;
