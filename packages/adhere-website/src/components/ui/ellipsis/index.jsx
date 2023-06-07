import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import styles from './index.less';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="Ellipsis">
        <p>文字省略</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `单行省略`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '单行省略',
                info: '单行省略',
              },
            },
            codeText: `
import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

export default () => (
  <div
    style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
  >
    <Ellipsis wrap={false}>
      详解 React v16.8 和 v18 官方提供的 Hooks API 使用方法，结合 TS、Jest
      详细分析如何书写自定义 Hooks，包括功能类、DOM 类、场景类等，共计 30+ 的自定义
      Hooks 设计思路与实现
    </Ellipsis>
  </div>
);
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div
                style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
              >
                <Ellipsis wrap={false}>
                  详解 React v16.8 和 v18 官方提供的 Hooks API 使用方法，结合 TS、Jest
                  详细分析如何书写自定义 Hooks，包括功能类、DOM 类、场景类等，共计 30+ 的自定义
                  Hooks 设计思路与实现
                </Ellipsis>
              </div>
            ),
          },
          {
            id: `p2`,
            name: `多行省略`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '多行省略',
                info: '多行省略',
              },
            },
            codeText: `
import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

export default () => (
  <div
    style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
  >
    <Ellipsis wrap={true} wrapLines={2}>
      详解 React v16.8 和 v18 官方提供的 Hooks API 使用方法，结合 TS、Jest
      详细分析如何书写自定义 Hooks，包括功能类、DOM 类、场景类等，共计 30+ 的自定义
      Hooks 设计思路与实现
    </Ellipsis>
  </div>
);
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div
                style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
              >
                <Ellipsis wrap={true} wrapLines={2}>
                  详解 React v16.8 和 v18 官方提供的 Hooks API 使用方法，结合 TS、Jest
                  详细分析如何书写自定义 Hooks，包括功能类、DOM 类、场景类等，共计 30+ 的自定义
                  Hooks 设计思路与实现
                </Ellipsis>
              </div>
            ),
          },
          {
            id: `p3`,
            name: `使用html的提示`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '使用html的提示',
                info: '使用html的提示',
              },
            },
            codeText: `
import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

export default () => (
  <div
    style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
  >
    <Ellipsis wrap={true} wrapLines={2} isUseNativeTooltip={false}>
      React 是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是
    </Ellipsis>
  </div>
);
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div
                style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
              >
                <Ellipsis wrap={true} wrapLines={2} isUseNativeTooltip={false}>
                  React 是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是
                </Ellipsis>
              </div>
            ),
          },
          {
            id: `p4`,
            name: `提示字符数超过规大小后`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '提示字符数超过规大小后',
                info: '提示字符数超过规大小后',
              },
            },
            codeText: `
import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

export default () => (
  <div
    style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
  >
    <Ellipsis wrap={true} wrapLines={6}>
      React 是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
      是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
      UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是
    </Ellipsis>
  </div>
);
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div
                style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
              >
                <Ellipsis wrap={true} wrapLines={6}>
                  React 是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是React
                  是如今应用最广泛、最受欢迎的前端开发库之一，不仅有着精简的
                  UI，而且非常容易上手。通过多年的迭代，其精妙的设计思想吸引了全世界网页开发者。最重要的是
                </Ellipsis>
              </div>
            ),
          },
          {
            id: `p5`,
            name: `内容是html字符串`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '内容是html字符串',
                info: '内容是html字符串',
              },
            },
            codeText: `
import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

export default () => (
  <div
    style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
  >
    <Ellipsis
      wrap={false}
      dangerouslySetInnerHTML={{
        __html: \`
          <p>
            详解 <span style="color: red;">React</span> v16.8 和 v18 官方提供的 Hooks
            API 使用方法，结合 TS、Jest 详细分析如何书写自定义 Hooks，包括功能类、DOM
            类、场景类等，共计 30+ 的自定义 Hooks 设计思路与实现
          </p>
        \`,
      }}
    />
  </div>
);
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div
                style={{ position: 'relative', width: 200, padding: 10, border: '1px solid #ccc' }}
              >
                <Ellipsis
                  wrap={false}
                  dangerouslySetInnerHTML={{
                    __html: `
                      <p>
                        详解 <span style="color: red;">React</span> v16.8 和 v18 官方提供的 Hooks
                        API 使用方法，结合 TS、Jest 详细分析如何书写自定义 Hooks，包括功能类、DOM
                        类、场景类等，共计 30+ 的自定义 Hooks 设计思路与实现
                      </p>
                    `,
                  }}
                />
              </div>
            ),
          },
          {
            id: `p6`,
            name: `列表综合例子`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '列表综合例子',
                info: '列表综合例子',
              },
            },
            codeText: `
