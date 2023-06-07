import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { Checkbox, List, Radio } from '@baifendian/adhere-ui-anthoc';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import ListFormItem from '../ListFormItem';
import ListMulitSelectFormItem from '../ListMulitSelectFormItem';
import ListSelectFormItem from '../ListSelectFormItem';
import MulitSelectFormItem from '../MulitSelectFormItem';
import SelectFormItem from '../SelectFormItem';
import { deepDep } from '../util';

const selectorPrefix = 'adhere-ui-antdformitem';

// const FormItemComponents = {};

// export default () => {
//   // 名称以List结尾的字典
//   const listDictNames = Object.keys(Dict.handlers).filter((dictName) => dictName.endsWith('List'));
//
//   // 名称以DynamicList结尾的字典
//   const listDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('ListDynamic'),
//   );
//
//   // 名称以ListPagination结尾的字典(肯定是动态数据)
//   const listPaginationDictNames = Object.keys(Dict.handlers).filter((dictName) =>
//     dictName.endsWith('ListPagination'),
//   );

// 静态的List
// listDictNames.forEach((dictName) => {
/**
 * ListFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem('List', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <ListFormItem {...props} dataSource={dataSource} />;
});

/**
 * SelectFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   rowKey
 *   labelKey
 * }
 * @return {JSX.Element}
 */
setItem('List', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <ListSelectFormItem {...props} dataSource={dataSource} />;
});

/**
 * MulitSelectFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   labelKey
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem('List', 'MulitSelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <ListMulitSelectFormItem {...props} dataSource={dataSource} />;
});
// });

// 动态的List
// listDynamicDictNames.forEach((dictName) => {
/**
 * ListFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem('ListDynamic', 'FormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <ListFormItem {...props} dataSource={data} />;
});

/**
 * SelectFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   labelKey
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem('ListDynamic', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <ListSelectFormItem {...props} dataSource={data} />;
});

/**
 * MulitSelectFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   labelKey
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem('ListDynamic', 'MulitSelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <ListMulitSelectFormItem {...props} dataSource={data} />;
});
// });

// 动态的分页List
// listPaginationDictNames.forEach((dictName) => {
/**
 * ListFormItem
 * @param props {
 *   cascadeParams
 *   labelKey
 *   rowKey
 *   dataKey
 *   totalKey
 * }
 * @return {JSX.Element}
 */
setItem('ListPagination', 'FormItem', (dictName) => (props) => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const [pagin, setPagin] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  /**
   * getPagination
   * @description 获取分页信息
   */
  function getPagination() {
    return {
      onChange: (current, pageSize) => {
        setPagin({
          ...pagin,
          current,
          pageSize,
        });
      },
      onShowSizeChange: (current, pageSize) => {
        setPagin({
          ...pagin,
          current,
          pageSize,
        });
      },
      total: pagin.total,
      current: pagin.current,
      pageSize: pagin.pageSize,
      showQuickJumper: true,
    };
  }

  /**
   * loadData
   */
  function loadData() {
    setLoading(true);

    handler({ ...pagin })
      .then((res) => {
        setPagin({
          ...pagin,
          total: res[props.totalKey || 'total'],
        });

        setData(res[props.dataKey || 'records']);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    loadData();
  }, [pagin.current, pagin.pageSize]);

  return (
    <List
      dataSource={data}
      loading={loading}
      pagination={getPagination()}
      rowKey={props.rowKey || 'id'}
      {...props}
    />
  );
});

/**
 * SelectFormItem
 * @param props {
 *    rowKey
 *    labelKey
 * }
 */
