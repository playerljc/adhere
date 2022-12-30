import { Card, Progress, Space } from 'antd';
import FileSaver from 'file-saver';
import React, { useEffect, useRef, useState } from 'react';

import Iframe from '../index';

// @ts-ignore
import styles from './server.less';

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
  const [displayValue, setDisplayValue] = useState('');
  const [image, setImage] = useState('');
  const [uploadList, setUploadList] = useState<FileUpLoad[]>([]);

  const ref = useRef();
  const server = useRef();
  const router = useRef();

  const sourceOrigin = 'http://localhost:8080';
  const whiteList = [sourceOrigin];

  useEffect(() => {
    // @ts-ignore
    router.current = new Iframe.Router();

    // @ts-ignore
    router.current
      /**
       * /display
       */
      .controller('/display', (ctx, next) => {
        const body = ctx.request.getBody();
        setDisplayValue(body);
        ctx.response.setStatusCode(200);
        ctx.response.setStatusMessage('ok');
        next();
      })
      /**
       * /getDoc
       */
      .controller('/getDoc', (ctx, next) => {
        // @ts-ignore
        ctx.response.setBody(ref.current.outerHTML);
        ctx.response.setStatusCode(200);
        ctx.response.setStatusMessage('ok');
        next();
      })
      /**
       * uploadImg
       */
      .controller('/uploadImg', (ctx, next) => {
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

    // @ts-ignore
    server.current = new Iframe.Server(whiteList, window, sourceOrigin);

    // //
    // server.current.use((ctx, next) => {
    //   console.log(' > use1');
    //   next();
    //   console.log(' < use1');
    // });
    //
    // //
    // server.current.use((ctx, next) => {
    //   console.log(' > use2');
    //   next();
    //   console.log(' < use2');
    // });
    //
    // //
    // server.current.use(
    //   (ctx, next) =>
    //     new Promise((resolve) => {
    //       setTimeout(() => {
    //         const p = next();
    //
    //         if (p && p.then) {
    //           p.then(() => {
    //             resolve();
    //           });
    //         } else {
    //           resolve();
    //         }
    //       }, 2000);
    //     }),
    // );

    // @ts-ignore
    server.current.use(router.current.routers());

    // @ts-ignore
    server.current.start();
  }, []);

  return (
    // @ts-ignore
    <div className={styles.Wrap} ref={ref}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card title="将输入框值设置到iframe里">
          <div>{displayValue}</div>
        </Card>

        <Card title="上传图片到iframe里面进行显示">
          <div>{image && <img src={image} alt="" />}</div>
        </Card>

        <Card title="带有进度的上传一个文件给iframe">
          <ul>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              {uploadList.map((t) => {
                const percent = Number(
                  (
                    (t.fileBuffer.reduce((pre, val) => pre + val.byteLength, 0) / t.size) *
                    100
                  ).toFixed(2),
                );

                return (
                  <li
                    className={t.status === 'success' ? styles.Hover : null}
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
