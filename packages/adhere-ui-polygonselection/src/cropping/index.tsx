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
 * 内部裁剪组件
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 裁剪组件
 * @description 裁剪组件的主要实现，支持图片裁剪功能
 */
const InternalCropping = memo<PropsWithoutRef<CroppingProps> & RefAttributes<CroppingHandle>>(
  forwardRef<CroppingHandle, CroppingProps>(
    (
      { 
        className, 
        style, 
        maskClassName, 
        maskStyle, 
        mask, 
        value, 
        onChange, 
        modalProps, 
        coreProps 
      },
      ref,
    ) => {
      const coreRef = useRef<CroppingCoreHandle | null>(null);
      const wrapperRef = useRef<HTMLElement | undefined>();

      useTheme<HTMLElement>({
        elRef: wrapperRef,
        group: 'normal',
        displayName: 'PolygonSelection',
      });

      /**
       * 处理保存操作
       * @description 保存裁剪结果并触发onChange回调
       */
      const handleSave = useCallback(() => {
        if (!coreRef.current) return;

        const base64 = coreRef.current.save();
        if (onChange) {
          onChange(base64);
        }
      }, [onChange]);

      /**
       * 处理编辑操作
       * @description 打开编辑对话框
       */
      const handleEdit = useCallback(() => {
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
                  handleSave();
                  dialog?.close();
                }}
              >
                {Intl.get('save')}
              </Button>,
            ],
            ...(modalProps ?? {}),
          },
          children: <CroppingCore ref={coreRef} {...coreProps} />,
        });
      }, [modalProps, coreProps, handleSave]);

      /**
       * 渲染遮罩层
       * @returns 遮罩层JSX元素
       * @description 渲染可点击的遮罩层，用于触发编辑操作
       */
      const renderMask = useCallback(
        () => (
          <div
            className={classNames(`${selectorPrefix}-mask`, maskClassName ?? '')}
            style={maskStyle ?? {}}
            onClick={handleEdit}
          >
            {mask || Intl.get('edit')}
          </div>
        ),
        [maskClassName, maskStyle, mask, handleEdit],
      );

      /**
       * 渲染内部内容
       * @returns 内部内容JSX元素
       * @description 渲染裁剪后的图片内容
       */
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
