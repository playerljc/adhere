import { Select } from 'antd';
import React, { useLayoutEffect, useState } from 'react';

import { Dict, Space } from '@baifendian/adhere';

import pca from '@/components/util/dict/pca.json';

import styles from './examples.less';

const { Option } = Select;

export default () => {
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
          <Select className={styles.Wrapper} value={p} onChange={(e) => setP(e)}>
            {pArr.map((t) => (
              <Option key={t.code}>{t.value}</Option>
            ))}
          </Select>

          <Select className={styles.Wrapper} value={c} onChange={(e) => setC(e)}>
            {cArr.map((t) => (
              <Option key={t.code}>{t.value}</Option>
            ))}
          </Select>

          <Select className={styles.Wrapper} value={a} onChange={(e) => setA(e)}>
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
          pca.find((t) => t.code === pid)?.children?.find((t) => t.code === cid)?.children || [],
        );
    },
  };

  // 初始化
  Dict.init([Test6Dict], {});

  // 使用字典
  return <Test />;
};
