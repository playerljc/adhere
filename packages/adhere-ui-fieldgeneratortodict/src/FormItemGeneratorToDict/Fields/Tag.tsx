import { useMount, useUpdateEffect } from 'ahooks';
import React, { useState } from 'react';

import Dict from '@baifendian/adhere-util-dict';

import { setItem } from '../ItemFactory';
import TagCheckAllHorizontalFormItem from '../TagCheckAllHorizontalFormItem';
import TagCheckAllSelectFormItem from '../TagCheckAllSelectFormItem';
import TagCheckAllVerticalFormItem from '../TagCheckAllVerticalFormItem';
import TagHorizontalFormItem from '../TagHorizontalFormItem';
import TagMultiSelectFormItem from '../TagMultiSelectFormItem';
import TagSelectFormItem from '../TagSelectFormItem';
import TagVerticalFormItem from '../TagVerticalFormItem';
import { deepDep } from '../util';

/**
 * TagVerticalFormItem
 */
setItem('Tag', 'VerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TagVerticalFormItem {...props} dataSource={dataSource} />;
});

/**
 * TagHorizontalFormItem
 */
setItem('Tag', 'HorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TagHorizontalFormItem {...props} dataSource={dataSource} />;
});

/**
 * TagCheckAllVerticalFormItem
 */
setItem('Tag', 'CheckAllVerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TagCheckAllVerticalFormItem {...props} dataSource={dataSource} />;
});

/**
 * TagCheckAllHorizontalFormItem
 */
setItem('Tag', 'CheckAllHorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TagCheckAllHorizontalFormItem {...props} dataSource={dataSource} />;
});

/**
 * TagSelectFormItem
 */
setItem('Tag', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TagSelectFormItem {...props} dataSource={dataSource} />;
});

/**
 * TagMultiSelectFormItem
 */
setItem('Tag', 'MultiSelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TagMultiSelectFormItem {...props} dataSource={dataSource} />;
});

/**
 * TagCheckAllSelectFormItem
 */
setItem('Tag', 'CheckAllSelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
  const handler = Dict.value[dictName].value;

  let dataSource;

  // 如果是函数(一般是级联)
  if (handler instanceof Function) {
    dataSource = handler(cascadeParams);
  } else {
    dataSource = handler;
  }

  return <TagCheckAllSelectFormItem {...props} dataSource={dataSource} />;
});

// 动态的tag
// tagDynamicDictNames.forEach((dictName) => {
// TagDynamicVerticalFormItem
setItem('TagDynamic', 'VerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TagVerticalFormItem {...props} dataSource={data} />;
});

// TagDynamicHorizontalFormItem
setItem('TagDynamic', 'HorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TagHorizontalFormItem {...props} dataSource={data} />;
});

// TagDynamicCheckAllVerticalFormItem
setItem('TagDynamic', 'CheckAllVerticalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TagCheckAllVerticalFormItem {...props} dataSource={data} />;
});

// TagDynamicCheckAllHorizontalFormItem
setItem('TagDynamic', 'CheckAllHorizontalFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TagCheckAllHorizontalFormItem {...props} dataSource={data} />;
});

// TagDynamicSelectFormItem
setItem('TagDynamic', 'SelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TagSelectFormItem {...props} dataSource={data} />;
});

// TagDynamicCheckAllSelectFormItem
setItem('TagDynamic', 'CheckAllSelectFormItem', (dictName) => ({ cascadeParams, ...props }) => {
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

  return <TagCheckAllSelectFormItem {...props} dataSource={data} />;
});
