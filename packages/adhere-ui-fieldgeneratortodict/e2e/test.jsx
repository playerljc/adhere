import { Space as AntdSpace, Avatar, List } from 'antd';
import React, { useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Space from '@baifendian/adhere-ui-space';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/PlaygroundPage';

import FieldGeneratorToDict from '../src/index';

import '@baifendian/adhere-ui-flexlayout/es/index.less';
import '@baifendian/adhere-ui-space/es/index.less';

import '../src/index.less';

export default () => {
  const [val, setVal] = useState();
  const [vals, setVals] = useState();

  const [branchVals, setBranchVals] = useState(['210102000000']);
  const [branchMultiVals, setBranchMultiVals] = useState(['230102000000', '210102000000']);

  const [cascaderBranchVals, setCascaderBranchVals] = useState([
    '210000000000',
    '210100000000',
    '210102000000',
  ]);
  const [cascaderBranchMultiVals, setCascaderBranchMultiVals] = useState([
    ['210000000000', '210100000000', '210102000000'],
    ['230000000000', '230100000000', '230102000000'],
  ]);

  const [listVals, setListVals] = useState([]);
  const [autoCompleteValue, setAutoCompleteValue] = useState({
    inputValue: '',
    selectValue: '',
  });
  const [current, setCurrent] = useState('mail');

  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [county, setCounty] = useState();

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
                info: 'Select单选',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState([]);
    const DictComponentName = 'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Select;
    const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
    return <DictComponent
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
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Select.Standard;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return (
                <DictComponent
                  style={{ width: 200 }}
                  value={val}
                  onChange={(v, ...reset) => {
                    console.log('_v1', v, ...reset);
                    setVal(v);
                  }}
                />
              );
            },
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
                info: 'Select多选',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);
            const DictComponentName =
              'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Select.Multi;
            const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
            return <DictComponent
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
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Select.Multi;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return (
                <DictComponent
                  style={{ width: 300 }}
                  value={vals}
                  onChange={(v, ...reset) => {
                    console.log('_v2', v, ...reset);
                    setVals(v);
                  }}
                />
              );
            },
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
                info: 'Select全选',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);
            const DictComponentName =
              'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Select.CheckAll;
            const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

            return <DictComponent
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
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Select.CheckAll;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return (
                <DictComponent style={{ width: 300 }} value={vals} onChange={(v) => setVals(v)} />
              );
            },
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
                info: 'AutoComplete的单选',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [val, setVal] = useState([]);
            const DictComponentName =
              'SystemFilterBookList' + FieldGeneratorToDict.ComponentNames.SelectAC.Standard;
            const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

            return <DictComponent
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
            renderChildren: () => {
              const DictComponentName =
                'SystemFilterBookList' + FieldGeneratorToDict.ComponentNames.SelectAC.Standard;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return (
                <DictComponent style={{ width: 200 }} value={val} onChange={(v) => setVal(v)} />
              );
            },
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
                info: 'AutoComplete的多选',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);
            const DictComponentName =
              'SystemFilterBookList' +
              FieldGeneratorToDict.ComponentNames.SelectAC.Multi;
            const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

            return <FDictComponent
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
            renderChildren: () => {
              const DictComponentName =
                'SystemFilterBookList' + FieldGeneratorToDict.ComponentNames.SelectAC.Multi;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return (
                <DictComponent
                  style={{ width: 200 }}
                  value={vals}
                  onChange={(v) => {
                    setVals(v);
                  }}
                />
              );
            },
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
                info: 'AutoComplete的全选',
              },
            },
            codeText: `
          import React, { useState } from 'react';
          import { FieldGeneratorToDict } from '@baifendian/adhere';

          export default () => {
            const [vals, setVals] = useState([]);
              const DictComponentName =
              'SystemFilterBookList' +
              FieldGeneratorToDict.ComponentNames.SelectAC.CheckAll;
            const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

            return <DictComponent
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
            renderChildren: () => {
              const DictComponentName =
                'SystemFilterBookList' + FieldGeneratorToDict.ComponentNames.SelectAC.CheckAll;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

              return (
                <DictComponent style={{ width: 200 }} value={vals} onChange={(v) => setVals(v)} />
              );
            },
          },
          {
            id: 'p7',
            name: '省市区级联',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '省市区级联',
                info: '省市区级联',
              },
            },
            codeText: `
            import React, { useState } from 'react';
            import { FieldGeneratorToDict } from '@baifendian/adhere';
  
            export default () => {
              const ProvinceDictComponentName = 'SystemProvince' + FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard;
              const ProvinceDictComponent = FieldGeneratorToDict.Components[ProvinceDictComponentName];

              const CityDictComponentName = 'SystemCity' + FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard;
              const CityDictComponent = FieldGeneratorToDict.Components[CityDictComponentName];

              const CountyDictComponentName = 'SystemCounty' + FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard;
              const CountyDictComponent = FieldGeneratorToDict.Components[CountyDictComponentName];
  
              return (
                <Space.Group direction="vertical">
                  <FlexLayout direction="horizontal">
                    <FlexLayout.Fixed>省：</FlexLayout.Fixed>
                    <FlexLayout.Auto>
                      <ProvinceDictComponent
                        style={{ width: 200 }}
                        value={province}
                        onChange={(v) => setProvince(v)}
                      />
                    </FlexLayout.Auto>
                  </FlexLayout>

                  <FlexLayout direction="horizontal">
                    <FlexLayout.Fixed>市：</FlexLayout.Fixed>
                    <FlexLayout.Auto>
                      <CityDictComponent
                        style={{ width: 200 }}
                        value={city}
                        onChange={(v) => setCity(v)}
                        cascadeParams={province}
                        onDataSourceChange={() => setCity('')}
                      />
                    </FlexLayout.Auto>
                  </FlexLayout>

                  <FlexLayout direction="horizontal">
                    <FlexLayout.Fixed>区：</FlexLayout.Fixed>
                    <FlexLayout.Auto>
                      <CountyDictComponent
                        style={{ width: 200 }}
                        value={county}
                        onChange={(v) => setCounty(v)}
                        cascadeParams={city}
                        onDataSourceChange={() => setCounty('')}
                      />
                    </FlexLayout.Auto>
                  </FlexLayout>
                </Space.Group>
              )
            }
            `,
            renderChildren: () => {
              const ProvinceDictComponentName =
                'SystemProvince' + FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard;
              const ProvinceDictComponent =
                FieldGeneratorToDict.Components[ProvinceDictComponentName];

              const CityDictComponentName =
                'SystemCity' + FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard;
              const CityDictComponent = FieldGeneratorToDict.Components[CityDictComponentName];

              const CountyDictComponentName =
                'SystemCounty' + FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard;
              const CountyDictComponent = FieldGeneratorToDict.Components[CountyDictComponentName];

              return (
                <div>
                  <Space.Group direction="vertical">
                    <FlexLayout direction="horizontal">
                      <FlexLayout.Fixed>省：</FlexLayout.Fixed>
                      <FlexLayout.Auto>
                        <ProvinceDictComponent
                          style={{ width: 200 }}
                          value={province}
                          onChange={(v) => setProvince(v)}
                        />
                      </FlexLayout.Auto>
                    </FlexLayout>

                    <FlexLayout direction="horizontal">
                      <FlexLayout.Fixed>市：</FlexLayout.Fixed>
                      <FlexLayout.Auto>
                        <CityDictComponent
                          style={{ width: 200 }}
                          value={city}
                          onChange={(v) => setCity(v)}
                          cascadeParams={province}
                          onDataSourceChange={() => setCity('')}
                        />
                      </FlexLayout.Auto>
                    </FlexLayout>

                    <FlexLayout direction="horizontal">
                      <FlexLayout.Fixed>区：</FlexLayout.Fixed>
                      <FlexLayout.Auto>
                        <CountyDictComponent
                          style={{ width: 200 }}
                          value={county}
                          onChange={(v) => setCounty(v)}
                          cascadeParams={city}
                          onDataSourceChange={() => setCounty('')}
                        />
                      </FlexLayout.Auto>
                    </FlexLayout>
                  </Space.Group>
                </div>
              );
            },
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
                info: 'Radio横向',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();
    const DictComponentName = 'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Horizontal;
    const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
    return <DictComponent
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Horizontal;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return <DictComponent value={val} onChange={(v) => setVal(v)} />;
            },
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
                info: 'Radio纵向',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();
    const DictComponentName = 'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Vertical;
    const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
    return <DictComponent
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Vertical;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return <DictComponent value={val} onChange={(v) => setVal(v)} />;
            },
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
                info: 'Radio的Button',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();
    const DictComponentName = 'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Button;
    const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
    return <DictComponent
      buttonStyle="solid"
      value={val}
      onChange={(v) => setVal(v)}
    />
  }
            `,
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Button;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return <DictComponent buttonStyle="solid" value={val} onChange={(v) => setVal(v)} />;
            },
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
                info: 'Radio的Select',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [val, setVal] = useState();
    const DictComponentName = 'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Select;
    const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
    return <DictComponent
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
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Select;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return (
                <DictComponent
                  selectProps={{
                    style: {
                      width: 200,
                    },
                  }}
                  value={val}
                  onChange={(v) => setVal(v)}
                />
              );
            },
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
    const DictComponentName = 'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Custom;
    const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
    return <DictComponent
      optionType="button"
      buttonStyle="solid"
      value={val}
      onChange={(v) => setVal(v)}
    >
      {(data) => <AntdSpace size={8}>{data.map(({ item }) => item)}</AntdSpace>}
    </DictComponent>
  }
            `,
            renderChildren: () => {
              const DictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.Radio.Custom;
              const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
              return (
                <DictComponent
                  optionType="button"
                  buttonStyle="solid"
                  value={val}
                  onChange={(v) => setVal(v)}
                >
                  {(data) => <AntdSpace size={8}>{data.map(({ item }) => item)}</AntdSpace>}
                </DictComponent>
              );
            },
          },
        ]}
      />

      {/*<CodeBoxSection
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
                info: 'Checkbox横向',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxHorizontalFormItem
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxHorizontalFormItem
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
                info: 'Checkbox纵向',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxVerticalFormItem
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxVerticalFormItem
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
                info: 'Checkbox横向全选',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCheckAllVerticalFormItem
      buttonStyle="solid"
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCheckAllVerticalFormItem
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
                info: 'Checkbox纵向全选',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCheckAllHorizontalFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCheckAllHorizontalFormItem
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

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxSelectFormItem
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

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCheckAllSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCheckAllSelectFormItem
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

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCustomFormItem
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
    </FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCustomFormItem>
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCustomFormItem
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
              </FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogCheckBoxCustomFormItem>
            ),
          },
        ]}
      />*/}

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
                info: 'TreeSelect单选(能选任意节点)',
              },
            },
            codeText: `
            import React, { useState } from 'react';
            import { FieldGeneratorToDict } from '@baifendian/adhere';
            
            export default () => {
              const [val, setVal] = useState('');
              const dictComponentName = 'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return <DictComponent
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
            renderChildren: () => {
              const dictComponentName =
                'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent style={{ width: 200 }} value={val} onChange={(v) => setVal(v)} />
              );
            },
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
                info: 'TreeSelect单选(只能选叶子节点)',
              },
            },
            codeText: `
            import React, { useState } from 'react';
            import { FieldGeneratorToDict } from '@baifendian/adhere';
            
            export default () => {
              const [val, setVal] = useState('');
              const dictComponentName = 'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.Leaf;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return <DictComponent
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
            renderChildren: () => {
              const dictComponentName = 'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.Leaf;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent style={{ width: 200 }} value={val} onChange={(v) => setVal(v)} />
              );
            },
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
                info: 'TreeSelect多选(能选任意节点)',
              },
            },
            codeText: `
            import React, { useState } from 'react';
            import { FieldGeneratorToDict } from '@baifendian/adhere';
            
            export default () => {
              const [vals, setVals] = useState([]);
              const dictComponentName = 'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.Multi;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return <DictComponent
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
            renderChildren: () => {
              const dictComponentName =
                'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.Multi;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent style={{ width: 300 }} value={vals} onChange={(v) => setVals(v)} />
              );
            },
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
                info: 'TreeSelect多选(只能选叶子节点)',
              },
            },
            codeText: `
            import React, { useState } from 'react';
            import { FieldGeneratorToDict } from '@baifendian/adhere';
            
            export default () => {
              const [vals, setVals] = useState([]);
              const dictComponentName = 'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.LeafMulti;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              <DictComponent
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
            renderChildren: () => {
              const dictComponentName =
                'SystemOrg' + FieldGeneratorToDict.ComponentNames.Tree.LeafMulti;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              <DictComponent style={{ width: 200 }} value={vals} onChange={(v) => setVals(v)} />;
            },
          },
          /*{
            id: 'p5',
            name: '异步加载',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载',
                info: '异步加载',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },*/
          /*{
            id: 'p6',
            name: '异步加载(多选)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(多选)',
                info: '异步加载(多选)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncMulti
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },*/
          /*{
            id: 'p7',
            name: '异步加载(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(只能选叶子节点)',
                info: '异步加载(只能选叶子节点)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncLeafFormItem
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },*/
          /*{
            id: 'p8',
            name: '异步加载多选(只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载多选(只能选叶子节点)',
                info: '异步加载多选(只能选叶子节点)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncLeafMulti
                style={{ width: 200 }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },*/
          /*{
            id: 'p9',
            name: '异步加载(回显)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(回显)',
                info: '异步加载(回显)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncFormItem
                style={{ width: 200 }}
                value={branchVals}
                onChange={(v) => setBranchVals(v)}
                fetchBranch={(value, cascadeParams) => {
                  return Promise.resolve([
                    {
                      title: '辽宁省',
                      value: '210000000000',
                      isLeaf: false,
                      children: [
                        {
                          title: '沈阳市',
                          value: '210100000000',
                          isLeaf: false,
                          children: [
                            {
                              title: '和平区',
                              value: '210102000000',
                              isLeaf: true,
                            },
                          ],
                        },
                      ],
                    },
                  ]);
                }}
              />
            ),
          },*/
          /*{
            id: 'p10',
            name: '异步加载(回显-多数据)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(回显-多数据)',
                info: '异步加载(回显-多数据)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncMulti
                style={{ width: 200 }}
                value={branchMultiVals}
                onChange={(v) => setBranchMultiVals(v)}
                fetchBranch={(value, cascadeParams) => {
                  return Promise.resolve([
                    {
                      title: '辽宁省',
                      value: '210000000000',
                      isLeaf: false,
                      children: [
                        {
                          title: '沈阳市',
                          value: '210100000000',
                          isLeaf: false,
                          children: [
                            {
                              title: '和平区',
                              value: '210102000000',
                              isLeaf: true,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: '黑龙江省',
                      value: '230000000000',
                      children: [
                        {
                          title: '哈尔滨市',
                          value: '230100000000',
                          children: [
                            {
                              title: '道里区',
                              value: '230102000000',
                            },
                          ],
                        },
                      ],
                    },
                  ]);
                }}
              />
            ),
          },*/
          /*{
            id: 'p11',
            name: '异步加载(回显-多数据-只能选叶子节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(回显-多数据-只能选叶子节点)',
                info: '异步加载(回显-多数据-只能选叶子节点)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncLeafMulti
                style={{ width: 200 }}
                value={branchMultiVals}
                onChange={(v) => setBranchMultiVals(v)}
                fetchBranch={(value, cascadeParams) => {
                  return Promise.resolve([
                    {
                      title: '辽宁省',
                      value: '210000000000',
                      isLeaf: false,
                      children: [
                        {
                          title: '沈阳市',
                          value: '210100000000',
                          isLeaf: false,
                          children: [
                            {
                              title: '和平区',
                              value: '210102000000',
                              isLeaf: true,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: '黑龙江省',
                      value: '230000000000',
                      isLeaf: false,
                      children: [
                        {
                          title: '哈尔滨市',
                          value: '230100000000',
                          isLeaf: false,
                          children: [
                            {
                              title: '道里区',
                              value: '230102000000',
                              isLeaf: true,
                            },
                          ],
                        },
                      ],
                    },
                  ]);
                }}
              />
            ),
          },*/
          /*{
            id: 'p12',
            name: 'TreeSelect单选(能选任意节点，flat数据)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'TreeSelect单选(能选任意节点，flat数据)',
                info: 'TreeSelect单选(能选任意节点，flat数据)',
              },
            },
            codeText: `
            import React, { useState } from 'react';
            import { FieldGeneratorToDict } from '@baifendian/adhere';

            export default () => {
              const [val, setVal] = useState('');

              return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemOrgTreeFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentAllTreeDynamicFormItem
                style={{ width: 200 }}
                treeDataSimpleMode
                value={val}
                onChange={(v) => setVal(v)}
              />
            ),
          },*/
          /*{
            id: 'p13',
            name: '异步加载(flat数据)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(flat数据)',
                info: '异步加载(flat数据)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncFormItem
                style={{ width: 200 }}
                treeDataSimpleMode
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },*/
          /*{
            id: 'p14',
            name: '异步加载(回显,flat数据)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(回显,flat数据)',
                info: '异步加载(回显,flat数据)',
              },
            },
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemDepartmentTreeAsyncMulti
                style={{ width: 200 }}
                treeDataSimpleMode
                value={branchVals}
                onChange={(v) => setBranchVals(v)}
                fetchBranch={(value, cascadeParams) => {
                  return Promise.resolve([
                    {
                      title: '辽宁省',
                      value: '210000000000',
                      id: '210000000000',
                      pId: 0,
                      isLeaf: false,
                    },
                    {
                      title: '沈阳市',
                      value: '210100000000',
                      id: '210100000000',
                      pId: '210000000000',
                      isLeaf: false,
                    },
                    {
                      title: '和平区',
                      value: '210102000000',
                      id: '210102000000',
                      pId: '210100000000',
                      isLeaf: true,
                    },
                  ]);
                }}
              />
            ),
          },*/
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
                info: '基本',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);
    const dictComponentName = 'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.TransferDynamic.Standard;
    const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
    return <DictComponent
      targetKeys={vals}
      onChange={(v) => {
        setVals(v);
      }}
    />
  }
            `,
            renderChildren: () => {
              const dictComponentName =
                'SystemBookCatalog' + FieldGeneratorToDict.ComponentNames.TransferDynamic.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent
                  targetKeys={vals}
                  onChange={(v) => {
                    setVals(v);
                  }}
                />
              );
            },
          },
          /*{
            id: 'p2',
            name: 'SelectFormItem',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'SelectFormItem',
                info: 'SelectFormItem',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTransferSelectFormItem
      selectProps={{
        style: { width: 300 },
      }}
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTransferSelectFormItem
                selectProps={{
                  style: { width: 300 },
                }}
                value={vals}
                onChange={(v) => setVals(v)}
              />
            ),
          },*/
        ]}
      />

      {/*<CodeBoxSection
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
                info: '普通不带分页',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserTableFormItem
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
                info: '普通单选Select',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserTableSelectFormItem
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
                info: '普通多选Select',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTableMultiSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserTableMultiSelectFormItem
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
                info: '分页的动态数据',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserPaginTablePaginationFormItem
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
                info: '分页的动态数据Select单选',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserPaginTablePaginationSelectFormItem
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
                info: '分页的动态数据Select多选',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestTablePaginationMultiSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserPaginTablePaginationMultiSelectFormItem
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
      />*/}

      <CodeBoxSection
        title="FormItemGeneratorToDict - Cascader"
        config={[
          /*{
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemSSQCascaderFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },*/
          /*{
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemSSQCascaderLeafFormItem
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },*/
          /*{
            id: 'p3',
            name: 'Cascader多选(能选任意节点)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader多选(能选任意节点)',
                info: 'Cascader多选(能选任意节点)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderMulti
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemSSQCascaderMulti
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },*/
          /*{
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

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestCascaderLeafMulti
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemSSQCascaderLeafMulti
                style={{ width: 500 }}
                value={vals}
                onChange={(v) => setVals(v || [])}
              />
            ),
          },*/
          {
            id: 'p5',
            name: '异步加载',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载',
                info: '异步加载',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';


  export default () => {
    const [vals, setVals] = useState([]);

    const dictComponentName = 'SystemDepartment' + FieldGeneratorToDict.ComponentNames.CascaderAsync.Standard;
    const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
    return <DictComponent
      value={vals}
      onChange={(v) => setVals(v)}
    />
  }
            `,
            renderChildren: () => {
              const dictComponentName =
                'SystemDepartment' + FieldGeneratorToDict.ComponentNames.CascaderAsync.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return <DictComponent value={vals} onChange={(v) => setVals(v)} />;
            },
          },
          {
            id: 'p6',
            name: '异步加载(多选)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(多选)',
                info: '异步加载(多选)',
              },
            },
            codeText: `
import React, { useState } from 'react';
import { FieldGeneratorToDict } from '@baifendian/adhere';


export default () => {
  const [vals, setVals] = useState([]);

  const dictComponentName = 'SystemDepartment' + FieldGeneratorToDict.ComponentNames.CascaderAsync.Multi;
  const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
  return <DictComponent
    value={vals}
    onChange={(v) => setVals(v)}
  />
}
          `,
            renderChildren: () => {
              const dictComponentName =
                'SystemDepartment' + FieldGeneratorToDict.ComponentNames.CascaderAsync.Multi;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return <DictComponent value={vals} onChange={(v) => setVals(v)} />;
            },
          },
          {
            id: 'p7',
            name: '异步加载(回显)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(回显)',
                info: '异步加载(回显)',
              },
            },
            renderChildren: () => {
              const dictComponentName =
                'SystemDepartment' + FieldGeneratorToDict.ComponentNames.CascaderAsync.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent
                  value={cascaderBranchVals}
                  onChange={(v) => {
                    console.log('v======', v);
                    setCascaderBranchVals(v);
                  }}
                  fetchBranch={(value, cascadeParams) => {
                    return Promise.resolve([
                      {
                        label: '辽宁省',
                        value: '210000000000',
                        isLeaf: false,
                        children: [
                          {
                            label: '沈阳市',
                            value: '210100000000',
                            isLeaf: false,
                            children: [
                              {
                                label: '和平区',
                                value: '210102000000',
                                isLeaf: true,
                              },
                            ],
                          },
                        ],
                      },
                    ]);
                  }}
                />
              );
            },
          },
          {
            id: 'p8',
            name: '异步加载(回显-多数据)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(回显-多数据)',
                info: '异步加载(回显-多数据)',
              },
            },
            renderChildren: () => {
              const dictComponentName =
                'SystemDepartment' + FieldGeneratorToDict.ComponentNames.CascaderAsync.Multi;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent
                  value={cascaderBranchMultiVals}
                  onChange={(v) => {
                    console.log('v======', v);
                    setCascaderBranchMultiVals(v);
                  }}
                  fetchBranch={(value, cascadeParams) => {
                    return Promise.resolve([
                      {
                        label: '辽宁省',
                        value: '210000000000',
                        children: [
                          {
                            label: '沈阳市',
                            value: '210100000000',
                            children: [
                              {
                                label: '和平区',
                                value: '210102000000',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        label: '黑龙江省',
                        value: '230000000000',
                        children: [
                          {
                            label: '哈尔滨市',
                            value: '230100000000',
                            children: [
                              {
                                label: '道里区',
                                value: '230102000000',
                              },
                            ],
                          },
                        ],
                      },
                    ]);
                  }}
                />
              );
            },
          },
          {
            id: 'p9',
            name: 'Cascader(能选任意节点，拉平数据)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: 'Cascader(能选任意节点，拉平数据)',
                info: 'Cascader(能选任意节点，拉平数据)',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    const [vals, setVals] = useState([]);
    const dictComponentName = 'SystemDepartmentAll' + FieldGeneratorToDict.ComponentNames.CascaderDynamic.Standard;
    const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
    return <DictComponent
      style={{ width: 500 }}
      value={vals}
      onChange={(v) => setVals(v || [])}
    />
  }
            `,
            renderChildren: () => {
              const dictComponentName =
                'SystemDepartmentAll' +
                FieldGeneratorToDict.ComponentNames.CascaderDynamic.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent treeDataSimpleMode value={vals} onChange={(v) => setVals(v || [])} />
              );
            },
          },
          {
            id: 'p10',
            name: '异步加载(拉平数据)',
            mode: 'code',
            scope: { React },
            type: 'PlayGround',
            cardProps: {
              description: {
                title: '异步加载(拉平数据)',
                info: '异步加载(拉平数据)',
              },
            },
            renderChildren: () => {
              const dictComponentName =
                'SystemDepartment' + FieldGeneratorToDict.ComponentNames.CascaderAsync.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return <DictComponent treeDataSimpleMode value={vals} onChange={(v) => setVals(v)} />;
            },
          },
        ]}
      />

      {/*<CodeBoxSection
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
                info: '普通不带分页',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserListFormItem
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
                info: '普通单选Select',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserListSelectFormItem
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
                info: '普通多选Select',
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

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListMultiSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserListMultiSelectFormItem
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
                info: '分页的动态数据',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserPaginListPaginationFormItem
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
                info: '分页的动态数据Select单选',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserPaginListPaginationSelectFormItem
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
                info: '分页的动态数据Select多选',
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

    return <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTestListPaginationMultiSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemUserPaginListPaginationMultiSelectFormItem
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
      />*/}

      {/*<CodeBoxSection
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogAutoCompleteFormItem
                style={{ width: 200 }}
                value={autoCompleteValue}
                onChange={(v) => {
                  setAutoCompleteValue(v);
                }}
              />
            ),
          },
        ]}
      />*/}

      {/*<CodeBoxSection
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBCNavBreadcrumbFormItem />
            ),
          },
        ]}
      />*/}

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
                info: '基本使用',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';
  import { DownOutlined } from '@ant-design/icons';

  export default () => {
    const dictComponentName = 'SystemDropNav' + FieldGeneratorToDict.ComponentNames.Dropdown.Standard;
    const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
    return (
      <DictComponent>
        <a onClick={(e) => e.preventDefault()}>
          Hover me
          <DownOutlined />
        </a>
      </DictComponent>
    )
  }
            `,
            renderChildren: () => {
              const dictComponentName =
                'SystemDropNav' + FieldGeneratorToDict.ComponentNames.Dropdown.Standard;
              const DictComponent = FieldGeneratorToDict.Components[dictComponentName];
              return (
                <DictComponent>
                  <a onClick={(e) => e.preventDefault()}>
                    Hover me
                    <DownOutlined />
                  </a>
                </DictComponent>
              );
            },
          },
        ]}
      />

      {/*<CodeBoxSection
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemMentMentionsFormItem />
            ),
          },
        ]}
      />*/}

      {/*<CodeBoxSection
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemNavMenuFormItem />
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemJSX1NavMenuFormItem
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemJSX2NavMenuFormItem
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
      />*/}

      {/*<CodeBoxSection
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemObjArraySegNavSegmentedFormItem />
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemSegNavSegmentedFormItem />
            ),
          },
        ]}
      />*/}

      {/*<CodeBoxSection
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemOneWizardStepsFormItem
                value={1}
              />
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTwoWizardStepsFormItem
                direction="vertical"
                size="small"
                value={1}
              />
            ),
          },
        ]}
      />*/}

      {/*<CodeBoxSection
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
                info: 'Tag横向',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem, Space } from '@baifendian/adhere';

  export default () => {
    return (
      <Space.Group direction="vertical">
        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagHorizontalFormItem
          value={vals}
          onChange={(v) => setVals(v)}
        />
        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagHorizontalFormItem
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
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagHorizontalFormItem
                  value={vals}
                  onChange={(v) => setVals(v)}
                />
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagHorizontalFormItem
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
                info: 'Tag纵向',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { AntdFormItem, Space } from '@baifendian/adhere';

  export default () => {
    return (
      <Space.Group direction="vertical">
        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagVerticalFormItem
          value={vals}
          onChange={(v) => setVals(v)}
        />

        <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagVerticalFormItem
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
                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagVerticalFormItem
                  value={vals}
                  onChange={(v) => setVals(v)}
                />

                <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagVerticalFormItem
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
                info: 'Tag纵向全选',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagCheckAllVerticalFormItem
        value={vals}
        onChange={(v) => setVals(v)}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagCheckAllVerticalFormItem
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
                info: 'Tag横向全选',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagCheckAllHorizontalFormItem
        value={vals}
        onChange={(v) => setVals(v)}
      />
    )
  }
            `,
            renderChildren: () => (
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagCheckAllHorizontalFormItem
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
                info: 'Tag的Select',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagSelectFormItem
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
                info: 'Tag的Select多选',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagMultiSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagMultiSelectFormItem
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
                info: 'Tag的CheckAllSelect',
              },
            },
            codeText: `
  import React, { useState } from 'react';
  import { FieldGeneratorToDict } from '@baifendian/adhere';

  export default () => {
    return (
      <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagCheckAllSelectFormItem
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemBookCatalogTagCheckAllSelectFormItem
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
      />*/}

      {/*<CodeBoxSection
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemOneTLTimelineFormItem />
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemTwoTLTimelineFormItem mode="alternate" />
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
                info: '基本使用',
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
              <FieldGeneratorToDict.FormItemGeneratorToDict.SystemThreeTLTimelineFormItem mode="right" />
            ),
          },
        ]}
      />*/}

      <PropsSection
        title="FieldGeneratorToDict.FormItemGeneratorToDict"
        config={[
          {
            border: true,
            title: '字典组件生成器代理对象',
            data: [
              {
                params: 'name',
                desc: '字典组件名称，规则为 字典名+组件名+功能名，字典名+组件名可使用 FieldGeneratorToDict.ComponentNames.静态枚举值获取',
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
