import { useUpdateLayoutEffect } from 'ahooks';
import { Button, Card, Space } from 'antd';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Intl from '@baifendian/adhere-util-intl';

import CircleDrawAction from '../draw/CircleDrawAction';
import DiamondDrawAction from '../draw/DiamondDrawAction';
import PolygonDrawAction from '../draw/PolygonDrawAction';
import RectangleDrawAction from '../draw/RectangleDrawAction';
import StartDrawAction from '../draw/StartDrawAction';
import TriangleDrawAction from '../draw/TriangleDrawAction';
import PolygonSelection from '../index';
import CircleModifyAction from '../modify/CircleModifyAction';
import DiamondModifyAction from '../modify/DiamondModifyAction';
import PolygonModifyAction from '../modify/PolygonModifyAction';
import RectangleModifyAction from '../modify/RectangleModifyAction';
import StartModifyAction from '../modify/StartModifyAction';
import TriangleModifyAction from '../modify/TriangleModifyAction';
import type {
  CroppingCoreAreaProps,
  CroppingCoreHandle,
  CroppingCoreProps,
  CroppingCoreToolProps,
  CroppingCoreWrapProps,
  IAction,
  IPolygonSelection,
  IStyle,
} from '../types';
import { ActionEvents, IActionData, PolygonSelectionActions, SelectType } from '../types';
import {
  drawCircle,
  drawDiamond,
  drawPolygon,
  drawRectangle,
  drawStart,
  drawTriangle,
  getClipDataUrl,
  sort,
} from './util';

const selectorPrefix = 'adhere-ui-cropping-core';

/**
 * CroppingCore
 * @param props
 * @param ref
 * @constructor
 */
