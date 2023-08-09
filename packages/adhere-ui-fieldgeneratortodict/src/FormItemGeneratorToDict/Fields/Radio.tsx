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
setItem(
  'Radio',
  'VerticalFormItem',
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

      return <RadioVerticalFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * RadioHorizontalFormItem
 */
setItem(
  'Radio',
  'HorizontalFormItem',
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

      return <RadioHorizontalFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * RadioButtonFormItem
 */
setItem(
  'Radio',
  'ButtonFormItem',
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

      return <RadioButtonFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * RadioSelectFormItem
 */
setItem(
  'Radio',
  'SelectFormItem',
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

      return <RadioSelectFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * RadioCustomFormItem
 */
setItem(
  'Radio',
  'CustomFormItem',
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

      return <RadioCustomFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * RadioDynamicVerticalFormItem
 */
setItem(
  'RadioDynamic',
  'VerticalFormItem',
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

      return <RadioVerticalFormItem {...props} dataSource={data} />;
    },
);

/**
 * RadioDynamicHorizontalFormItem
 */
setItem(
  'RadioDynamic',
  'HorizontalFormItem',
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

      return <RadioHorizontalFormItem {...props} dataSource={data} />;
    },
);

/**
 * RadioDynamicButtonFormItem
 */
setItem(
  'RadioDynamic',
  'ButtonFormItem',
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

      return <RadioButtonFormItem {...props} dataSource={data} />;
    },
);

/**
 * RadioDynamicSelectFormItem
 */
setItem(
  'RadioDynamic',
  'SelectFormItem',
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

      return <RadioSelectFormItem {...props} dataSource={data} />;
    },
);

/**
 * RadioDynamicCustomFormItem
 */
setItem(
  'RadioDynamic',
  'CustomFormItem',
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

      return <RadioCustomFormItem {...props} dataSource={data} />;
    },
);
