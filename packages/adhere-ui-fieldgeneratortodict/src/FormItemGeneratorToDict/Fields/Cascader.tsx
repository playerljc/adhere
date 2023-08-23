import { useMount, useUpdateEffect } from 'ahooks';
import React, { useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import CascaderFormItem from '../CascaderFormItem';
import CascaderLeafFormItem from '../CascaderLeafFormItem';
import CascaderLeafMultiFormItem from '../CascaderLeafMultiFormItem';
import CascaderMultiFormItem from '../CascaderMultiFormItem';
import { setItem } from '../ItemFactory';
import { useAsyncCascader } from '../hooks';
import { deepDep } from '../util';

/**
 * CascaderFormItem
 */
setItem('Cascader', 'FormItem', (dictName) => ({ cascadeParams, onDataSourceChange, ...props }) => {
  const handler = Dict.value[dictName].value;

  const [dataSource, setDataSource] = useState([]);

  function loadData() {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      setDataSource(handler(cascadeParams));
    } else {
      setDataSource(handler);
    }
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [deepDep(cascadeParams)]);

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  return <CascaderFormItem {...props} options={dataSource} />;
});

/**
 * CascaderLeafFormItem
 */
setItem(
  'Cascader',
  'LeafFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const handler = Dict.value[dictName].value;

      const [dataSource, setDataSource] = useState([]);

      function loadData() {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          setDataSource(handler(cascadeParams));
        } else {
          setDataSource(handler);
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(dataSource);
      }, [dataSource]);

      return <CascaderLeafFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * CascaderMultiFormItem
 */
setItem(
  'Cascader',
  'MultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const handler = Dict.value[dictName].value;

      const [dataSource, setDataSource] = useState([]);

      function loadData() {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          setDataSource(handler(cascadeParams));
        } else {
          setDataSource(handler);
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(dataSource);
      }, [dataSource]);

      return <CascaderMultiFormItem {...props} options={dataSource} />;
    },
);

/**
 * CascaderLeafMultiFormItem
 */
setItem(
  'Cascader',
  'LeafMultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const handler = Dict.value[dictName].value;

      const [dataSource, setDataSource] = useState([]);

      function loadData() {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          setDataSource(handler(cascadeParams));
        } else {
          setDataSource(handler);
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(dataSource);
      }, [dataSource]);

      return <CascaderLeafMultiFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * CascaderDynamicFormItem
 */
setItem(
  'CascaderDynamic',
  'FormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      function loadData() {
        // 如果是Promise直接返回
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        } else if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      return <CascaderFormItem {...props} options={data} />;
    },
);

/**
 * CascaderDynamicLeafFormItem
 */
setItem(
  'CascaderDynamic',
  'LeafFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      function loadData() {
        // 如果是Promise直接返回
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        } else if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      return <CascaderLeafFormItem {...props} dataSource={data} />;
    },
);

/**
 * CascaderDynamicMultiFormItem
 */
setItem(
  'CascaderDynamic',
  'MultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      function loadData() {
        // 如果是Promise直接返回
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        } else if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      return <CascaderMultiFormItem {...props} options={data} />;
    },
);

/**
 * CascaderDynamicLeafMultiFormItem
 */
setItem(
  'CascaderDynamic',
  'LeafMultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      function loadData() {
        // 如果是Promise直接返回
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        } else if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }

      useMount(() => {
        loadData();
      });

      useUpdateEffect(() => {
        loadData();
      }, [deepDep(cascadeParams)]);

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      return <CascaderLeafMultiFormItem {...props} dataSource={data} />;
    },
);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
setItem(
  'CascaderAsync',
  'FormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, fetchBranch, defaultId, ...props }) => {
      const { treeData, onLoadData, onChange } = useAsyncCascader(dictName, {
        cascadeParams,
        onDataSourceChange,
        fetchBranch,
        defaultId,
        value: props.value,
      });

      return (
        <CascaderFormItem
          loadData={onLoadData}
          options={treeData}
          {...props}
          onChange={(...params) => onChange(props.onChange, params)}
        />
      );
    },
);

setItem(
  'CascaderAsync',
  'MultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, fetchBranch, defaultId, ...props }) => {
      const { treeData, onLoadData, onChange } = useAsyncCascader(dictName, {
        cascadeParams,
        onDataSourceChange,
        fetchBranch,
        defaultId,
        value: props.value,
      });

      return (
        <CascaderMultiFormItem
          loadData={onLoadData}
          options={treeData}
          {...props}
          onChange={(...params) => onChange(props.onChange, params)}
        />
      );
    },
);