const CroppingCore = forwardRef<CroppingCoreHandle, CroppingCoreProps>(
  (
    {
      className,
      style: wrapStyle,
      wrapProps,
      toolProps,
      areaProps,
      minHeight = 200,
      toolBarConfig,
    },
    ref,
  ) => {
    const [type, setType] = useState<SelectType | null>(null);

    const [base64, setBase64] = useState<string>('');

    const base64Ref = useRef<HTMLImageElement | null>(null);

    const wrapRef = useRef<HTMLDivElement | null>(null);

    const clipRef = useRef<HTMLDivElement | null>(null);

    const clipCanvasEL = useRef<HTMLCanvasElement | null>(null);

    const clipCanvasCtx = useRef<CanvasRenderingContext2D>();

    const geometryRef = useRef<HTMLDivElement | null>(null);

    const polygonSelection = useRef<IPolygonSelection>();

    const curAction = useRef<IAction | null>(null);

    const inputFileFieldRef = useRef<HTMLInputElement | null>(null);

    const data = useRef<IActionData | null>(null);

    const layoutMap = new Map<string, () => ReactNode>([
      [
        'left',
        () => (
          <FlexLayout.TRBLC.LCLayout
            {...defaultProps}
            {...wrapProps}
            lProps={{
              ...defaultToolbarProps,
              ...toolProps,
              children: renderTool,
            }}
            cProps={{
              ...defaultCProps,
              ...areaProps,
              children: renderArea,
            }}
          />
        ),
      ],
      [
        'right',
        () => (
          <FlexLayout.TRBLC.CRLayout
            {...defaultProps}
            {...wrapProps}
            rProps={{
              ...defaultToolbarProps,
              ...toolProps,
              children: renderTool,
            }}
            cProps={{
              ...defaultCProps,
              ...areaProps,
              children: renderArea,
            }}
          />
        ),
      ],
      [
        'top',
        () => (
          <FlexLayout.TRBLC.TCLayout
            {...defaultProps}
            {...wrapProps}
            tProps={{
              ...defaultToolbarProps,
              ...toolProps,
              children: renderTool,
            }}
            cProps={{
              ...defaultCProps,
              ...areaProps,
              children: renderArea,
            }}
          />
        ),
      ],
      [
        'bottom',
        () => (
          <FlexLayout.TRBLC.CBLayout
            {...defaultProps}
            {...wrapProps}
            bProps={{
              ...defaultToolbarProps,
              ...toolProps,
              children: renderTool,
            }}
            cProps={{
              ...defaultCProps,
              ...areaProps,
              children: renderArea,
            }}
          />
        ),
      ],
    ]);

    // ActionType
    const typeActionMap = useMemo(
      () =>
        new Map<SelectType, any>([
          [SelectType.Polygon, PolygonModifyAction],
          [SelectType.Circle, CircleModifyAction],
          [SelectType.Rectangle, RectangleModifyAction],
          [SelectType.Triangle, TriangleModifyAction],
          [SelectType.Diamond, DiamondModifyAction],
          [SelectType.Start, StartModifyAction],
        ]),
      [],
    );

    const style: IStyle = useMemo(
      () => ({
        fillStyle: 'transparent',
        // 描边颜色
        strokeStyle: '#fff',
        // 描边大小
        lineWidth: 1,
        lineCap: 'round',
        lineJoin: 'round',
        lineDash: [
          /*5, 4, 3*/
        ],
        lineDashOffset: -1,
        globalAlpha: 1,
      }),
      [],
    );

    const anchorStyle = {
      fillStyle: '#fff',
    };

    /**
     * defaultProps
     */
    const defaultProps = useMemo<CroppingCoreWrapProps>(
      () => ({
        gutter: 20,
        wrapClassName: `${selectorPrefix}-inner`,
      }),
      [],
    );

    /**
     * defaultToolbarProps
     */
    const defaultToolbarProps = useMemo<CroppingCoreToolProps>(
      () => ({
        fit: true,
      }),
      [],
    );

    /**
     * defaultCProps
     */
    const defaultCProps = useMemo<CroppingCoreAreaProps>(
      () => ({
        autoFixed: true,
      }),
      [],
    );

    /**
     * renderTool
     */
    const renderTool = useMemo(() => {
      const getType = (_type) => {
        return _type === type ? 'primary' : 'default';
      };

      const onBeforeClick = (_type) => {
        if (_type !== type) {
          clearClip();
          polygonSelection?.current?.clearCanvasAll?.();
          data.current = null;
          setType(_type);
        }

        return _type !== type ? Promise.resolve() : Promise.reject();
      };

      const onClickHOC = (type: SelectType, ActionClass) => () => {
        onBeforeClick(type).then(() => {
          curAction.current = new ActionClass();

          if (!curAction.current) return;

          curAction.current.setAnchorStyle({ ...anchorStyle });
          curAction.current.setMoveGemStyle({ ...anchorStyle });

          curAction?.current?.on?.(ActionEvents.DrawBeforeStart, (e) => {
            // console.log('绘制开始前', JSON.stringify(e));
            clip(e);
          });
          curAction?.current?.on?.(ActionEvents.DrawStart, (e) => {
            // console.log('绘制开始', JSON.stringify(e));
            clip(e);
          });
          curAction?.current?.on?.(ActionEvents.Drawing, (e) => {
            // console.log('绘制中', JSON.stringify(e));
            clip(e);
          });
          curAction?.current?.on?.(ActionEvents.DrawEnd, (e) => {
            // curAction.current.start(data?.style);
            // console.log('绘制完成', JSON.stringify(e));
            clip(e);
          });
          polygonSelection?.current?.changeAction?.(curAction.current as IAction);
          curAction?.current?.start?.(style);
        });
      };

      /**
       * renderCroppingTools
       * @returns
       */
      const renderCroppingTools = () => {
        const tools = [
          {
            key: 'rectangle',
            value:
              (!toolBarConfig ||
                !('rectangle' in toolBarConfig) ||
                !('hide' in toolBarConfig.rectangle!) ||
                !toolBarConfig?.rectangle?.hide) &&
              (toolBarConfig?.rectangle?.render?.(
                onClickHOC(SelectType.Rectangle, RectangleDrawAction),
              ) || (
                <Button
                  key="rectangle"
                  block
                  size="large"
                  type={getType(SelectType.Rectangle)}
                  onClick={onClickHOC(SelectType.Rectangle, RectangleDrawAction)}
                >
                  {Intl.v('矩形剪裁')}
                </Button>
              )),
          },
          {
            key: 'circle',
            value:
              (!toolBarConfig ||
                !('circle' in toolBarConfig) ||
                !('hide' in toolBarConfig.circle!) ||
                !toolBarConfig?.circle?.hide) &&
              (toolBarConfig?.circle?.render?.(onClickHOC(SelectType.Circle, CircleDrawAction)) || (
                <Button
                  key="circle"
                  block
                  size="large"
                  type={getType(SelectType.Circle)}
                  onClick={onClickHOC(SelectType.Circle, CircleDrawAction)}
                >
                  {Intl.v('圆形剪裁')}
                </Button>
              )),
          },
          {
            key: 'start',
            value:
              (!toolBarConfig ||
                !('start' in toolBarConfig) ||
                !('hide' in toolBarConfig.start!) ||
                !toolBarConfig?.start?.hide) &&
              (toolBarConfig?.start?.render?.(onClickHOC(SelectType.Start, StartDrawAction)) || (
                <Button
                  key="start"
                  block
                  size="large"
                  type={getType(SelectType.Start)}
                  onClick={onClickHOC(SelectType.Start, StartDrawAction)}
                >
                  {Intl.v('五角星剪裁')}
                </Button>
              )),
          },
          {
            key: 'triangle',
            value:
              (!toolBarConfig ||
                !('triangle' in toolBarConfig) ||
                !('hide' in toolBarConfig.triangle!) ||
                !toolBarConfig?.triangle?.hide) &&
              (toolBarConfig?.triangle?.render?.(
                onClickHOC(SelectType.Triangle, TriangleDrawAction),
              ) || (
                <Button
                  key="triangle"
                  block
                  size="large"
                  type={getType(SelectType.Triangle)}
                  onClick={onClickHOC(SelectType.Triangle, TriangleDrawAction)}
                >
                  {Intl.v('三角形剪裁')}
                </Button>
              )),
          },
          {
            key: 'diamond',
            value:
              (!toolBarConfig ||
                !('diamond' in toolBarConfig) ||
                !('hide' in toolBarConfig.diamond!) ||
                !toolBarConfig?.diamond?.hide) &&
              (toolBarConfig?.diamond?.render?.(
                onClickHOC(SelectType.Diamond, DiamondDrawAction),
              ) || (
                <Button
                  key="diamond"
                  block
                  size="large"
                  type={getType(SelectType.Diamond)}
                  onClick={onClickHOC(SelectType.Diamond, DiamondDrawAction)}
                >
                  {Intl.v('菱形剪裁')}
                </Button>
              )),
          },
          {
            key: 'polygon',
            value:
              (!toolBarConfig ||
                !('polygon' in toolBarConfig) ||
                !('hide' in toolBarConfig.polygon!) ||
                !toolBarConfig?.polygon?.hide) &&
              (toolBarConfig?.polygon?.render?.(
                onClickHOC(SelectType.Polygon, PolygonDrawAction),
              ) || (
                <Button
                  key="polygon"
                  block
                  size="large"
                  type={getType(SelectType.Polygon)}
                  onClick={onClickHOC(SelectType.Polygon, PolygonDrawAction)}
                >
                  {Intl.v('多边形剪裁')}
                </Button>
              )),
          },
        ];

        return tools.filter((t) => !!t.value);
      };

      let toolsArr: Array<any> = [
        {
          key: 'open',
          value: toolBarConfig?.open?.render?.(() => {
            inputFileFieldRef.current?.click();
          }) || (
            <Button
              key="open"
              block
              size="large"
              type="primary"
              onClick={() => {
                inputFileFieldRef.current?.click();
              }}
            >
              {Intl.v('打开')}
            </Button>
          ),
        },
        base64 ? renderCroppingTools() : [{ key: '', value: null }],
      ]
        .flat()
        .filter((t) => !!t.value);

      toolsArr = sort(
        toolsArr.map((t) => {
          if ('sort' in (toolBarConfig?.[t.key] ?? {})) {
            return {
              ...t,
              sort: toolBarConfig?.[t.key].sort,
            };
          }

          return t;
        }),
      ).map((t) => t.value);

      const direction = ['left', 'right'].includes(toolBarConfig?.direction ?? 'left')
        ? 'vertical'
        : 'horizontal';

      return (
        <Card>
          <Space direction={direction} size={20}>
            <input
              type="file"
              ref={inputFileFieldRef}
              accept="image/*"
              style={{ display: 'none' }}
            />
            {toolsArr}
          </Space>
        </Card>
      );
    }, [type, toolProps, base64, toolBarConfig]);

    /**
     * renderArea
     */
    const renderArea = useMemo(
      () => (
        <Card>
          <div className={`${selectorPrefix}-background`} style={{ minHeight: minHeight || 200 }}>
            {base64 && (
              <div className={`${selectorPrefix}-background-inner`}>
                <img ref={base64Ref} src={base64} alt="" />
                <div className={`${selectorPrefix}-background-mask`}></div>
              </div>
            )}
          </div>
          <div className={`${selectorPrefix}-geometry`} ref={geometryRef}></div>
          <div className={`${selectorPrefix}-clip`} ref={clipRef}></div>
        </Card>
      ),
      [base64, areaProps],
    );

    const image = useCallback(() => {
      const img = new Image();

      img.src = base64;

      return img;
    }, [base64]);

    /**
     * useUpdateLayoutEffect
     */
    useUpdateLayoutEffect(() => {
      setType(null);

      if (base64Ref.current) {
        base64Ref.current.onload = () => {
          if (polygonSelection.current) {
            data.current = null;
            destroyClip();
            destroySelection();
          }

          createClip();
          createSelection();
        };
      }
    }, [base64]);

    /**
     * useLayoutEffect
     */
    useLayoutEffect(() => {
      const onChange = (e) => {
        const file = e.target.files[0];

        const read = new FileReader();

        read.onload = (e) => {
          setBase64(e.target?.result as string);
        };

        read.readAsDataURL(file);
      };

      inputFileFieldRef.current?.addEventListener('change', onChange);

      return () => {
        inputFileFieldRef.current?.removeEventListener('change', onChange);
      };
    }, []);

    useImperativeHandle(ref, () => ({
      /**
       * save
       * @return {string}
       */
      save: (): string => {
        // 通过data获取外接矩形数据
        // 创建一个canvas，绘制base64
        // getImageData(矩形数据)
        if (!data.current || !data.current.data || !base64) return '';

        return getClipDataUrl({
          data: data.current,
          clipCtx: clipCanvasCtx.current as CanvasRenderingContext2D,
        });
      },
    }));

    /**
     * clip
     * @param {IActionData} e
     * @return void
     */
    const clip = (e) => {
      if (!e.data) return;

      data.current = e;

      clipCanvasCtx.current?.restore?.();
      clipCanvasCtx.current?.save?.();
      clipCanvasCtx.current?.clearRect(
        0,
        0,
        clipCanvasEL.current?.width as number,
        clipCanvasEL.current?.height as number,
      );

      const drawMap = new Map<SelectType, (ctx: CanvasRenderingContext2D, data: any) => void>([
        [SelectType.Circle, drawCircle],
        [SelectType.Rectangle, drawRectangle],
        [SelectType.Diamond, drawDiamond],
        [SelectType.Start, drawStart],
        [SelectType.Triangle, drawTriangle],
        [SelectType.Polygon, drawPolygon],
      ]);

      drawMap.get(e.selectType)?.(clipCanvasCtx.current!, e.data);

      clipCanvasCtx?.current?.clip();

      clipCanvasCtx?.current?.drawImage(
        image(),
        0,
        0,
        clipCanvasEL.current?.width as number,
        clipCanvasEL.current?.height as number,
      );
    };

    /**
     * clearClip
     */
    const clearClip = () => {
      clipCanvasCtx.current?.restore();
      clipCanvasCtx.current?.clearRect?.(
        0,
        0,
        clipCanvasEL.current?.width as number,
        clipCanvasEL.current?.height as number,
      );
    };

    /**
     * destroyClip
     * @returns
     */
    const destroyClip = () => {
      if (!clipRef.current) return;

      clipRef.current.innerHTML = '';
    };

    /**
     * createClip
     */
    const createClip = () => {
      clipCanvasEL.current = document.createElement('canvas');

      clipCanvasEL.current.width = base64Ref.current?.offsetWidth as number;
      clipCanvasEL.current.height = base64Ref.current?.offsetHeight as number;

      clipCanvasCtx.current = clipCanvasEL.current?.getContext?.('2d') as CanvasRenderingContext2D;

      clipRef.current?.appendChild?.(clipCanvasEL.current);
    };

    /**
     * destroySelection
     */
    const destroySelection = () => {
      polygonSelection?.current?.destroy?.();
    };

    /**
     * createSelection
     * @returns
     */
    const createSelection = () => {
      if (!geometryRef.current) return;

      geometryRef.current.style.width = `${base64Ref?.current?.offsetWidth}px`;
      geometryRef.current.style.height = `${base64Ref?.current?.offsetHeight}px`;
      polygonSelection.current = new PolygonSelection.PolygonSelection(geometryRef.current);

      /**
       * CanvasClickGeometry
       */
      polygonSelection.current.on(PolygonSelectionActions.CanvasClickGeometry, (data) => {
        // 多边形数据据
        // const d = {
        //   selectType: 'Polygon',
        //   actionType: 'Draw',
        //   data: {
        //     id: 'fd4ef30f-8add-4cc1-8f36-d861e77b5354',
        //     type: 'Polygon',
        //     data: [
        //       { x: 148.34375, y: 33 },
        //       { x: 120.34375, y: 198 },
        //       { x: 360.34375, y: 181 },
        //     ],
        //     style: {
        //       fillStyle: 'red',
        //       strokeStyle: '#000',
        //       lineWidth: 2,
        //       lineCap: 'round',
        //       lineJoin: 'round',
        //       lineDash: [],
        //       lineDashOffset: -1,
        //     },
        //   },
        // };
        //
        // polygonSelection.current.clearDraw();
        // polygonSelection.current.addHistoryData(d.data);
        // polygonSelection.current.drawHistoryData();
        //
        // const action = new PolygonModifyAction(d);
        // action.on(ActionEvents.End, () => {
        //   action.start();
        // });
        // polygonSelection.current.changeAction(action);
        // action.start();

        // console.log('click');

        const Component = typeActionMap.get(data.type);

        const action = new Component({
          selectType: data.type,
          actionType: 'Draw',
          data,
        });

        action.setAnchorStyle({ ...anchorStyle });
        action.setMoveGemStyle({ ...anchorStyle });

        action.on(ActionEvents.ModifyBeforeStart, (e) => {
          // console.log('修改开始前', JSON.stringify(e));
          clip(e);
        });
        action.on(ActionEvents.ModifyStart, (e) => {
          // console.log('修改开始', JSON.stringify(e));
          clip(e);
        });
        action.on(ActionEvents.Modifying, (e) => {
          // console.log('修改中', JSON.stringify(e));
          clip(e);
        });
        action.on(ActionEvents.ModifyEnd, (e) => {
          // console.log('修改完成', JSON.stringify(e));
          clip(e);
          action.start();
        });

        action.on(ActionEvents.Moving, (e) => {
          // console.log('移动中', JSON.stringify(e));
          clip(e);
        });
        action.on(ActionEvents.MoveEnd, (e) => {
          // console.log('移动完成', JSON.stringify(e));
          clip(e);
        });

        polygonSelection?.current?.changeAction(action);

        action.start();
      });

      /**
       * CanvasClickEmpty
       */
      polygonSelection.current.on(PolygonSelectionActions.CanvasClickEmpty, () => {
        // console.log('clickEmpty');
        polygonSelection?.current?.clearDraw();
        polygonSelection?.current?.clearAssistDraw();
        polygonSelection?.current?.drawHistoryData();
      });
    };

    const children = layoutMap.get(toolBarConfig?.direction || 'left')?.();

    return (
      <div
        ref={wrapRef}
        className={`${classNames(selectorPrefix, className ?? '')}`}
        style={wrapStyle ?? {}}
      >
        {children}
      </div>
    );
  },
);

export default CroppingCore;
