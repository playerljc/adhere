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
  IEventParams,
} from '../types';
import { SelectType } from '../types';
import { ActionEvents, IActionData, PolygonSelectionActions } from '../types';
import {
  drawCircle,
  drawDiamond,
  drawPolygon,
  drawRectangle,
  drawStart,
  drawTriangle,
  getClipDataUrl,
  sort,
} from './Util';

const selectorPrefix = 'adhere-ui-cropping-core';

/**
 * 裁剪核心组件
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 裁剪核心组件
 * @description 提供图片裁剪功能的核心组件，支持多种几何图形的绘制和修改
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

    /**
     * 布局映射
     * @description 定义不同方向的布局配置
     */
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

    /**
     * 选择类型到Action类的映射
     * @description 定义不同几何图形对应的修改Action类
     */
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

    /**
     * 默认样式配置
     * @description 定义绘制几何图形时的默认样式
     */
    const style: IStyle = useMemo(
      () => ({
        fillStyle: 'transparent',
        strokeStyle: '#fff',
        lineWidth: 1,
        lineCap: 'round',
        lineJoin: 'round',
        lineDash: [],
        lineDashOffset: -1,
        globalAlpha: 1,
      }),
      [],
    );

    /**
     * 锚点样式配置
     * @description 定义控制点的样式
     */
    const anchorStyle = {
      fillStyle: '#fff',
    };

    /**
     * 默认包装属性
     * @description 定义包装组件的默认属性
     */
    const defaultProps = useMemo<CroppingCoreWrapProps>(
      () => ({
        gutter: 20,
        wrapClassName: `${selectorPrefix}-inner`,
      }),
      [],
    );

    /**
     * 默认工具栏属性
     * @description 定义工具栏的默认属性
     */
    const defaultToolbarProps = useMemo<CroppingCoreToolProps>(
      () => ({
        fit: true,
      }),
      [],
    );

    /**
     * 默认区域属性
     * @description 定义区域的默认属性
     */
    const defaultCProps = useMemo<CroppingCoreAreaProps>(
      () => ({
        autoFixed: true,
      }),
      [],
    );

    /**
     * 渲染工具栏
     * @description 渲染工具栏组件，包含各种绘制工具
     */
    const renderTool = useMemo(() => {
      /**
       * 获取按钮类型
       * @param _type - 选择类型
       * @returns 按钮类型
       */
      const getType = (_type: SelectType) => {
        return _type === type ? 'primary' : 'default';
      };

      /**
       * 点击前的处理
       * @param _type - 选择类型
       * @returns Promise
       */
      const onBeforeClick = (_type: SelectType) => {
        if (_type !== type) {
          clearClip();
          polygonSelection?.current?.clearCanvasAll?.();
          data.current = null;
          setType(_type);
        }

        return _type !== type ? Promise.resolve() : Promise.reject();
      };

      /**
       * 点击处理的高阶函数
       * @param type - 选择类型
       * @param ActionClass - Action类
       * @returns 点击处理函数
       */
      const onClickHOC = (type: SelectType, ActionClass: any) => () => {
        onBeforeClick(type).then(() => {
          curAction.current = new ActionClass();

          if (!curAction.current) return;

          curAction.current.setAnchorStyle({ ...anchorStyle });
          curAction.current.setMoveGemStyle({ ...anchorStyle });

          // 绑定事件监听器
          curAction?.current?.on?.(ActionEvents.DrawBeforeStart, (e: IEventParams) => {
            clip(e);
          });
          curAction?.current?.on?.(ActionEvents.DrawStart, (e: IEventParams) => {
            clip(e);
          });
          curAction?.current?.on?.(ActionEvents.Drawing, (e: IEventParams) => {
            clip(e);
          });
          curAction?.current?.on?.(ActionEvents.DrawEnd, (e: IEventParams) => {
            clip(e);
          });

          polygonSelection?.current?.changeAction?.(curAction.current as IAction);
          curAction?.current?.start?.(style);
        });
      };

      /**
       * 渲染裁剪工具
       * @returns 工具按钮数组
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
                  {Intl.get('crop_rectangle')}
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
                  {Intl.get('crop_circle')}
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
                  {Intl.get('crop_star')}
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
                  {Intl.get('crop_triangle')}
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
                  {Intl.get('crop_diamond')}
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
                  {Intl.get('crop_polygon')}
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
              {Intl.get('open')}
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
     * 渲染区域
     * @description 渲染裁剪区域组件
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
      [base64, areaProps, minHeight],
    );

    /**
     * 创建图片对象
     * @returns 图片对象
     * @description 根据base64创建图片对象
     */
    const image = useCallback(() => {
      const img = new Image();
      img.src = base64;
      return img;
    }, [base64]);

    /**
     * 更新布局效果
     * @description 当base64变化时重新初始化组件
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
     * 布局效果
     * @description 初始化文件输入事件监听器
     */
    useLayoutEffect(() => {
      const onChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];
        if (!file) return;

        const read = new FileReader();
        read.onload = (e) => {
          const result = e.target?.result as string;
          setBase64(result);
        };
        read.readAsDataURL(file);
      };

      inputFileFieldRef.current?.addEventListener('change', onChange);

      return () => {
        inputFileFieldRef.current?.removeEventListener('change', onChange);
      };
    }, []);

    /**
     * 暴露给父组件的方法
     * @description 定义组件对外暴露的接口
     */
    useImperativeHandle(ref, () => ({
      /**
       * 保存裁剪结果
       * @returns base64格式的图片数据URL
       */
      save: (): string => {
        if (!data.current || !data.current.data || !base64) return '';

        return getClipDataUrl({
          data: data.current,
          clipCtx: clipCanvasCtx.current as CanvasRenderingContext2D,
        });
      },
    }));

    /**
     * 裁剪处理
     * @param e - 事件参数或Action数据
     * @description 根据事件数据执行裁剪操作
     */
    const clip = (e: IEventParams | IActionData) => {
      const actionData = 'data' in e ? e.data : e;
      if (!actionData) return;

      data.current = actionData;

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

      const selectType = 'selectType' in e ? e.selectType : actionData.type;
      drawMap.get(selectType as SelectType)?.(clipCanvasCtx.current!, actionData);

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
     * 清除裁剪
     * @description 清除当前的裁剪内容
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
     * 销毁裁剪
     * @description 销毁裁剪相关的DOM元素
     */
    const destroyClip = () => {
      if (!clipRef.current) return;
      clipRef.current.innerHTML = '';
    };

    /**
     * 创建裁剪
     * @description 创建裁剪Canvas元素
     */
    const createClip = () => {
      clipCanvasEL.current = document.createElement('canvas');

      clipCanvasEL.current.width = base64Ref.current?.offsetWidth as number;
      clipCanvasEL.current.height = base64Ref.current?.offsetHeight as number;

      clipCanvasCtx.current = clipCanvasEL.current?.getContext?.('2d') as CanvasRenderingContext2D;

      clipRef.current?.appendChild?.(clipCanvasEL.current);
    };

    /**
     * 销毁选择
     * @description 销毁多边形选择组件
     */
    const destroySelection = () => {
      polygonSelection?.current?.destroy?.();
    };

    /**
     * 创建选择
     * @description 创建多边形选择组件
     */
    const createSelection = () => {
      if (!geometryRef.current) return;

      geometryRef.current.style.width = `${base64Ref?.current?.offsetWidth}px`;
      geometryRef.current.style.height = `${base64Ref?.current?.offsetHeight}px`;
      polygonSelection.current = new PolygonSelection.PolygonSelection(geometryRef.current);

      /**
       * Canvas点击几何图形事件
       * @description 处理点击几何图形时的修改操作
       */
      polygonSelection.current.on(PolygonSelectionActions.CanvasClickGeometry, (data: IActionData) => {
        const Component = typeActionMap.get(data.type as SelectType);
        if (!Component) return;

        const action = new Component({
          selectType: data.type as SelectType,
          actionType: 'Draw',
          data,
        });

        action.setAnchorStyle({ ...anchorStyle });
        action.setMoveGemStyle({ ...anchorStyle });

        // 绑定修改事件监听器
        action.on(ActionEvents.ModifyBeforeStart, (e: IEventParams) => {
          clip(e);
        });
        action.on(ActionEvents.ModifyStart, (e: IEventParams) => {
          clip(e);
        });
        action.on(ActionEvents.Modifying, (e: IEventParams) => {
          clip(e);
        });
        action.on(ActionEvents.ModifyEnd, (e: IEventParams) => {
          clip(e);
          action.start();
        });

        // 绑定移动事件监听器
        action.on(ActionEvents.Moving, (e: IEventParams) => {
          clip(e);
        });
        action.on(ActionEvents.MoveEnd, (e: IEventParams) => {
          clip(e);
        });

        polygonSelection?.current?.changeAction(action);
        action.start();
      });

      /**
       * Canvas点击空白区域事件
       * @description 处理点击空白区域时的清理操作
       */
      polygonSelection.current.on(PolygonSelectionActions.CanvasClickEmpty, () => {
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

CroppingCore.displayName = 'CroppingCore';

export default CroppingCore;
