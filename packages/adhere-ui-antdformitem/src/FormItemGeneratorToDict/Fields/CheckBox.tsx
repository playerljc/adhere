import { Checkbox, Space } from 'antd';
import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';

import CheckBoxCheckAllSelectFormItem from '../CheckBoxCheckAllSelectFormItem';
import CheckBoxSelectFormItem from '../CheckBoxSelectFormItem';

const FormItemComponents = {};

/**
 * initCheckBox
 * @description 初始化CheckBox
 */
export default () => {
  // 名称以CheckBox结尾的字典
  const checkBoxDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('CheckBox'),
  );

  // 名称以DynamicCheckBox结尾的字典
  const checkBoxDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicCheckBox'),
  );

  // CheckBoxVerticalFormItem
  FormItemComponents[`CheckBoxVerticalFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Checkbox.Group
        {...props}
        onChange={(values) => {
          props.onChange(values);
        }}
      >
        <Space direction="vertical">
          {dataSource.map((t) => (
            <Checkbox key={t.value} value={t.value} disabled={t.disabled}>
              {t.label}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    );
  };

  // CheckBoxHorizontalFormItem
  FormItemComponents[`CheckBoxHorizontalFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Checkbox.Group
        options={dataSource}
        {...props}
        onChange={(values) => {
          props.onChange(values);
        }}
      />
    );
  };

  // CheckBoxCheckAllVerticalFormItem
  FormItemComponents[`CheckBoxCheckAllVerticalFormItem`] = ({ dataSource, ...props }) => {
    const Children = FormItemComponents[`CheckBoxVerticalFormItem`];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkAll, setCheckAll] = useState((props.value || []).length === dataSource.length);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setCheckAll((props.value || []).length === dataSource.length);
    }, [props.value, dataSource]);

    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Checkbox
            checked={checkAll}
            onChange={(e) => {
              if (e.target.checked) {
                props.onChange(dataSource.map((t) => t.value));
              } else {
                props.onChange([]);
              }
            }}
          >
            {Intl.v('全选')}
          </Checkbox>
        </div>
        <div>
          <Children {...props} dataSource={dataSource} />
        </div>
      </div>
    );
  };

  // CheckBoxCheckAllHorizontalFormItem
  FormItemComponents[`CheckBoxCheckAllHorizontalFormItem`] = ({ dataSource, ...props }) => {
    const Children = FormItemComponents[`CheckBoxHorizontalFormItem`];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkAll, setCheckAll] = useState((props.value || []).length === dataSource.length);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setCheckAll((props.value || []).length === dataSource.length);
    }, [props.value, dataSource]);

    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Checkbox
            checked={checkAll}
            onChange={(e) => {
              if (e.target.checked) {
                props.onChange(dataSource.map((t) => t.value));
              } else {
                props.onChange([]);
              }
            }}
          >
            {Intl.v('全选')}
          </Checkbox>
        </div>
        <div>
          <Children {...props} dataSource={dataSource} />
        </div>
      </div>
    );
  };

  // CheckBoxSelectFormItem
  FormItemComponents[`CheckBoxSelectFormItem`] = ({ dataSource, ...props }) => {
    // @ts-ignore
    return <CheckBoxSelectFormItem dataSource={dataSource} {...props} />;
  };

  // CheckBoxCheckAllSelectFormItem
  FormItemComponents[`CheckBoxCheckAllSelectFormItem`] = ({ dataSource, ...props }) => {
    // @ts-ignore
    return <CheckBoxCheckAllSelectFormItem dataSource={dataSource} {...props} />;
  };

  // CheckBoxCustomFormItem
  FormItemComponents[`CheckBoxCustomFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Checkbox.Group
        {...props}
        onChange={(values) => {
          props.onChange(values);
        }}
      >
        {props.children(
          dataSource.map((t) => ({
            data: t,
            item: (
              <Checkbox key={t.value} value={t.value} disabled={t.disabled}>
                {t.label}
              </Checkbox>
            ),
          })),
        )}
      </Checkbox.Group>
    );
  };

  // CheckBoxCheckAllCustomFormItem
  FormItemComponents[`CheckBoxCheckAllCustomFormItem`] = ({ dataSource, ...props }) => {
    const Children = FormItemComponents[`CheckBoxCustomFormItem`];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkAll, setCheckAll] = useState((props.value || []).length === dataSource.length);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setCheckAll((props.value || []).length === dataSource.length);
    }, [props.value, dataSource]);

    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Checkbox
            checked={checkAll}
            onChange={(e) => {
              if (e.target.checked) {
                props.onChange(dataSource.map((t) => t.value));
              } else {
                props.onChange([]);
              }
            }}
          >
            {Intl.v('全选')}
          </Checkbox>
        </div>
        <div>
          <Children {...props} dataSource={dataSource} />
        </div>
      </div>
    );
  };

  // 静态的CheckBox
  checkBoxDictNames.forEach((dictName) => {
    // CheckBoxVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxVerticalFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckBoxHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxHorizontalFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckBoxCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxCheckAllVerticalFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckBoxCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxCheckAllHorizontalFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckBoxSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxSelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckBoxCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxCheckAllSelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckBoxCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxCustomFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // CheckBoxCheckAllCustomFormItem
    FormItemComponents[`${dictName}CheckAllCustomFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`CheckBoxCheckAllCustomFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };
  });

  // 动态的CheckBox
  checkBoxDynamicDictNames.forEach((dictName) => {
    // CheckBoxDynamicVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`CheckBoxVerticalFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckBoxDynamicHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`CheckBoxHorizontalFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckBoxDynamicCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`CheckBoxCheckAllVerticalFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckBoxDynamicCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`CheckBoxCheckAllHorizontalFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckBoxDynamicSelectFormItem
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

      const Component = FormItemComponents[`CheckBoxSelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckBoxDynamicCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`CheckBoxCheckAllSelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckBoxCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`CheckBoxCustomFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // CheckBoxCheckAllCustomFormItem
    FormItemComponents[`${dictName}CheckAllCustomFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`CheckBoxCheckAllCustomFormItem`];
      return <Component {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
