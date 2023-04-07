import debounce from 'lodash/debounce';
import React, { useEffect, useRef, useState } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Dict from '@baifendian/adhere-util-dict';
import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import { Spin } from '../../AntFormItemNormalize';
import CheckAllMulitSelectFormItem from '../CheckAllMulitSelectFormItem';
import { getItem, setItem } from '../ItemFactory';
import MulitSelectFormItem from '../MulitSelectFormItem';
import SelectFormItem from '../SelectFormItem';
import { deepDep } from '../util';

// const FormItemComponents = {};

const { memoized } = WatchMemoized;

const { useForceUpdate } = Hooks;

/**
 * initSelect
 * @description 初始化Select
 */
// export default () => {
//   // 名称以Select结尾的字典
//   const selectDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('Select'),
//   );
//
//   // 名称以DynamicSelect结尾的字典
//   const selectDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('SelectDynamic'),
//   );
//
//   // 名称以AutoComplete结尾的字典
//   const selectAutoCompleteDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('AutoSelectComplete'),
//   );

// SelectFormItemWrap
const SelectFormItemWrap = ({ dataSource, ...props }) => {
  // @ts-ignore
  return <SelectFormItem selectProps={{ ...props }} dataSource={dataSource} />;
};

// MulitSelectFormItem
const SelectMulitFormItemWrap = ({ dataSource, ...props }) => {
  // @ts-ignore
  return <MulitSelectFormItem selectProps={{ ...props }} dataSource={dataSource} />;
};

// CheckAllMulitSelectFormItem
const SelectCheckAllMulitFormItemWrap = ({ dataSource, onCheckAllChange, ...props }) => {
  return (
    <CheckAllMulitSelectFormItem
      // @ts-ignore
      selectProps={{ ...props }}
      dataSource={dataSource}
      onCheckAllChange={(checkAll) => {
        props.onChange(checkAll ? dataSource.map((t) => t.value) : []);
      }}
    />
  );
};

// 静态的Select
// selectDictNames.forEach((selectDictName) => {
// 创建三个FormItem
// SelectFormItem
// MulitSelectFormItem
// CheckAllMulitSelectFormItem
// SelectFormItem
setItem('Select', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  console.log('Dict', dictName, Dict.value);

  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <SelectFormItemWrap {...props} dataSource={dataSource} />;
});

// MulitSelectFormItem
setItem('Select', 'MulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <SelectMulitFormItemWrap {...props} dataSource={dataSource} />;
});

// CheckAllMulitSelectFormItem
setItem('Select', 'CheckAllMulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  // @ts-ignore
  return <SelectCheckAllMulitFormItemWrap {...props} dataSource={dataSource} />;
});
// });

// 动态的Select
// selectDynamicDictNames.forEach((dictName) => {
// 创建三个FormItem
// SelectFormItem
// MulitSelectFormItem
// CheckAllMulitSelectFormItem
// SelectFormItem
setItem('SelectDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <SelectFormItemWrap {...props} dataSource={data} />;
});

// MulitSelectFormItem
setItem('SelectDynamic', 'MulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <SelectMulitFormItemWrap {...props} dataSource={data} />;
});

// CheckAllMulitSelectFormItem
setItem('SelectDynamic', 'CheckAllMulitFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  // @ts-ignore
  return <SelectCheckAllMulitFormItemWrap {...props} dataSource={data} />;
});
// });

