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

      const writingBoardRef = useRef<WritingBoardHandle>({} as WritingBoardHandle);

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
            </Space>

            <Grid columns={2} gap={8}>
              <Grid.Item>
                <Button
                  size="middle"
                  block
                  color="primary"
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
              </Grid.Item>
              <Grid.Item>
                <Button
                  size="middle"
                  block
                  color="primary"
                  onClick={() => {
                    if (writingBoardRef.current) {
                      writingBoardRef.current.clear();
                    }
                  }}
                >
                  {Intl.v('清除')}
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
