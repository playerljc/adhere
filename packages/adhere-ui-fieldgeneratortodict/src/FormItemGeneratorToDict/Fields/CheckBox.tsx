import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import CheckBoxCheckAllCustomFormItem from '../CheckBoxCheckAllCustomFormItem';
import CheckBoxCheckAllHorizontalFormItem from '../CheckBoxCheckAllHorizontalFormItem';
import CheckBoxCheckAllSelectFormItem from '../CheckBoxCheckAllSelectFormItem';
import CheckBoxCheckAllVerticalFormItem from '../CheckBoxCheckAllVerticalFormItem';
import CheckBoxCustomFormItem from '../CheckBoxCustomFormItem';
import CheckBoxHorizontalFormItem from '../CheckBoxHorizontalFormItem';
import CheckBoxSelectFormItem from '../CheckBoxSelectFormItem';
import CheckBoxVerticalFormItem from '../CheckBoxVerticalFormItem';
import { setItem } from '../ItemFactory';
import { deepDep } from '../util';

// const FormItemComponents = {};

/**
 * initCheckBox
 * @description 初始化CheckBox
 */
// export default () => {
// 名称以CheckBox结尾的字典
// const checkBoxDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//   dictName.endsWith('CheckBox'),
// );
//
// // 名称以DynamicCheckBox结尾的字典
// const checkBoxDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//   dictName.endsWith('CheckBoxDynamic'),
// );

// 静态的CheckBox
// checkBoxDictNames.forEach((dictName) => {
// CheckBoxVerticalFormItem
setItem('CheckBox', 'VerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxVerticalFormItem {...props} dataSource={dataSource} />;
});

// CheckBoxHorizontalFormItem
setItem('CheckBox', 'HorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxHorizontalFormItem {...props} dataSource={dataSource} />;
});

// CheckBoxCheckAllVerticalFormItem
setItem('CheckBox', 'CheckAllVerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxCheckAllVerticalFormItem {...props} dataSource={dataSource} />;
});

// CheckBoxCheckAllHorizontalFormItem
setItem('CheckBox', 'CheckAllHorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxCheckAllHorizontalFormItem {...props} dataSource={dataSource} />;
});

// CheckBoxSelectFormItem
setItem('CheckBox', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxSelectFormItem {...props} dataSource={dataSource} />;
});

// CheckBoxCheckAllSelectFormItem
setItem('CheckBox', 'CheckAllSelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxCheckAllSelectFormItem {...props} dataSource={dataSource} />;
});

// CheckBoxCustomFormItem
setItem('CheckBox', 'CustomFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxCustomFormItem {...props} dataSource={dataSource} />;
});

// CheckBoxCheckAllCustomFormItem
setItem('CheckBox', 'CheckAllCustomFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <CheckBoxCheckAllCustomFormItem {...props} dataSource={dataSource} />;
});
// });

// 动态的CheckBox
// checkBoxDynamicDictNames.forEach((dictName) => {
// CheckBoxDynamicVerticalFormItem
setItem('CheckBoxDynamic', 'VerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <CheckBoxVerticalFormItem {...props} dataSource={data} />;
});

// CheckBoxDynamicHorizontalFormItem
setItem('CheckBoxDynamic', 'HorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <CheckBoxHorizontalFormItem {...props} dataSource={data} />;
});

// CheckBoxDynamicCheckAllVerticalFormItem
setItem(
  'CheckBoxDynamic',
  'CheckAllVerticalFormItem',
  (dictName) =>
    ({ cascadeParams, ...props }) => {
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

      return <CheckBoxCheckAllVerticalFormItem {...props} dataSource={data} />;
    },
);

// CheckBoxDynamicCheckAllHorizontalFormItem
setItem(
  'CheckBoxDynamic',
  'CheckAllHorizontalFormItem',
  (dictName) =>
    ({ cascadeParams, ...props }) => {
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

      return <CheckBoxCheckAllHorizontalFormItem {...props} dataSource={data} />;
    },
);

// CheckBoxDynamicSelectFormItem
setItem('CheckBoxDynamic', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <CheckBoxSelectFormItem {...props} dataSource={data} />;
});

// CheckBoxDynamicCheckAllSelectFormItem
setItem(
  'CheckBoxDynamic',
  'CheckAllSelectFormItem',
  (dictName) =>
    ({ cascadeParams, ...props }) => {
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

      return <CheckBoxCheckAllSelectFormItem {...props} dataSource={data} />;
    },
);

// CheckBoxCustomFormItem
setItem('CheckBoxDynamic', 'CustomFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <CheckBoxCustomFormItem {...props} dataSource={data} />;
});

// CheckBoxCheckAllCustomFormItem
setItem(
  'CheckBoxDynamic',
  'CheckAllCustomFormItem',
  (dictName) =>
    ({ cascadeParams, ...props }) => {
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

      return <CheckBoxCheckAllCustomFormItem {...props} dataSource={data} />;
    },
);
// });

// return FormItemComponents;
// };
