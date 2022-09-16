import React from 'react';
import ReactDOM from 'react-dom';

import CircleDrawAction from './draw/circleDrawAction';
import DiamondDrawAction from './draw/diamondDrawAction';
import FreeDrawAction from './draw/freeDrawAction';
import PolygonDrawAction from './draw/polygonDrawAction';
import RectangleDrawAction from './draw/rectangleDrawAction';
import StartDrawAction from './draw/startDrawAction';
import TriangleDrawAction from './draw/triangleDrawAction';
import PolygonSelection from './index.ts';
import CircleModifyAtion from './modify/circleModifyAction';
import DiamondModifyAction from './modify/diamondModifyAction';
import PolygonModifyAction from './modify/polygonModifyAction';
import RectangleModifyAction from './modify/rectangleModifyAction';
import StartModifyAction from './modify/startModifyAction';
import TriangleModifyAction from './modify/triangleModifyAction';
import { ActionEvents, PolygonSelectionActions, SelectType } from './types';

import './index.less';

/**
 * DrawingBoard
 * @class DrawingBoard
 * @classdesc DrawingBoard
 */
class DrawingBoard extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.polygonSelection = new PolygonSelection.PolygonSelection(this.ref.current);

    // ActionType
    // @ts-ignore
    const typeActionMap = new Map([
      [SelectType.Polygon, PolygonModifyAction],
      [SelectType.Circle, CircleModifyAtion],
      [SelectType.Rectangle, RectangleModifyAction],
      [SelectType.Triangle, TriangleModifyAction],
      [SelectType.Diamond, DiamondModifyAction],
      [SelectType.Start, StartModifyAction],
    ]);

    this.polygonSelection.on(PolygonSelectionActions.CanvasClickGeometry, (data) => {
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
      // this.polygonSelection.clearDraw();
      // this.polygonSelection.addHistoryData(d.data);
      // this.polygonSelection.drawHistoryData();
      //
      // const action = new PolygonModifyAction(d);
      // action.on(ActionEvents.End, () => {
      //   action.start();
      // });
      // this.polygonSelection.changeAction(action);
      // action.start();

      console.log('click');

      const Component = typeActionMap.get(data.type);
      const action = new Component({
        selectType: data.type,
        actionType: 'Draw',
        data,
      });
      action.on(ActionEvents.End, () => {
        action.start();
      });
      this.polygonSelection.changeAction(action);

      action.start();
    });

    this.polygonSelection.on(PolygonSelectionActions.CanvasClickEmpty, () => {
      console.log('clickEmpty');
      this.polygonSelection.clearDraw();
      this.polygonSelection.clearAssistDraw();
      this.polygonSelection.drawHistoryData();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="fixed">
          <ul>
            <li>
              <button
                onClick={() => {
                  const action = new PolygonDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                多边形绘制
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const action = new CircleDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                圆形绘制
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const action = new RectangleDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                矩形绘制
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const action = new TriangleDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                三角形绘制
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const action = new DiamondDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                菱形绘制
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const action = new StartDrawAction();
                  action.on(ActionEvents.End, (data) => {
                    // action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                五角星绘制
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const action = new FreeDrawAction();
                  action.on(ActionEvents.End, () => {
                    // action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                自由绘制
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  // 圆形数据
                  // const d = {
                  //   selectType: 'Circle',
                  //   actionType: 'Draw',
                  //   data: {
                  //     id: 'f7172e54-d019-417e-83b5-4c1bd62a4726',
                  //     type: 'Circle',
                  //     data: { center: { x: 263.34375, y: 147 }, radius: 199.81241202688085 },
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

                  // 五角星数据
                  // const d = {
                  //   selectType: 'Start',
                  //   actionType: 'Draw',
                  //   data: {
                  //     id: '113e1bf4-3d94-48fb-9ee7-f1353c9e7f2f',
                  //     type: 'Start',
                  //     data: {
                  //       center: { x: 269.34375, y: 138 },
                  //       outRadius: 119.63277142990545,
                  //       innerRadius: 59.81638571495272,
                  //     },
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

                  // 矩形数据
                  // const d = {
                  //   selectType: 'Rectangle',
                  //   actionType: 'Draw',
                  //   data: {
                  //     id: 'b45017c9-1684-4251-b9aa-41392a40ab90',
                  //     type: 'Rectangle',
                  //     data: { leftTopPoint: { x: 102.34375, y: 92 }, width: 351, height: 168 },
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

                  // 菱形数据
                  // const d = {
                  //   selectType: 'Diamond',
                  //   actionType: 'Draw',
                  //   data: {
                  //     id: 'eda99742-7eb6-49ee-bb4b-fa979a71a4d4',
                  //     type: 'Diamond',
                  //     data: { leftTopPoint: { x: 304.34375, y: 188 }, width: 331, height: 276 },
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

                  // 三角形数据
                  // const d = {
                  //   selectType: 'Triangle',
                  //   actionType: 'Draw',
                  //   data: {
                  //     id: '5540e3a7-a49f-4d23-8e1a-4973e1f2af99',
                  //     type: 'Triangle',
                  //     data: {
                  //       points: [
                  //         { x: 130.34375, y: 342 },
                  //         { x: 333.34375, y: 91 },
                  //         {
                  //           x: 536.34375,
                  //           y: 342,
                  //         },
                  //       ],
                  //     },
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

                  // 多边形数据据
                  const d = {
                    selectType: 'Polygon',
                    actionType: 'Draw',
                    data: {
                      id: 'fd4ef30f-8add-4cc1-8f36-d861e77b5354',
                      type: 'Polygon',
                      data: [
                        { x: 148.34375, y: 33 },
                        { x: 120.34375, y: 198 },
                        { x: 360.34375, y: 181 },
                      ],
                      style: {
                        fillStyle: 'red',
                        strokeStyle: '#000',
                        lineWidth: 2,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [],
                        lineDashOffset: -1,
                      },
                    },
                  };

                  this.polygonSelection.clearDraw();
                  this.polygonSelection.addHistoryData(d.data);
                  this.polygonSelection.drawHistoryData();

                  const action = new PolygonModifyAction(d);
                  action.on(ActionEvents.End, () => {
                    action.start();
                  });
                  this.polygonSelection.changeAction(action);
                  action.start();
                }}
              >
                修改
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const data = this.polygonSelection.getHistoryData();
                  console.log(JSON.stringify(data));
                }}
              >
                获取数据
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const d = [
                    {
                      id: 'fab046b1-5686-40b2-94f7-408f68091f21',
                      type: 'Polygon',
                      data: [
                        { x: 206.34375, y: 114 },
                        { x: 188.34375, y: 111 },
                        { x: 147.34375, y: 216 },
                        { x: 252.34375, y: 235 },
                        { x: 239.34375, y: 192 },
                        { x: 239.34375, y: 192 },
                      ],
                      style: {
                        fillStyle: 'red',
                        strokeStyle: '#000',
                        lineWidth: 2,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [],
                        lineDashOffset: -1,
                      },
                    },
                    {
                      id: '36e97f70-d98d-412c-9cae-6ab2926f410f',
                      type: 'Polygon',
                      data: [
                        { x: 523.34375, y: 191 },
                        { x: 453.34375, y: 117 },
                        { x: 578.34375, y: 113 },
                        { x: 578.34375, y: 113 },
                      ],
                      style: {
                        fillStyle: 'red',
                        strokeStyle: '#000',
                        lineWidth: 2,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [],
                        lineDashOffset: -1,
                      },
                    },
                    {
                      id: '1a22efa1-d9cd-41da-8049-669cb082e339',
                      type: 'Circle',
                      data: { center: { x: 797.34375, y: 251 }, radius: 74.33034373659252 },
                      style: {
                        fillStyle: 'red',
                        strokeStyle: '#000',
                        lineWidth: 2,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [],
                        lineDashOffset: -1,
                      },
                    },
                    {
                      id: '81234bb8-b8a0-4f5e-bd13-6f34358018bd',
                      type: 'Rectangle',
                      data: { leftTopPoint: { x: 1077.34375, y: 311 }, width: 83, height: 75 },
                      style: {
                        fillStyle: 'red',
                        strokeStyle: '#000',
                        lineWidth: 2,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [],
                        lineDashOffset: -1,
                      },
                    },
                    {
                      id: '9482810d-a80f-4294-8d26-bafd14ddeb0f',
                      type: 'Free',
                      data: {
                        points: [
                          { x: 106.34375, y: 412 },
                          { x: 107.34375, y: 412 },
                          { x: 108.34375, y: 412 },
                          { x: 109.34375, y: 412 },
                          { x: 110.34375, y: 412 },
                          { x: 110.34375, y: 413 },
                          { x: 111.34375, y: 413 },
                          { x: 112.34375, y: 413 },
                          { x: 113.34375, y: 414 },
                          { x: 114.34375, y: 414 },
                          { x: 115.34375, y: 414 },
                          { x: 116.34375, y: 414 },
                          { x: 117.34375, y: 414 },
                          { x: 118.34375, y: 414 },
                          { x: 119.34375, y: 415 },
                          { x: 120.34375, y: 415 },
                          { x: 121.34375, y: 415 },
                          { x: 122.34375, y: 415 },
                          { x: 123.34375, y: 415 },
                          { x: 123.34375, y: 416 },
                          { x: 123.34375, y: 419 },
                          { x: 124.34375, y: 423 },
                          { x: 124.34375, y: 437 },
                          { x: 124.34375, y: 452 },
                          { x: 120.34375, y: 469 },
                          { x: 118.34375, y: 480 },
                          { x: 115.34375, y: 490 },
                          { x: 112.34375, y: 498 },
                          { x: 110.34375, y: 501 },
                          { x: 109.34375, y: 505 },
                          { x: 108.34375, y: 506 },
                          { x: 107.34375, y: 507 },
                          { x: 105.34375, y: 508 },
                          { x: 104.34375, y: 508 },
                          { x: 101.34375, y: 508 },
                          { x: 98.34375, y: 508 },
                          { x: 96.34375, y: 508 },
                          { x: 93.34375, y: 508 },
                          { x: 88.34375, y: 507 },
                          { x: 84.34375, y: 505 },
                          { x: 80.34375, y: 504 },
                          { x: 74.34375, y: 501 },
                          { x: 69.34375, y: 499 },
                          { x: 65.34375, y: 498 },
                          { x: 62.34375, y: 497 },
                          { x: 61.34375, y: 495 },
                          { x: 61.34375, y: 494 },
                          { x: 61.34375, y: 492 },
                          { x: 61.34375, y: 489 },
                          { x: 62.34375, y: 484 },
                          { x: 64.34375, y: 480 },
                          { x: 67.34375, y: 476 },
                          { x: 69.34375, y: 472 },
                          { x: 71.34375, y: 468 },
                          { x: 74.34375, y: 465 },
                          { x: 77.34375, y: 462 },
                          { x: 82.34375, y: 457 },
                          { x: 85.34375, y: 455 },
                          { x: 87.34375, y: 453 },
                          { x: 88.34375, y: 452 },
                          { x: 90.34375, y: 451 },
                          { x: 90.34375, y: 450 },
                          { x: 93.34375, y: 449 },
                          { x: 95.34375, y: 449 },
                          { x: 98.34375, y: 448 },
                          { x: 102.34375, y: 447 },
                          { x: 107.34375, y: 447 },
                          { x: 113.34375, y: 447 },
                          { x: 118.34375, y: 446 },
                          { x: 123.34375, y: 446 },
                          { x: 127.34375, y: 446 },
                          { x: 131.34375, y: 446 },
                          { x: 138.34375, y: 446 },
                          { x: 142.34375, y: 446 },
                          { x: 147.34375, y: 447 },
                          { x: 153.34375, y: 448 },
                          { x: 158.34375, y: 448 },
                          { x: 163.34375, y: 449 },
                          { x: 167.34375, y: 449 },
                          { x: 174.34375, y: 450 },
                          { x: 177.34375, y: 450 },
                          { x: 181.34375, y: 450 },
                          { x: 185.34375, y: 450 },
                          { x: 189.34375, y: 450 },
                          { x: 194.34375, y: 450 },
                          { x: 198.34375, y: 450 },
                          { x: 200.34375, y: 450 },
                          { x: 202.34375, y: 450 },
                          { x: 204.34375, y: 450 },
                          { x: 206.34375, y: 450 },
                          { x: 208.34375, y: 449 },
                          { x: 210.34375, y: 448 },
                          { x: 213.34375, y: 446 },
                          { x: 215.34375, y: 444 },
                          { x: 216.34375, y: 444 },
                          { x: 219.34375, y: 442 },
                          { x: 221.34375, y: 442 },
                          { x: 222.34375, y: 441 },
                          { x: 223.34375, y: 441 },
                          { x: 225.34375, y: 440 },
                          { x: 225.34375, y: 439 },
                          { x: 227.34375, y: 439 },
                          { x: 227.34375, y: 438 },
                          { x: 228.34375, y: 437 },
                          { x: 228.34375, y: 436 },
                          { x: 229.34375, y: 435 },
                          { x: 229.34375, y: 434 },
                          { x: 229.34375, y: 432 },
                          { x: 229.34375, y: 431 },
                          { x: 229.34375, y: 430 },
                          { x: 229.34375, y: 428 },
                          { x: 229.34375, y: 426 },
                          { x: 229.34375, y: 423 },
                          { x: 229.34375, y: 420 },
                          { x: 229.34375, y: 419 },
                          { x: 229.34375, y: 416 },
                          { x: 228.34375, y: 414 },
                          { x: 227.34375, y: 412 },
                          { x: 227.34375, y: 411 },
                          { x: 226.34375, y: 410 },
                          { x: 225.34375, y: 409 },
                          { x: 223.34375, y: 405 },
                          { x: 222.34375, y: 403 },
                          { x: 221.34375, y: 402 },
                          { x: 220.34375, y: 399 },
                          { x: 219.34375, y: 398 },
                          { x: 218.34375, y: 396 },
                          { x: 217.34375, y: 396 },
                          { x: 216.34375, y: 394 },
                          { x: 215.34375, y: 393 },
                          { x: 214.34375, y: 391 },
                          { x: 212.34375, y: 389 },
                          { x: 210.34375, y: 387 },
                          { x: 208.34375, y: 386 },
                          { x: 207.34375, y: 385 },
                          { x: 206.34375, y: 384 },
                          { x: 205.34375, y: 384 },
                          { x: 204.34375, y: 384 },
                          { x: 202.34375, y: 382 },
                          { x: 198.34375, y: 381 },
                          { x: 195.34375, y: 379 },
                          { x: 192.34375, y: 378 },
                          { x: 190.34375, y: 378 },
                          { x: 188.34375, y: 377 },
                          { x: 187.34375, y: 376 },
                          { x: 186.34375, y: 376 },
                          { x: 184.34375, y: 376 },
                          { x: 183.34375, y: 375 },
                          { x: 183.34375, y: 375 },
                        ],
                      },
                      style: {
                        fillStyle: 'red',
                        strokeStyle: '#000',
                        lineWidth: 2,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [],
                        lineDashOffset: -1,
                      },
                    },
                  ];
                  this.polygonSelection.setHistoryData(d);
                  this.polygonSelection.clearDraw();
                  this.polygonSelection.drawHistoryData();
                }}
              >
                设置数据
              </button>
            </li>
          </ul>
        </div>
        <div className="auto" style={{ position: 'relative' }} ref={this.ref}></div>
      </div>
    );
  }
}

ReactDOM.render(<DrawingBoard />, document.getElementById('app'));
