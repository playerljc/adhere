import { useMount, useUpdateEffect } from 'ahooks';
import React, { useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import RadioButtonFormItem from '../RadioButtonFormItem';
import RadioCustomFormItem from '../RadioCustomFormItem';
import RadioHorizontalFormItem from '../RadioHorizontalFormItem';
import RadioSelectFormItem from '../RadioSelectFormItem';
import RadioVerticalFormItem from '../RadioVerticalFormItem';
import { deepDep } from '../util';

/**
 * RadioVerticalFormItem
 */
setItem('Radio', 'VerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <RadioVerticalFormItem {...props} dataSource={dataSource} />;
});

/**
 * RadioHorizontalFormItem
 */
setItem('Radio', 'HorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <RadioHorizontalFormItem {...props} dataSource={dataSource} />;
});

/**
 * RadioButtonFormItem
 */
setItem('Radio', 'ButtonFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <RadioButtonFormItem {...props} dataSource={dataSource} />;
});

/**
 * RadioSelectFormItem
 */
setItem('Radio', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <RadioSelectFormItem {...props} dataSource={dataSource} />;
});

/**
 * RadioCustomFormItem
 */
setItem('Radio', 'CustomFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <RadioCustomFormItem {...props} dataSource={dataSource} />;
});

/**
 * RadioDynamicVerticalFormItem
 */
setItem('RadioDynamic', 'VerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <RadioVerticalFormItem {...props} dataSource={data} />;
});

/**
 * RadioDynamicHorizontalFormItem
 */
setItem('RadioDynamic', 'HorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <RadioHorizontalFormItem {...props} dataSource={data} />;
});

/**
 * RadioDynamicButtonFormItem
 */
setItem('RadioDynamic', 'ButtonFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <RadioButtonFormItem {...props} dataSource={data} />;
});

/**
 * RadioDynamicSelectFormItem
 */
setItem('RadioDynamic', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <RadioSelectFormItem {...props} dataSource={data} />;
});

/**
 * RadioDynamicCustomFormItem
 */
setItem('RadioDynamic', 'CustomFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <RadioCustomFormItem {...props} dataSource={data} />;
});
