import { useUpdateEffect } from 'ahooks';
import { Button, Card, InputNumber, Space } from 'antd';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CompactPicker } from 'react-color';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Intl from '@baifendian/adhere-util-intl';

import WritingBoard from '../WritingBoard';
import type {
  SignatureCoreAreaProps,
  SignatureCoreHandle,
  SignatureCoreProps,
  SignatureCoreToolProps,
  SignatureCoreWrapProps,
  WritingBoardHandle,
} from '../types';
import { Mode } from '../types';

const selectorPrefix = 'adhere-ui-signature-core';

/**
 * 签名核心组件
 * @description 提供完整的签名编辑功能，包含工具栏和绘制区域
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 签名核心组件实例
 */
const Signature = memo<PropsWithoutRef<SignatureCoreProps> & RefAttributes<SignatureCoreHandle>>(
  forwardRef<SignatureCoreHandle, SignatureCoreProps>(
    ({ wrapProps, toolProps, areaProps, defaultWidth, defaultColor }, ref) => {
      const [mode, setMode] = useState<Mode>(Mode.FREE);
      const [color, setColor] = useState(defaultColor ?? '#000');
      const [width, setWidth] = useState(defaultWidth ?? 2);

      const writingBoardRef = useRef<WritingBoardHandle>(null);

      const defaultProps = useMemo<SignatureCoreWrapProps>(
        () => ({
          gutter: 20,
          wrapClassName: `${selectorPrefix}-wrap`,
        }),
        [],
      );

      const defaultLProps = useMemo<SignatureCoreToolProps>(
        () => ({
          fit: true,
        }),
        [],
      );

      const defaultCProps = useMemo<SignatureCoreAreaProps>(
        () => ({
          autoFixed: true,
        }),
        [],
      );

      const renderTool = useMemo<React.ReactNode>(
        () => (
          <Card>
            <Space direction="vertical" size={20}>
              <InputNumber
                style={{ width: '100%' }}
                value={width}
                precision={0}
                max={10}
                min={1}
                onChange={(v) => {
                  const newWidth = v as number;
                  setWidth(newWidth);
                  writingBoardRef.current?.setLineWidth(newWidth);
                }}
              />

              <CompactPicker
                color={color}
                onChangeComplete={(c) => {
                  setColor(c.hex);
                  writingBoardRef.current?.setStrokeStyle(c.hex);
                }}
              />

              <Button
                size="large"
                block
                type="primary"
                onClick={() => {
                  const newMode = mode === Mode.FREE ? Mode.RUBBER : Mode.FREE;
                  setMode(newMode);
                  writingBoardRef.current?.setMode(newMode);
                }}
              >
                {mode === Mode.FREE ? Intl.get('eraser') : Intl.get('draw')}
              </Button>

              <Button
                size="large"
                block
                type="primary"
                onClick={() => {
                  writingBoardRef.current?.clear();
                }}
              >
                {Intl.get('clear')}
              </Button>
            </Space>
          </Card>
        ),
        [mode, width, color, toolProps],
      );

      const renderArea = useMemo<React.ReactNode>(
        () => (
          <Card>
            <WritingBoard
              // @ts-ignore
              ref={writingBoardRef}
              defaultMode={mode}
              defaultLineWidth={width}
              defaultStrokeStyle={color}
            />
          </Card>
        ),
        [areaProps],
      );

      useImperativeHandle(ref, () => ({
        /**
         * 保存签名并返回base64字符串
         * @param backgroundColor - 背景颜色
         * @param type - 图片类型
         * @param quality - 图片质量
         * @returns base64字符串
         */
        save: (backgroundColor?: string, type?: string, quality?: number) => {
          return writingBoardRef.current?.toDataURL(
            backgroundColor ?? '#fff',
            type ?? 'image/png',
            quality ?? 1.0,
          );
        },
        /**
         * 检查签名是否为空
         * @returns 是否为空
         */
        isEmpty: () => {
          return writingBoardRef.current?.isEmpty() ?? true;
        },
      }));

      useUpdateEffect(() => {
        setWidth(defaultWidth as number);
      }, [defaultWidth]);

      useUpdateEffect(() => {
        setColor(defaultColor as string);
      }, [defaultColor]);

      return (
        <FlexLayout.TRBLC.LCLayout
          {...defaultProps}
          {...wrapProps}
          lProps={{
            ...defaultLProps,
            ...toolProps,
            children: renderTool,
          }}
          cProps={{
            ...defaultCProps,
            ...areaProps,
            children: renderArea,
          }}
        />
      );
    },
  ),
);

Signature.displayName = 'Signature';

export default Signature;
