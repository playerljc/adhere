import { Button, Card, Empty } from 'antd';
import React, { useRef, useState } from 'react';

import { MessageDialog, Permission } from '@baifendian/adhere';

const { Permission: PermissionWrap, setPermission, getPermission } = Permission;

setPermission(['1']);

export default () => {
  const [allPermission, setAllPermission] = useState(getPermission());
  const [curPermission, setCurPermission] = useState(['2']);

  const ref1 = useRef();

  const ref2 = useRef();

  return (
    <Card
      actions={[
        <Button
          type="primary"
          onClick={() => {
            const { close } = MessageDialog.Modal({
              config: {
                title: '权限所有设置',
                width: 300,
                footer: [
                  <Button
                    type="primary"
                    onClick={() => {
                      const val = ref1.current.value.trim();
                      if (val) {
                        setPermission(val.split(','));
                        setAllPermission(getPermission());
                      }
                      close();
                    }}
                  >
                    确定
                  </Button>,
                ],
              },
              children: (
                <div>
                  <input autoFocus={true} ref={ref1} defaultValue={getPermission()} />
                </div>
              ),
            });
          }}
        >
          设置所有权限
        </Button>,

        <Button
          onClick={() => {
            const { close } = MessageDialog.Modal({
              config: {
                title: '权限当前设置',
                width: 300,
                footer: [
                  <Button
                    type="primary"
                    onClick={() => {
                      const val = ref2.current.value.trim();
                      if (val) {
                        setCurPermission(val.split(','));
                      }
                      close();
                    }}
                  >
                    确定
                  </Button>,
                ],
              },
              children: (
                <div>
                  <input autoFocus={true} ref={ref2} defaultValue={curPermission} />
                </div>
              ),
            });
          }}
        >
          设置当前权限
        </Button>,
      ]}
    >
      <PermissionWrap permissions={curPermission} noMatch={() => <Empty />}>
        {() => <Button>有权限才能看到这个按钮</Button>}
      </PermissionWrap>
    </Card>
  );
};
