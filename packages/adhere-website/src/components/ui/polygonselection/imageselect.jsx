import React, { useState, useEffect, useRef } from 'react';
import { Button, message } from 'antd';
import {
  PolygonSelection as PolygonSelectionModule,
  Preferences,
  MessageDialog,
} from '@baifendian/adhere';

import styles from './imageselect.less';

const {
  PolygonSelection,
  PolygonDrawAction,
  CircleDrawAction,
  RectangleDrawAction,
  TriangleDrawAction,
  DiamondDrawAction,
  StartDrawAction,
  FreeDrawAction,
  CircleModifyAction,
  DiamondModifyAction,
  PolygonModifyAction,
  RectangleModifyAction,
  TriangleModifyAction,
  StartModifyAction,
  Types: { PolygonSelectionActions, ActionEvents },
} = PolygonSelectionModule;

export default () => {
  const autoRef = useRef();
  const polygonSelection = useRef(null);
  const imgCanvasRef = useRef();

  // ActionType
  const typeActionMap = new Map([
    ['Polygon', PolygonModifyAction],
    ['Circle', CircleModifyAction],
    ['Rectangle', RectangleModifyAction],
    ['Triangle', TriangleModifyAction],
    ['Diamond', DiamondModifyAction],
    ['Start', StartModifyAction],
  ]);

  useEffect(() => {
    // 初始化polygonSelection
    polygonSelection.current = new PolygonSelection(autoRef.current, [], {
      [PolygonSelectionActions.CanvasMount]: () => {
        // 初始化image显示的画布
        imgCanvasRef.current = document.createElement('canvas');
        imgCanvasRef.current.style.position = 'absolute';
        imgCanvasRef.current.style.left = '0';
        imgCanvasRef.current.style.top = '0';
        imgCanvasRef.current.style.width = '100%';
        imgCanvasRef.current.style.height = '100%';
        imgCanvasRef.current.style.zIndex = '0';
        imgCanvasRef.current.width = autoRef.current.offsetWidth;
        imgCanvasRef.current.height = autoRef.current.offsetHeight;
        autoRef.current.appendChild(imgCanvasRef.current);
      },
    });

    // 点击了画布中的几何图形
    polygonSelection.current.on(PolygonSelectionActions.CanvasClickGeometry, (data) => {
      const Component = typeActionMap.get(data.type);

      const action = new Component({
        selectType: data.type,
        actionType: 'Draw',
        data,
      });

      action.on(ActionEvents.End, () => {
        action.start();
      });

      polygonSelection.current.changeAction(action);

      action.start();
    });

    // 点击了画布的空位置
    polygonSelection.current.on(PolygonSelectionActions.CanvasClickEmpty, () => {
      console.log('clickEmpty');
      polygonSelection.current.clearDraw();
      polygonSelection.current.clearAssistDraw();
      polygonSelection.current.drawHistoryData();
    });

    // 打开文件
    const fileEl = document.getElementById('file');
    fileEl.addEventListener('change', () => {
      const file = fileEl.files[0];

      const read = new FileReader();
      read.onloadend = (e) => {
        const img = new Image();

        img.onload = () => {
          const ctx = imgCanvasRef.current.getContext('2d');
          ctx.clearRect(0, 0, img.width, img.height);
          ctx.drawImage(img, 0, 0, img.width, img.height);
        };

        img.src = e.target.result;
      };
      read.readAsDataURL(file);
    });
  }, []);

  return (
    <div className={styles.Wrap}>
      <div className={styles.Fixed}>
        <ul>
          <li>
            <input
              id="file"
              accept="image/gif,image/jpeg,image/png,image/bmp"
              type="file"
              style={{ display: 'none' }}
            />
            <Button
              type="primary"
              onClick={() => {
                const fileEl = document.getElementById('file');
                const event = document.createEvent('MouseEvents');
                event.initEvent('click', true, true);
                fileEl.dispatchEvent(event);
              }}
            >
              打开
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const canvasData = polygonSelection.current.getHistoryData();
                const localData = Preferences.getObjectByLocal('polygonSelectionData') || [];
                localData.push(canvasData);
                Preferences.putObjectByLocal('polygonSelectionData', localData);
                message.success('保存成功！');
              }}
            >
              保存数据
            </Button>
          </li>
          <li>
            <Button type="primary" onClick={() => {}}>
              设置数据
            </Button>
          </li>
        </ul>

        <ul>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const action = new CircleDrawAction();
                action.on(ActionEvents.End, (data) => {
                  // action.start();
                });
                polygonSelection.current.changeAction(action);
                action.start();
              }}
            >
              圆形
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const action = new RectangleDrawAction();
                action.on(ActionEvents.End, (data) => {
                  // action.start();
                });
                polygonSelection.current.changeAction(action);
                action.start();
              }}
            >
              矩形
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const action = new DiamondDrawAction();
                action.on(ActionEvents.End, (data) => {
                  // action.start();
                });
                polygonSelection.current.changeAction(action);
                action.start();
              }}
            >
              菱形
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const action = new TriangleDrawAction();
                action.on(ActionEvents.End, (data) => {
                  // action.start();
                });
                polygonSelection.current.changeAction(action);
                action.start();
              }}
            >
              三角形
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const action = new StartDrawAction();
                action.on(ActionEvents.End, (data) => {
                  // action.start();
                });
                polygonSelection.current.changeAction(action);
                action.start();
              }}
            >
              五角星
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const action = new PolygonDrawAction();
                action.on(ActionEvents.End, (data) => {
                  // action.start();
                });
                polygonSelection.current.changeAction(action);
                action.start();
              }}
            >
              多边形
            </Button>
          </li>
          <li>
            <Button
              type="primary"
              onClick={() => {
                const action = new FreeDrawAction();
                action.on(ActionEvents.End, () => {
                  // action.start();
                });
                polygonSelection.current.changeAction(action);
                action.start();
              }}
            >
              自由绘制
            </Button>
          </li>
        </ul>
      </div>
      <div className={styles.Auto} ref={autoRef}></div>
    </div>
  );
};
