import React from 'react';

import { DateDisplay, TableGridLayout } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

const { Label, Value } = TableGridLayout;

export default () => {
  return (
    <PlayGroundPage>
      <Section title="DateDisplay">
        <p>时间显示组件</p>
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
            codeText: `
  import React from 'react';
  import { DateDisplay, TableGridLayout } from '@baifendian/adhere';

  export default () => (
    <TableGridLayout
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'YY',
              label: <Label>YY</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay2 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY',
              label: <Label>YYYY</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay4 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-M',
              label: <Label>YYYY-M</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay6 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-MM',
              label: <Label>YYYY-MM</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay7 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-M-D',
              label: <Label>YYYY-M-D</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay8 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-MM-DD',
              label: <Label>YYYY-MM-DD</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay10 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-M-D H:m:s',
              label: <Label>YYYY-M-D H:m:s</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay13 value={Date.now()} />
                </Value>
              ),
            },

            {
              key: 'YYYY-MM-DD H:m:s',
              label: <Label>YYYY-MM-DD H:m:s</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay15 value={Date.now()} />
                </Value>
              ),
            },

            {
              key: 'YYYY-M-D HH:mm:ss',
              label: <Label>YYYY-M-D HH:mm:ss</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay16 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'YYYY-MM-DD HH:mm:ss',
              label: <Label>YYYY-MM-DD HH:mm:ss</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay18 value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'FromNow',
              label: <Label>返回现在到当前实例的相对时间：</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayFromNow value={Date.now()} />
                </Value>
              ),
            },
            {
              key: 'ToNow',
              label: <Label>返回当前实例到现在的相对时间：</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplayToNow value={Date.now()} />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <TableGridLayout
                data={[
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 1,
                    colgroup: [300, 'auto'],
                    data: [
                      {
                        key: 'YY',
                        label: <Label>YY</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay2 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY',
                        label: <Label>YYYY</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay4 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-M',
                        label: <Label>YYYY-M</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay6 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM',
                        label: <Label>YYYY-MM</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay7 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-M-D',
                        label: <Label>YYYY-M-D</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay8 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM-DD',
                        label: <Label>YYYY-MM-DD</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay10 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-M-D H:m:s',
                        label: <Label>YYYY-M-D H:m:s</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay13 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM-DD H:m:s',
                        label: <Label>YYYY-MM-DD H:m:s</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay15 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-M-D HH:mm:ss',
                        label: <Label>YYYY-M-D HH:mm:ss</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay16 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM-DD HH:mm:ss',
                        label: <Label>YYYY-MM-DD HH:mm:ss</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay18 value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'FromNow',
                        label: <Label>返回现在到当前实例的相对时间：</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplayFromNow value={Date.now()} />
                          </Value>
                        ),
                      },
                      {
                        key: 'ToNow',
                        label: <Label>返回当前实例到现在的相对时间：</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplayToNow value={Date.now()} />
                          </Value>
                        ),
                      },
                    ],
                  },
                ]}
              />
            ),
          },
          {
            id: `p2`,
            name: `分隔符`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '分隔符',
                info: '分隔符',
              },
            },
            codeText: `
  import React from 'react';
  import { DateDisplay, TableGridLayout } from '@baifendian/adhere';

  export default () => (
    <TableGridLayout
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'YYYY/M',
              label: <Label>YYYY/M</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay6 value={Date.now()} split1="/" />
                </Value>
              ),
            },
            {
              key: 'YYYY/MM',
              label: <Label>YYYY/MM</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay7 value={Date.now()} split1="/" />
                </Value>
              ),
            },
            {
              key: 'YYYY/M/D',
              label: <Label>YYYY/M/D</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay8 value={Date.now()} split1="/" />
                </Value>
              ),
            },
            {
              key: 'YYYY/MM/DD',
              label: <Label>YYYY/MM/DD</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay10 value={Date.now()} split1="/" />
                </Value>
              ),
            },
            {
              key: 'YYYY/M/D H-m-s',
              label: <Label>YYYY/M/D H-m-s</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay13 value={Date.now()} split1="/" split2="-" />
                </Value>
              ),
            },

            {
              key: 'YYYY/MM/DD H-m-s',
              label: <Label>YYYY-MM-DD H-m-s</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay15 value={Date.now()} split1="/" split2="-" />
                </Value>
              ),
            },

            {
              key: 'YYYY/M/D HH-mm-ss',
              label: <Label>YYYY/MM/DD HH-mm-ss</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay16 value={Date.now()} split1="/" split2="-" />
                </Value>
              ),
            },
            {
              key: 'YYYY/MM/DD HH-mm-ss',
              label: <Label>YYYY/MM/DD HH-mm-ss</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay18 value={Date.now()} split1="/" split2="-" />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <TableGridLayout
                data={[
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 1,
                    colgroup: [300, 'auto'],
                    data: [
                      {
                        key: 'YYYY/M',
                        label: <Label>YYYY/M</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay6 value={Date.now()} split1="/" />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY/MM',
                        label: <Label>YYYY/MM</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay7 value={Date.now()} split1="/" />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY/M/D',
                        label: <Label>YYYY/M/D</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay8 value={Date.now()} split1="/" />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY/MM/DD',
                        label: <Label>YYYY/MM/DD</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay10 value={Date.now()} split1="/" />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY/M/D H-m-s',
                        label: <Label>YYYY/M/D H-m-s</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay13 value={Date.now()} split1="/" split2="-" />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY/MM/DD H-m-s',
                        label: <Label>YYYY-MM-DD H-m-s</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay15 value={Date.now()} split1="/" split2="-" />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY/M/D HH-mm-ss',
                        label: <Label>YYYY/MM/DD HH-mm-ss</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay16 value={Date.now()} split1="/" split2="-" />
                          </Value>
                        ),
                      },
                      {
                        key: 'YYYY/MM/DD HH-mm-ss',
                        label: <Label>YYYY/MM/DD HH-mm-ss</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay18 value={Date.now()} split1="/" split2="-" />
                          </Value>
                        ),
                      },
                    ],
                  },
                ]}
              />
            ),
          },
          {
            id: `p3`,
            name: `本地化`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '本地化',
                info: '本地化',
              },
            },
            type: 'PlayGround',
            renderChildren: () => (
              <TableGridLayout
                data={[
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 1,
                    colgroup: [, 'auto'],
                    data: [
                      {
                        key: 'LT',
                        label: <Label>LT</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="LT" />
                          </Value>
                        ),
                      },
                      {
                        key: 'LTS',
                        label: <Label>LTS</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="LTS" />
                          </Value>
                        ),
                      },
                      {
                        key: 'L',
                        label: <Label>L</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="L" />
                          </Value>
                        ),
                      },
                      {
                        key: 'LL',
                        label: <Label>LL</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="LL" />
                          </Value>
                        ),
                      },
                      {
                        key: 'LLL',
                        label: <Label>LLL</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="LLL" />
                          </Value>
                        ),
                      },
                      {
                        key: 'LLLL',
                        label: <Label>LLLL</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="LLLL" />
                          </Value>
                        ),
                      },
                      {
                        key: 'l',
                        label: <Label>l</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="l" />
                          </Value>
                        ),
                      },
                      {
                        key: 'll',
                        label: <Label>ll</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="ll" />
                          </Value>
                        ),
                      },
                      {
                        key: 'lll',
                        label: <Label>lll</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="lll" />
                          </Value>
                        ),
                      },
                      {
                        key: 'llll',
                        label: <Label>llll</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="llll" />
                          </Value>
                        ),
                      },
                      {
                        key: 'L LT',
                        label: <Label>L LT</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay value={Date.now()} format="L LT" />
                          </Value>
                        ),
                      },
                    ],
                  },
                ]}
              />
            ),
          },
          {
            id: `p4`,
            name: `自定义format`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '自定义format',
                info: '自定义format',
              },
            },
            codeText: `
  import React from 'react';
  import { DateDisplay, TableGridLayout } from '@baifendian/adhere';

  export default () => (
    <TableGridLayout
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'format',
              label: <Label>L LT</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay
                    value={Date.now()}

                    format="L LT"
                  />
                </Value>
              ),
            },
            {
              key: 'format',
              label: <Label>[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay
                    value={Date.now()}

                    format="[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]"
                  />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <TableGridLayout
                data={[
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 1,
                    colgroup: [300, 'auto'],
                    data: [
                      {
                        key: 'format',
                        label: <Label>[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]</Label>,
                        value: (
                          <Value>
                            <DateDisplay.DateDisplay
                              value={Date.now()}
                              format="[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]"
                            />
                          </Value>
                        ),
                      },
                    ],
                  },
                ]}
              />
            ),
          },
          {
            id: `p5`,
            name: `使用toString方法`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '使用toString方法',
                info: '使用toString方法',
              },
            },
            codeText: `
  import React from 'react';
  import { DateDisplay, TableGridLayout } from '@baifendian/adhere';

  export default () => (
    <TableGridLayout
      data={[
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'format',
              label: <Label>L LT</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay
                    value={Date.now()}

                    format="L LT"
                  />
                </Value>
              ),
            },
            {
              key: 'format',
              label: <Label>[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]</Label>,
              value: (
                <Value>
                  <DateDisplay.DateDisplay
                    value={Date.now()}

                    format="[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]"
                  />
                </Value>
              ),
            },
          ],
        },
      ]}
    />
  )
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <TableGridLayout
                data={[
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 1,
                    colgroup: [300, 'auto'],
                    data: [
                      {
                        key: 'YY',
                        label: <Label>YY</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay2.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY',
                        label: <Label>YYYY</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay4.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-M',
                        label: <Label>YYYY-M</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay6.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM',
                        label: <Label>YYYY-MM</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay7.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-M-D',
                        label: <Label>YYYY-M-D</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay8.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM-DD',
                        label: <Label>YYYY-MM-DD</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay10.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-M-D H:m:s',
                        label: <Label>YYYY-M-D H:m:s</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay13.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM-DD H:m:s',
                        label: <Label>YYYY-MM-DD H:m:s</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay15.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-M-D HH:mm:ss',
                        label: <Label>YYYY-M-D HH:mm:ss</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay16.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'YYYY-MM-DD HH:mm:ss',
                        label: <Label>YYYY-MM-DD HH:mm:ss</Label>,
                        value: (
                          <Value>{DateDisplay.DateDisplay18.toString({ value: Date.now() })}</Value>
                        ),
                      },
                      {
                        key: 'FromNow',
                        label: <Label>返回现在到当前实例的相对时间：</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplayFromNow.toString({ value: Date.now() })}
                          </Value>
                        ),
                      },
                      {
                        key: 'ToNow',
                        label: <Label>返回当前实例到现在的相对时间：</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplayToNow.toString({ value: Date.now() })}
                          </Value>
                        ),
                      },

                      {
                        key: 'LT',
                        label: <Label>LT</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LT' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'LTS',
                        label: <Label>LTS</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LTS' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'L',
                        label: <Label>L</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'L' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'LL',
                        label: <Label>LL</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LL' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'LLL',
                        label: <Label>LLL</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'LLL' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'LLLL',
                        label: <Label>LLLL</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({
                              value: Date.now(),
                              format: 'LLLL',
                            })}
                          </Value>
                        ),
                      },
                      {
                        key: 'l',
                        label: <Label>l</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'l' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'll',
                        label: <Label>ll</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'll' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'lll',
                        label: <Label>lll</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({ value: Date.now(), format: 'lll' })}
                          </Value>
                        ),
                      },
                      {
                        key: 'llll',
                        label: <Label>llll</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({
                              value: Date.now(),
                              format: 'llll',
                            })}
                          </Value>
                        ),
                      },
                      {
                        key: 'L LT',
                        label: <Label>L LT</Label>,
                        value: (
                          <Value>
                            {DateDisplay.DateDisplay.toString({
                              value: Date.now(),
                              format: 'L LT',
                            })}
                          </Value>
                        ),
                      },
                    ],
                  },
                ]}
              />
            ),
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ResourceMomentFormat2',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat4',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat6',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat7',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat8',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat10',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat13',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat15',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat16',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ResourceMomentFormat18',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'split1',
                desc: 'YYYY-MM-DD的分割',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'split2',
                desc: 'HH:mm:ss',
                type: 'string',
                defaultVal: '-',
              },
              {
                params: 'errorUI',
                desc: '错误的UI',
                type: 'JXS.Element',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'DateDisplayFromNow',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'locale',
                desc: '国际化',
                type: 'string',
                defaultVal: 'zh-cn',
              },
              {
                params: 'now',
                desc: '',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'DateDisplayToNow',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'locale',
                desc: '国际化',
                type: 'string',
                defaultVal: 'zh-cn',
              },
              {
                params: 'now',
                desc: '',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'DateDisplay',
            data: [
              {
                params: 'value',
                desc: '值',
                type: 'Date',
                defaultVal: '',
              },
              {
                params: 'locale',
                desc: '国际化',
                type: 'string',
                defaultVal: 'zh-cn',
              },
              {
                params: 'format',
                desc: '自定义的format字串',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
