/***
  静态的数据
   普通的表格
   Select单选
   MultiSelect多选

  动态的数据
   普通的表格
   Select单选
   MultiSelect多选

  动态的分页数据
   普通的表格
   Select单选
   MultiSelect多选
***/
import { useMount, useUpdateEffect } from 'ahooks';
import React, { useRef, useState } from 'react';

import { Table } from '@baifendian/adhere-ui-anthoc';
import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import MultiSelectFormItem from '../MultiSelectFormItem';
import SelectFormItem from '../SelectFormItem';
import TableFormItem from '../TableFormItem';
import TableMultiSelectFormItem from '../TableMultiSelectFormItem';
import TableSelectFormItem from '../TableSelectFormItem';
import { deepDep } from '../util';

/**
 * TableFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem('Table', 'FormItem', (dictName) => ({ cascadeParams, onDataSourceChange, ...props }) => {
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

  return <TableFormItem {...props} dataSource={dataSource} />;
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
setItem(
  'Table',
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

      return <TableSelectFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * MultiSelectFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   labelKey
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem(
  'Table',
  'MultiSelectFormItem',
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

      return <TableMultiSelectFormItem {...props} dataSource={dataSource} />;
    },
);

/**
 * TableFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem(
  'TableDynamic',
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

      return <TableFormItem {...props} dataSource={data} />;
    },
);

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
setItem(
  'TableDynamic',
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

      return <TableSelectFormItem {...props} dataSource={data} />;
    },
);

/**
 * MultiSelectFormItem
 * @param cascadeParams
 * @param props {
 *   cascadeParams
 *   labelKey
 *   rowKey
 * }
 * @return {JSX.Element}
 */
setItem(
  'TableDynamic',
  'MultiSelectFormItem',
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

      return <TableMultiSelectFormItem {...props} dataSource={data} />;
    },
);

/**
 * TableFormItem
 * @param props {
 *   cascadeParams
 *   labelKey
 *   rowKey
 *   dataKey
 *   totalKey
 * }
 * @return {JSX.Element}
 */
setItem('TablePagination', 'FormItem', (dictName) => (props) => {
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

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [pagin.current, pagin.pageSize]);

  return (
    <Table
      dataSource={data}
      loading={loading}
      pagination={getPagination()}
      rowKey={props.rowKey || 'id'}
      {...props}
    />
  );
});

/**
 * TablePaginationSelectFormItem
 * @param props {
 *    rowKey
 *    labelKey
 * }
 */
setItem('TablePagination', 'SelectFormItem', (dictName) => (props) => {
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

  /**
   * renderDropdownRender
   */
  function renderDropdownRender() {
    const dataSource = inputValue
      ? data.filter((t) => (t[props.labelKey || 'name'] as string).indexOf(inputValue) !== -1)
      : data;

    return (
      <Table
        dataSource={dataSource}
        loading={loading}
        pagination={getPagination()}
        rowKey={props.rowKey || 'id'}
        rowSelection={{
          type: 'radio',
          selectedRowKeys,
          selectedRows,
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys);
            setSelectedRows(selectedRows as any);
            props.onChange(selectedRowKeys.length ? selectedRowKeys[0] : '');
          },
        }}
        {...props}
      />
    );
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [pagin.current, pagin.pageSize]);

  useUpdateEffect(() => {
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
 * TablePaginationMultiSelectFormItem
 * @param props {
 *    rowKey
 *    labelKey
 * }
 */
setItem('TablePagination', 'MultiSelectFormItem', (dictName) => (props) => {
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

  /**
   * filter
   * @param selected
   * @param records
   */
  function filter(selected, records) {
    const rowKey = props.rowKey || 'id';

    let _selectedRowKeys;
    let _selectedRows;

    if (selected) {
      // add
      _selectedRowKeys = [...selectedRowKeys, ...records.map((r) => r[rowKey])];
      _selectedRows = [...selectedRows, ...records];
    } else {
      // remove
      _selectedRowKeys = selectedRowKeys.filter((key) => !records.find((r) => r[rowKey] === key));
      _selectedRows = selectedRows.filter((row) => !records.find((r) => r[rowKey] === row[rowKey]));
    }

    setSelectedRowKeys(_selectedRowKeys);
    setSelectedRows(_selectedRows);
    props.onChange(_selectedRowKeys);
  }

  /**
   * renderDropdownRender
   */
  function renderDropdownRender() {
    const dataSource = inputValue
      ? getDataSource().filter((t) => t[props.labelKey || 'name'].indexOf(inputValue) !== -1)
      : getDataSource();

    return (
      <Table
        dataSource={dataSource}
        loading={loading}
        pagination={getPagination()}
        rowKey={props.rowKey || 'id'}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys,
          selectedRows,
          onSelect: (record, selected) => {
            filter(selected, [record]);
          },
          onSelectAll: (selected, selectedRows, changeRows) => {
            filter(selected, changeRows);
          },
        }}
        {...props}
      />
    );
  }

  useMount(() => {
    loadData();
  });

  useUpdateEffect(() => {
    loadData();
  }, [pagin.current, pagin.pageSize]);

  return (
    <MultiSelectFormItem
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
