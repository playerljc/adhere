import { useMount, useUpdateEffect } from 'ahooks';
import React, { useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import TreeMulitSelectFormItem from '../TreeMulitSelectFormItem';
import TreeSelectFormItem from '../TreeSelectFormItem';
import TreeSelectLeafFormItem from '../TreeSelectLeafFormItem';
import TreeSelectLeafMulitFormItem from '../TreeSelectLeafMulitFormItem';
import { deepDep } from '../util';

// treeSelectFormItem
const TreeSelectFormItemWrap = ({ dataSource, ...props }) => {
  return <TreeSelectFormItem {...props} treeData={dataSource} /*selectMode="any" */ />;
};

// MulitSelectFormItem
const TreeSelectMulitFormItemWrap = ({ dataSource, ...props }) => {
  return <TreeMulitSelectFormItem {...props} treeData={dataSource} /*selectMode="any"*/ />;
};

// 静态的TreeSelect
// treeSelectDictNames.forEach((selectDictName) => {
// treeSelectFormItem
setItem('Tree', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TreeSelectFormItemWrap {...props} dataSource={dataSource} />;
});

// treeSelectLeafFormItem
setItem('Tree', 'LeafFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TreeSelectLeafFormItem {...props} dataSource={dataSource} />;
});

// MulitSelectFormItem
setItem('Tree', 'MulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TreeSelectMulitFormItemWrap {...props} dataSource={dataSource} />;
});

// MulitSelectLeafFormItem
setItem('Tree', 'LeafMulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TreeSelectLeafMulitFormItem {...props} dataSource={dataSource} />;
});

// 动态的TreeSelect
// treeSelectDynamicDictNames.forEach((dictName) => {
// treeSelectFormItem
setItem('TreeDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useMount(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  });

  useUpdateEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <TreeSelectFormItemWrap {...props} dataSource={data} />;
});

// treeSelectLeafFormItem
setItem('TreeDynamic', 'LeafFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useMount(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  });

  useUpdateEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <TreeSelectLeafFormItem {...props} dataSource={data} />;
});

// MulitSelectFormItem
setItem('TreeDynamic', 'MulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useMount(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  });

  useUpdateEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <TreeSelectMulitFormItemWrap {...props} dataSource={data} />;
});

// MulitSelectFormItem
setItem('TreeDynamic', 'LeafMulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useMount(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  });

  useUpdateEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <TreeSelectLeafMulitFormItem {...props} dataSource={data} />;
});
