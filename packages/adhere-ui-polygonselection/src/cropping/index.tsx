import { Button } from 'antd';
import classNames from 'classnames';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useRef,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';

import type {
  CroppingComponent,
  CroppingCoreHandle,
  CroppingHandle,
  CroppingProps,
} from '../types';
import CroppingCore from './CroppingCore';

const selectorPrefix = 'adhere-ui-polygon-selection-cropping';

const { useTheme } = ConfigProvider;

/**
 * ForwardRefRenderFunction
 * @param props
 * @param ref
 * @constructor
 */
const InternalCropping = memo<PropsWithoutRef<CroppingProps> & RefAttributes<CroppingHandle>>(
  forwardRef<CroppingHandle, CroppingProps>(
    (
      { className, style, maskClassName, maskStyle, mask, value, onChange, modalProps, coreProps },
      ref,
    ) => {
      const coreRef = useRef<CroppingCoreHandle | null>(null);

      const wrapperRef = useRef<HTMLElement | undefined>(undefined);

      useTheme<HTMLElement>({
        elRef: wrapperRef,
        group: 'normal',
        displayName: 'PolygonSelection',
      });

      const renderMask = useCallback(
        () => (
          <div
            className={`${classNames(`${selectorPrefix}-mask`, maskClassName ?? '')}`}
            style={maskStyle ?? {}}
            onClick={() => {
              const dialog = MessageDialog.Modal({
                config: {
                  title: Intl.get('edit'),
                  width: 1024,
                  maskClosable: false,
                  footer: [
                    <Button
                      key="submit"
                      type="primary"
                      title={Intl.get('save')}
                      onClick={() => {
                        if (!coreRef.current) return;

                        const base64 = coreRef?.current?.save?.();

                        if (onChange) {
                          onChange(base64);
                          dialog?.close();
                        }
                      }}
                    >
                      {Intl.get('save')}
                    </Button>,
                  ],
                  ...(modalProps ?? {}),
                },
                children: <CroppingCore ref={coreRef} {...coreProps} />,
              });
            }}
          >
            {mask || Intl.get('edit')}
          </div>
        ),
        [maskClassName, maskStyle, mask, value, onChange],
      );

      const renderInner = useCallback(() => {
        return value ? <img src={value} alt="" /> : null;
      }, [value]);

      return (
        <div
          // @ts-ignore
          ref={wrapperRef}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
        >
          {renderMask()}
          {renderInner()}
        </div>
      );
    },
  ),
);

InternalCropping.displayName = 'InternalCropping';

const Cropping = InternalCropping as CroppingComponent;

Cropping.CroppingCore = CroppingCore;

export default Cropping;
