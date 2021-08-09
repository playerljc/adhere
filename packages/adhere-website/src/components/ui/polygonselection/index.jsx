import React, { useState, useRef } from 'react';

import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import ImageSelect from './imageselect';

export default () => {
  return (
    <div className="Page">
      <h1>PolygonSelection</h1>
      <p>多功能选区</p>
      <ul>
        <li>- 圆形区域</li>
        <li>- 菱形区域</li>
        <li>- 多边形区域</li>
        <li>- 矩形形区域</li>
        <li>- 五角星区域</li>
        <li>- 三角形区域</li>
        <li>- 自由绘制区域</li>
      </ul>

      <h2>PolygonSelection</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>CircleDrawAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>DiamondDrawAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>FreeDrawAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>PolygonDrawAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>RectangleDrawAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>StartDrawAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>TriangleDrawAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>CircleModifyAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>DiamondModifyAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>PolygonModifyAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>RectangleModifyAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>StartModifyAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>TriangleModifyAction</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>图片截取</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={``}
      >
        <ImageSelect />
      </Playground>
    </div>
  );
};
