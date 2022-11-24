import { Radio, Space } from 'antd';
import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import RadioSelectFormItem from '../RadioSelectFormItem';

const FormItemComponents = {};

/**
 * initRadio
 * @description 初始化Radio
 */
export default () => {
  // 名称以Radio结尾的字典
  const radioDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('Radio'),
  );

  // 名称以DynamicRadio结尾的字典
  const radioDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicRadio'),
  );

  // RadioVerticalFormItem
  FormItemComponents[`RadioVerticalFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Radio.Group
        {...props}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      >
        <Space direction="vertical">
          {dataSource.map((t) => (
            <Radio key={t.value} value={t.value} disabled={t.disabled}>
              {t.label}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    );
  };

  // RadioHorizontalFormItem
  FormItemComponents[`RadioHorizontalFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Radio.Group
        options={dataSource}
        {...props}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    );
  };

  // RadioButtonFormItem
  FormItemComponents[`RadioButtonFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Radio.Group
        options={dataSource}
        optionType="button"
        {...props}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    );
  };

  // RadioSelectFormItem
  FormItemComponents[`RadioSelectFormItem`] = ({ dataSource, ...props }) => {
    // @ts-ignore
    return <RadioSelectFormItem dataSource={dataSource} {...props} />;
  };

  // RadioCustomFormItem
  FormItemComponents[`RadioCustomFormItem`] = ({ dataSource, ...props }) => {
    return (
      <Radio.Group
        {...props}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      >
        {props.children(
          dataSource.map((t) => ({
            data: t,
            item: (
              <Radio key={t.value} value={t.value} disabled={t.disabled}>
                {t.label}
              </Radio>
            ),
          })),
        )}
      </Radio.Group>
    );
  };

  // 静态的Radio
  radioDictNames.forEach((dictName) => {
    // RadioVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`RadioVerticalFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // RadioHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`RadioHorizontalFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // RadioButtonFormItem
    FormItemComponents[`${dictName}ButtonFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`RadioButtonFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // RadioSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`RadioSelectFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };

    // RadioCustomFormItem
    FormItemComponents[`${dictName}CustomFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      const Component = FormItemComponents[`RadioCustomFormItem`];
      return <Component {...props} dataSource={dataSource} />;
    };
  });

  // 动态的Radio
  radioDynamicDictNames.forEach((dictName) => {
    // RadioVerticalFormItem
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

      const Component = FormItemComponents[`RadioVerticalFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // RadioHorizontalFormItem
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

      const Component = FormItemComponents[`RadioHorizontalFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // RadioButtonFormItem
    FormItemComponents[`${dictName}ButtonFormItem`] = ({ cascadeParams, ...props }) => {
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

      const Component = FormItemComponents[`RadioButtonFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // RadioSelectFormItem
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

      const Component = FormItemComponents[`RadioSelectFormItem`];
      return <Component {...props} dataSource={data} />;
    };

    // RadioCustomFormItem
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

      const Component = FormItemComponents[`RadioCustomFormItem`];
      return <Component {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
