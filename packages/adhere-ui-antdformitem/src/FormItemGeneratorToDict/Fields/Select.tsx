import debounce from 'lodash/debounce';
import React, { useEffect, useRef, useState } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Dict from '@baifendian/adhere-util-dict';
import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import { Spin } from '../../AntFormItemNormalize';
import CheckAllMulitSelectFormItem from '../CheckAllMulitSelectFormItem';
import MulitSelectFormItem from '../MulitSelectFormItem';
import SelectFormItem from '../SelectFormItem';

const FormItemComponents = {};

const { memoized } = WatchMemoized;

const { useForceUpdate } = Hooks;

/**
 * initSelect
 * @description 初始化Select
 */
export default () => {
  // 名称以Select结尾的字典
  const selectDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Select'),
  );

  // 名称以DynamicSelect结尾的字典
  const selectDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicSelect'),
  );

  // 名称以AutoComplete结尾的字典
  const selectAutoCompleteDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('AutoCompleteSelect'),
  );

  // SelectFormItem
  FormItemComponents[`SelectFormItem`] = ({ dataSource, ...props }) => {
    // @ts-ignore
    return <SelectFormItem selectProps={{ ...props }} dataSource={dataSource} />;
  };

  // MulitSelectFormItem
  FormItemComponents[`SelectMulitFormItem`] = ({ dataSource, ...props }) => {
    // @ts-ignore
    return <MulitSelectFormItem selectProps={{ ...props }} dataSource={dataSource} />;
  };

  // CheckAllMulitSelectFormItem
  FormItemComponents[`SelectCheckAllMulitFormItem`] = ({
    dataSource,
    onCheckAllChange,
    ...props
  }) => {
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
  selectDictNames.forEach((selectDictName) => {
    // 创建三个FormItem
    // SelectFormItem
    // MulitSelectFormItem
    // CheckAllMulitSelectFormItem

    // SelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`SelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`SelectMulitFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckAllMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = ({
      cascadeParams,
      ...props
    }) => {
      const handler = Dict.value[selectDictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`SelectCheckAllMulitFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };
  });

  // 动态的Select
  selectDynamicDictNames.forEach((selectDictName) => {
    // 创建三个FormItem
    // SelectFormItem
    // MulitSelectFormItem
    // CheckAllMulitSelectFormItem

    // SelectFormItem
    FormItemComponents[`${selectDictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

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
      }, [cascadeParams]);

      const Component = FormItemComponents[`SelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // MulitSelectFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = ({ cascadeParams, ...props }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

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
      }, [cascadeParams]);

      const Component = FormItemComponents[`SelectMulitFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckAllMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = ({
      cascadeParams,
      ...props
    }) => {
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[selectDictName].value;

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
      }, [cascadeParams]);

      const Component = FormItemComponents[`SelectCheckAllMulitFormItem`];
      return <Component {...props} dataSource={data} />;
    };
  });

  // 自动补全的Select
  selectAutoCompleteDictNames.forEach((selectDictName) => {
    // AutoCompleteFormItem
    FormItemComponents[`${selectDictName}FormItem`] = ({ debounceTimeout = 300, ...props }) => {
      const forceUpdate = useForceUpdate();

      const handler = Dict.value[selectDictName].value;

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
    };

    // AutoCompleteMulitFormItem
    FormItemComponents[`${selectDictName}MulitFormItem`] = (props) => {
      const Component = FormItemComponents[`${selectDictName}FormItem`];

      return <Component mode="multiple" {...props} />;
    };

    // CheckAllAutoCompleteMulitSelectFormItem
    FormItemComponents[`${selectDictName}CheckAllMulitFormItem`] = (props) => {
      const forceUpdate = useForceUpdate();

      const { onCheckAllChange, debounceTimeout, ...others } = props;

      const handler = Dict.value[selectDictName].value;

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
    };
  });

  return FormItemComponents;
};
