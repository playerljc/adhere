import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Hooks } from '@baifendian/adhere';

import Playground from '@/lib/Playground';

const { useFirst, useForceUpdate, usePrevious } = Hooks;

export default () => {
  const [isFirst, updateFirst] = useFirst();

  const val = usePrevious(3);

  console.log(val);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    console.log('isFirst', isFirst);
    updateFirst(true);
  }, []);

  return (
    <div className="Page">
      <h1>Hooks</h1>
      <ul>
        <li>- useFirst</li>
        <li>- useForceUpdate</li>
        <li>- usePrevious</li>
      </ul>

      <h2>基本的使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useEffect } from 'react';
  import { Button } from 'antd';
  import { Hooks } from '@baifendian/adhere';

  const { useFirst, useForceUpdate, usePrevious } = Hooks;

  return () => {
    const [isFirst, updateFirst] = useFirst();

    const val = usePrevious(3);

    console.log(val);

    const forceUpdate = useForceUpdate();

    useEffect(() => {
      console.log('isFirst', isFirst);
      updateFirst(true);
    }, []);

    return (
       <Button
        type="primary"
        onClick={() => {
          forceUpdate();
        }}
      >
        forceUpdate
      </Button>
    );
  };
        `}
      >
        <Button
          type="primary"
          onClick={() => {
            forceUpdate();
          }}
        >
          forceUpdate
        </Button>
      </Playground>
    </div>
  );
};
