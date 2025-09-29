import React, { cloneElement, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import type { ValueHOCHandle, ValueHOCProps } from './types';

const { useScrollLayout } = FlexLayout;

/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @param override
 * @return {function(*)}
 */
export function createFactory<P>(
  Component: any,
  defaultProps: Partial<P>,
  override?: (props: Partial<P>) => Partial<P> | Promise<Partial<P>>,
): typeof Component & {
  defaultProps?: Partial<P>;
  override?: (props: Partial<P>) => Partial<P> | Promise<Partial<P>>;
} {
  const fn = (_props) => {
    const { getEl } = useScrollLayout();

    const [overrideProps, setOverrideProps] = useState<Partial<P> | undefined>(undefined);

    useEffect(() => {
      let cancelled = false;
      const run = async () => {
        if (!fn.override) {
          setOverrideProps(undefined);
          return;
        }
        try {
          const result = await fn.override({ ...(_props ?? {}) });
          if (!cancelled) {
            setOverrideProps(result ?? undefined);
          }
        } catch (e) {
          if (!cancelled) {
            setOverrideProps(undefined);
          }
        }
      };
      run();
      return () => {
        cancelled = true;
      };
    }, [_props]);

    const props = { ...fn.defaultProps, ..._props, ...(overrideProps ?? {}) };

    if (!('getPopupContainer' in props)) {
      props.getPopupContainer = (el) => {
        return getEl?.() || el?.parentElement || document.body;
      };
    }

    const { children, ...rest } = props;

    return <Component {...rest}>{children}</Component>;
  };

  Object.assign(fn, Component);

  fn.defaultProps = defaultProps;

  fn.override = override;

  return fn;
}

export const ValueHOC = forwardRef<ValueHOCHandle, ValueHOCProps>(
  ({ defaultFormItemValue, children, className, style, ...props }, ref) => {
    const [value, setValue] = useState(defaultFormItemValue);

    function onChange(...params) {
      setValue(params[0]);

      children?.props?.onChange?.(...params);
    }

    useImperativeHandle(ref, () => ({
      getValue: () => value,
    }));

    return (
      <div className={className ?? ''} style={style ?? {}}>
        {cloneElement(
          children,
          {
            ...children.props,
            value,
            onChange,
          },
          children.props.children,
        )}
      </div>
    );
  },
);
