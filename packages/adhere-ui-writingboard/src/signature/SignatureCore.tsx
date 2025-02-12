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
 * Signature
 * @description 签名
 * @param {SignatureProps} props
 * @param ref
 * @constructor
 */
const Signature = memo<PropsWithoutRef<SignatureCoreProps> & RefAttributes<SignatureCoreHandle>>(
  forwardRef<SignatureCoreHandle, SignatureCoreProps>(
    ({ wrapProps, toolProps, areaProps, defaultWidth, defaultColor }, ref) => {
      const [mode, setMode] = useState<Mode>(Mode.FREE);
      const [color, setColor] = useState(defaultColor ?? '#000');
      const [width, setWidth] = useState(defaultWidth ?? 2);

      const writingBoardRef = useRef<WritingBoardHandle>();

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
                  setWidth(v as number);
                  if (writingBoardRef.current) {
                    writingBoardRef.current.setLineWidth(v as number);
                  }
                }}
              />

              <CompactPicker
                color={color}
                onChangeComplete={(c) => {
                  setColor(c.hex);

                  if (writingBoardRef.current) {
                    writingBoardRef.current.setStrokeStyle(c.hex);
                  }
                }}
              />

              <Button
                size="large"
                block
                type="primary"
                onClick={() => {
                  if (writingBoardRef.current) {
                    const v = mode === Mode.FREE ? Mode.RUBBER : Mode.FREE;
                    setMode(v);
                    writingBoardRef.current.setMode(v);
                  }
                }}
              >
                {mode === Mode.FREE ? Intl.v('橡皮') : Intl.v('绘制')}
              </Button>

              <Button
                size="large"
                block
                type="primary"
                onClick={() => {
                  if (writingBoardRef.current) {
                    writingBoardRef.current.clear();
                  }
                }}
              >
                {Intl.v('清除')}
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
         * Save
         */
        save: (backgroundColor?: string, type?: string, quality?: any) => {
          if (!writingBoardRef.current) return;

          return writingBoardRef.current.toDataURL(
            backgroundColor ?? '#fff',
            type ?? 'image/png',
            quality ?? 1.0,
          );
        },
        isEmpty: () => {
          if (writingBoardRef?.current) {
            return writingBoardRef?.current?.isEmpty?.();
          }

          return true;
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
