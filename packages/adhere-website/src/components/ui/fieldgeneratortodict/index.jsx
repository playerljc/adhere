import { Space as AntdSpace, Avatar, Checkbox, List } from 'antd';
import React, { useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import { FieldGeneratorToDict, Space } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const [val, setVal] = useState();
  const [vals, setVals] = useState([]);
  const [listVals, setListVals] = useState([]);
  const [autoCompleteValue, setAutoCompleteValue] = useState({
    inputValue: '',
    selectValue: '',
  });
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const listRenderItem = (item) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={<a href="https://ant.design">{item.name}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );

  return (
    <PlayGroundPage>
      <Section title="FieldGeneratorToDict">
        <p>字典生成器</p>
        <ul>
          <li>从Dict(adhere-util-dict)自动生成FormItem</li>
        </ul>
      </Section>

      <CodeBoxSection
        title="FormItemGeneratorToDict - Select"
        config={[
          {
            id: 'p1',
            name: 'Select单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Select单选',
                info: 'Select单选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSelectFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Select多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Select多选',
                info: 'Select多选`',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);

            return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSelectMulitFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={vals}
              onChange={(v) => setVals(v)}
            />
          }
                    `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSelectMulitFormItem
                style={{ width: 300 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Select全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Select全选',
                info: 'Select全选`',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);

            return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSelectCheckAllMulitFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={vals}
              onChange={(v) => setVals(v)}
            />
          }
                    `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSelectCheckAllMulitFormItem
                style={{ width: 300 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'AutoComplete的单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'AutoComplete的单选',
                info: 'AutoComplete的单选`',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [val, setVal] = useState([]);

            return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoCompleteSelectFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={val}
              onChange={(v) => setVal(v)}
            />
          }
                    `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoSelectCompleteFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p5',
            name: 'AutoComplete的多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'AutoComplete的多选',
                info: 'AutoComplete的多选`',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);

            return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoCompleteSelectMulitFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={vals}
              onChange={(v) => setVals(v)}
            />
          }
                    `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoSelectCompleteMulitFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => {
                  setVals(v);
                }}
              />
            ),
          },
          {
            id: 'p6',
            name: 'AutoComplete的全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'AutoComplete的全选',
                info: 'AutoComplete的全选`',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);

            return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoCompleteSelectCheckAllMulitFormItem
              selectProps={{
                style: {
                  width: 200,
                },
              }}
              value={vals}
              onChange={(v) => setVals(v)}
            />
          }
                    `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoSelectCompleteCheckAllMulitFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Radio(字典中以Radio或DynamicRadio结尾)"
        config={[
          {
            id: 'p1',
            name: 'Radio横向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio横向',
                info: 'Radio横向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioHorizontalFormItem
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioHorizontalFormItem
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Radio纵向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio纵向',
                info: 'Radio纵向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioVerticalFormItem
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioVerticalFormItem
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Radio的Button',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio的Button',
                info: 'Radio的Button`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioButtonFormItem
      buttonStyle="solid"
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioButtonFormItem
                buttonStyle="solid"
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'Radio的Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio的Select',
                info: 'Radio的Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p5',
            name: 'Radio的自定义',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Radio的自定义',
                info: 'Radio的自定义',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { Space as AntdSpace } from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioCustomFormItem
      optionType="button"
      buttonStyle="solid"
      value={val}
      onChange={(v) => setVal(v)}
    >
      {(data) => <AntdSpace size={8}>{data.map(({ item }) => item)}</AntdSpace>}
    </FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioCustomFormItem>
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioCustomFormItem
                optionType="button"
                buttonStyle="solid"
                value={val}
                onChange={(v) => setVal(v)}
              >
                {(data) => <AntdSpace size={8}>{data.map(({ item }) => item)}</AntdSpace>}
              </FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestRadioCustomFormItem>
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Checkbox(字典中以Checkbox或DynamicCheckbox结尾)"
        config={[
          {
            id: 'p1',
            name: 'Checkbox横向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox横向',
                info: 'Checkbox横向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxHorizontalFormItem
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxHorizontalFormItem
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Checkbox纵向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox纵向',
                info: 'Checkbox纵向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxVerticalFormItem
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxVerticalFormItem
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Checkbox纵向全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox横向全选',
                info: 'Checkbox横向全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllVerticalFormItem
      buttonStyle="solid"
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllVerticalFormItem
                buttonStyle="solid"
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'Checkbox横向全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox纵向全选',
                info: 'Checkbox纵向全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllHorizontalFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllHorizontalFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p5',
            name: 'Checkbox的Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox的Select',
                info: 'Checkbox的Select',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p6',
            name: 'Checkbox的CheckAllSelect',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Checkbox的CheckAllSelect',
                info: 'Checkbox的CheckAllSelect',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllSelectFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCheckAllSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p7',
            name: '自定义CheckBox',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '自定义CheckBox',
                info: '自定义CheckBox',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import {Space as AntdSpace, Checkbox} from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    >
      {(dataSource) => (
        <AntdSpace size={8}>
          {dataSource.map(({ data }) => (
            <Checkbox key={data.value} value={data.value}>
              {data.label}
            </Checkbox>
          ))}
        </AntdSpace>
      )}
    </FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem>
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              >
                {(dataSource) => (
                  <AntdSpace size={8}>
                    {dataSource.map(({ data }) => (
                      <Checkbox key={data.value} value={data.value}>
                        {data.label}
                      </Checkbox>
                    ))}
                  </AntdSpace>
                )}
              </FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCheckBoxCustomFormItem>
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - TreeSelect"
        config={[
          {
            id: 'p1',
            name: 'TreeSelect单选(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect单选(能选任意节点)',
                info: 'TreeSelect单选(能选任意节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p2',
            name: 'TreeSelect单选(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect单选(只能选叶子节点)',
                info: 'TreeSelect单选(只能选叶子节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeLeafFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeLeafFormItem
                style={{ width: 200 }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: 'TreeSelect多选(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect多选(能选任意节点)',
                info: 'TreeSelect多选(能选任意节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeMulitFormItem
                style={{ width: 300 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'TreeSelect多选(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect多选(只能选叶子节点)',
                info: 'TreeSelect多选(只能选叶子节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeLeafMulitFormItem
      selectProps={{
        style: {
          width: 200,
        },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTreeLeafMulitFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Transfer"
        config={[
          {
            id: 'p1',
            name: '基本',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本',
                info: '基本`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTransferFormItem
      targetKeys={vals}
      onChange={(v) => {
        setVals(v);
      }}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTransferFormItem
                targetKeys={vals}
                onChange={(v) => {
                  setVals(v);
                }}
              />
            ),
          },
          {
            id: 'p2',
            name: 'SelectFormItem',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'SelectFormItem',
                info: 'SelectFormItem`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTransferSelectFormItem
      selectProps={{
        style: { width: 300 },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTransferSelectFormItem
                selectProps={{
                  style: { width: 300 },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Table"
        config={[
          {
            id: 'p1',
            name: '普通不带分页',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通不带分页',
                info: '普通不带分页`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTableFormItem
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTableFormItem
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
              />
            ),
          },
          {
            id: 'p2',
            name: '普通单选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通单选Select',
                info: '普通单选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTableSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTableSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: '普通多选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通多选Select',
                info: '普通多选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTableMulitSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTableMulitSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: '分页的动态数据',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据',
                info: '分页的动态数据`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTablePaginationFormItem
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTablePaginationFormItem
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
              />
            ),
          },
          {
            id: 'p5',
            name: '分页的动态数据Select单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select单选',
                info: '分页的动态数据Select单选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTablePaginationSelectFormItem
      selectProps={{
        style: { width: 1024 },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={val}
      onChange={(v) => {
        if (typeof v !== 'object') {
          setVal(v);
        }
      }}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTablePaginationSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={val}
                onChange={(v) => {
                  if (typeof v !== 'object') {
                    setVal(v);
                  }
                }}
              />
            ),
          },
          {
            id: 'p6',
            name: '分页的动态数据Select多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select多选',
                info: '分页的动态数据Select多选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTablePaginationMulitSelectFormItem
      selectProps={{
        style: { width: 1024 },
      }}
      columns={[
        {
          key: 'name',
          dataIndex: 'name',
          title: '姓名',
        },
        {
          key: 'sex',
          dataIndex: 'sex',
          title: '性别',
        },
        {
          key: 'birthDay',
          dataIndex: 'birthDay',
          title: '生日',
        },
        {
          key: 'deptName',
          dataIndex: 'deptName',
          title: '部门',
        },
        {
          key: 'address',
          dataIndex: 'address',
          title: '地址',
        },
      ]}
      value={vals}
      onChange={(v) => {
        if (typeof v !== 'object') {
          setVals(v);
        }
      }}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTablePaginationMulitSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: '姓名',
                  },
                  {
                    key: 'sex',
                    dataIndex: 'sex',
                    title: '性别',
                  },
                  {
                    key: 'birthDay',
                    dataIndex: 'birthDay',
                    title: '生日',
                  },
                  {
                    key: 'deptName',
                    dataIndex: 'deptName',
                    title: '部门',
                  },
                  {
                    key: 'address',
                    dataIndex: 'address',
                    title: '地址',
                  },
                ]}
                value={vals}
                onChange={(v) => {
                  if (Array.isArray(v)) {
                    setVals(v);
                  }
                }}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Cascader"
        config={[
          {
            id: 'p1',
            name: 'Cascader(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader(能选任意节点)',
                info: 'Cascader(能选任意节点)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
          {
            id: 'p2',
            name: 'Cascader(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader(只能选叶子节点)',
                info: 'Cascader(只能选叶子节点)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderLeafFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderLeafFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
          {
            id: 'p3',
            name: 'Cascader多选(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader多选(能选任意节点)',
                info: 'Cascader多选(能选任意节点)`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderMulitFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderMulitFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
          {
            id: 'p4',
            name: 'Cascader多选(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader多选(只能选叶子节点)',
                info: 'Cascader多选(只能选叶子节点)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderLeafMulitFormItem
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderLeafMulitFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - List"
        config={[
          {
            id: 'p1',
            name: '普通不带分页',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通不带分页',
                info: '普通不带分页`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListFormItem
      renderItem={listRenderItem}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListFormItem
                renderItem={listRenderItem}
              />
            ),
          },
          {
            id: 'p2',
            name: '普通单选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通单选Select',
                info: '普通单选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                renderItem={listRenderItem}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p3',
            name: '普通多选Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '普通多选Select',
                info: '普通多选Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListMulitSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListMulitSelectFormItem
                selectProps={{
                  style: {
                    width: 1024,
                  },
                }}
                renderItem={listRenderItem}
                value={listVals}
                onChange={(v) => setListVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: '分页的动态数据',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据',
                info: '分页的动态数据`',
              },
            },
            codeText: `
  import React from 'react';
  import { List,Avatar } from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListPaginationFormItem
      renderItem={listRenderItem}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListPaginationFormItem
                renderItem={listRenderItem}
              />
            ),
          },
          {
            id: 'p5',
            name: '分页的动态数据Select单选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select单选',
                info: '分页的动态数据Select单选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState('');

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListPaginationSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListPaginationSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                renderItem={listRenderItem}
                value={val}
                onChange={(v) => {
                  if (typeof v !== 'object') {
                    setVal(v);
                  }
                }}
              />
            ),
          },
          {
            id: 'p6',
            name: '分页的动态数据Select多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '分页的动态数据Select多选',
                info: '分页的动态数据Select多选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { List,Avatar } from 'antd';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [listVals, setListVals] = useState([]);

    const listRenderItem = (item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.name}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListPaginationMulitSelectFormItem
      selectProps={{
        style: {
          width: 1024,
        },
      }}
      renderItem={listRenderItem}
      value={listVals}
      onChange={(v) => {
        if (Array.isArray(v)) {
          setListVals(v);
        }
      }}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListPaginationMulitSelectFormItem
                selectProps={{
                  style: { width: 1024 },
                }}
                renderItem={listRenderItem}
                value={listVals}
                onChange={(v) => {
                  if (Array.isArray(v)) {
                    setListVals(v);
                  }
                }}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - AutoComplete"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [autoCompleteValue, setAutoCompleteValue] = useState({
      inputValue: '',
      selectValue: '',
    });

    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoCompleteFormItem
        style={{ width: 200 }}
        value={autoCompleteValue}
        onChange={(v) => {
          setAutoCompleteValue(v);
        }}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestAutoCompleteFormItem
                style={{ width: 200 }}
                value={autoCompleteValue}
                onChange={(v) => {
                  setAutoCompleteValue(v);
                }}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Breadcrumb"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestBreadcrumbFormItem />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestBreadcrumbFormItem />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Dropdown"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';
  import { DownOutlined } from '@ant-design/icons';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestDropdownFormItem>
        <a onClick={(e) => e.preventDefault()}>
          Hover me
          <DownOutlined />
        </a>
      </FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestDropdownFormItem>
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestDropdownFormItem>
                <a onClick={(e) => e.preventDefault()}>
                  Hover me
                  <DownOutlined />
                </a>
              </FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestDropdownFormItem>
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Mentions"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestMentionsFormItem />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestMentionsFormItem />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Menu"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestMenuFormItem />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestMenuFormItem />
            ),
          },
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestMenuFormItem />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestMenuFormItem />
            ),
          },
          {
            id: 'p2',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [current, setCurrent] = useState(1);

    const onClick = () => {};

    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestJSX1MenuFormItem
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestJSX1MenuFormItem
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
              />
            ),
          },
          {
            id: 'p3',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestJSX2MenuFormItem
        onClick={() => {}}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestJSX2MenuFormItem
                onClick={() => {}}
                style={{
                  width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Segmented"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestObjArraySegmentedFormItem />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestObjArraySegmentedFormItem />
            ),
          },
          {
            id: 'p2',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSegmentedFormItem />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestSegmentedFormItem />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Steps"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneStepsFormItem value={1} />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneStepsFormItem value={1} />
            ),
          },
          {
            id: 'p2',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneStepsFormItem
        direction="vertical"
        size="small"
        value={1}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneStepsFormItem
                direction="vertical"
                size="small"
                value={1}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Tag"
        config={[
          {
            id: 'p1',
            name: 'Tag横向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Tag横向',
                info: 'Tag横向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem, Space } from '@baifendian/adhere';

  export default () => {
    return (
      <Space.Group direction="vertical">
        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagHorizontalFormItem
          value={vals}
          onChange={(v) => setVals(v)}
        />
        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagHorizontalFormItem
          renderItem={({ index }) => {
            const colorMap = new Map([
              [0, 'magenta'],
              [1, 'red'],
              [2, 'volcano'],
            ]);

            return {
              props: {
                color: colorMap.get(index),
              },
            };
          }}
          value={vals}
          onChange={(v) => setVals(v)}
        />
      </Space.Group>
    )
  }
            `,
            renderChildren: () => (
              <Space.Group direction="vertical">
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagHorizontalFormItem
                  value={vals}
                  onChange={(v) => setVals(v)}
                />
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagHorizontalFormItem
                  renderItem={({ index }) => {
                    const colorMap = new Map([
                      [0, 'magenta'],
                      [1, 'red'],
                      [2, 'volcano'],
                    ]);

                    return {
                      props: {
                        color: colorMap.get(index),
                      },
                    };
                  }}
                  value={vals}
                  onChange={(v) => setVals(v)}
                />
              </Space.Group>
            ),
          },
          {
            id: 'p2',
            name: 'Tag纵向',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Tag纵向',
                info: 'Tag纵向`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem, Space } from '@baifendian/adhere';

  export default () => {
    return (
      <Space.Group direction="vertical">
        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagVerticalFormItem
          value={vals}
          onChange={(v) => setVals(v)}
        />

        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagVerticalFormItem
          renderItem={({ index }) => {
            const colorMap = new Map([
              [0, 'magenta'],
              [1, 'red'],
              [2, 'volcano'],
            ]);

            return {
              props: {
                color: colorMap.get(index),
              },
            };
          }}
          value={vals}
          onChange={(v) => setVals(v)}
        />
      </Space.Group>
    )
  }
            `,
            renderChildren: () => (
              <Space.Group direction="vertical">
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagVerticalFormItem
                  value={vals}
                  onChange={(v) => setVals(v)}
                />

                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagVerticalFormItem
                  renderItem={({ index }) => {
                    const colorMap = new Map([
                      [0, 'magenta'],
                      [1, 'red'],
                      [2, 'volcano'],
                    ]);

                    return {
                      props: {
                        color: colorMap.get(index),
                      },
                    };
                  }}
                  value={vals}
                  onChange={(v) => setVals(v)}
                />
              </Space.Group>
            ),
          },
          {
            id: 'p3',
            name: 'Tag纵向全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Tag纵向全选',
                info: 'Tag纵向全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllVerticalFormItem
        value={vals}
        onChange={(v) => setVals(v)}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllVerticalFormItem
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p4',
            name: 'Tag横向全选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Tag横向全选',
                info: 'Tag横向全选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllHorizontalFormItem
        value={vals}
        onChange={(v) => setVals(v)}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllHorizontalFormItem
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p5',
            name: 'Tag的Select',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Tag的Select',
                info: 'Tag的Select`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagSelectFormItem
        selectProps={{
          style: {
            width: 200,
          },
        }}
        value={val}
        onChange={(v) => setVal(v)}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },
          {
            id: 'p6',
            name: 'Tag的Select多选',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Tag的Select多选',
                info: 'Tag的Select多选`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagMultiSelectFormItem
        selectProps={{
          style: {
            width: 200,
          },
        }}
        value={vals}
        onChange={(v) => setVals(v)}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagMultiSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
          {
            id: 'p7',
            name: 'Tag的CheckAllSelect',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Tag的CheckAllSelect',
                info: 'Tag的CheckAllSelect`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllSelectFormItem
        selectProps={{
          style: {
            width: 200,
          },
        }}
        value={vals}
        onChange={(v) => setVals(v)}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTagCheckAllSelectFormItem
                selectProps={{
                  style: {
                    width: 200,
                  },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },
        ]}
      />

      <CodeBoxSection
        title="FormItemGeneratorToDict - Timeline"
        config={[
          {
            id: 'p1',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneTimelineFormItem />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestOneTimelineFormItem />
            ),
          },
          {
            id: 'p2',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTwoTimelineFormItem mode="alternate" />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTwoTimelineFormItem mode="alternate" />
            ),
          },
          {
            id: 'p3',
            name: '基本使用',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '基本使用',
                info: '基本使用`',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestThreeTimelineFormItem mode="right" />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestThreeTimelineFormItem mode="right" />
            ),
          },
        ]}
      />

      <PropsSection
        title="FieldGeneratorToDict.FormItemGeneratorToDict"
        config={[
          {
            border: true,
            title: 'SystemTestRadioHorizontalFormItem',
            data: [
              {
                params: 'name',
                desc: '发到后台的文件参数名',
                type: 'string',
                defaultVal: 'file',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/upload-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
