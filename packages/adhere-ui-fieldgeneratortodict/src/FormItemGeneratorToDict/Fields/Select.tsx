import { useMount, useUpdateEffect } from 'ahooks';
import debounce from 'lodash.debounce';
import React, { useEffect, useRef, useState } from 'react';

import { Spin } from '@baifendian/adhere-ui-anthoc';
import Hooks from '@baifendian/adhere-ui-hooks';
import Dict from '@baifendian/adhere-util-dict';
import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import CheckAllMultiSelectFormItem from '../CheckAllMultiSelectFormItem';
import { getItem, setItem } from '../ItemFactory';
import MultiSelectFormItem from '../MultiSelectFormItem';
import SelectFormItem from '../SelectFormItem';
import { deepDep } from '../util';

const { memoized } = WatchMemoized;

const { useForceUpdate } = Hooks;

let AutoSelectCompleteFormItem;

// SelectFormItemWrap
const SelectFormItemWrap = ({ dataSource, ...props }) => {
  // @ts-ignore
  return <SelectFormItem selectProps={{ ...props }} dataSource={dataSource} />;
};

// MultiSelectFormItem
const SelectMultiFormItemWrap = ({ dataSource, ...props }) => {
  // @ts-ignore
  return <MultiSelectFormItem selectProps={{ ...props }} dataSource={dataSource} />;
};

// CheckAllMultiSelectFormItem
const SelectCheckAllMultiFormItemWrap = ({ dataSource, onCheckAllChange, ...props }) => {
  return (
    <CheckAllMultiSelectFormItem
      // @ts-ignore
      selectProps={{ ...props }}
      dataSource={dataSource}
      onCheckAllChange={(checkAll) => {
        props.onChange(checkAll ? dataSource.map((t) => t.value) : []);
      }}
    />
  );
};

/**
 * SelectFormItem
 */
setItem('Select', 'FormItem', (dictName) => ({ cascadeParams, onDataSourceChange, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  useUpdateEffect(() => {
    onDataSourceChange?.(dataSource);
  }, [dataSource]);

  return <SelectFormItemWrap {...props} dataSource={dataSource} />;
});

/**
 * SelectMultiFormItem
 */
setItem(
  'Select',
  'MultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      useUpdateEffect(() => {
        onDataSourceChange?.(dataSource);
      }, [dataSource]);

      return <SelectMultiFormItemWrap {...props} dataSource={dataSource} />;
    },
);

/**
 * SelectCheckAllMultiFormItem
 */
setItem(
  'Select',
  'CheckAllMultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      useUpdateEffect(() => {
        onDataSourceChange?.(dataSource);
      }, [dataSource]);

      // @ts-ignore
      return <SelectCheckAllMultiFormItemWrap {...props} dataSource={dataSource} />;
    },
);

/**
 * SelectDynamicFormItem
 */
setItem(
  'SelectDynamic',
  'FormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
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

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      return <SelectFormItemWrap {...props} dataSource={data} />;
    },
);

/**
 * SelectDynamicMultiFormItem
 */
setItem(
  'SelectDynamic',
  'MultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
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

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      return <SelectMultiFormItemWrap {...props} dataSource={data} />;
    },
);

/**
 * SelectDynamicCheckAllMultiFormItem
 */
setItem(
  'SelectDynamic',
  'CheckAllMultiFormItem',
  (dictName) =>
    ({ cascadeParams, onDataSourceChange, ...props }) => {
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

      useUpdateEffect(() => {
        onDataSourceChange?.(data);
      }, [data]);

      // @ts-ignore
      return <SelectCheckAllMultiFormItemWrap {...props} dataSource={data} />;
    },
);

/**
 * AutoSelectCompleteFormItem
 */
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
        debugger;
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

/**
 * AutoSelectCompleteMultiFormItem
 */
setItem('AutoSelectComplete', 'MultiFormItem', (originDictName, dictName) => (props) => {
  // FormItemComponents[`${dictName}FormItem`];
  let Component =
    AutoSelectCompleteFormItem ??
    (AutoSelectCompleteFormItem = getItem({
      itemName: 'AutoSelectComplete',
      functionName: 'FormItem',
      dictName: dictName as string,
    }));

  return <Component mode="multiple" {...props} />;
});

/**
 * AutoSelectCompleteCheckAllMultiFormItem
 */
setItem('AutoSelectComplete', 'CheckAllMultiFormItem', (dictName) => (props) => {
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
    <CheckAllMultiSelectFormItem
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
