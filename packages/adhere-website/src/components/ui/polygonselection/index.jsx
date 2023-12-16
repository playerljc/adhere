import CroppingCodeText from '!!raw-loader!./cropping';
import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import ImageSelectCodeText from '!!raw-loader!./imageselect';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

import CroppingLessCodeText from '!!raw-loader!./cropping.less';
import ImageSelectLessCodeText from '!!raw-loader!./imageselect.less';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        active: 'p1.jsx',
        config: [
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            codeText: P1CodeText,
          },
          {
            key: 'imageselect.jsx',
            title: 'imageselect.jsx',
            codeText: ImageSelectCodeText,
          },
          {
            key: 'imageselect.less',
            title: 'imageselect.less',
            codeText: ImageSelectLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P1 />,
      },
      {
        id: 'p2',
        name: '图片裁剪',
        cardProps: {
          description: {
            title: '图片裁剪',
            info: '图片裁剪',
          },
        },
        active: 'p2.jsx',
        config: [
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            codeText: P2CodeText,
          },
          {
            key: 'cropping.jsx',
            title: 'cropping.jsx',
            codeText: CroppingCodeText,
          },
          {
            key: 'cropping.less',
            title: 'cropping.less',
            codeText: CroppingLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P2 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="PolygonSelection">
        <p>多功能选区</p>
        <ul>
          <li>- 圆形区域</li>
          <li>- 菱形区域</li>
          <li>- 多边形区域</li>
          <li>- 矩形形区域</li>
          <li>- 五角星区域</li>
          <li>- 三角形区域</li>
          <li>- 自由绘制区域</li>
          <li>- 图片裁剪</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Cropping',
            data: [
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'maskClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'maskStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mask',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'modalProps',
                desc: '',
                type: 'ModalProps',
                defaultVal: '',
              },
              {
                params: 'coreProps',
                desc: '',
                type: 'CroppingCoreProps',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(base64?: string) => void',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'CroppingCore',
            data: [
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'wrapProps',
                desc: '',
                type: 'CroppingCoreWrapProps',
                defaultVal: '',
              },
              {
                params: 'toolProps',
                desc: '',
                type: 'CroppingCoreToolProps',
                defaultVal: '',
              },
              {
                params: 'areaProps',
                desc: '',
                type: 'CroppingCoreAreaProps',
                defaultVal: '',
              },
              {
                params: 'minHeight',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'toolBarConfig',
                desc: '',
                type: `
                  {
                    direction?: string | 'left' | 'right' | 'top' | 'bottom';
                    open?: {
                      render?: (handle?: Function) => ReactNode;
                      sort?: number;
                    };
                    rectangle?: {
                      render?: (handle?: Function) => ReactNode;
                      hide?: boolean;
                      sort?: number;
                    };
                    circle?: {
                      render?: (handle?: Function) => ReactNode;
                      hide?: boolean;
                      sort?: number;
                    };
                    start: {
                      render?: (handle?: Function) => ReactNode;
                      hide?: boolean;
                      sort?: number;
                    };
                    triangle: {
                      render?: (handle?: Function) => ReactNode;
                      hide?: boolean;
                      sort?: number;
                    };
                    diamond: {
                      render?: (handle?: Function) => ReactNode;
                      hide?: boolean;
                      sort?: number;
                    };
                    polygon: {
                      render?: (handle?: Function) => ReactNode;
                      hide?: boolean;
                      sort?: number;
                    };
                  }
                `,
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'PolygonSelection',
            data: [
              {
                name: 'getCtx',
                desc: 'getCtx',
                modifier: 'public',
                params: [],
                returnType: 'CanvasRenderingContext2D | null',
                returnDesc: '',
              },
              {
                name: 'getCanvasEl',
                desc: 'getCanvasEl',
                modifier: 'public',
                params: [],
                returnType: 'HTMLCanvasElement | null',
                returnDesc: '',
              },
              {
                name: 'getAssistCtx',
                desc: 'getAssistCtx',
                modifier: 'public',
                params: [],
                returnType: 'CanvasRenderingContext2D | null',
                returnDesc: '',
              },
              {
                name: 'getAssistCanvasEl',
                desc: 'getAssistCanvasEl',
                modifier: 'public',
                params: [],
                returnType: 'HTMLCanvasElement | null',
                returnDesc: '',
              },
              {
                name: 'getWidth',
                desc: 'getWidth',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getHeight',
                desc: 'getHeight',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'addHistoryData',
                desc: '添加一个ActionData到canvasData中',
                modifier: 'public',
                params: [
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IActionData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'removeHistoryDataById',
                desc: '删除一个ActionData中的数据',
                modifier: 'public',
                params: [
                  {
                    name: 'actionDataId',
                    desc: 'actionDataId',
                    type: 'string',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'IActionData[]',
                returnDesc: '',
              },
              {
                name: 'drawHistoryData',
                desc: '绘制历史数据',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getHistoryDataById',
                desc: '获取历史数据',
                modifier: 'public',
                params: [
                  {
                    name: 'id',
                    desc: 'id',
                    type: 'string',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'IActionData | null | undefined ',
                returnDesc: '',
              },
              {
                name: 'getHistoryData',
                desc: '获取历史数据',
                modifier: 'public',
                params: [],
                returnType: 'IActionData[]',
                returnDesc: '',
              },
              {
                name: 'setHistoryData',
                desc: '设置历史数据',
                modifier: 'public',
                params: [
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IActionData[]',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'changeAction',
                desc: '切换一个Action',
                modifier: 'public',
                params: [
                  {
                    name: 'action',
                    desc: 'action对象',
                    type: 'IAction',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getCurAction',
                desc: '获取当前的Action',
                modifier: 'public',
                params: [],
                returnType: 'IAction | null',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: '开始',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: '样式',
                    type: 'IStyle',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: '结束',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearDraw',
                desc: 'clearDraw',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearAssistDraw',
                desc: 'clearAssistDraw',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setFrontCanvas',
                desc: '置顶',
                modifier: 'public',
                params: [
                  {
                    name: 'canvasEl',
                    desc: 'canvasEl',
                    type: 'HTMLCanvasElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setBackCanvas',
                desc: '置底',
                modifier: 'public',
                params: [
                  {
                    name: 'canvasEl',
                    desc: 'canvasEl',
                    type: 'HTMLCanvasElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: '销毁',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'CircleDrawAction',
            data: [
              {
                name: 'booleanPointInData',
                desc: 'booleanPointInData',
                modifier: 'static',
                params: [
                  {
                    name: 'point',
                    desc: 'point',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'ICircleData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'draw',
                desc: 'draw',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'ICircleData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawHistoryPath',
                desc: '绘制历史数据',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: `
                  {
                    center: IPoint;
                    radius: number;
                  }
                `,
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: 'style',
                    type: 'IStyle',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: '获取状态',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'DiamondDrawAction',
            data: [
              {
                name: 'booleanPointInData',
                desc: 'booleanPointInData',
                modifier: 'static',
                params: [
                  {
                    name: 'point',
                    desc: 'point',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IDiamondData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'draw',
                desc: 'draw',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IDiamondData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawHistoryPath',
                desc: '绘制历史数据',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: `
                  {
                    leftTopPoint: IPoint | null;
                    width: number;
                    height: number;
                  }
                `,
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: 'style',
                    type: 'IStyle',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: '获取状态',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'FreeDrawAction',
            data: [
              {
                name: 'draw',
                desc: 'draw',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IFreeData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawHistoryPath',
                desc: '绘制历史数据',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: `
                  {
                    points: IPoint[];
                  }
                `,
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: 'style',
                    type: 'IStyle',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: '获取状态',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'PolygonDrawAction',
            data: [
              {
                name: 'booleanPointInData',
                desc: 'booleanPointInData',
                modifier: 'static',
                params: [
                  {
                    name: 'point',
                    desc: 'point',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IPolygonData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'draw',
                desc: 'draw',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IPolygonData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawHistoryPath',
                desc: '绘制历史数据',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IPoint[]',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: 'style',
                    type: 'IStyle',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: '获取状态',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'RectangleDrawAction',
            data: [
              {
                name: 'booleanPointInData',
                desc: 'booleanPointInData',
                modifier: 'static',
                params: [
                  {
                    name: 'point',
                    desc: 'point',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IRectangleData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'draw',
                desc: 'draw',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IRectangleData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawHistoryPath',
                desc: '绘制历史数据',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: `
                  {
                    leftTopPoint: IPoint | null;
                    width: number;
                    height: number;
                  }
                `,
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: 'style',
                    type: 'IStyle',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: '获取状态',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'StartDrawAction',
            data: [
              {
                name: 'booleanPointInData',
                desc: 'booleanPointInData',
                modifier: 'static',
                params: [
                  {
                    name: 'point',
                    desc: 'point',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IStartData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'draw',
                desc: 'draw',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'IStartData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawHistoryPath',
                desc: '绘制历史数据',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: `
                  {
                    center: IPoint;
                    outRadius: number;
                    innerRadius: number;
                  }
                `,
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: 'style',
                    type: 'IStyle',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: '获取状态',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriangleDrawAction',
            data: [
              {
                name: 'booleanPointInData',
                desc: 'booleanPointInData',
                modifier: 'static',
                params: [
                  {
                    name: 'point',
                    desc: 'point',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'ITriangleData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'draw',
                desc: 'draw',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: 'ITriangleData',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawHistoryPath',
                desc: '绘制历史数据',
                modifier: 'static',
                params: [
                  {
                    name: 'ctx',
                    desc: 'ctx',
                    type: 'CanvasRenderingContext2D',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'data',
                    desc: 'data',
                    type: `
                  {
                    points: IPoint[];
                  }
                `,
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [
                  {
                    name: 'style',
                    desc: 'style',
                    type: 'IStyle',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: '获取状态',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'CircleModifyAction',
            data: [
              {
                name: 'isCanMove',
                desc: 'isCanMove',
                modifier: 'public',
                params: [
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [
                  {
                    name: 'startPoint',
                    desc: 'startPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },

              {
                name: 'initMoveEvents',
                desc: 'initMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearMoveEvents',
                desc: 'clearMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousedown',
                desc: 'onMoveMousedown',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousemove',
                desc: 'onMoveMousemove',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMouseup',
                desc: 'onMoveMouseup',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: 'getStatus',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'DiamondModifyAction',
            data: [
              {
                name: 'isCanMove',
                desc: 'isCanMove',
                modifier: 'public',
                params: [
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [
                  {
                    name: 'startPoint',
                    desc: 'startPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },

              {
                name: 'initMoveEvents',
                desc: 'initMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearMoveEvents',
                desc: 'clearMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousedown',
                desc: 'onMoveMousedown',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousemove',
                desc: 'onMoveMousemove',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMouseup',
                desc: 'onMoveMouseup',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: 'getStatus',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'PolygonModifyAction',
            data: [
              {
                name: 'isCanMove',
                desc: 'isCanMove',
                modifier: 'public',
                params: [
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [
                  {
                    name: 'startPoint',
                    desc: 'startPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },

              {
                name: 'initMoveEvents',
                desc: 'initMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearMoveEvents',
                desc: 'clearMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousedown',
                desc: 'onMoveMousedown',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousemove',
                desc: 'onMoveMousemove',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMouseup',
                desc: 'onMoveMouseup',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: 'getStatus',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'RectangleModifyAction',
            data: [
              {
                name: 'isCanMove',
                desc: 'isCanMove',
                modifier: 'public',
                params: [
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [
                  {
                    name: 'startPoint',
                    desc: 'startPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },

              {
                name: 'initMoveEvents',
                desc: 'initMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearMoveEvents',
                desc: 'clearMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousedown',
                desc: 'onMoveMousedown',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousemove',
                desc: 'onMoveMousemove',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMouseup',
                desc: 'onMoveMouseup',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: 'getStatus',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'StartModifyAction',
            data: [
              {
                name: 'isCanMove',
                desc: 'isCanMove',
                modifier: 'public',
                params: [
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [
                  {
                    name: 'startPoint',
                    desc: 'startPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },

              {
                name: 'initMoveEvents',
                desc: 'initMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearMoveEvents',
                desc: 'clearMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousedown',
                desc: 'onMoveMousedown',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousemove',
                desc: 'onMoveMousemove',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMouseup',
                desc: 'onMoveMouseup',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: 'getStatus',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriangleModifyAction',
            data: [
              {
                name: 'isCanMove',
                desc: 'isCanMove',
                modifier: 'public',
                params: [
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'drawMoveGeometry',
                desc: 'drawMoveGeometry',
                modifier: 'public',
                params: [
                  {
                    name: 'startPoint',
                    desc: 'startPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'targetPoint',
                    desc: 'targetPoint',
                    type: 'IPoint',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },

              {
                name: 'initMoveEvents',
                desc: 'initMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearMoveEvents',
                desc: 'clearMoveEvents',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousedown',
                desc: 'onMoveMousedown',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMousemove',
                desc: 'onMoveMousemove',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'onMoveMouseup',
                desc: 'onMoveMouseup',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: 'start',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'end',
                desc: 'end',
                modifier: 'public',
                params: [
                  {
                    name: 'e',
                    desc: 'e',
                    type: 'MouseEvent',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'destroy',
                desc: 'destroy',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'setContext',
                desc: 'setContext',
                modifier: 'public',
                params: [
                  {
                    name: 'context',
                    desc: 'context',
                    type: 'IPolygonSelection',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStatus',
                desc: 'getStatus',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
