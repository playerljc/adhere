import { Select } from 'antd';
import React, { useLayoutEffect, useState } from 'react';

import { Dict, Space } from '@baifendian/adhere';

import pca from '@/components/util/dict/pca.json';

const { Option } = Select;

export default () => {
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
          pca.find((t) => t.code === pid)?.children?.find((t) => t.code === cid)?.children || [],
        );
    },
  };

  // 初始化
  Dict.init([Test7Dict], {});

  // 使用字典
  return <Test />;
};
