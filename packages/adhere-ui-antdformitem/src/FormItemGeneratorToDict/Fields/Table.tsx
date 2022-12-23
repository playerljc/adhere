/***
  静态的数据
   普通的表格
   Select单选
   MulitSelect多选

  动态的数据
   普通的表格
   Select单选
   MulitSelect多选

  动态的分页数据
   普通的表格
   Select单选
   MulitSelect多选
***/
import { Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import MulitSelectFormItem from '../MulitSelectFormItem';
import SelectFormItem from '../SelectFormItem';

const FormItemComponents = {};

/**
 * initTable
 * @description 初始化Table
 */
export default () => {
  // 名称以Table结尾的字典
  const tableDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Table'),
  );

  // 名称以DynamicTable结尾的字典
  const tableDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTable'),
  );

  // 名称以TablePagination结尾的字典(肯定是动态数据)
  const tablePaginationDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('TablePagination'),
  );

  /**
   * TableFormItem
   * @param dataSource
   * @param props {
   *   cascadeParams
   *   rowKey
   * }
   * @return {JSX.Element}
   */
  FormItemComponents[`TableFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Table dataSource={dataSource} pagination={false} rowKey={props.rowKey || 'id'} {...props} />
    );
  };

  /**
   * SelectFormItem
   * @param dataSource
   * @param props {
   *   cascadeParams
   *   rowKey
   *   labelKey
   * }
   * @return {JSX.Element}
   */
  FormItemComponents[`TableSelectFormItem`] = ({ dataSource, ...props }) => {
    const Component = FormItemComponents[`TableFormItem`];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRowKeys, setSelectedRowKeys] = useState(props.value ? [props.value] : []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRows, setSelectedRows] = useState(
      props.value ? dataSource.find((t) => t[props.rowKey || 'id'] === props.value) : [],
    );

    /**
     * renderDropdownRender
     * @return {JSX.Element}
     */
    function renderDropdownRender() {
      const data = inputValue
        ? dataSource.filter((t) => t[props.labelKey || 'name'].startsWith(inputValue))
        : dataSource;

      return (
        <Component
          rowSelection={{
            type: 'radio',
            selectedRowKeys,
            selectedRows,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeys(selectedRowKeys);
              setSelectedRows(selectedRows);
              props.onChange(selectedRowKeys.length ? selectedRowKeys[0] : '');
            },
          }}
          {...props}
          dataSource={data}
        />
      );
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (props.value) {
        setSelectedRowKeys([props.value]);
        setSelectedRows([dataSource.find((t) => t[props.rowKey || 'id'] === props.value)]);
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
          filterOption: (inputValue) => {
            setInputValue(inputValue);
            return false;
          },
          onBlur: () => {
            setInputValue('');
          },
          onClear: () => {
            setInputValue('');
          },
          ...(props.selectProps || {}),
        }}
        dataSource={dataSource.map((t) => ({
          label: t[props.labelKey || 'name'],
          value: t[props.rowKey || 'id'],
        }))}
      />
    );
  };

  /**
   * MulitSelectFormItem
   * @param dataSource
   * @param props {
   *   cascadeParams
   *   labelKey
   *   rowKey
   * }
   * @return {JSX.Element}
   */
  FormItemComponents[`TableMulitSelectFormItem`] = ({ dataSource, ...props }) => {
    const Component = FormItemComponents[`TableFormItem`];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRowKeys, setSelectedRowKeys] = useState(props.value ? props.value : []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRows, setSelectedRows] = useState(
      props.value
        ? props.value.map((t) => dataSource.find((_item) => _item[props.rowKey || 'id'] === t))
        : [],
    );

    function renderDropdownRender() {
      const data = inputValue
        ? dataSource.filter((t) => t[props.labelKey || 'name'].startsWith(inputValue))
        : dataSource;

      return (
        <Component
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys,
            selectedRows,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeys(selectedRowKeys);
              setSelectedRows(selectedRows);
              props.onChange(selectedRowKeys.length ? selectedRowKeys : []);
            },
          }}
          {...props}
          dataSource={data}
        />
      );
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (props.value) {
        setSelectedRowKeys([props.value]);
        setSelectedRows(
          props.value.map((t) => dataSource.find((_item) => _item[props.rowKey || 'id'] === t)),
        );
      } else {
        setSelectedRowKeys([]);
        setSelectedRows([]);
      }
    }, [props.value]);

    return (
      <MulitSelectFormItem
        selectProps={{
          value: props.value,
          dropdownRender: renderDropdownRender,
          onChange: (values) => {
            props.onChange(values);
          },
          filterOption: (inputValue) => {
            setInputValue(inputValue);
            return false;
          },
          onBlur: () => {
            setInputValue('');
          },
          onClear: () => {
            setInputValue('');
          },
          ...(props.selectProps || {}),
        }}
        dataSource={dataSource.map((t) => ({
          label: t[props.labelKey || 'name'],
          value: t[props.rowKey || 'id'],
        }))}
      />
    );
  };

  // 静态的Table
  tableDictNames.forEach((dictName) => {
    /**
     * TableFormItem
     * @param cascadeParams
     * @param props {
     *   cascadeParams
     *   rowKey
     * }
     * @return {JSX.Element}
     */
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`TableFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

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
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`TableSelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

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
    FormItemComponents[`${dictName}MulitSelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`TableMulitSelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };
  });

  // 动态的Table
  tableDynamicDictNames.forEach((dictName) => {
    /**
     * TableFormItem
     * @param cascadeParams
     * @param props {
     *   cascadeParams
     *   rowKey
     * }
     * @return {JSX.Element}
     */
    FormItemComponents[`${dictName}FormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是Promise直接返回
        if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }, []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        }
      }, [cascadeParams]);

      const Component = FormItemComponents[`TableFormItem`];
      return <Component {...props} dataSource={data} />;
    };

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
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是Promise直接返回
        if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }, []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        }
      }, [cascadeParams]);

      const Component = FormItemComponents[`TableSelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };

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
    FormItemComponents[`${dictName}MulitSelectFormItem`] = ({ cascadeParams, ...props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // 存放字典的返回值(可能是promise也可能是Function)
      const handler = Dict.value[dictName].value;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是Promise直接返回
        if (handler.then) {
          handler.then((res) => {
            setData(res);
          });
        }
      }, []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // 如果是函数(一般是级联)
        if (handler instanceof Function) {
          handler(cascadeParams).then((res) => {
            setData(res);
          });
        }
      }, [cascadeParams]);

      const Component = FormItemComponents[`TableMulitSelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };
  });

  // 动态的分页Table
  tablePaginationDictNames.forEach((dictName) => {
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
    FormItemComponents[`${dictName}FormItem`] = (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [loading, setLoading] = useState(false);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // eslint-disable-next-line react-hooks/rules-of-hooks
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

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
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
    };

    /**
     * SelectFormItem
     * @param props {
     *    rowKey
     *    labelKey
     * }
     */
    FormItemComponents[`${dictName}SelectFormItem`] = (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [inputValue, setInputValue] = useState('');

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [loading, setLoading] = useState(false);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [data, setData] = useState([]);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [pagin, setPagin] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [selectedRowKeys, setSelectedRowKeys] = useState(props.value ? [props.value] : []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
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
          ? data.filter((t) => (t[props.labelKey || 'name'] as string).startsWith(inputValue))
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

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        loadData();
      }, [pagin.current, pagin.pageSize]);

      // eslint-disable-next-line react-hooks/rules-of-hooks
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
            filterOption: (inputValue) => {
              setInputValue(inputValue);
              return false;
            },
            onBlur: () => {
              setInputValue('');
            },
            onClear: () => {
              setInputValue('');
            },
            ...(props.selectProps || {}),
          }}
          dataSource={data.map((t) => ({
            label: t[props.labelKey || 'name'],
            value: t[props.rowKey || 'id'],
          }))}
        />
      );
    };

    /**
     * MulitSelectFormItem
     * @param props {
     *    rowKey
     *    labelKey
     * }
     */
    FormItemComponents[`${dictName}MulitSelectFormItem`] = (props) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [inputValue, setInputValue] = useState('');

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [loading, setLoading] = useState(false);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const data = useRef(new Map());

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [pagin, setPagin] = useState({
        current: 1,
        pageSize: 10,
        total: 0,
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [selectedRowKeys, setSelectedRowKeys] = useState(props.value ? props.value : []);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [selectedRows, setSelectedRows] = useState(
        props.value
          ? props.value.map((t) =>
              getDataSource().find((_item) => _item[props.rowKey || 'id'] === t),
            )
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
          _selectedRowKeys = selectedRowKeys.filter(
            (key) => !records.find((r) => r[rowKey] === key),
          );
          _selectedRows = selectedRows.filter(
            (row) => !records.find((r) => r[rowKey] === row[rowKey]),
          );
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
          ? getDataSource().filter((t) => t[props.labelKey || 'name'].startsWith(inputValue))
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

      // eslint-disable-next-line react-hooks/rules-of-hooks
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
            filterOption: (inputValue) => {
              setInputValue(inputValue);
              return false;
            },
            ...(props.selectProps || {}),
          }}
          dataSource={getDataSource().map((t) => ({
            label: t[props.labelKey || 'name'],
            value: t[props.rowKey || 'id'],
          }))}
        />
      );
    };
  });

  return FormItemComponents;
};