import { Card, Progress, Space } from 'antd';
import FileSaver from 'file-saver';
// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';

import BroadCastChannel from '../../src/index';

import './server.less';

type FileUpLoad = {
  // 段大小
  segmentSize: number;
  // 段数
  segmentCount: number;
  // 当前段数
  currentIndex: number;
  fileId: string;
  fileName: string;
  size: number;
  status: 'success' | 'exception' | 'normal' | 'active';
  // 一次传过来的buffer
  buffer: ArrayBuffer;
  // 总的buffer
  fileBuffer: Array<ArrayBuffer>;
};

export default function () {
  const sourceOrigin = '/server';
  const whiteList = ['/client'];

  const [displayValue, setDisplayValue] = useState('');
  const [image, setImage] = useState('');
  const [uploadList, setUploadList] = useState<FileUpLoad[]>([]);

  const fetch = useRef(new BroadCastChannel.Fetch(sourceOrigin));

  const ref = useRef(null);
  const server = useRef(null);
  const router = useRef(null);

  function ping() {
    fetch.current.ping(
      ['/client'],
      () => {
        console.log('server ping client success');
      },
      () => {
        console.log('error');
      },
    );
  }

  useEffect(() => {
    router.current = new BroadCastChannel.Router();
    router.current
      /**
       * /display
       */
      .controller('/display', (ctx, next) => {
        debugger;
        const body = ctx.request.getBody();
        setDisplayValue(body);
        ctx.response.setStatusCode(200);
        ctx.response.setStatusMessage('ok');
        next();
      })
      /**
       * /getDoc
       */
      .controller('/task/getDoc', (ctx, next) => {
        debugger;
        ctx.response.setBody(ref.current.outerHTML);
        ctx.response.setStatusCode(200);
        ctx.response.setStatusMessage('ok');
        next();
      })
      /**
       * uploadImg
       */
      .controller('/uploadImg', (ctx, next) => {
        debugger;
        const body = ctx.request.getBody();
        setImage(body);
        ctx.response.setStatusCode(200);
        ctx.response.setStatusMessage('ok');
        next();
      })
      /**
       * progressUploadFile
       */
      .controller('/progressUploadFile', (ctx, next) => {
        const fileUpload = ctx.request.getBody() as FileUpLoad;

        // 一个文件的开始
        if (fileUpload.currentIndex === 0) {
          setUploadList((list) => {
            list.push({
              ...fileUpload,
              status: 'active',
              fileBuffer: [fileUpload.buffer],
            });
            return [...list];
          });
        }
        // 一个文件的结束
        else if (fileUpload.currentIndex === fileUpload.segmentCount - 1) {
          setUploadList((list) => {
            const index = list.findIndex((t) => t.fileId === fileUpload.fileId);

            list[index] = {
              ...fileUpload,
              status: 'success',
              fileBuffer: [...list[index].fileBuffer, fileUpload.buffer],
            };
            return [...list];
          });
        }
        // 中间过程
        else {
          setUploadList((list) => {
            const index = list.findIndex((t) => t.fileId === fileUpload.fileId);

            list[index] = {
              ...fileUpload,
              fileBuffer: [...list[index].fileBuffer, fileUpload.buffer],
            };
            return [...list];
          });
        }

        ctx.response.setStatusCode(200);
        ctx.response.setStatusMessage('ok');
        next();
      });
    // 1.注册了 window postMessage
    server.current = new BroadCastChannel.Server(whiteList, sourceOrigin);
    server.current.use(router.current.routers());
    server.current.accept((ctx, next) => {
      ctx.response.setStatusCode(200);
      ctx.response.setStatusMessage('ok');
      next();

      setTimeout(() => {
        console.log('client掉线了，重新连接后');

        ping();
      }, 1000);
    });
    server.current.start({
      startKeepAlive: true,
    });

    // 调接口
    // 2.注册了 window postMessage
    fetch.current.accept(['/client']).then((res) => {
      console.log('我已经通知了client，我上线了', res);

      ping();
    });

    return () => {
      server?.current?.close?.();
    };
  }, []);

  return (
    <div className="Wrap" ref={ref}>
      <Space orientation="vertical" size="middle" style={{ display: 'flex' }}>
        <Card title="将输入框值设置到iframe里">
          <div>{displayValue}</div>
        </Card>

        <Card title="上传图片到iframe里面进行显示">
          <div>{image && <img src={image} alt="" />}</div>
        </Card>

        <Card title="带有进度的上传一个文件给iframe">
          <ul>
            <Space orientation="vertical" size="middle" style={{ display: 'flex' }}>
              {uploadList.map((t) => {
                const percent = Number(
                  (
                    (t.fileBuffer.reduce((pre, val) => pre + val.byteLength, 0) / t.size) *
                    100
                  ).toFixed(2),
                );

                return (
                  <li
                    className={t.status === 'success' ? 'Hover' : null}
                    key={t.fileId}
                    onClick={() => {
                      if (t.status === 'success') {
                        const blob = new Blob(t.fileBuffer, { type: 'application/octet-stream' });
                        FileSaver.saveAs(blob, t.fileName);
                      }
                    }}
                  >
                    <span>{t.fileName}</span>
                    <Progress percent={percent} status={t.status} />
                  </li>
                );
              })}
            </Space>
          </ul>
        </Card>
      </Space>
    </div>
  );
}