// 自动补全的Select
// selectAutoCompleteDictNames.forEach((dictName) => {
// AutoCompleteFormItem
// FormItem
setItem('AutoSelectComplete', 'FormItem', (dictName) => ({ debounceTimeout = 300, ...props }) => {
  const forceUpdate = useForceUpdate();

  const handler = Dict.value[dictName].value;

  const fetchRef = useRef(0);

  const [fetching, setFetching] = useState(false);

  const [options, setOptions] = useState([]);

  const debounceFetcher = useRef();

  useEffect(() => {
    debounceFetcher.current = debounce(
      memoized.createMemoFun((value) => {
        fetchRef.current += 1;
        const fetchId = fetchRef.current;

        debugger;

        if (!value || (Array.isArray(value) && !value.length)) {
          setOptions((_opts) =>
            _opts.filter((t) => {
              if (Array.isArray(props.value)) {
                // @ts-ignore
                return !!props.value.find((v) => v === t.value);
              } else {
                // @ts-ignore
                return t.value === props.value;
              }
            }),
          );

          setFetching(false);
          return;
        }

        handler(value).then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }

          // @ts-ignore
          setOptions((_opts) => {
            const data = [
              ...newOptions,
              ..._opts.filter((t) => {
                if (Array.isArray(props.value)) {
                  // @ts-ignore
                  return !!props.value.find((v) => v === t.value);
                } else {
                  // @ts-ignore
                  return t.value === props.value;
                }
              }),
            ];

            return [...Array.from(new Set(data.map((t) => t.value)))].map((val) =>
              data.find((item) => item.value === val),
            );
          });

          setFetching(false);
        });
      }),
      debounceTimeout || 300,
    );

    forceUpdate();
  }, [debounceTimeout, props.value]);

  return (
    <SelectFormItem
      // @ts-ignore
      selectProps={{
        notFoundContent: fetching ? <Spin size="small" /> : null,
        filterOption: false,
        onSearch: debounceFetcher.current,
        onClear: () => {
          setOptions([]);
          setFetching(false);
        },
        ...props,
      }}
      dataSource={options}
    />
  );
});

let AutoSelectCompleteFormItem;

// AutoCompleteMulitFormItem
setItem('AutoSelectComplete', 'MulitFormItem', (dictName) => (props) => {
  // FormItemComponents[`${dictName}FormItem`];
  let Component =
    AutoSelectCompleteFormItem ??
    (AutoSelectCompleteFormItem = getItem({
      itemName: 'AutoSelectComplete',
      functionName: 'FormItem',
      dictName,
    }));

  return <Component mode="multiple" {...props} />;
});

// CheckAllAutoCompleteMulitSelectFormItem
setItem('AutoSelectComplete', 'CheckAllMulitFormItem', (dictName) => (props) => {
  const forceUpdate = useForceUpdate();

  const { onCheckAllChange, debounceTimeout, ...others } = props;

  const handler = Dict.value[dictName].value;

  const fetchRef = useRef(0);

  const [fetching, setFetching] = useState(false);

  const [options, setOptions] = useState([]);

  const debounceFetcher = useRef();

  useEffect(() => {
    debounceFetcher.current = debounce(
      memoized.createMemoFun((value) => {
        fetchRef.current += 1;
        const fetchId = fetchRef.current;

        if (!value || (Array.isArray(value) && !value.length)) {
          setOptions((_opts) =>
            _opts.filter((t) => {
              if (Array.isArray(props.value)) {
                // @ts-ignore
                return !!props.value.find((v) => v === t.value);
              } else {
                // @ts-ignore
                return t.value === props.value;
              }
            }),
          );

          setFetching(false);
          return;
        }

        handler(value).then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }

          // @ts-ignore
          setOptions((_opts) => {
            const data = [
              ...newOptions,
              ..._opts.filter((t) => {
                if (Array.isArray(props.value)) {
                  // @ts-ignore
                  return !!props.value.find((v) => v === t.value);
                } else {
                  // @ts-ignore
                  return t.value === props.value;
                }
              }),
            ];

            return [...Array.from(new Set(data.map((t) => t.value)))].map((val) =>
              data.find((item) => item.value === val),
            );
          });

          setFetching(false);
        });
      }),
      debounceTimeout || 300,
    );

    forceUpdate();
  }, [debounceTimeout, props.value]);

  return (
    <CheckAllMulitSelectFormItem
      selectProps={{
        notFoundContent: fetching ? <Spin size="small" /> : null,
        filterOption: false,
        onSearch: debounceFetcher.current,
        onClear: () => {
          setOptions([]);
          setFetching(false);
        },
        ...others,
      }}
      dataSource={options}
      onCheckAllChange={(checkAll) => {
        // @ts-ignore
        others.onChange(checkAll ? options.map((t) => t.value) : []);
      }}
    />
  );
});
// });

// return FormItemComponents;
// };
