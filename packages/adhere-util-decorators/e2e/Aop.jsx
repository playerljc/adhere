import { Button } from 'antd';
import React, { useMemo, useState } from 'react';

import Decorators from '../src/index';

import './index.less';

class DemoService {
  constructor(handlers = {}) {
    this.handlers = handlers;
  }

  // 这里只能使用 function，不能使用箭头函数，可以在 function 里拿到 this
  @Decorators.ReactAop(
    function before() {
      this.handlers.onLog?.('aop before');
      return true;
    },
    function after(result) {
      this.handlers.onLog?.(`aop after, origin result: ${result}`);
      // after 的返回值才是最终结果
      return `${result} [wrapped]`;
    },
  )
  display(name) {
    this.handlers.onLog?.(`run: display(${name})`);
    return `hello, ${name}`;
  }
}

/**
 * ReactAop
 */
export default () => {
  const [logs, setLogs] = useState([]);
  const pushLog = (text) => setLogs((prev) => [text, ...prev].slice(0, 12));

  const service = useMemo(
    () =>
      new DemoService({
        onLog: pushLog,
      }),
    [],
  );

  return (
    <div className="DecoratorsE2E-panel">
      <div className="DecoratorsE2E-toolbar">
        <Button
          type="primary"
          onClick={() => {
            const result = service.display('adhere');
            pushLog(`final result: ${result}`);
          }}
        >
          调用 display
        </Button>
        <Button onClick={() => setLogs([])}>清空日志</Button>
      </div>
      <pre className="DecoratorsE2E-log">{logs.length ? logs.join('\n') : 'logs...'}</pre>
    </div>
  );
};
