import { Avatar } from 'antd';
import React, { useContext, useState } from 'react';

import { ConfigProvider, FieldGeneratorToDict, Util } from '@baifendian/adhere';
import { Checkbox, Col, List, Radio, Row } from '@baifendian/adhere-ui-anthoc';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import styles from './index.less';

export default () => {
  const { media } = useContext(ConfigProvider.Context);

  return (
    <PlayGroundPage>
      <Section title="FieldGeneratorToDict">
        <p>字典生成器</p>
        <ul>
          <li>使用Dict生成数据源组件</li>
        </ul>
      </Section>

      <CodeBoxSection
        title="AutoComplete生成器"
        config={[
          {
            id: `SelectInput`,
            name: `SelectInput`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SelectInput',
                info: 'SelectInput',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState({
                  inputValue: '',
                  selectValue: '',
                });

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.AutoCompleteDynamic.SelectInput}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.AutoCompleteDynamic.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent placeholder={DictComponentName} className={styles.DictComponent} />
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Breadcrumb生成器"
        config={[
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBCNav${FieldGeneratorToDict.ComponentNames.Breadcrumb.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseStandard`,
            name: `SuspenseStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseStandard',
                info: 'SuspenseStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBCNav${FieldGeneratorToDict.ComponentNames.Breadcrumb.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Cascader生成器"
        config={[
          {
            id: `CascaderAsync`,
            name: `CascaderAsync`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsync',
                info: 'CascaderAsync',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncChangeOnSelect`,
            name: `CascaderAsyncChangeOnSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncChangeOnSelect',
                info: 'CascaderAsyncChangeOnSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.ChangeOnSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncFlatChangeOnSelect`,
            name: `CascaderAsyncFlatChangeOnSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncFlatChangeOnSelect',
                info: 'CascaderAsyncFlatChangeOnSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.FlatChangeOnSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncFlatMulti`,
            name: `CascaderAsyncFlatMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncFlatMulti',
                info: 'CascaderAsyncFlatMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.FlatMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncFlatShowChild`,
            name: `CascaderAsyncFlatShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncFlatShowChild',
                info: 'CascaderAsyncFlatShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.FlatShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncFlatShowParent`,
            name: `CascaderAsyncFlatShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncFlatShowParent',
                info: 'CascaderAsyncFlatShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.FlatShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncFlatStandard`,
            name: `CascaderAsyncFlatStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncFlatStandard',
                info: 'CascaderAsyncFlatStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.FlatStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncMulti`,
            name: `CascaderAsyncMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncMulti',
                info: 'CascaderAsyncMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncShowChild`,
            name: `CascaderAsyncShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncShowChild',
                info: 'CascaderAsyncShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.ShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CascaderAsyncShowParent`,
            name: `CascaderAsyncShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CascaderAsyncShowParent',
                info: 'CascaderAsyncShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.CascaderAsync.ShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `ChangeOnSelect`,
            name: `ChangeOnSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ChangeOnSelect',
                info: 'ChangeOnSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.ChangeOnSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent placeholder={DictComponentName} className={styles.DictComponent} />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatChangeOnSelect`,
            name: `FlatChangeOnSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatChangeOnSelect',
                info: 'FlatChangeOnSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatChangeOnSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatMulti`,
            name: `FlatMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatMulti',
                info: 'FlatMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatShowChild`,
            name: `FlatShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatShowChild',
                info: 'FlatShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatShowParent`,
            name: `FlatShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatShowParent',
                info: 'FlatShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatStandard`,
            name: `FlatStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatStandard',
                info: 'FlatStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatTreeSelect`,
            name: `FlatTreeSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatTreeSelect',
                info: 'FlatTreeSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.CascaderDynamic.FlatTreeSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Multi`,
            name: `Multi`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Multi',
                info: 'Multi',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `ShowChild`,
            name: `ShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ShowChild',
                info: 'ShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.ShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent placeholder={DictComponentName} className={styles.DictComponent} />
                );
              };

              return <Component />;
            },
          },
          {
            id: `ShowParent`,
            name: `ShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ShowParent',
                info: 'ShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.ShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent placeholder={DictComponentName} className={styles.DictComponent} />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeSelect`,
            name: `TreeSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeSelect',
                info: 'TreeSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSSQ${FieldGeneratorToDict.ComponentNames.Cascader.TreeSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent placeholder={DictComponentName} className={styles.DictComponent} />
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Checkbox生成器"
        config={[
          {
            id: `AutoCompleteCheckboxCheckAllCustomSelect`,
            name: `AutoCompleteCheckboxCheckAllCustomSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxCheckAllCustomSelect',
                info: 'AutoCompleteCheckboxCheckAllCustomSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.CheckBoxAC.CheckAllCustom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  >
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteCheckboxCheckAllSelect`,
            name: `AutoCompleteCheckboxCheckAllSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxCheckAllSelect',
                info: 'AutoCompleteCheckboxCheckAllSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.CheckBoxAC.CheckAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteCheckboxCustomSelect`,
            name: `AutoCompleteCheckboxCustomSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxCustomSelect',
                info: 'AutoCompleteCheckboxCustomSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.CheckBoxAC.Custom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  >
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteCheckboxSelect`,
            name: `AutoCompleteCheckboxSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxSelect',
                info: 'AutoCompleteCheckboxSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.CheckBoxAC.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllCustom`,
            name: `CheckAllCustom`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllCustom',
                info: 'CheckAllCustom',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllCustom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent value={value} onChange={setValue}>
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllCustomSelect`,
            name: `CheckAllCustomSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllCustomSelect',
                info: 'CheckAllCustomSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllCustomSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  >
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllHorizontal`,
            name: `CheckAllHorizontal`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllHorizontal',
                info: 'CheckAllHorizontal',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllHorizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllSelect`,
            name: `CheckAllSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllSelect',
                info: 'CheckAllSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllVertical`,
            name: `CheckAllVertical`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllVertical',
                info: 'CheckAllVertical',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CheckAllVertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `Checkbox`,
            name: `Checkbox`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Checkbox',
                info: 'Checkbox',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `CheckboxExt`,
            name: `CheckboxExt`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxExt',
                info: 'CheckboxExt',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.GroupExt}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `Custom`,
            name: `Custom`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Custom',
                info: 'Custom',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.Custom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent value={value} onChange={setValue}>
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `CustomSelect`,
            name: `CustomSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomSelect',
                info: 'CustomSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.CustomSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  >
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `Horizontal`,
            name: `Horizontal`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Horizontal',
                info: 'Horizontal',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.Horizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `Select`,
            name: `Select`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Select',
                info: 'Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckAllCustom`,
            name: `SuspenseCheckAllCustom`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckAllCustom',
                info: 'SuspenseCheckAllCustom',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseCheckAllCustom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent value={value} onChange={setValue}>
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckAllHorizontal`,
            name: `SuspenseCheckAllHorizontal`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckAllHorizontal',
                info: 'SuspenseCheckAllHorizontal',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseCheckAllHorizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckAllVertical`,
            name: `SuspenseCheckAllVertical`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckAllVertical',
                info: 'SuspenseCheckAllVertical',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseCheckAllVertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckboxd`,
            name: `SuspenseCheckboxd`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckboxd',
                info: 'SuspenseCheckboxd',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCustom`,
            name: `SuspenseCustom`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCustom',
                info: 'SuspenseCustom',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseCustom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent value={value} onChange={setValue}>
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data, onChange, checked, disabled }) => (
                          <Col span={4}>
                            <Checkbox
                              key={data?.value}
                              {...(data ?? {})}
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) => {
                                onChange(e, data.value);
                              }}
                            >
                              {data?.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseGroupExt`,
            name: `SuspenseGroupExt`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseGroupExt',
                info: 'SuspenseGroupExt',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseGroupExt}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseHorizontal`,
            name: `SuspenseHorizontal`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseHorizontal',
                info: 'SuspenseHorizontal',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseHorizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseVertical`,
            name: `SuspenseVertical`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseVertical',
                info: 'SuspenseVertical',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.SuspenseVertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `Vertical`,
            name: `Vertical`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Vertical',
                info: 'Vertical',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.CheckBoxDynamic.Vertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Dropdown生成器"
        config={[
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDropNav${FieldGeneratorToDict.ComponentNames.Dropdown.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent>
                    <a onClick={(e) => e.preventDefault()}>Hover me</a>
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="List生成器"
        config={[
          {
            id: `AutoCompleteChecckboxList`,
            name: `AutoCompleteChecckboxList`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteChecckboxList',
                info: 'AutoCompleteChecckboxList',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookAC${FieldGeneratorToDict.ComponentNames.ListAC.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    listProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteCheckAllList`,
            name: `AutoCompleteCheckAllList`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckAllList',
                info: 'AutoCompleteCheckAllList',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookAC${FieldGeneratorToDict.ComponentNames.ListAC.CheckAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    listProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteCheckboxPagin`,
            name: `AutoCompleteCheckboxPagin`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxPagin',
                info: 'AutoCompleteCheckboxPagin',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserACPagin${FieldGeneratorToDict.ComponentNames.ListAC.MultiPaging}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteRadioList`,
            name: `AutoCompleteRadioList`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteRadioList',
                info: 'AutoCompleteRadioList',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookAC${FieldGeneratorToDict.ComponentNames.ListAC.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    listProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteRadioPagin`,
            name: `AutoCompleteRadioPagin`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteRadioPagin',
                info: 'AutoCompleteRadioPagin',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserACPagin${FieldGeneratorToDict.ComponentNames.ListAC.Paging}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllSelect`,
            name: `CheckAllSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllSelect',
                info: 'CheckAllSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBook${FieldGeneratorToDict.ComponentNames.ListDynamic.CheckAllSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    listProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckboxListPaging`,
            name: `CheckboxListPaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxListPaging',
                info: 'CheckboxListPaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckboxListPagingSelect`,
            name: `CheckboxListPagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxListPagingSelect',
                info: 'CheckboxListPagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.MultiSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `ListStandard`,
            name: `ListStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ListStandard',
                info: 'ListStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBook${FieldGeneratorToDict.ComponentNames.ListDynamic.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    itemLayout="horizontal"
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                    pagination
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `MultiSelect`,
            name: `MultiSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'MultiSelect',
                info: 'MultiSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBook${FieldGeneratorToDict.ComponentNames.ListDynamic.MultiSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    listProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `RadioListPaging`,
            name: `RadioListPaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioListPaging',
                info: 'RadioListPaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `RadioListPagingSelect`,
            name: `RadioListPagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioListPagingSelect',
                info: 'RadioListPagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Select`,
            name: `Select`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Select',
                info: 'Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemBook${FieldGeneratorToDict.ComponentNames.ListDynamic.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    listProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckboxListPaging`,
            name: `SuspenseCheckboxListPaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckboxListPaging',
                info: 'SuspenseCheckboxListPaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.SuspenseMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseRadioListPaging`,
            name: `SuspenseRadioListPaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseRadioListPaging',
                info: 'SuspenseRadioListPaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.ListPagination.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    listPagingProps={{
                      itemLayout: 'horizontal',
                      renderItem: (item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      ),
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseStandard`,
            name: `SuspenseStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseStandard',
                info: 'SuspenseStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBook${FieldGeneratorToDict.ComponentNames.ListDynamic.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    itemLayout="horizontal"
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                            />
                          }
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                    pagination
                  />
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Mentions生成器"
        config={[
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemMent${FieldGeneratorToDict.ComponentNames.Mentions.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Menu生成器"
        config={[
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemNav${FieldGeneratorToDict.ComponentNames.Menu.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Radio生成器"
        config={[
          {
            id: `AutoCompleteButtonRadioSelectndard`,
            name: `AutoCompleteButtonRadioSelectndard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteButtonRadioSelectndard',
                info: 'AutoCompleteButtonRadioSelectndard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.RadioAC.Button}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteCustomRadioSelect`,
            name: `AutoCompleteCustomRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCustomRadioSelect',
                info: 'AutoCompleteCustomRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.RadioAC.Custom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  >
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data }) => (
                          <Col span={4}>
                            <Radio key={data?.value} {...(data ?? {})}>
                              {data?.label}
                            </Radio>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteRadioSelect`,
            name: `AutoCompleteRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteRadioSelect',
                info: 'AutoCompleteRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.RadioAC.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `ButtonRadio`,
            name: `ButtonRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ButtonRadio',
                info: 'ButtonRadio',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Button}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `ButtonRadioSelect`,
            name: `ButtonRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ButtonRadioSelect',
                info: 'ButtonRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.ButtonSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CustomRadio`,
            name: `CustomRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomRadio',
                info: 'CustomRadio',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Custom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent>
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data }) => (
                          <Col span={4}>
                            <Radio key={data?.value} {...(data ?? {})}>
                              {data?.label}
                            </Radio>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `CustomRadioSelect`,
            name: `CustomRadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CustomRadioSelect',
                info: 'CustomRadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.CustomSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  >
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data }) => (
                          <Col span={4}>
                            <Radio key={data?.value} {...(data ?? {})}>
                              {data?.label}
                            </Radio>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `HorizontalRadio`,
            name: `HorizontalRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalRadio',
                info: 'HorizontalRadio',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Horizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `RadioSelect`,
            name: `RadioSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioSelect',
                info: 'RadioSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState();

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseButton`,
            name: `SuspenseButton`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseButton',
                info: 'SuspenseButton',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.SuspenseButton}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCustom`,
            name: `SuspenseCustom`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCustom',
                info: 'SuspenseCustom',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.SuspenseCustom}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent>
                    {(options) => (
                      <Row gutter={[16, 24]}>
                        {options.map(({ data }) => (
                          <Col span={4}>
                            <Radio key={data?.value} {...(data ?? {})}>
                              {data?.label}
                            </Radio>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseHorizontal`,
            name: `SuspenseHorizontal`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseHorizontal',
                info: 'SuspenseHorizontal',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.SuspenseHorizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseVertical`,
            name: `SuspenseVertical`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseVertical',
                info: 'SuspenseVertical',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.SuspenseVertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `VerticalRadio`,
            name: `VerticalRadio`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalRadio',
                info: 'VerticalRadio',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.RadioDynamic.Vertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Segmented生成器"
        config={[
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSegNav${FieldGeneratorToDict.ComponentNames.Segmented.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseStandard`,
            name: `SuspenseStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseStandard',
                info: 'SuspenseStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemSegNav${FieldGeneratorToDict.ComponentNames.Segmented.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Select生成器"
        config={[
          {
            id: `AutoCompleteCheckAllMultipleSelect`,
            name: `AutoCompleteCheckAllMultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckAllMultipleSelect',
                info: 'AutoCompleteCheckAllMultipleSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.CheckAll}`;

                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  >
                    {({ originNode, value, onChange, options }) => {
                      // return originNode;
                      return <Checkbox.Group value={value} onChange={onChange} options={options} />;
                    }}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteMultipleSelect`,
            name: `AutoCompleteMultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteMultipleSelect',
                info: 'AutoCompleteMultipleSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteSelect`,
            name: `AutoCompleteSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteSelect',
                info: 'AutoCompleteSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.SelectAC.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    placeholder={DictComponentName}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllMultipleSelect`,
            name: `CheckAllMultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllMultipleSelect',
                info: 'CheckAllMultipleSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.CheckAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent4}
                    value={value}
                    onChange={setValue}
                  >
                    {({ originNode, value, onChange, options }) => {
                      // return originNode;
                      return <Checkbox.Group value={value} onChange={onChange} options={options} />;
                    }}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `DropdownRenderSelect`,
            name: `DropdownRenderSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'DropdownRenderSelect',
                info: 'DropdownRenderSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.DropdownRender}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    mode="multiple"
                    placeholder={DictComponentName}
                    className={styles.DictComponent4}
                    value={value}
                    onChange={setValue}
                  >
                    {({ originNode, value, onChange, options }) => {
                      // return originNode;
                      return <Checkbox.Group value={value} onChange={onChange} options={options} />;
                    }}
                  </DictComponent>
                );
              };

              return <Component />;
            },
          },
          {
            id: `MultipleSelect`,
            name: `MultipleSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'MultipleSelect',
                info: 'MultipleSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent4}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Select`,
            name: `Select`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Select',
                info: 'Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.SelectDynamic.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent4}
                  />
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Steps生成器"
        config={[
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOneWizard${FieldGeneratorToDict.ComponentNames.Steps.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseStandard`,
            name: `SuspenseStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseStandard',
                info: 'SuspenseStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOneWizard${FieldGeneratorToDict.ComponentNames.Steps.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Table生成器"
        config={[
          {
            id: `AutoCompleteCheckboxPagin`,
            name: `AutoCompleteCheckboxPagin`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxPagin',
                info: 'AutoCompleteCheckboxPagin',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserACPagin${FieldGeneratorToDict.ComponentNames.TableAC.MultiPaging}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowId: 'itemid',
                      columns: [
                        {
                          title: '名称',
                          key: 'label',
                          dataIndex: 'label',
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteCheckboxTable`,
            name: `AutoCompleteCheckboxTable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteCheckboxTable',
                info: 'AutoCompleteCheckboxTable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemTableBookAC${FieldGeneratorToDict.ComponentNames.TableAC.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    tableProps={{
                      rowId: 'itemid',
                      pagination: false,
                      columns: [
                        {
                          title: '名称',
                          key: 'label',
                          dataIndex: 'label',
                        },
                        {
                          title: '出版社',
                          key: 'name',
                          dataIndex: 'name',
                        },
                        {
                          title: 'jp',
                          key: 'jp',
                          dataIndex: 'jp',
                        },
                        {
                          title: 'onTime',
                          key: 'onTime',
                          dataIndex: 'onTime',
                        },
                        {
                          title: 'rn',
                          key: 'rn',
                          dataIndex: 'rn',
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteRadioPagin`,
            name: `AutoCompleteRadioPagin`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteRadioPagin',
                info: 'AutoCompleteRadioPagin',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserACPagin${FieldGeneratorToDict.ComponentNames.TableAC.Paging}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowId: 'itemid',
                      columns: [
                        {
                          title: '名称',
                          key: 'label',
                          dataIndex: 'label',
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteRadioTable`,
            name: `AutoCompleteRadioTable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteRadioTable',
                info: 'AutoCompleteRadioTable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemTableBookAC${FieldGeneratorToDict.ComponentNames.TableAC.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    tableProps={{
                      rowId: 'itemid',
                      columns: [
                        {
                          title: '名称',
                          key: 'label',
                          dataIndex: 'label',
                        },
                        {
                          title: '出版社',
                          key: 'name',
                          dataIndex: 'name',
                        },
                        {
                          title: 'jp',
                          key: 'jp',
                          dataIndex: 'jp',
                        },
                        {
                          title: 'onTime',
                          key: 'onTime',
                          dataIndex: 'onTime',
                        },
                        {
                          title: 'rn',
                          key: 'rn',
                          dataIndex: 'rn',
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckboxTablePaging`,
            name: `CheckboxTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxTablePaging',
                info: 'CheckboxTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowKey: 'id',
                      columns: [
                        {
                          title: 'title',
                          key: 'title',
                          dataIndex: 'title',
                        },
                        {
                          title: 'avatar',
                          key: 'avatar',
                          dataIndex: 'avatar',
                          render: (v) => <img width={50} src={v} alt="" />,
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckboxTablePagingSelect`,
            name: `CheckboxTablePagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckboxTablePagingSelect',
                info: 'CheckboxTablePagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.MultiSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowKey: 'id',
                      columns: [
                        {
                          title: 'title',
                          key: 'title',
                          dataIndex: 'title',
                        },
                        {
                          title: 'avatar',
                          key: 'avatar',
                          dataIndex: 'avatar',
                          render: (v) => <img width={50} src={v} alt="" />,
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `MultiSelect`,
            name: `MultiSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'MultiSelect',
                info: 'MultiSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemTableBook${FieldGeneratorToDict.ComponentNames.TableDynamic.MultiSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    tableProps={{
                      columns: [
                        {
                          title: '名称',
                          key: 'label',
                          dataIndex: 'label',
                        },
                        {
                          title: '出版社',
                          key: 'name',
                          dataIndex: 'name',
                        },
                        {
                          title: 'jp',
                          key: 'jp',
                          dataIndex: 'jp',
                        },
                        {
                          title: 'onTime',
                          key: 'onTime',
                          dataIndex: 'onTime',
                        },
                        {
                          title: 'rn',
                          key: 'rn',
                          dataIndex: 'rn',
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `RadioTablePaging`,
            name: `RadioTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioTablePaging',
                info: 'RadioTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowKey: 'id',
                      columns: [
                        {
                          title: 'title',
                          key: 'title',
                          dataIndex: 'title',
                        },
                        {
                          title: 'avatar',
                          key: 'avatar',
                          dataIndex: 'avatar',
                          render: (v) => <img width={50} src={v} alt="" />,
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `RadioTablePagingSelect`,
            name: `RadioTablePagingSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'RadioTablePagingSelect',
                info: 'RadioTablePagingSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowKey: 'id',
                      columns: [
                        {
                          title: 'title',
                          key: 'title',
                          dataIndex: 'title',
                        },
                        {
                          title: 'avatar',
                          key: 'avatar',
                          dataIndex: 'avatar',
                          render: (v) => <img width={50} src={v} alt="" />,
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Select`,
            name: `Select`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Select',
                info: 'Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemTableBook${FieldGeneratorToDict.ComponentNames.TableDynamic.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent3}
                    dropdownStyle={{
                      maxHeight: Util.pxToRem(300, media.designWidth, media),
                      overflowY: 'auto',
                    }}
                    value={value}
                    onChange={setValue}
                    tableProps={{
                      columns: [
                        {
                          title: '名称',
                          key: 'label',
                          dataIndex: 'label',
                        },
                        {
                          title: '出版社',
                          key: 'name',
                          dataIndex: 'name',
                        },
                        {
                          title: 'jp',
                          key: 'jp',
                          dataIndex: 'jp',
                        },
                        {
                          title: 'onTime',
                          key: 'onTime',
                          dataIndex: 'onTime',
                        },
                        {
                          title: 'rn',
                          key: 'rn',
                          dataIndex: 'rn',
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckboxTablePaging`,
            name: `SuspenseCheckboxTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckboxTablePaging',
                info: 'SuspenseCheckboxTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.SuspenseMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowKey: 'id',
                      columns: [
                        {
                          title: 'title',
                          key: 'title',
                          dataIndex: 'title',
                        },
                        {
                          title: 'avatar',
                          key: 'avatar',
                          dataIndex: 'avatar',
                          render: (v) => <img width={50} src={v} alt="" />,
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseRadioTablePaging`,
            name: `SuspenseRadioTablePaging`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseRadioTablePaging',
                info: 'SuspenseRadioTablePaging',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemUserPagin${FieldGeneratorToDict.ComponentNames.TablePagination.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    value={value}
                    onChange={setValue}
                    pagingProps={{
                      defaultLimit: 10,
                    }}
                    tablePagingProps={{
                      rowKey: 'id',
                      columns: [
                        {
                          title: 'title',
                          key: 'title',
                          dataIndex: 'title',
                        },
                        {
                          title: 'avatar',
                          key: 'avatar',
                          dataIndex: 'avatar',
                          render: (v) => <img width={50} src={v} alt="" />,
                        },
                      ],
                    }}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseStandard`,
            name: `SuspenseStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseStandard',
                info: 'SuspenseStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemTableBook${FieldGeneratorToDict.ComponentNames.TableDynamic.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    columns={[
                      {
                        title: '名称',
                        key: 'label',
                        dataIndex: 'label',
                      },
                      {
                        title: '出版社',
                        key: 'name',
                        dataIndex: 'name',
                      },
                      {
                        title: 'jp',
                        key: 'jp',
                        dataIndex: 'jp',
                      },
                      {
                        title: 'onTime',
                        key: 'onTime',
                        dataIndex: 'onTime',
                      },
                      {
                        title: 'rn',
                        key: 'rn',
                        dataIndex: 'rn',
                      },
                    ]}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TableStandard`,
            name: `TableStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TableStandard',
                info: 'TableStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemTableBook${FieldGeneratorToDict.ComponentNames.TableDynamic.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    columns={[
                      {
                        title: '名称',
                        key: 'label',
                        dataIndex: 'label',
                      },
                      {
                        title: '出版社',
                        key: 'name',
                        dataIndex: 'name',
                      },
                      {
                        title: 'jp',
                        key: 'jp',
                        dataIndex: 'jp',
                      },
                      {
                        title: 'onTime',
                        key: 'onTime',
                        dataIndex: 'onTime',
                      },
                      {
                        title: 'rn',
                        key: 'rn',
                        dataIndex: 'rn',
                      },
                    ]}
                  />
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Tag生成器"
        config={[
          {
            id: `AutoCompleteTagCheckAllSelect`,
            name: `AutoCompleteTagCheckAllSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteTagCheckAllSelect',
                info: 'AutoCompleteTagCheckAllSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.TagAC.CheckAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent5}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `AutoCompleteTagSelect`,
            name: `AutoCompleteTagSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoCompleteTagSelect',
                info: 'AutoCompleteTagSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemFilterBookList${FieldGeneratorToDict.ComponentNames.TagAC.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    mode="multiple"
                    placeholder={DictComponentName}
                    className={styles.DictComponent5}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllHorizontalCheckable`,
            name: `CheckAllHorizontalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllHorizontalCheckable',
                info: 'CheckAllHorizontalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.CheckAllHorizontalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllSelect`,
            name: `CheckAllSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllSelect',
                info: 'CheckAllSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.CheckAllSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent5}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckAllVerticalCheckable`,
            name: `CheckAllVerticalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckAllVerticalCheckable',
                info: 'CheckAllVerticalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.CheckAllVerticalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `Horizontal`,
            name: `Horizontal`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Horizontal',
                info: 'Horizontal',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.Horizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `HorizontalCheckable`,
            name: `HorizontalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'HorizontalCheckable',
                info: 'HorizontalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.VerticalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `MultiSelect`,
            name: `MultiSelect`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'MultiSelect',
                info: 'MultiSelect',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.MultiSelect}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent5}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Select`,
            name: `Select`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Select',
                info: 'Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckAllHorizontalCheckable`,
            name: `SuspenseCheckAllHorizontalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckAllHorizontalCheckable',
                info: 'SuspenseCheckAllHorizontalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.SuspenseCheckAllHorizontalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseCheckAllVerticalCheckable`,
            name: `SuspenseCheckAllVerticalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseCheckAllVerticalCheckable',
                info: 'SuspenseCheckAllVerticalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.SuspenseCheckAllVerticalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseHorizontal`,
            name: `SuspenseHorizontal`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseHorizontal',
                info: 'SuspenseHorizontal',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.SuspenseHorizontal}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseHorizontalCheckable`,
            name: `SuspenseHorizontalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseHorizontalCheckable',
                info: 'SuspenseHorizontalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.SuspenseHorizontalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseVertical`,
            name: `SuspenseVertical`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseVertical',
                info: 'SuspenseVertical',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.SuspenseVertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseVerticalCheckable`,
            name: `SuspenseVerticalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseVerticalCheckable',
                info: 'SuspenseVerticalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.SuspenseVerticalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
          {
            id: `Vertical`,
            name: `Vertical`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Vertical',
                info: 'Vertical',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.Vertical}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `VerticalCheckable`,
            name: `VerticalCheckable`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'VerticalCheckable',
                info: 'VerticalCheckable',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TagDynamic.CheckAllVerticalCheckable}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent value={value} onChange={setValue} />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Timeline生成器"
        config={[
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOneTL${FieldGeneratorToDict.ComponentNames.Timeline.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseStandard`,
            name: `SuspenseStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseStandard',
                info: 'SuspenseStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOneTL${FieldGeneratorToDict.ComponentNames.Timeline.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return <DictComponent />;
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="Transfer生成器"
        config={[
          {
            id: `AutoComplete`,
            name: `AutoComplete`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'AutoComplete',
                info: 'AutoComplete',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {};

              return <Component />;
            },
          },
          {
            id: `Select`,
            name: `Select`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Select',
                info: 'Select',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState([]);

                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TransferDynamic.Select}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                    render={(item) => item.title}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TransferDynamic.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                const [targetKeys, setTargetKeys] = useState();
                const [selectedKeys, setSelectedKeys] = useState([]);

                const onChange = (nextTargetKeys, direction, moveKeys) => {
                  console.log('targetKeys:', nextTargetKeys);
                  console.log('direction:', direction);
                  console.log('moveKeys:', moveKeys);
                  setTargetKeys(nextTargetKeys);
                };
                const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
                  console.log('sourceSelectedKeys:', sourceSelectedKeys);
                  console.log('targetSelectedKeys:', targetSelectedKeys);
                  setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
                };
                const onScroll = (direction, e) => {
                  console.log('direction:', direction);
                  console.log('target:', e.target);
                };

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    titles={['Source', 'Target']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={onChange}
                    onSelectChange={onSelectChange}
                    onScroll={onScroll}
                    render={(item) => item.title}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `SuspenseStandard`,
            name: `SuspenseStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'SuspenseStandard',
                info: 'SuspenseStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemBookCatalogDynamic${FieldGeneratorToDict.ComponentNames.TransferDynamic.SuspenseStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                const [targetKeys, setTargetKeys] = useState();
                const [selectedKeys, setSelectedKeys] = useState([]);

                const onChange = (nextTargetKeys, direction, moveKeys) => {
                  console.log('targetKeys:', nextTargetKeys);
                  console.log('direction:', direction);
                  console.log('moveKeys:', moveKeys);
                  setTargetKeys(nextTargetKeys);
                };
                const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
                  console.log('sourceSelectedKeys:', sourceSelectedKeys);
                  console.log('targetSelectedKeys:', targetSelectedKeys);
                  setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
                };
                const onScroll = (direction, e) => {
                  console.log('direction:', direction);
                  console.log('target:', e.target);
                };

                return (
                  <DictComponent
                    className={styles.DictComponent3}
                    titles={['Source', 'Target']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={onChange}
                    onSelectChange={onSelectChange}
                    onScroll={onScroll}
                    render={(item) => item.title}
                  />
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <CodeBoxSection
        title="TreeSelect生成器"
        config={[
          {
            id: `CheckedShowAll`,
            name: `CheckedShowAll`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckedShowAll',
                info: 'CheckedShowAll',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.CheckedShowAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckedShowChild`,
            name: `CheckedShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckedShowChild',
                info: 'CheckedShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.CheckedShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `CheckedShowParent`,
            name: `CheckedShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'CheckedShowParent',
                info: 'CheckedShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.CheckedShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Flat`,
            name: `Flat`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Flat',
                info: 'Flat',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.Flat}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatCheckedShowAll`,
            name: `FlatCheckedShowAll`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatCheckedShowAll',
                info: 'FlatCheckedShowAll',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatCheckedShowAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatCheckedShowChild`,
            name: `FlatCheckedShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatCheckedShowChild',
                info: 'FlatCheckedShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatCheckedShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatCheckedShowParent`,
            name: `FlatCheckedShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatCheckedShowParent',
                info: 'FlatCheckedShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatCheckedShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatLeaf`,
            name: `FlatLeaf`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatLeaf',
                info: 'FlatLeaf',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatLeaf}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatLeafMulti`,
            name: `FlatLeafMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatLeafMulti',
                info: 'FlatLeafMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatLeafMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `FlatMulti`,
            name: `FlatMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'FlatMulti',
                info: 'FlatMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemDepartmentAll${FieldGeneratorToDict.ComponentNames.TreeDynamic.FlatMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Leaf`,
            name: `Leaf`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Leaf',
                info: 'Leaf',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.Leaf}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `LeafMulti`,
            name: `LeafMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'LeafMulti',
                info: 'LeafMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.LeafMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Multi`,
            name: `Multi`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Multi',
                info: 'Multi',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `Standard`,
            name: `Standard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Standard',
                info: 'Standard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const DictComponentName = `SystemOrg${FieldGeneratorToDict.ComponentNames.Tree.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent2}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsync`,
            name: `TreeAsync`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsync',
                info: 'TreeAsync',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.Standard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncCheckedShowAll`,
            name: `TreeAsyncCheckedShowAll`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncCheckedShowAll',
                info: 'TreeAsyncCheckedShowAll',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.CheckedShowAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncCheckedShowChild`,
            name: `TreeAsyncCheckedShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncCheckedShowChild',
                info: 'TreeAsyncCheckedShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.CheckedShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncCheckedShowParent`,
            name: `TreeAsyncCheckedShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncCheckedShowParent',
                info: 'TreeAsyncCheckedShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.CheckedShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncFlatCheckedShowAll`,
            name: `TreeAsyncFlatCheckedShowAll`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncFlatCheckedShowAll',
                info: 'TreeAsyncFlatCheckedShowAll',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatCheckedShowAll}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncFlatCheckedShowChild`,
            name: `TreeAsyncFlatCheckedShowChild`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncFlatCheckedShowChild',
                info: 'TreeAsyncFlatCheckedShowChild',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatCheckedShowChild}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncFlatCheckedShowParent`,
            name: `TreeAsyncFlatCheckedShowParent`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncFlatCheckedShowParent',
                info: 'TreeAsyncFlatCheckedShowParent',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatCheckedShowParent}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncFlatLeaf`,
            name: `TreeAsyncFlatLeaf`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncFlatLeaf',
                info: 'TreeAsyncFlatLeaf',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatLeaf}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncFlatLeafMulti`,
            name: `TreeAsyncFlatLeafMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncFlatLeafMulti',
                info: 'TreeAsyncFlatLeafMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatLeafMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncFlatMulti`,
            name: `TreeAsyncFlatMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncFlatMulti',
                info: 'TreeAsyncFlatMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncFlatStandard`,
            name: `TreeAsyncFlatStandard`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncFlatStandard',
                info: 'TreeAsyncFlatStandard',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.FlatStandard}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncLeaf`,
            name: `TreeAsyncLeaf`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncLeaf',
                info: 'TreeAsyncLeaf',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.Leaf}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncLeafMulti`,
            name: `TreeAsyncLeafMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncLeafMulti',
                info: 'TreeAsyncLeafMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.LeafMulti}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
          {
            id: `TreeAsyncMulti`,
            name: `TreeAsyncMulti`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'TreeAsyncMulti',
                info: 'TreeAsyncMulti',
              },
            },
            type: 'PlayGround',
            codeText: ``,
            renderChildren: () => {
              const Component = () => {
                const [value, setValue] = useState(undefined);

                const DictComponentName = `SystemDepartment${FieldGeneratorToDict.ComponentNames.TreeAsync.Multi}`;
                const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

                return (
                  <DictComponent
                    placeholder={DictComponentName}
                    className={styles.DictComponent}
                    value={value}
                    onChange={setValue}
                  />
                );
              };

              return <Component />;
            },
          },
        ]}
      />

      <PropsSection
        title="anthoc"
        config={[
          {
            border: true,
            title: 'Select（单选）、MultipleSelect（多选）',
            data: [
              {
                params: 'showSearch',
                desc: '配置是否可搜索',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'filterOption',
                desc: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false',
                type: 'boolean | function(inputValue, option)',
                defaultVal:
                  '(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/select-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'TreeSelect',
            data: [
              {
                params: 'showSearch',
                desc: '配置是否可搜索',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'treeNodeFilterProp',
                desc: '输入项过滤对应的 treeNode 属性',
                type: 'string',
                defaultVal: 'title',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/tree-select-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'AutoComplete',
            data: [
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'filterOption',
                desc: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false',
                type: 'boolean | function(inputValue, option)',
                defaultVal:
                  '(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/auto-complete-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'DatePicker、RangePicker、TimePicker',
            data: [
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/date-picker-cn#api、https://ant.design/components/time-picker-cn',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Cascader',
            data: [
              {
                params: 'showSearch',
                desc: '配置是否可搜索',
                type: 'boolean',
                defaultVal: `{
                  filter: (inputValue, path) =>
                    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
                },`,
              },
              {
                params: 'allowClear',
                desc: '支持清除',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'placement',
                desc: '选择框弹出的位置',
                type: 'bottomLeft bottomRight topLeft topRight',
                defaultVal: 'bottomLeft',
              },
              {
                params: 'getPopupContainer',
                desc: '',
                type: 'function(triggerNode)',
                defaultVal: '默认浮层跟随滚动',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/cascader-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Upload',
            data: [
              {
                params: 'name',
                desc: '发到后台的文件参数名',
                type: 'string',
                defaultVal: 'file',
              },
              {
                params: 'withCredentials',
                desc: '上传请求时是否携带 cookie',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/upload-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Modal',
            data: [
              {
                params: 'closable',
                desc: '是否显示右上角的关闭按钮',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'centered',
                desc: '垂直居中展示 Modal',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'maskClosable',
                desc: '点击蒙层是否允许关闭',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'destroyOnClose',
                desc: '关闭时销毁 Modal 里的子元素',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'zIndex',
                desc: '设置 Modal 的 z-index',
                type: 'number',
                defaultVal: 'Resource.Dict.value.ResourceNormalMaxZIndex.value',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/modal-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'Input、TextArea',
            data: [
              {
                params: 'allowClear',
                desc: '可以点击清除图标删除内容',
                type: 'boolean | { clearIcon: ReactNode }',
                defaultVal: 'true',
              },
              {
                params: 'maxLength',
                desc: '最大长度',
                type: 'number',
                defaultVal: '1000',
              },
              {
                params: 'showCount',
                desc: '是否展示字数',
                type: 'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }',
                defaultVal: 'true',
              },
              {
                params: 'autoSize（适用于TextArea）',
                desc: '自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
                type: 'boolean | object',
                defaultVal: 'false',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/input-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title:
              'InputNumberDecimal1（1位小数）、InputNumberDecimal2（2位小数）、InputNumberInteger（整数）',
            data: [
              {
                params: 'precision',
                desc: '数值精度，配置 formatter 时会以 formatter 为准',
                type: 'number',
                defaultVal:
                  'InputNumberDecimal1 = 1、 InputNumberDecimal2 = 2、 InputNumberInteger = 0',
              },
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/input-number-cn#api',
                type: '-',
                defaultVal: '-',
              },
            ],
          },
          {
            border: true,
            title: 'SubmitButton（默认点击显示loading,通过onClick事件返回promise来取消loading）',
            data: [
              {
                params: '其他属性',
                desc: '参考 https://ant.design/components/button-cn#api',
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
