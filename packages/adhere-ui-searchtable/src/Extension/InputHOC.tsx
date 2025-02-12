import type { InputRef } from 'antd';
import React, { useEffect, useRef } from 'react';

/**
 * InputHOC
 * @param InputComponent
 * @constructor
 */
export default function InputHOC(InputComponent) {
  return (props) => {
    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
      // inputRef.current.input.focus();
      // inputRef.current.focus({
      //   cursor: 'end',
      // });
    });

    return <InputComponent ref={inputRef} {...props} />;
  };
}
