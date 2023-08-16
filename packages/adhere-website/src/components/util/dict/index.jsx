import { Select } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { v1 } from 'uuid';

import { Dict, Space } from '@baifendian/adhere';
import { Link } from '@ctsj/router';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

import pca from './pca.json';

const { Option } = Select;

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `静态字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '静态字典',
            info: '静态字典',
          },
        },
        codeText: `
  import React from 'react';
  import { Dict } from '@baifendian/adhere';

  // 第一个字典
  const Test1Dict = {
    initStatic() {
      Dict.handlers.Test1Dict = () => [
        {
          value: 1,
          label: '通过',
        },
        {
          value: 2,
          label: '不通过',
        },
        {
          value: 3,
          label: '退回',
        },
      ];
    },
    initRemote() {},
  };

  // 初始化
  Dict.init([Test1Dict], {});

  // 使用字典
  return <div>{JSON.stringify(Dict.value.Test1Dict.value)}</div>;
      `,
        type: 'PlayGround',
        renderChildren: () => {
          // 第一个字典
          const Test1Dict = {
            initStatic() {
              Dict.handlers.Test1Dict = () => [
                {
                  value: 1,
                  label: '通过',
                },
                {
                  value: 2,
                  label: '不通过',
                },
                {
                  value: 3,
                  label: '退回',
                },
              ];
            },
            initRemote() {},
          };

          // 初始化
          Dict.init([Test1Dict], {});

          // 使用字典
          return <div>{JSON.stringify(Dict.value.Test1Dict.value)}</div>;
        },
      },
      {
        id: `p2`,
        name: `动态字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '动态字典',
            info: '动态字典',
          },
        },
        codeText: `
  import React,{ useState, useEffect } from 'react';
  import { Dict } from '@baifendian/adhere';

  function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
      Dict.value.Test2Dict.value.then((res) => setData(res));
    }, []);

    return <div>{JSON.stringify(data)}</div>;
  }

  // 第一个字典
  const Test2Dict = {
    initStatic() {},
    initRemote() {
      Dict.handlers.Test2Dict = () =>
        Promise.resolve([
          {
            value: 1,
            label: '通过',
          },
          {
            value: 2,
            label: '不通过',
          },
          {
            value: 3,
            label: '退回',
          },
        ]);
    },
  };

  // 初始化
  Dict.init([Test2Dict], {});

  // 使用字典
  return <Test />;
      `,
        type: 'PlayGround',
        renderChildren: () => {
          function Test() {
            const [data, setData] = useState([]);

            useEffect(() => {
              Dict.value.Test2Dict.value.then((res) => setData(res));
            }, []);

            return <div>{JSON.stringify(data)}</div>;
          }

          // 第一个字典
          const Test2Dict = {
            initStatic() {},
            initRemote() {
              Dict.handlers.Test2Dict = () =>
                Promise.resolve([
                  {
                    value: 1,
                    label: '通过',
                  },
                  {
                    value: 2,
                    label: '不通过',
                  },
                  {
                    value: 3,
                    label: '退回',
                  },
                ]);
            },
          };

          // 初始化
          Dict.init([Test2Dict], {});

          // 使用字典
          return <Test />;
        },
      },
      {
        id: `p3`,
        name: `方法`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '方法',
            info: '方法',
          },
        },
        codeText: `
  import React from 'react';
  import { Dict } from '@baifendian/adhere';

  const Test3Dict = {
    initStatic() {
      Dict.handlers.Test3SumDict = () => (a, b) => a + b;
    },
    initRemote() {},
  };

  // 初始化
  Dict.init([Test3Dict], {});

  // 使用字典
  return (
    <>
      <p>
        <span>第一次计算a + b：</span>
        {Dict.value.Test3SumDict.value(1, 2)}
      </p>
      <p>
        <span>缓存值：</span>
        {Dict.value.Test3SumDict.value(1, 2)}
      </p>
    </>
  );
      `,
        type: 'PlayGround',
        renderChildren: () => {
          const Test3Dict = {
            initStatic() {
              Dict.handlers.Test3SumDict = () => (a, b) => a + b;
            },
            initRemote() {},
          };

          // 初始化
          Dict.init([Test3Dict], {});

          // 使用字典
          return (
            <>
              <p>
                <span>第一次计算a + b：</span>
                {Dict.value.Test3SumDict.value(1, 2)}
              </p>
              <p>
                <span>缓存值：</span>
                {Dict.value.Test3SumDict.value(1, 2)}
              </p>
            </>
          );
        },
      },
      {
        id: `p4`,
        name: `方法(不使用缓存)`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '方法(不使用缓存)',
            info: '方法(不使用缓存)',
          },
        },
        codeText: `
  import React from 'react';
  import { Dict } from '@baifendian/adhere';

  const Test4Dict = {
    initStatic() {
      Dict.handlers.Test4SumDict = () => (a, b) => a + b;
      // 不使用缓存
      Dict.handlers.Test4SumDict.isUseMemo = false;
    },
    initRemote() {},
  };

  // 初始化
  Dict.init([Test4Dict], {});

  // 使用字典
  return (
    <>
      <p>
        <span>第一次计算a + b：</span>
        {Dict.value.Test4SumDict.value(1, 2)}
      </p>
      <p>
        <span>第二次计算a + b：</span>
        {Dict.value.Test4SumDict.value(1, 2)}
      </p>
    </>
  );
      `,
        type: 'PlayGround',
        renderChildren: () => {
          const Test4Dict = {
            initStatic() {
              Dict.handlers.Test4SumDict = () => (a, b) => a + b;
              // 不使用缓存
              Dict.handlers.Test4SumDict.isUseMemo = false;
            },
            initRemote() {},
          };

          // 初始化
          Dict.init([Test4Dict], {});

          // 使用字典
          return (
            <>
              <p>
                <span>第一次计算a + b：</span>
                {Dict.value.Test4SumDict.value(1, 2)}
              </p>
              <p>
                <span>第二次计算a + b：</span>
                {Dict.value.Test4SumDict.value(1, 2)}
              </p>
            </>
          );
        },
      },
      {
        id: `p5`,
        name: `刷新字典`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '刷新字典',
            info: '刷新字典',
          },
        },
        codeText: `
  import React,{ useState } from 'react';
  import { Dict } from '@baifendian/adhere';

  function Test() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>{JSON.stringify(Dict.value.Test5Dict.value)}</p>
        <div>
          <button
            onClick={() => {
              Dict.value.Test5Dict.refresh();
              setCount(Date.now());
            }}
          >
            刷新
          </button>
        </div>
      </div>
    );
  }

  const Test5Dict = {
    initStatic() {},
    initRemote() {
      Dict.handlers.Test5Dict = () => [v1(), v1(), v1()];
    },
  };

  // 初始化
  Dict.init([Test5Dict], {});

  // 使用字典
  return <Test />;
      `,
        type: 'PlayGround',
        renderChildren: () => {
          function Test() {
            const [count, setCount] = useState(0);

            return (
              <div>
                <p>{JSON.stringify(Dict.value.Test5Dict.value)}</p>
                <div>
                  <button
                    onClick={() => {
                      Dict.value.Test5Dict.refresh();
                      setCount(Date.now());
                    }}
                  >
                    刷新
                  </button>
                </div>
              </div>
            );
          }

          const Test5Dict = {
            initStatic() {},
            initRemote() {
              Dict.handlers.Test5Dict = () => [v1(), v1(), v1()];
            },
          };

          // 初始化
          Dict.init([Test5Dict], {});

          // 使用字典
          return <Test />;
        },
      },
      {
        id: `p6`,
        name: `省市区联动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '省市区联动',
            info: '省市区联动',
          },
        },
        codeText: `
  import React,{ useLayoutEffect, useState } from 'react';
  import { Select } from 'antd';
  import { Dict, Space } from '@baifendian/adhere';

  const { Option } = Select;

  function Test() {
    const [p, setP] = useState();
    const [c, setC] = useState();
    const [a, setA] = useState();

    const [pArr, setpArr] = useState([]);
    const [cArr, setcArr] = useState([]);
    const [aArr, setaArr] = useState([]);

    useLayoutEffect(() => {
      Dict.value.Test6PDict.value.then((res) => setpArr(res));
    }, []);

    useLayoutEffect(() => {
      setC('');
      setA('');
      Dict.value.Test6CDict.value(p).then((res) => {
        setcArr(res);
      });
    }, [p]);

    useLayoutEffect(() => {
      setA('');
      Dict.value.Test6ADict.value(p, c).then((res) => {
        {
          setaArr(res);
        }
      });
    }, [c]);

    return (
      <div>
        <Space.Group direction="horizontal">
          <Select style={{ width: 200 }} value={p} onChange={(e) => setP(e)}>
            {pArr.map((t) => (
              <Option key={t.code}>{t.value}</Option>
            ))}
          </Select>

          <Select style={{ width: 200 }} value={c} onChange={(e) => setC(e)}>
            {cArr.map((t) => (
              <Option key={t.code}>{t.value}</Option>
            ))}
          </Select>

          <Select style={{ width: 200 }} value={a} onChange={(e) => setA(e)}>
            {aArr.map((t) => (
              <Option key={t.code}>{t.value}</Option>
            ))}
          </Select>
        </Space.Group>
      </div>
    );
  }

  const Test6Dict = {
    initStatic() {},
    initRemote() {
      Dict.handlers.Test6PDict = () => Promise.resolve(pca);
      Dict.handlers.Test6CDict = () => (pid) =>
        Promise.resolve(pca.find((t) => t.code === pid)?.children || []);
      Dict.handlers.Test6ADict = () => (pid, cid) =>
        Promise.resolve(
          pca.find((t) => t.code === pid)?.children?.find((t) => t.code === cid)
            ?.children || [],
        );
    },
  };

  // 初始化
  Dict.init([Test6Dict], {});

  // 使用字典
  return <Test />;
      `,
        type: 'PlayGround',
        renderChildren: () => {
          function Test() {
            const [p, setP] = useState();
            const [c, setC] = useState();
            const [a, setA] = useState();

            const [pArr, setpArr] = useState([]);
            const [cArr, setcArr] = useState([]);
            const [aArr, setaArr] = useState([]);

            useLayoutEffect(() => {
              Dict.value.Test6PDict.value.then((res) => setpArr(res));
            }, []);

            useLayoutEffect(() => {
              setC('');
              setA('');
              Dict.value.Test6CDict.value(p).then((res) => {
                setcArr(res);
              });
            }, [p]);

            useLayoutEffect(() => {
              setA('');
              Dict.value.Test6ADict.value(p, c).then((res) => {
                {
                  setaArr(res);
                }
              });
            }, [c]);

            return (
              <div>
                <Space.Group direction="horizontal">
                  <Select style={{ width: 200 }} value={p} onChange={(e) => setP(e)}>
                    {pArr.map((t) => (
                      <Option key={t.code}>{t.value}</Option>
                    ))}
                  </Select>

                  <Select style={{ width: 200 }} value={c} onChange={(e) => setC(e)}>
                    {cArr.map((t) => (
                      <Option key={t.code}>{t.value}</Option>
                    ))}
                  </Select>

                  <Select style={{ width: 200 }} value={a} onChange={(e) => setA(e)}>
                    {aArr.map((t) => (
                      <Option key={t.code}>{t.value}</Option>
                    ))}
                  </Select>
                </Space.Group>
              </div>
            );
          }

          const Test6Dict = {
            initStatic() {},
            initRemote() {
              Dict.handlers.Test6PDict = () => Promise.resolve(pca);
              Dict.handlers.Test6CDict = () => (pid) =>
                Promise.resolve(pca.find((t) => t.code === pid)?.children || []);
              Dict.handlers.Test6ADict = () => (pid, cid) =>
                Promise.resolve(
                  pca.find((t) => t.code === pid)?.children?.find((t) => t.code === cid)
                    ?.children || [],
                );
            },
          };

          // 初始化
          Dict.init([Test6Dict], {});

          // 使用字典
          return <Test />;
        },
      },
      {
        id: `p7`,
        name: `使用字典的React组件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用字典的React组件',
            info: '重写省市区联动',
          },
        },
        codeText: `
  import React,{ useLayoutEffect, useState } from 'react';
  import { Dict, Space } from '@baifendian/adhere';
  import { Select } from 'antd';

  const { Option } = Select;

  function Test() {
    const [p, setP] = useState();
    const [c, setC] = useState();
    const [a, setA] = useState();

    useLayoutEffect(() => {
      setC('');
      setA('');
    }, [p]);

    useLayoutEffect(() => {
      setA('');
    }, [c]);

    return (
      <div>
        <Space.Group direction="horizontal">
          <div>
            <Dict.React.Test7PDict>
              {({data}) => (
                <Select style={{ width: 200 }} value={p} onChange={(e) => setP(e)}>
                  {data?.map?.((t) => (
                    <Option key={t.code}>{t.value}</Option>
                  ))}
                </Select>
              )}
            </Dict.React.Test7PDict>
          </div>

          <div>
            <Dict.React.Test7CDict args={[p]}>
              {({data}) => (
                <Select style={{ width: 200 }} value={c} onChange={(e) => setC(e)}>
                  {data?.map?.((t) => (
                    <Option key={t.code}>{t.value}</Option>
                  ))}
                </Select>
              )}
            </Dict.React.Test7CDict>
          </div>

          <div>
            <Dict.React.Test7ADict args={[p, c]}>
              {({data}) => (
                <Select style={{ width: 200 }} value={a} onChange={(e) => setA(e)}>
                  {data?.map?.((t) => (
                    <Option key={t.code}>{t.value}</Option>
                  ))}
                </Select>
              )}
            </Dict.React.Test7ADict>
          </div>
        </Space.Group>
      </div>
    );
  }

  const Test7Dict = {
    initStatic() {},
    initRemote() {
      Dict.handlers.Test7PDict = () => Promise.resolve(pca);
      Dict.handlers.Test7CDict = () => (pid) =>
        Promise.resolve(pca.find((t) => t.code === pid)?.children || []);
      Dict.handlers.Test7ADict = () => (pid, cid) =>
        Promise.resolve(
          pca.find((t) => t.code === pid)?.children?.find((t) => t.code === cid)
            ?.children || [],
        );
    },
  };

  // 初始化
  Dict.init([Test7Dict], {});

  // 使用字典
  return <Test />;
      `,
        type: 'PlayGround',
        renderChildren: () => {
          function Test() {
            const [p, setP] = useState();
            const [c, setC] = useState();
            const [a, setA] = useState();

            useLayoutEffect(() => {
              setC('');
              setA('');
            }, [p]);

            useLayoutEffect(() => {
              setA('');
            }, [c]);

            return (
              <div>
                <Space.Group direction="horizontal">
                  <div>
                    <Dict.React.Test7PDict>
                      {({ data }) => (
                        <Select style={{ width: 200 }} value={p} onChange={(e) => setP(e)}>
                          {data?.map?.((t) => (
                            <Option key={t.code}>{t.value}</Option>
                          ))}
                        </Select>
                      )}
                    </Dict.React.Test7PDict>
                  </div>

                  <div>
                    <Dict.React.Test7CDict args={[p]}>
                      {({ data }) => (
                        <Select style={{ width: 200 }} value={c} onChange={(e) => setC(e)}>
                          {data?.map?.((t) => (
                            <Option key={t.code}>{t.value}</Option>
                          ))}
                        </Select>
                      )}
                    </Dict.React.Test7CDict>
                  </div>

                  <div>
                    <Dict.React.Test7ADict args={[p, c]}>
                      {({ data }) => (
                        <Select style={{ width: 200 }} value={a} onChange={(e) => setA(e)}>
                          {data?.map?.((t) => (
                            <Option key={t.code}>{t.value}</Option>
                          ))}
                        </Select>
                      )}
                    </Dict.React.Test7ADict>
                  </div>
                </Space.Group>
              </div>
            );
          }

          const Test7Dict = {
            initStatic() {},
            initRemote() {
              Dict.handlers.Test7PDict = () => Promise.resolve(pca);
              Dict.handlers.Test7CDict = () => (pid) =>
                Promise.resolve(pca.find((t) => t.code === pid)?.children || []);
              Dict.handlers.Test7ADict = () => (pid, cid) =>
                Promise.resolve(
                  pca.find((t) => t.code === pid)?.children?.find((t) => t.code === cid)
                    ?.children || [],
                );
            },
          };

          // 初始化
          Dict.init([Test7Dict], {});

          // 使用字典
          return <Test />;
        },
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Dict">
        <p>字典</p>
        <ul>
          <li>- 静态字典</li>
          <li>- 异步字典</li>
        </ul>
        <p>
          第一次使用的时候才加载到内存，加载过之后就不在加载，如果字典是函数，也会对函数的值进行memoized处理，可以进行设置是否缓存,函数缓存请参考
          <Link to={`${window.location.origin}/adhere/component/util/watchmemoized`}>
            adhere-util-watchmemoized
          </Link>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
