import React, { useEffect, useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import TagCheckAllHorizontalFormItem from '../TagCheckAllHorizontalFormItem';
import TagCheckAllSelectFormItem from '../TagCheckAllSelectFormItem';
import TagCheckAllVerticalFormItem from '../TagCheckAllVerticalFormItem';
import TagHorizontalFormItem from '../TagHorizontalFormItem';
import TagMultiSelectFormItem from '../TagMultiSelectFormItem';
import TagSelectFormItem from '../TagSelectFormItem';
import TagVerticalFormItem from '../TagVerticalFormItem';

const FormItemComponents = {};

export default () => {
  // 名称以Tag结尾的字典
  const dictNames = Object.keys(Dict.handlers).filter((dictName) => dictName.endsWith('Tag'));

  // 名称以DynamicTag结尾的字典
  const tagDynamicDictNames = Object.keys(Dict.handlers).filter((dictName) =>
    dictName.endsWith('DynamicTag'),
  );

  // 静态的tag
  dictNames.forEach((dictName) => {
    // TagVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TagVerticalFormItem {...props} dataSource={dataSource} />;
    };

    // TagHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TagHorizontalFormItem {...props} dataSource={dataSource} />;
    };

    // TagCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TagCheckAllVerticalFormItem {...props} dataSource={dataSource} />;
    };

    // TagCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TagCheckAllHorizontalFormItem {...props} dataSource={dataSource} />;
    };

    // TagSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TagSelectFormItem {...props} dataSource={dataSource} />;
    };

    // TagMultiSelectFormItem
    FormItemComponents[`${dictName}MultiSelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TagMultiSelectFormItem {...props} dataSource={dataSource} />;
    };

    // TagCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = ({ cascadeParams, ...props }) => {
      const handler = Dict.value[dictName].value;

      let dataSource;

      // 如果是函数(一般是级联)
      if (handler instanceof Function) {
        dataSource = handler(cascadeParams);
      } else {
        dataSource = handler;
      }

      return <TagCheckAllSelectFormItem {...props} dataSource={dataSource} />;
    };
  });

  // 动态的tag
  tagDynamicDictNames.forEach((dictName) => {
    // TagDynamicVerticalFormItem
    FormItemComponents[`${dictName}VerticalFormItem`] = ({ cascadeParams, ...props }) => {
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
      }, [cascadeParams]);

      return <TagVerticalFormItem {...props} dataSource={data} />;
    };

    // TagDynamicHorizontalFormItem
    FormItemComponents[`${dictName}HorizontalFormItem`] = ({ cascadeParams, ...props }) => {
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
      }, [cascadeParams]);

      return <TagHorizontalFormItem {...props} dataSource={data} />;
    };

    // TagDynamicCheckAllVerticalFormItem
    FormItemComponents[`${dictName}CheckAllVerticalFormItem`] = ({ cascadeParams, ...props }) => {
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
      }, [cascadeParams]);

      return <TagCheckAllVerticalFormItem {...props} dataSource={data} />;
    };

    // TagDynamicCheckAllHorizontalFormItem
    FormItemComponents[`${dictName}CheckAllHorizontalFormItem`] = ({ cascadeParams, ...props }) => {
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
      }, [cascadeParams]);

      return <TagCheckAllHorizontalFormItem {...props} dataSource={data} />;
    };

    // TagDynamicSelectFormItem
    FormItemComponents[`${dictName}SelectFormItem`] = ({ cascadeParams, ...props }) => {
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
      }, [cascadeParams]);

      return <TagSelectFormItem {...props} dataSource={data} />;
    };

    // TagDynamicCheckAllSelectFormItem
    FormItemComponents[`${dictName}CheckAllSelectFormItem`] = ({ cascadeParams, ...props }) => {
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
      }, [cascadeParams]);

      return <TagCheckAllSelectFormItem {...props} dataSource={data} />;
    };
  });

  return FormItemComponents;
};
