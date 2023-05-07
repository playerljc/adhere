import { useUpdateEffect } from 'ahooks';
import { Button, Card, InputNumber, Space } from 'antd';
import type { ForwardRefRenderFunction } from 'react';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CompactPicker } from 'react-color';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Intl from '@baifendian/adhere-util-intl';

import WritingBoard from '../index';
import type {
  SignatureAreaProps,
  SignatureHandle,
  SignatureProps,
  SignatureToolProps,
  SignatureWrapProps,
  WritingBoardHandle,
} from '../types';
import { Mode } from '../types';

const selectorPrefix = 'adhere-ui-signature';

/**
 * Signature
 * @description 签名
 * @param {SignatureProps} props
 * @param ref
 * @constructor
 */
const Signature: ForwardRefRenderFunction<SignatureHandle, SignatureProps> = (
  { wrapProps, toolProps, areaProps, defaultWidth, defaultColor },
  ref,
) => {
  const [mode, setMode] = useState<Mode>(Mode.FREE);
  const [color, setColor] = useState(defaultColor ?? '#000');
  const [width, setWidth] = useState(defaultWidth ?? 2);

  const writingBoardRef = useRef<WritingBoardHandle>(null);

  const defaultProps = useMemo<SignatureWrapProps>(
    () => ({
      gutter: 20,
      wrapClassName: `${selectorPrefix}-wrap`,
    }),
    [],
  );

  const defaultLProps = useMemo<SignatureToolProps>(
    () => ({
      fit: true,
    }),
    [],
  );

  const defaultCProps = useMemo<SignatureAreaProps>(
    () => ({
      autoFixed: true,
    }),
    [],
  );

  const renderTool = useCallback<() => React.ReactNode>(() => {
    // 线条宽度
    // 颜色
    // 橡皮
    // 预览
    // 清除
    return (
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
    );
  }, [mode, width, color, toolProps]);

  const renderArea = useCallback<() => React.ReactNode>(() => {
    return (
      <Card>
        <WritingBoard
          ref={writingBoardRef}
          defaultMode={mode}
          defaultLineWidth={width}
          defaultStrokeStyle={color}
        />
      </Card>
    );
  }, [areaProps]);

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
        render: renderTool,
      }}
      cProps={{
        ...defaultCProps,
        ...areaProps,
        render: renderArea,
      }}
    />
  );
};

export default memo(forwardRef<SignatureHandle, SignatureProps>(Signature));