import React from 'react';

import { Ellipsis } from '@baifendian/adhere';

export default () => (
  <div className={styles.wrap}>
    <ul>
      {Array.from({ length: 20 })
        .fill(0)
        .map((t) => (
          <li>
            <div className={styles.media}>
              <img
                src="https://inews.gtimg.com/news_ls/Of4GKIfj9mCh29gL1Cen6Z25ZnjtoGcIhYcsPXeXTLF3EAA_640330/0"
                alt=""
              />
            </div>
            <div className={styles.info}>
              <p className={styles.row}>
                <Ellipsis wrap={false} isUseNativeTooltip={false}>
                  她创业失败转行做陪诊师 解救困在医院的老人她创业失败转行做陪诊师
                  解救困在医院的老人
                </Ellipsis>
              </p>
              <p className={styles['sub-row']}>
                <Ellipsis wrap={false} isUseNativeTooltip={false}>
                  河南一面粉厂贴通知“今年新麦一律拒收”，专家：小麦发芽降低品质河南一面粉厂贴通知“今年新麦一律拒收”，专家：小麦发芽降低品质
                </Ellipsis>
              </p>
              <p className={styles.content}>
                <Ellipsis wrap={true} wrapLines={2} isUseNativeTooltip={false}>
                  近期正值小麦收割期，小麦大省河南多地遭遇了近十多年来最严重的“烂场雨”天气，部分地区小麦出现发霉、穗发芽等现象。在此背景下，河南商丘虞城县一家面粉厂近日发布的“2023年新麦一律拒收”的通知引发网友关注。河南省一位农业专家表示，发芽小麦降低了食用品质，但可以用作饲料配料和酿酒原料。当地政府回应称，有专库专价收购农民发芽的小麦
                </Ellipsis>
              </p>
              <p className={styles.footer}>
                <span>解法Solution</span>
                <span>18小时前</span>
              </p>
            </div>
          </li>
        ))}
    </ul>
  </div>
);
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div className={styles.wrap}>
                <ul>
                  {Array.from({ length: 20 })
                    .fill(0)
                    .map((t) => (
                      <li>
                        <div className={styles.media}>
                          <img
                            src="https://inews.gtimg.com/news_ls/Of4GKIfj9mCh29gL1Cen6Z25ZnjtoGcIhYcsPXeXTLF3EAA_640330/0"
                            alt=""
                          />
                        </div>
                        <div className={styles.info}>
                          <p className={styles.row}>
                            <Ellipsis wrap={false} isUseNativeTooltip={false}>
                              她创业失败转行做陪诊师 解救困在医院的老人她创业失败转行做陪诊师
                              解救困在医院的老人
                            </Ellipsis>
                          </p>
                          <p className={styles['sub-row']}>
                            <Ellipsis wrap={false} isUseNativeTooltip={false}>
                              河南一面粉厂贴通知“今年新麦一律拒收”，专家：小麦发芽降低品质河南一面粉厂贴通知“今年新麦一律拒收”，专家：小麦发芽降低品质
                            </Ellipsis>
                          </p>
                          <p className={styles.content}>
                            <Ellipsis wrap={true} wrapLines={2} isUseNativeTooltip={false}>
                              近期正值小麦收割期，小麦大省河南多地遭遇了近十多年来最严重的“烂场雨”天气，部分地区小麦出现发霉、穗发芽等现象。在此背景下，河南商丘虞城县一家面粉厂近日发布的“2023年新麦一律拒收”的通知引发网友关注。河南省一位农业专家表示，发芽小麦降低了食用品质，但可以用作饲料配料和酿酒原料。当地政府回应称，有专库专价收购农民发芽的小麦
                            </Ellipsis>
                          </p>
                          <p className={styles.footer}>
                            <span>解法Solution</span>
                            <span>18小时前</span>
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ),
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
