import { useUpdateEffect } from 'ahooks';
import { Space } from 'antd';
import { Button, Grid, Stepper } from 'antd-mobile';
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
 * 移动端签名核心组件
 * @description 提供移动端适配的签名编辑功能，包含工具栏和绘制区域
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 移动端签名核心组件实例
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

      const defaultBProps = useMemo<SignatureCoreToolProps>(
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
          <div>
            <Space direction="vertical" size={20}>
              <Stepper
                style={{ width: '100%' }}
                value={width}
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
            </Space>

            <Grid columns={2} gap={8}>
              <Grid.Item>
                <Button
                  size="middle"
                  block
                  color="primary"
                  onClick={() => {
                    const newMode = mode === Mode.FREE ? Mode.RUBBER : Mode.FREE;
                    setMode(newMode);
                    writingBoardRef.current?.setMode(newMode);
                  }}
                >
                  {mode === Mode.FREE ? Intl.get('eraser') : Intl.get('draw')}
                </Button>
              </Grid.Item>
              <Grid.Item>
                <Button
                  size="middle"
                  block
                  color="primary"
                  onClick={() => {
                    writingBoardRef.current?.clear();
                  }}
                >
                  {Intl.get('clear')}
                </Button>
              </Grid.Item>
            </Grid>
          </div>
        ),
        [mode, width, color, toolProps],
      );

      const renderArea = useMemo<React.ReactNode>(
        () => (
          <WritingBoard
            ref={writingBoardRef}
            defaultMode={mode}
            defaultLineWidth={width}
            defaultStrokeStyle={color}
          />
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
        <FlexLayout.TRBLC.CBLayout
          {...defaultProps}
          {...wrapProps}
          bProps={{
            ...defaultBProps,
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
