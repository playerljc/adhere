import React from 'react';

import PlayGroundPage, {
  Section,
  FunctionPropsSection,
  CodeBoxSection,
} from '@/lib/PlaygroundPage';

import Client from './client';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="IframeIO">
        <p>iframe的通信客户端和服务端</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用',
              },
            },
            active: 'client.jsx',
            config: [
              {
                key: 'client.jsx',
                title: 'client.jsx',
                codeText: `
  import React, { useRef, useState } from 'react';
import { v4 } from 'uuid';
import { Input, Button, Card, Space, Progress } from 'antd';
import { IframeIO } from '@baifendian/adhere';

import styles from './client.less'

  // type UpLoadItem = {
  //   file: any;
  //   completeSize: number;
  //   status: 'success' | 'exception' | 'normal' | 'active';
  //   fileId: string;
  // };

  const { Fetch } = IframeIO;

  export default function () {
    const [value, setValue] = useState('');
    const [uploadList, setUploadList] = useState([]);

    const [iframeReady, setIframeReady] = useState(false);
    const iframeRef = useRef();

    const sourceOrigin = window.location.origin;
    const targetOrigin = window.location.origin;

    const fetch = useRef(new Fetch(window, sourceOrigin));

    /**
     * onSend
     * @description 将输入框值设置到iframe里
     */
    function onSend() {
      fetch.current.put(iframeRef?.current?.contentWindow, targetOrigin, '/display', {
        data: value,
      });
    }

    /**
     * onGetDoc
     */
    function onGetDoc() {
      fetch.current

        .get(iframeRef?.current?.contentWindow, targetOrigin, '/getDoc', {
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
        fetch.current.put(iframeRef?.current?.contentWindow, targetOrigin, '/uploadImg', {
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
      const uploadItem = {
        file,
        completeSize: 0,
        status: 'active',
        fileId,
      };

      setUploadList((list) => [...list, uploadItem]);

      const reader = new FileReader();
      reader.addEventListener('load', (e1) => {
        const buffer = e1.target.result;

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
              const item = list.find((t) => t.fileId === fileId);
              item.status = 'success';
              return [...list];
            });

            console.log(\`文件\${file.name}上传完成!\`);
            return;
          }

          const uploadBuffer = buffer.slice(index * segmentSize, (index + 1) * segmentSize);

          console.log(\`第\${index + 1}次上传开始\`);

          fetch.current

            .get(iframeRef?.current?.contentWindow, targetOrigin, '/progressUploadFile', {
              data: {
                segmentSize,
                segmentCount,
                currentIndex: index,
                fileId,
                fileName: file.name,
                size: file.size,
                buffer: uploadBuffer,
              },
            })
            .then(() => {
              // 更新进度
              setUploadList((list) => {
                console.log(\`第\${index + 1}次上传结束\`);
                const item = list.find((t) => t.fileId === fileId);
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

    function onIframeLoad() {
      setIframeReady(true);
    }

    return (
      <div className={styles.Wrap}>
        {iframeReady && (
          <div className={styles.Inner}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
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
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
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
        )}

        <div className={styles.IframeWrap}>
          <h1 style={{ textAlign: 'center' }}>Iframe</h1>
          <iframe
            name="server"
            ref={iframeRef}
            className={styles.Iframe}
            src="/iframeServer"
            onLoad={onIframeLoad}
          />
        </div>
      </div>
    );
  }
                `,
              },
              {
                key: 'client.less',
                title: 'client.less',
                codeText: `
  .Wrap {
    border: 1px solid #ccc;

    > .Inner {
      padding: 20px;
    }

    .IframeWrap {
      padding: 20px;

      .Iframe {
        width: 100%;
        height: 800px;
        border: 1px solid #ccc;
      }
    }
  }
                `,
              },
              {
                key: 'server.jsx',
                title: 'server.jsx',
                codeText: `
  import React, { useEffect, useRef, useState } from 'react';
import { Card, Space, Progress } from 'antd';
import { IframeIO } from '@baifendian/adhere';
import FileSaver from 'file-saver';

import styles from './server.less';

  // type FileUpLoad = {
  //   // 段大小
  //   segmentSize: number;
  //   // 段数
  //   segmentCount: number;
  //   // 当前段数
  //   currentIndex: number;
  //   fileId: string;
  //   fileName: string;
  //   size: number;
  //   status: 'success' | 'exception' | 'normal' | 'active';
  //   // 一次传过来的buffer
  //   buffer: ArrayBuffer;
  //   // 总的buffer
  //   fileBuffer: ArrayBuffer[];
  // };

  const { Router, Server } = IframeIO;

  export default function () {
    const [displayValue, setDisplayValue] = useState('');
    const [image, setImage] = useState('');
    const [uploadList, setUploadList] = useState([]);

    const ref = useRef();
    const server = useRef();
    const router = useRef();

    const sourceOrigin = window.location.origin;
    const whiteList = [sourceOrigin];

    useEffect(() => {
      router.current = new Router();

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
          const fileUpload = ctx.request.getBody();

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

      server.current = new Server(whiteList, window, sourceOrigin);

      server.current.use(router.current.routers());

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
                `,
              },
              {
                key: 'server.less',
                title: 'server.less',
                codeText: `
  .Wrap {
    width: 100%;
    height: 100%;

    .Hover {
      &:hover {
        cursor: pointer;
      }
    }
  }
                `,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <Client />,
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'Fetch',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'source',
                    desc: '客户端的window对象',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'origin',
                    desc: '客户端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'get',
                desc: 'get请求',
                modifier: 'public',
                params: [
                  {
                    name: 'targetWindow',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'targetOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'pathname',
                    desc: 'pathname',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'options',
                    desc: '配置',
                    type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<Response>',
                returnDesc: '',
              },
              {
                name: 'put',
                desc: 'put请求',
                modifier: 'public',
                params: [
                  {
                    name: 'targetWindow',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'targetOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'pathname',
                    desc: 'pathname',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'options',
                    desc: '配置',
                    type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<Response>',
                returnDesc: '',
              },
              {
                name: 'delete',
                desc: 'delete请求',
                modifier: 'public',
                params: [
                  {
                    name: 'targetWindow',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'targetOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'pathname',
                    desc: 'pathname',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'options',
                    desc: '配置',
                    type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<Response>',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Server',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'whitelist',
                    desc: '白名单',
                    type: 'string[]',
                    defaultVal: '[]',
                    required: '',
                  },
                  {
                    name: 'source',
                    desc: '服务端的window',
                    type: 'MessageEventSource',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'sourceOrigin',
                    desc: '服务端的origin',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'start',
                desc: '启动服务',
                modifier: 'public',
                params: [],
                returnType: 'Promise<void>',
                returnDesc: '',
              },
              {
                name: 'close',
                desc: '关闭服务',
                modifier: 'public',
                params: [],
                returnType: 'Promise<void>',
                returnDesc: '',
              },
              {
                name: 'use',
                desc: '添加中间件',
                modifier: 'public',
                params: [
                  {
                    name: 'middleWare',
                    desc: '中间件',
                    type: 'MiddleWare | MiddleWare[]',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'self',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Router(路由)',
            data: [
              {
                name: 'controller',
                desc: '添加控制器',
                modifier: 'public',
                params: [
                  {
                    name: 'path',
                    desc: '路由地址',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'middleWare',
                    desc: '处理请求的中间件',
                    type: 'MiddleWare',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'self',
                returnDesc: '',
              },
              {
                name: 'routers',
                desc: '获取所有的中间件',
                modifier: 'public',
                params: [],
                returnType: 'MiddleWare[]',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Compose(中间件组合)',
            data: [
              {
                name: 'Compose',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'middleWares',
                    desc: '中间件集合',
                    type: 'MiddleWare[]',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '(ctx, next?: () => Promise<void> | void) => Promise<void></void>',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Request',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: `
                      {
                        pathname: string;
                        headers?: {
                          [prop: string]: string;
                        };
                        statusCode?: stateCode;
                        stateMessage?: string;
                        body?: any;
                      }
                    `,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Response',
            data: [
              {
                name: 'constructor',
                desc: '构造函数',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: `
                      {
                        requestId: string;
                        headers: {
                          [prop: string]: string;
                        };
                        statusCode: stateCode;
                        stateMessage: string;
                        body: any;
                      }
                    `,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