setItem('ListPagination', 'SelectFormItem', (dictName) => (props) => {
  const [inputValue, setInputValue] = useState('');

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const [pagin, setPagin] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState(props.value ? [props.value] : []);

  const [selectedRows, setSelectedRows] = useState(
    props.value ? data.find((t) => t[props.rowKey || 'id'] === props.value) : [],
  );

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  /**
   * getPagination
   * @description 获取分页信息
   */
  function getPagination() {
    return {
      onChange: (current, pageSize) => {
        setPagin({
          ...pagin,
          current,
          pageSize,
        });
      },
      onShowSizeChange: (current, pageSize) => {
        setPagin({
          ...pagin,
          current,
          pageSize,
        });
      },
      total: pagin.total,
      current: pagin.current,
      pageSize: pagin.pageSize,
      showQuickJumper: true,
    };
  }

  /**
   * loadData
   */
  function loadData() {
    setLoading(true);

    handler({ ...pagin })
      .then((res) => {
        setPagin({
          ...pagin,
          total: res[props.totalKey || 'total'],
        });

        setData(res[props.dataKey || 'records']);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function RadioWrap(item: any) {
    const rowKey = props.rowKey || 'id';

    return (
      <Radio
        onChange={(e) => {
          e.stopPropagation();

          const checked = e.target.checked;

          if (checked) {
            setSelectedRowKeys([item[rowKey]]);
            // @ts-ignore
            setSelectedRows([{ ...item }]);
            props.onChange(item[rowKey]);
          }
        }}
        checked={selectedRowKeys.includes(item[rowKey])}
      />
    );
  }

  /**
   * renderDropdownRender
   */
  function renderDropdownRender() {
    const dataSource = inputValue
      ? data.filter((t) => (t[props.labelKey || 'name'] as string).indexOf(inputValue) !== -1)
      : data;

    return (
      <List
        dataSource={dataSource}
        loading={loading}
        pagination={getPagination()}
        rowKey={props.rowKey || 'id'}
        {...props}
        renderItem={(item) => (
          <ConditionalRender
            conditional={!!props.renderItem}
            noMatch={() => (
              <div className={`${selectorPrefix}-rowselectwrap`}>
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{RadioWrap(item)}</div>
                <div className={`${selectorPrefix}-rowselectwrap-auto`}>{item as ReactNode}</div>
              </div>
            )}
          >
            {() => (
              <div className={`${selectorPrefix}-rowselectwrap`}>
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{RadioWrap(item)}</div>
                <div className={`${selectorPrefix}-rowselectwrap-auto`}>
                  {props.renderItem(item)}
                </div>
              </div>
            )}
          </ConditionalRender>
        )}
      />
    );
  }

  useEffect(() => {
    loadData();
  }, [pagin.current, pagin.pageSize]);

  useEffect(() => {
    if (props.value) {
      setSelectedRowKeys([props.value]);
      setSelectedRows([data.find((t) => t[props.rowKey || 'id'] === props.value)!]);
    } else {
      setSelectedRowKeys([]);
      setSelectedRows([]);
    }
  }, [props.value]);

  return (
    <SelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (value) => {
          props.onChange(value);
        },
        filterOption: () => {
          return false;
        },
        onSearch: (inputValue) => setInputValue(inputValue),
        onBlur: () => {
          setInputValue('');
        },
        onClear: () => {
          setInputValue('');
        },
        ...(props.selectProps ?? {}),
      }}
      dataSource={data.map((t) => ({
        label: t[props.labelKey || 'name'],
        value: t[props.rowKey || 'id'],
      }))}
    />
  );
});

/**
 * MulitSelectFormItem
 * @param props {
 *    rowKey
 *    labelKey
 * }
 */
setItem('ListPagination', 'MulitSelectFormItem', (dictName) => (props) => {
  const [inputValue, setInputValue] = useState('');

  const [loading, setLoading] = useState(false);

  const data = useRef(new Map());

  const [pagin, setPagin] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState(props.value ? props.value : []);

  const [selectedRows, setSelectedRows] = useState(
    props.value
      ? props.value.map((t) => getDataSource().find((_item) => _item[props.rowKey || 'id'] === t))
      : [],
  );

  // 存放字典的返回值(可能是promise也可能是Function)
  const handler = Dict.value[dictName].value;

  /**
   * getPagination - 获取分页信息
   */
  function getPagination() {
    return {
      onChange: (current, pageSize) => {
        setPagin({
          ...pagin,
          current,
          pageSize,
        });
      },
      onShowSizeChange: (current, pageSize) => {
        setPagin({
          ...pagin,
          current,
          pageSize,
        });
      },
      total: pagin.total,
      current: pagin.current,
      pageSize: pagin.pageSize,
      showQuickJumper: true,
    };
  }

  /**
   * getDataSource
   * @return {V|*[]}
   */
  function getDataSource() {
    return data.current.get(pagin.current) || [];
  }

  /**
   * loadData
   */
  function loadData() {
    setLoading(true);

    handler({ ...pagin })
      .then((res) => {
        data.current.set(pagin.current, res[props.dataKey || 'records']);

        setPagin({
          ...pagin,
          total: res[props.totalKey || 'total'],
        });

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function CheckWrap(item) {
    const rowKey = props.rowKey || 'id';

    return (
      <Checkbox
        onChange={(e) => {
          e.stopPropagation();

          const checked = e.target.checked;

          if (checked) {
            setSelectedRowKeys((keys) => [...keys, item[rowKey]]);
            setSelectedRows((rows) => [...rows, { ...item }]);
            props.onChange([...selectedRowKeys, item[rowKey]]);
          } else {
            setSelectedRowKeys((keys) => keys.filter((key) => key !== item[rowKey]));
            setSelectedRows((rows) => rows.filter((row) => row[rowKey] !== item[rowKey]));
            props.onChange([...selectedRowKeys.filter((key) => key !== item[rowKey])]);
          }
        }}
        checked={selectedRowKeys.includes(item[rowKey])}
      />
    );
  }

  /**
   * renderDropdownRender
   */
  function renderDropdownRender() {
    const dataSource = inputValue
      ? getDataSource().filter((t) => t[props.labelKey || 'name'].indexOf(inputValue) !== -1)
      : getDataSource();

    return (
      <List
        dataSource={dataSource}
        loading={loading}
        pagination={getPagination()}
        rowKey={props.rowKey || 'id'}
        {...props}
        renderItem={(item) => (
          <ConditionalRender
            conditional={!!props.renderItem}
            noMatch={() => (
              <div className={`${selectorPrefix}-rowselectwrap`}>
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{CheckWrap(item)}</div>
                <div className={`${selectorPrefix}-rowselectwrap-auto`}>{item as ReactNode}</div>
              </div>
            )}
          >
            {() => (
              <div className={`${selectorPrefix}-rowselectwrap`}>
                <div className={`${selectorPrefix}-rowselectwrap-fixed`}>{CheckWrap(item)}</div>
                <div className={`${selectorPrefix}-rowselectwrap-auto`}>
                  {props.renderItem(item)}
                </div>
              </div>
            )}
          </ConditionalRender>
        )}
      />
    );
  }

  useEffect(() => {
    loadData();
  }, [pagin.current, pagin.pageSize]);

  return (
    <MulitSelectFormItem
      selectProps={{
        value: props.value,
        dropdownRender: renderDropdownRender,
        onChange: (value) => {
          props.onChange(value);
          setSelectedRowKeys(value);
          setSelectedRows(
            value.map((t) =>
              Array.from((data as any).values()).find(
                (_item: any) => _item[props.rowKey || 'id'] === t,
              ),
            ),
          );
        },
        onClear: () => {
          setSelectedRowKeys([]);
          setSelectedRows([]);
          setInputValue('');
          props.onChange([]);
        },
        onBlur: () => {
          setInputValue('');
        },
        onSearch: (inputValue) => setInputValue(inputValue),
        filterOption: () => {
          return false;
        },
        ...(props.selectProps ?? {}),
      }}
      dataSource={getDataSource().map((t) => ({
        label: t[props.labelKey || 'name'],
        value: t[props.rowKey || 'id'],
      }))}
    />
  );
});
// });

// return FormItemComponents;
// };
