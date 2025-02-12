import { Button, Result } from 'antd-mobile';
import React from 'react';

import { Popup } from '@baifendian/adhere';

export default () => {
  return (
    <Popup.TriggerPrompt
      okText="确认"
      renderTrigger={() => <Button type="primary">触发</Button>}
      title="提示"
      onSubmit={() =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(123);
          }, 2000);
        })
      }
    >
      <Result
        status="success"
        title="操作成功"
        description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
      />
    </Popup.TriggerPrompt>
  );
};
