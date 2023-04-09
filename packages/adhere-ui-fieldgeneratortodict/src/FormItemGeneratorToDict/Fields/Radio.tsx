import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import RadioButtonFormItem from '../RadioButtonFormItem';
import RadioCustomFormItem from '../RadioCustomFormItem';
import RadioHorizontalFormItem from '../RadioHorizontalFormItem';
import RadioSelectFormItem from '../RadioSelectFormItem';
import RadioVerticalFormItem from '../RadioVerticalFormItem';
import { deepDep } from '../util';

// const FormItemComponents = {};

/**
 * initRadio
 * @description 初始化Radio
 */
// export default () => {
//   // 名称以Radio结尾的字典
//   const radioDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('Radio'),
//   );
//
//   // 名称以DynamicRadio结尾的字典
//   const radioDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('RadioDynamic'),
//   );

// 静态的Radio
// radioDictNames.forEach((dictName) => {
// RadioVerticalFormItem
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

// RadioHorizontalFormItem
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

// RadioButtonFormItem
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

// RadioSelectFormItem
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

// RadioCustomFormItem
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
// });

// 动态的Radio
// radioDynamicDictNames.forEach((dictName) => {
// RadioVerticalFormItem
setItem('RadioDynamic', 'VerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useEffect(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  }, []);

  useEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <RadioVerticalFormItem {...props} dataSource={data} />;
});

// RadioHorizontalFormItem
setItem('RadioDynamic', 'HorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useEffect(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  }, []);

  useEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <RadioHorizontalFormItem {...props} dataSource={data} />;
});

// RadioButtonFormItem
setItem('RadioDynamic', 'ButtonFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useEffect(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  }, []);

  useEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <RadioButtonFormItem {...props} dataSource={data} />;
});

// RadioSelectFormItem
setItem('RadioDynamic', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useEffect(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  }, []);

  useEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <RadioSelectFormItem {...props} dataSource={data} />;
});

// RadioCustomFormItem
setItem('RadioDynamic', 'CustomFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const [data, setData] = useState([]);

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  useEffect(() => {
    // 如果是Promise直接返回
    if (handler.then) {
      handler.then((res) => {
        setData(res);
      });
    }
  }, []);

  useEffect(() => {
    // 如果是函数(一般是级联)
    if (handler instanceof Function) {
      handler(cascadeParams).then((res) => {
        setData(res);
      });
    }
  }, [deepDep(cascadeParams)]);

  return <RadioCustomFormItem {...props} dataSource={data} />;
});
// });

// return FormItemComponents;
// };
