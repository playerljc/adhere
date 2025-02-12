import { Button, Input, Select } from 'antd';
import React from 'react';

import { Hooks, TableGridLayout } from '@baifendian/adhere';

const { useTriggerQuery } = Hooks;

const { Label, Value } = TableGridLayout;

export default () => {
  const { setFieldsValue, fieldsValue, searchParams, search, reset } = useTriggerQuery({
    userName: '',
    sex: '',
    nativePlace: '',
  });

  return (
    <div>
      <div>
        <TableGridLayout
          bordered
          mode="bordered"
          data={[
            {
              name: 'g1',
              width: '100%',
              columnCount: 3,
              colgroup: [150, 'auto', 150, 'auto', 150, 'auto'],
              data: [
                {
                  key: '姓名',
                  label: <Label>姓名：</Label>,
                  value: (
                    <Value>
                      <Input
                        placeholder="姓名"
                        value={fieldsValue.current.userName}
                        onChange={(e) =>
                          setFieldsValue((draft) => {
                            draft.userName = e.target.value;
                          })
                        }
                      />
                    </Value>
                  ),
                },
                {
                  key: '性别',
                  label: <Label>性别：</Label>,
                  value: (
                    <Value>
                      <Select
                        value={fieldsValue.current.sex}
                        onChange={(value) =>
                          setFieldsValue((draft) => {
                            draft.sex = value;
                          })
                        }
                      >
                        <Select.Option value="1">男</Select.Option>
                        <Select.Option value="2">女</Select.Option>
                      </Select>
                    </Value>
                  ),
                },
                {
                  key: '籍贯',
                  label: <Label>籍贯：</Label>,
                  value: (
                    <Value>
                      <Input
                        placeholder="籍贯"
                        value={fieldsValue.current.nativePlace}
                        onChange={(e) =>
                          setFieldsValue((draft) => {
                            draft.nativePlace = e.target.value;
                          })
                        }
                      />
                    </Value>
                  ),
                },
              ],
            },
          ]}
        />
      </div>

      <div>
        <Button
          type="primary"
          block
          onClick={() => {
            search(() => {
              console.log('searchParams', searchParams.current);
            });
          }}
        >
          查询
        </Button>
        <Button
          block
          onClick={() => {
            reset(() => {
              console.log('searchParams', searchParams.current);
            });
          }}
        >
          重置
        </Button>
      </div>
    </div>
  );
};
