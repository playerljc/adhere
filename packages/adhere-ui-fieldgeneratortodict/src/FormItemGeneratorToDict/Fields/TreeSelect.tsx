import { useMount, useUpdateEffect } from 'ahooks';
import React, { useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import TreeMultiSelectFormItem from '../TreeMultiSelectFormItem';
import TreeSelectFormItem from '../TreeSelectFormItem';
import TreeSelectLeafFormItem from '../TreeSelectLeafFormItem';
import TreeSelectLeafMultiFormItem from '../TreeSelectLeafMultiFormItem';
import { useAsyncTreeSelect } from '../hooks';
import { deepDep } from '../util';

// treeSelectFormItem
const TreeSelectFormItemWrap = ({ dataSource, ...props }) => {
  return <TreeSelectFormItem {...props} treeData={dataSource} /*selectMode="any" */ />;
};

// MultiSelectFormItem
const TreeSelectMultiFormItemWrap = ({ dataSource, ...props }) => {
  return <TreeMultiSelectFormItem {...props} treeData={dataSource} /*selectMode="any"*/ />;
};

/**
 * TreeFormItem
 */
setItem('Tree', 'FormItem', (dictName) => ({ cascadeParams, onDataSourceChange, ...props }) => {
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

  return <TreeSelectFormItemWrap {...props} dataSource={dataSource} />;
});

/**
 * TreeLeafFormItem
 */
setItem('Tree', 'LeafFormItem', (dictName) => ({ cascadeParams, onDataSourceChange, ...props }) => {
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

  return <TreeSelectLeafFormItem {...props} dataSource={dataSource} />;
});

/**
 * TreeMultiFormItem
 */
setItem(
  'Tree',
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

      return <TreeSelectMultiFormItemWrap {...props} dataSource={dataSource} />;
    },
);

/**
 * TreeLeafMultiFormItem
 */
setItem(
  'Tree',
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

      return <TreeSelectLeafMultiFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * TreeDynamicFormItem
 */
setItem(
  'TreeDynamic',
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

      return <TreeSelectFormItemWrap {...props} dataSource={data} />;
    },
);

/**
 * TreeDynamicLeafFormItem
 */
setItem(
  'TreeDynamic',
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

      return <TreeSelectLeafFormItem {...props} dataSource={data} />;
    },
);

/**
 * TreeDynamicMultiFormItem
 */
setItem(
  'TreeDynamic',
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

      return <TreeSelectMultiFormItemWrap {...props} dataSource={data} />;
    },
);

/**
 * TreeDynamicLeafMultiFormItem
 */
setItem(
  'TreeDynamic',
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

      return <TreeSelectLeafMultiFormItem {...props} dataSource={data} />;
    },
);

// ---------------------------------------------------------------------------------------------------------------------
setItem(
  'TreeAsync',
  'FormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, fetchBranch, defaultId, ...props }) => {
      const { treeData, onLoadData, onChange } = useAsyncTreeSelect(dictName, {
        cascadeParams,
        onDataSourceChange,
        fetchBranch,
        defaultId,
        value: props.value,
        treeDataSimpleMode: props.treeDataSimpleMode,
      });

      return (
        <TreeSelectFormItemWrap
          virtual={false}
          // @ts-ignore
          loadData={onLoadData}
          dataSource={treeData}
          {...props}
          onChange={(...params) => onChange(props.onChange, params)}
        />
      );
    },
);
setItem(
  'TreeAsync',
  'LeafFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, fetchBranch, defaultId, ...props }) => {
      const { treeData, onLoadData, onChange } = useAsyncTreeSelect(dictName, {
        cascadeParams,
        onDataSourceChange,
        fetchBranch,
        defaultId,
        value: props.value,
        treeDataSimpleMode: props.treeDataSimpleMode,
      });

      return (
        <TreeSelectLeafFormItem
          virtual={false}
          // @ts-ignore
          loadData={onLoadData}
          dataSource={treeData}
          {...props}
          onChange={(...params) => onChange(props.onChange, params)}
        />
      );
    },
);
setItem(
  'TreeAsync',
  'MultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, fetchBranch, defaultId, ...props }) => {
      const { treeData, onLoadData, onChange } = useAsyncTreeSelect(dictName, {
        cascadeParams,
        onDataSourceChange,
        fetchBranch,
        defaultId,
        value: props.value,
        treeDataSimpleMode: props.treeDataSimpleMode,
      });

      return (
        <TreeSelectMultiFormItemWrap
          virtual={false}
          // @ts-ignore
          loadData={onLoadData}
          dataSource={treeData}
          {...props}
          onChange={(...params) => onChange(props.onChange, params)}
        />
      );
    },
);
setItem(
  'TreeAsync',
  'LeafMultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, fetchBranch, defaultId, ...props }) => {
      const { treeData, onLoadData, onChange } = useAsyncTreeSelect(dictName, {
        cascadeParams,
        onDataSourceChange,
        fetchBranch,
        defaultId,
        value: props.value,
        treeDataSimpleMode: props.treeDataSimpleMode,
      });

      return (
        <TreeSelectLeafMultiFormItem
          virtual={false}
          // @ts-ignore
          loadData={onLoadData}
          dataSource={treeData}
          {...props}
          onChange={(...params) => onChange(props.onChange, params)}
        />
      );
    },
);
