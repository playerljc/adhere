import { Button } from 'antd';
import classNames from 'classnames';
import type { ForwardRefRenderFunction } from 'react';
import React, { forwardRef, memo, useCallback, useRef } from 'react';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import Intl from '@baifendian/adhere-util-intl';

import { CroppingCoreHandle, CroppingHandle, CroppingProps } from '../types';
import CroppingCore from './CroppingCore';

const selectorPrefix = 'adhere-ui-polygonselection-cropping';

/**
 * ForwardRefRenderFunction
 * @param props
 * @param ref
 * @constructor
 */
const Cropping: ForwardRefRenderFunction<CroppingHandle, CroppingProps> = (
  { className, style, maskClassName, maskStyle, mask, value, onChange, modalProps, coreProps },
  ref,
) => {
  const coreRef = useRef<CroppingCoreHandle | null>(null);

  const renderMask = useCallback(
    () => (
      <div
        className={`${classNames(`${selectorPrefix}-mask`, maskClassName ?? '')}`}
        style={maskStyle ?? {}}
        onClick={() => {
          const dialog = MessageDialog.Modal({
            config: {
              title: Intl.v('编辑'),
              width: 1024,
              maskClosable: false,
              footer: [
                <Button
                  key="submit"
                  type="primary"
                  title={Intl.v('保存')}
                  onClick={() => {
                    if (!coreRef.current) return;

                    const base64 = coreRef?.current?.save?.();

                    if (onChange) {
                      onChange(base64);
                      dialog.close();
                    }
                  }}
                >
                  {Intl.v('保存')}
                </Button>,
              ],
              ...(modalProps ?? {}),
            },
            children: <CroppingCore ref={coreRef} {...coreProps} />,
          });
        }}
      >
        {mask || Intl.v('编辑')}
      </div>
    ),
    [maskClassName, maskStyle, mask, value, onChange],
  );

  const renderInner = useCallback(() => {
    return value ? <img src={value} alt="" /> : null;
  }, [value]);

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      {renderMask()}
      {renderInner()}
    </div>
  );
};

const CroppingHOC = memo(forwardRef<CroppingHandle, CroppingProps>(Cropping));

// @ts-ignore
CroppingHOC.CroppingCore = CroppingCore;

export default CroppingHOC;
