import { Button } from 'antd';
import React, { useMemo, useState } from 'react';

import Decorators from '../src/index';

import './index.less';

class DemoService {
  constructor(handlers = {}) {
    this.handlers = handlers;
  }

  // 这里只能使用 function，不能使用箭头函数，可以在 function 里拿到 this
  @Decorators.ReactAutoTryCatch(function onError(e) {
    this.handlers.onError?.(e);
  })
  risky(name) {
    if (name === 'boom') {
      throw new Error('risky method boom');
    }

    return `hello, ${name}`;
  }
}

/**
 * ReactAutoTryCatch
 */
export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 12));

  const service = useMemo(
    () =>
      new DemoService({
        onError: (e) => pushLog(`catch: ${e.message}`),
      }),
    [],
  );

  return (
    <div className="DecoratorsE2E-panel">
      <div className="DecoratorsE2E-toolbar">
        <Button
          type="primary"
          onClick={() => {
            const result = service.risky('adhere');
            pushLog(`result: ${result}`);
          }}
        >
          正常调用
        </Button>
        <Button
          danger
          onClick={() => {
            const result = service.risky('boom');
            pushLog(`result: ${String(result)}`);
          }}
        >
          触发异常（自动 catch）
        </Button>
        <Button onClick={() => setLogs([])}>清空日志</Button>
      </div>
      <pre className="DecoratorsE2E-log">{logs.length ? logs.join('\n') : 'logs...'}</pre>
    </div>
  );
};
