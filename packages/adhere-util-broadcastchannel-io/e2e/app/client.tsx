import { Button, Card, Input, Progress, Space } from 'antd';
// @ts-ignore
import React, { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';

import BroadCastChannel from '../../src/index';
import { arrayBufferToBase64 } from '../util';

import './client.less';

type UpLoadItem = {
  file: any;
  completeSize: number;
  status: 'success' | 'exception' | 'normal' | 'active';
  fileId: string;
};

const sourceOrigin = '/client';
const targetOrigin = ['/server'];
const bc = new BroadCastChannel.Fetch(sourceOrigin);

export default function () {
  const server = useRef(null);
  const [value, setValue] = useState('');
  const [uploadList, setUploadList] = useState<UpLoadItem[]>([]);

  const fetch = useRef(bc);

  /**
   * onSend
   * @description 将输入框值设置到iframe里
   */
  function onSend() {
    fetch.current
      .put(targetOrigin, '/display', {
        data: value,
      })
      .then((res) => {
        console.log('onSend then');
      });
  }

  /**
   * onGetDoc
   */
  function onGetDoc() {
    fetch.current
      .get(targetOrigin, '/task/getDoc', {
        data: value,
      })
      .then((res) => {
        alert(res.getBody());
      });
  }

  /**
   * onUploadChange
   * @param e
   */
  function onUploadChange(e) {
    const fileEl = e.target;

    const file = fileEl.files[0];

    const reader = new FileReader();

    reader.addEventListener('load', (e1) => {
      fetch.current.put(targetOrigin, '/uploadImg', {
        data: e1.target.result,
      });
    });

    reader.readAsDataURL(file);
  }

  /**
   * onUploadProgressFile
   * @param e
   */
  function onUploadProgressFile(e) {
    const file = e.target.files[0];

    const fileId = v4();
    const uploadItem: UpLoadItem = {
      file,
      completeSize: 0,
      status: 'active',
      fileId,
    };

    setUploadList((list) => [...list, uploadItem]);

    const reader = new FileReader();
    reader.addEventListener('load', (e1) => {
      const buffer = e1.target.result as ArrayBuffer;

      // 段的大小 1kb
      const segmentSize = 1024;

      // 段数
      const segmentCount =
        Math.floor(buffer.byteLength / segmentSize) +
        (buffer.byteLength % segmentSize === 0 ? 0 : 1);

      console.log('文件名称', file.name);
      console.log('文件大小', file.size);
      console.log('上传次数', segmentCount);

      let index = 0;

      // 传递数据就是多次调用接口进行文件上传
      const upload = () => {
        if (index >= segmentCount) {
          setUploadList((list) => {
            const item = list.find((t) => t.fileId === fileId)!;
            item.status = 'success';
            return [...list];
          });

          console.log(`文件${file.name}上传完成!`);
          return;
        }

        const uploadBuffer = buffer.slice(index * segmentSize, (index + 1) * segmentSize);

        console.log(`第${index + 1}次上传开始`);

        fetch.current
          .get(targetOrigin, '/progressUploadFile', {
            data: {
              segmentSize,
              segmentCount,
              currentIndex: index,
              fileId,
              fileName: file.name,
              size: file.size,
              buffer: arrayBufferToBase64(uploadBuffer),
            },
          })
          .then((res) => {
            // 更新进度
            setUploadList((list) => {
              console.log(`第${index + 1}次上传结束`);
              const item = list.find((t) => t.fileId === fileId)!;
              item.status = 'active';
              item.completeSize = (index + 1) * segmentSize;
              return [...list];
            });

            index++;

            upload();
          });
      };

      upload();
    });
    reader.readAsArrayBuffer(file);
  }

  function ping() {
    fetch.current.ping(
      targetOrigin,
      () => {
        console.log('client ping server success');
      },
      () => {
        console.log('error');
      },
    );
  }

  useEffect(() => {
    server.current = new BroadCastChannel.Server(targetOrigin, sourceOrigin);
    server.current.accept((ctx, next) => {
      ctx.response.setStatusCode(200);
      ctx.response.setStatusMessage('ok');
      next();

      setTimeout(() => {
        console.log('server掉线了，重新连接后');

        ping();
      }, 1000);
    });
    server.current.start({
      startKeepAlive: true,
    });

    // 调接口
    // 2.注册了 window postMessage
    fetch.current.accept(['/server']).then((res) => {
      console.log('我已经通知了server，我上线了', res);

      ping();
    });
  }, []);

  return (
    <div className="Wrap">
      <div className="Inner">
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <div
            onClick={() => {
              fetch.current
                .get(targetOrigin, '/document/approval', {
                  data: '123',
                })
                .then((res) => {
                  console.log('getBody', res.getBody());
                });
            }}
          >
            Test
          </div>

          <Card title="将输入框值设置到iframe里">
            <Input.Group compact>
              <Input
                value={value}
                style={{ width: 'calc(100% - 200px)' }}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button type="primary" onClick={onSend}>
                发送
              </Button>
            </Input.Group>
          </Card>

          <Card title="获取iframe文档内容">
            <Button type="primary" onClick={onGetDoc}>
              获取
            </Button>
          </Card>

          <Card title="上传图片到iframe里面进行显示">
            <Input id="uploadImgFile" type="file" onChange={onUploadChange} />
          </Card>

          <Card title="带有进度的上传一个文件给iframe">
            <Input id="uploadProgressFile" type="file" onChange={onUploadProgressFile} />
            <ul>
              <Space orientation="vertical" size="middle" style={{ display: 'flex' }}>
                {uploadList.map((t) => {
                  console.log(
                    '进度条:',
                    Number(((t.completeSize / t.file.size) * 100).toFixed(2)),
                    t.status,
                  );

                  return (
                    <li key={t.fileId}>
                      <span>{t.file.name}</span>
                      <Progress
                        percent={Number(((t.completeSize / t.file.size) * 100).toFixed(2))}
                        status={t.status}
                      />
                    </li>
                  );
                })}
              </Space>
            </ul>
          </Card>
        </Space>
      </div>

      <div className="IframeWrap">
        <h1 style={{ textAlign: 'center' }}>BroadcastChannel</h1>
        <Button
          onClick={() => {
            window.open('/server');
          }}
        >
          打开Page
        </Button>
      </div>
    </div>
  );
}
