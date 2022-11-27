import { Switch } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import ColumnResizeTable from './columnResizeTable';
import ColumnSettingTable from './columnSettingTable';
import FewTable from './fewTable';
import FixedTableSpaceBetweenTable from './fixedTableSpaceBetweenTable';
import ProSearchStateTableImpl from './proStateSearchTable';
import RenderSearchBetweenTable from './renderSearchBetweenTable';
import RowSelectedContinuous from './rowSelectedContinuous';
import RowSelectedNormal from './rowSelectedNormal';
import StateTable from './stateTable';
import Table from './table';
import TableDensitySetting from './tableDensitySetting';

export default () => {
  const [pagination1, setPagination1] = useState(false);
  const [pagination2, setPagination2] = useState(false);
  const [pagination3, setPagination3] = useState(false);
  const [pagination4, setPagination4] = useState(false);
  const [pagination5, setPagination5] = useState(false);

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: `
      import React from 'react';

      import Table from './table';

      <Table isShowExpandSearch defaultExpandSearchCollapse={false} />
          `,
        type: 'PlayGround',
        renderChildren: () => <Table isShowExpandSearch defaultExpandSearchCollapse={false} />,
      },
      {
        id: `p2`,
        name: `表格体可以滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '表格体可以滚动',
            info: '表格体可以滚动',
          },
        },
        codeText: `
      import React from 'react';

      import Table from './table';

      <div style={{ display: 'flex', height: 400 }}>
        <Table
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          autoFixed
        />
      </div>
          `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Switch
              checkedChildren="分页"
              checked={pagination1}
              onChange={() => {
                setPagination1(!pagination1);
              }}
            />

            <Space />

            <div style={{ display: 'flex', height: 400 }}>
              <Table
                style={{ height: '100%' }}
                isShowExpandSearch
                defaultExpandSearchCollapse={false}
                autoFixed
                pagination={pagination1}
              />
            </div>
          </>
        ),
      },
      {
        id: `p3`,
        name: `固定列头`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '固定列头',
            info: '固定列头',
          },
        },
        codeText: `
      import React from 'react';

      import Table from './table';

      <div style={{ display: 'flex', height: 700 }}>
        <Table
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
        />
      </div>
          `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Switch
              checkedChildren="分页"
              checked={pagination2}
              onChange={() => {
                setPagination2(!pagination2);
              }}
            />

            <Space />

            <div style={{ display: 'flex', height: 700 }}>
              <Table
                style={{ height: '100%' }}
                isShowExpandSearch
                defaultExpandSearchCollapse={false}
                fixedHeaderAutoTable
                pagination={pagination2}
              />
            </div>
          </>
        ),
      },
      {
        id: `p4`,
        name: `列表两端的渲染`,
        cardProps: {
          description: {
            title: '列表两端的渲染',
            info: '列表两端的渲染',
          },
        },
        config: [
          {
            title: 'fixedTableSpaceBetweenTable.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';
      import { Button } from 'antd';

      import Table from './table';

      import styles from './fixedTableSpaceBetweenTable.less';

      /**
       * FixedTableSpaceBetweenTable
       * @classdesc
       */
      class FixedTableSpaceBetweenTable extends Table {
        renderTableHeader() {
          return (
            <div className={styles.Header}>
              <h3>查询表格</h3>
              <div>
                <Button type="primary">新建</Button>
              </div>
            </div>
          );
        }

        renderTableFooter() {
          return <div className={styles.Footer}>renderTableFooter</div>;
        }
      }

      export default FixedTableSpaceBetweenTable;
                `,
          },
          {
            title: 'fixedTableSpaceBetweenTable.less',
            mode: 'code',
            scope: { React },
            codeText: `
      .Header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        background-color: #fff;
      }

      .Footer {
        padding: 0 20px 20px 20px;
        font-size: 16px;
        text-align: center;
        background-color: #fff;
      }
                `,
          },
          {
            title: 'index.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';
      import FixedTableSpaceBetweenTable from './fixedTableSpaceBetweenTable';

      <div style={{ display: 'flex', height: 800 }}>
        <FixedTableSpaceBetweenTable
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
        />
      </div>
                `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <>
            <Switch
              checkedChildren="分页"
              checked={pagination3}
              onChange={() => {
                setPagination3(!pagination3);
              }}
            />

            <Space />

            <div style={{ display: 'flex', height: 800 }}>
              <FixedTableSpaceBetweenTable
                style={{ height: '100%' }}
                isShowExpandSearch
                defaultExpandSearchCollapse={false}
                fixedHeaderAutoTable
                pagination={pagination3}
              />
            </div>
          </>
        ),
      },
      {
        id: `p5`,
        name: `分页始终居底`,
        cardProps: {
          description: {
            title: '分页始终居底',
            info: '分页始终居底',
          },
        },
        config: [
          {
            title: 'fewTable.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';

      import Table from './table';
      import { oneData } from './mock';

      /**
       * FewTable
       * @classdesc
       */
      class FewTable extends Table {
        fetchDataExecute(searchParams) {
          return new Promise((resolve) => {
            this.setState(
              {
                loading: true,
              },
              () => {
                setTimeout(() => {
                  this.request
                    .get({
                      mock: true,
                      path: oneData.data,
                    })
                    .then((result) => {
                      this.setState(
                        {
                          dataSource: {
                            total: result.total,
                            list: result.list,
                          },
                          loading: false,
                        },
                        () => {
                          resolve();
                        },
                      );
                    });
                }, 2000);
              },
            );
          });
        }
      }

      export default FewTable;
                `,
          },
          {
            title: 'index.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';
      import FewTable from './fewTable';

      <div style={{ display: 'flex', height: 700 }}>
        <FewTable
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
          fixedTableSpaceBetween
        />
      </div>
                `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <>
            <Switch
              checkedChildren="分页"
              checked={pagination4}
              onChange={() => {
                setPagination4(!pagination4);
              }}
            />

            <Space />

            <div style={{ display: 'flex', height: 700 }}>
              <FewTable
                style={{ height: '100%' }}
                isShowExpandSearch
                defaultExpandSearchCollapse={false}
                fixedHeaderAutoTable
                fixedTableSpaceBetween
                pagination={pagination4}
              />
            </div>
          </>
        ),
      },
      {
        id: `p6`,
        name: `使用@ctsj/state的Table`,
        cardProps: {
          description: {
            title: '使用@ctsj/state的Table',
            info: '使用@ctsj/state的Table',
          },
        },
        config: [
          {
            title: 'serviceRegister.js',
            mode: 'code',
            scope: { React },
            codeText: `
      import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

      function serviceRegister() {
        const requireComponent = require.context('./service', false, /.*\\.(js)$/);

        const services = {};
        requireComponent.keys().forEach((fileName) => {
          const serviceKey = fileName.substring(2, fileName.length - 3);
          services[serviceKey] = requireComponent(fileName);
        });

        ServiceRegister.initConfig(services);
      }

      serviceRegister();
                `,
          },
          {
            title: 'model/user.js',
            mode: 'code',
            scope: { React },
            codeText: `
      import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

      export default () => Object.assign(ServiceRegister.model('user'), {});
                `,
          },
          {
            title: 'service/user.js',
            mode: 'code',
            scope: { React },
            codeText: `
      import { Ajax } from '@baifendian/adhere';

      const request = new Ajax('');

      export const fetchList = (() => {
        return {
          call: () => {
            return request.get({
              path: require('../mock.js').default,
              mock: true,
              loading: {
                show: false,
              },
            });
          },
          defaultResult: () => ({
            total: 0,
            list: [],
          }),
        };
      })();

      export default {
        codeKey: 'code',
        codeSuccessKey: 200,
        dataKey: 'data',
        messageKey: 'message',
      };
                `,
          },
          {
            title: 'stateTable.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';
      import moment from 'moment';
      import { Input, InputNumber, Select, DatePicker } from 'antd';
      import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
      import { createState } from '@ctsj/state/lib/react';
      import { Resource, SearchTable, Dict } from '@baifendian/adhere';

      import './serviceRegister';

      const { Option } = Select;

      const { RangePicker } = DatePicker;

      const { Table, TableStateImplement } = SearchTable;

      const { SearchForm } = Table;

      const { SearchFormRow } = SearchForm;

      const { SearchFormLabel, SearchFormValue } = SearchFormRow;

      const serviceName = 'user';

      /**
       * StateTable
       */
      class StateTable extends TableStateImplement {
        constructor(props) {
          super(props);

          const models = [];

          const requireComponent = require.context('./model', false, /.*\\.(js)$/);

          requireComponent.keys().forEach((fileName) => {
            const model = requireComponent(fileName);
            models.push(model.default());
          });

          this.unsubscribe = createState({
            initialState: { ...this.state },
            models,
            mapState: (state) =>
              Object.assign(
                ServiceRegister.mapStateToProps({
                  namespaces: [serviceName],
                  state,
                }),
                {
                  loading: state.loading,
                },
              ),
            mapDispatch: (dispatch) =>
              ServiceRegister.mapDispatchToProps({
                namespaces: [serviceName],
                dispatch,
              }),
            ref: this,
            middleWares: [],
            reducer: null,
          });
        }

        componentWillUnmount() {
          this.unsubscribe();
        }

        getServiceName() {
          return serviceName;
        }

        getOrderFieldValue() {
          return 'height';
        }

        getTotalKey() {
          return 'total';
        }

        renderSearchForm() {
          return (
            <SearchForm>
               eslint-disable-next-line react/jsx-no-undef
              <SearchFormRow>
                <SearchFormLabel style={{ width: 120 }}>姓名：</SearchFormLabel>
                <SearchFormValue>
                  <Input
                    style={{ width: '90%' }}
                    placeholder="姓名"
                    value={this.state.name}
                    onChange={(e) => {
                      this.onInputChange('name', e);
                    }}
                  />
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>性别：</SearchFormLabel>
                <SearchFormValue>
                  <Select
                    style={{ width: '90%' }}
                    value={this.state.sex}
                    onChange={(v) => {
                      this.onSelectChange('sex', v);
                    }}
                    getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                  >
                    {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                      <Option key={t.value} value={t.value}>
                        {t.label}
                      </Option>
                    ))}
                  </Select>
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>出生年月：</SearchFormLabel>
                <SearchFormValue>
                  <RangePicker
                    style={{ width: '90%' }}
                    value={[this.state.startTime, this.state.endTime]}
                    onChange={(moments) => {
                      this.onDateTimeRangeChange(['startTime', 'endTime'], moments);
                    }}
                    getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                  />
                </SearchFormValue>
              </SearchFormRow>

               eslint-disable-next-line react/jsx-no-undef
              <SearchFormRow>
                <SearchFormLabel style={{ width: 120 }}>籍贯：</SearchFormLabel>
                <SearchFormValue>
                  <Input
                    style={{ width: '90%' }}
                    placeholder="籍贯"
                    value={this.state.homeTown}
                    onChange={(e) => {
                      this.onInputChange('homeTown', e);
                    }}
                  />
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>身高：</SearchFormLabel>
                <SearchFormValue>
                  <InputNumber
                    style={{ width: '90%' }}
                    placeholder="身高"
                    value={this.state.height}
                    onChange={(v) => {
                      this.onSelectChange('height', v);
                    }}
                  />
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>体重：</SearchFormLabel>
                <SearchFormValue>
                  <InputNumber
                    style={{ width: '90%' }}
                    placeholder="体重"
                    value={this.state.width}
                    onChange={(v) => {
                      this.onSelectChange('width', v);
                    }}
                  />
                </SearchFormValue>
              </SearchFormRow>

               eslint-disable-next-line react/jsx-no-undef
              <SearchFormRow>
                <SearchFormLabel style={{ width: 120 }}>所在部门：</SearchFormLabel>
                <SearchFormValue>
                  <Select
                    style={{ width: '90%' }}
                    value={this.state.deptCode}
                    getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                    onChange={(v) => {
                      this.onSelectChange('deptCode', v);
                    }}
                  >
                    <Option value="">全部</Option>
                    <Option value="0">产品部</Option>
                    <Option value="1">开发部</Option>
                    <Option value="2">工程部</Option>
                  </Select>
                </SearchFormValue>
              </SearchFormRow>
            </SearchForm>
          );
        }

        renderSearchFooterItems(defaultItems) {
          return [...defaultItems];
        }

        getParams() {
          return {
            name: '',
            sex: '',
            startTime: null,
            endTime: null,
            deptCode: '',
            homeTown: '',
            width: '',
            height: '',
          };
        }

        getColumns() {
          return [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              align: 'center',
            },
            {
              title: '性别',
              dataIndex: 'sex',
              key: 'sex',
              align: 'center',
              render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
            },
            {
              title: '籍贯',
              dataIndex: 'homeTown',
              key: 'homeTown',
              align: 'center',
            },
            {
              title: '出生年月',
              dataIndex: 'birthday',
              key: 'birthday',
              align: 'center',
              sorter: true,
              sortOrder: this.sortOrder('birthday'),
              render: (val) =>
                val ? moment(val).format(Resource.Dict.value.ResourceMomentFormat10.value()) : '',
            },
            {
              title: '所在部门',
              dataIndex: 'deptName',
              key: 'deptName',
              align: 'center',
            },
            {
              title: '身高',
              dataIndex: 'height',
              key: 'height',
              align: 'center',
              sorter: true,
              sortOrder: this.sortOrder('height'),
            },
            {
              title: '体重',
              dataIndex: 'width',
              key: 'width',
              align: 'center',
              sorter: true,
              sortOrder: this.sortOrder('width'),
            },
          ];
        }

        getFetchListPropName() {
          return 'fetchList';
        }

        fetchDataExecute(searchParams) {
          return super.fetchDataExecute(searchParams);
        }

        onSubTableChange(pagination, filters, sorter) {}
      }

      export default StateTable;
                `,
          },
          {
            title: 'index.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';
      import StateTable from './stateTable';

      <div style={{ display: 'flex', height: 700 }}>
        <StateTable
          style={{ height: '100%' }}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
          fixedTableSpaceBetween
        />
      </div>
                `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <>
            <Switch
              checkedChildren="分页"
              checked={pagination5}
              onChange={() => {
                setPagination5(!pagination5);
              }}
            />

            <Space />

            <div style={{ display: 'flex', height: 700 }}>
              <StateTable
                style={{ height: '100%' }}
                isShowExpandSearch
                defaultExpandSearchCollapse={false}
                fixedHeaderAutoTable
                fixedTableSpaceBetween
                pagination={pagination5}
              />
            </div>
          </>
        ),
      },
      {
        id: `p7`,
        name: `实现TableImplement的table`,
        cardProps: {
          description: {
            title: '实现TableImplement的table',
            info: '实现TableImplement的table',
          },
        },
        config: [
          {
            title: 'table.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';
      import moment from 'moment';
      import { Input, Select, DatePicker, InputNumber } from 'antd';

      import { SearchTable, Resource, Ajax } from '@baifendian/adhere';

      const { Table, TableImplement } = SearchTable;

      const { SearchForm } = Table;

      const { SearchFormRow } = SearchForm;

      const { SearchFormLabel, SearchFormValue } = SearchFormRow;

      const { Option } = Select;

      const { RangePicker } = DatePicker;

      /**
       * Table
       * @class TableImpl
       * @classdesc TableImpl
       */
      class TableImpl extends TableImplement {
        // eslint-disable-next-line no-useless-constructor
        constructor(props) {
          super(props);

          this.request = new Ajax('');

          Object.assign(this.state, {
            loading: false,
          });
        }

        getParams() {
          return {
            name: '',
            sex: '',
            startTime: null,
            endTime: null,
            deptCode: '',
            homeTown: '',
            width: '',
            height: '',
          };
        }

        getFetchDataParams() {
          const {
            searchParams: { startTime, endTime },
          } = this.state;

          return {
            startTime: startTime
              ? \`\${startTime.format(Resource.Dict.value.ResourceMomentFormat10.value())} 00:00:00\`
              : null,
            endTime: endTime
              ? \`\${endTime.format(Resource.Dict.value.ResourceMomentFormat10.value())} 23:59:59\`
              : null,
          };
        }

        getData() {
          return this.state.dataSource.list;
        }

        getColumns() {
          return [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              align: 'center',
            },
            {
              title: '性别',
              dataIndex: 'sex',
              key: 'sex',
              align: 'center',
              render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
            },
            {
              title: '籍贯',
              dataIndex: 'homeTown',
              key: 'homeTown',
              align: 'center',
            },
            {
              title: '出生年月',
              dataIndex: 'birthday',
              key: 'birthday',
              align: 'center',
              sorter: true,
              sortOrder: this.sortOrder('birthday'),
              render: (val) =>
                val ? moment(val).format(Resource.Dict.value.ResourceMomentFormat10.value()) : '',
            },
            {
              title: '所在部门',
              dataIndex: 'deptName',
              key: 'deptName',
              align: 'center',
            },
            {
              title: '身高',
              dataIndex: 'height',
              key: 'height',
              align: 'center',
              sorter: true,
              sortOrder: this.sortOrder('height'),
            },
            {
              title: '体重',
              dataIndex: 'width',
              key: 'width',
              align: 'center',
              sorter: true,
              sortOrder: this.sortOrder('width'),
            },
          ];
        }

        renderSearchForm() {
          return (
            // eslint-disable-next-line react/jsx-no-undef
            <SearchForm>
               eslint-disable-next-line react/jsx-no-undef
              <SearchFormRow>
                <SearchFormLabel style={{ width: 120 }}>姓名：</SearchFormLabel>
                <SearchFormValue>
                  <Input
                    style={{ width: '90%' }}
                    placeholder="姓名"
                    value={this.state.name}
                    onChange={(e) => {
                      this.onInputChange('name', e);
                    }}
                  />
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>性别：</SearchFormLabel>
                <SearchFormValue>
                  <Select
                    style={{ width: '90%' }}
                    value={this.state.sex}
                    onChange={(v) => {
                      this.onSelectChange('sex', v);
                    }}
                    getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                  >
                    {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                      <Option key={t.value} value={t.value}>
                        {t.label}
                      </Option>
                    ))}
                  </Select>
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>出生年月：</SearchFormLabel>
                <SearchFormValue>
                  <RangePicker
                    style={{ width: '90%' }}
                    value={[this.state.startTime, this.state.endTime]}
                    onChange={(moments) => {
                      this.onDateTimeRangeChange(['startTime', 'endTime'], moments);
                    }}
                    getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                  />
                </SearchFormValue>
              </SearchFormRow>

               eslint-disable-next-line react/jsx-no-undef
              <SearchFormRow>
                <SearchFormLabel style={{ width: 120 }}>籍贯：</SearchFormLabel>
                <SearchFormValue>
                  <Input
                    style={{ width: '90%' }}
                    placeholder="籍贯"
                    value={this.state.homeTown}
                    onChange={(e) => {
                      this.onInputChange('homeTown', e);
                    }}
                  />
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>身高：</SearchFormLabel>
                <SearchFormValue>
                  <InputNumber
                    style={{ width: '90%' }}
                    placeholder="身高"
                    value={this.state.height}
                    onChange={(v) => {
                      this.onSelectChange('height', v);
                    }}
                  />
                </SearchFormValue>

                <SearchFormLabel style={{ width: 120 }}>体重：</SearchFormLabel>
                <SearchFormValue>
                  <InputNumber
                    style={{ width: '90%' }}
                    placeholder="体重"
                    value={this.state.width}
                    onChange={(v) => {
                      this.onSelectChange('width', v);
                    }}
                  />
                </SearchFormValue>
              </SearchFormRow>

               eslint-disable-next-line react/jsx-no-undef
              <SearchFormRow>
                <SearchFormLabel style={{ width: 120 }}>所在部门：</SearchFormLabel>
                <SearchFormValue>
                  <Select
                    style={{ width: '90%' }}
                    value={this.state.deptCode}
                    getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                    onChange={(v) => {
                      this.onSelectChange('deptCode', v);
                    }}
                  >
                    <Option value="">全部</Option>
                    <Option value="0">产品部</Option>
                    <Option value="1">开发部</Option>
                    <Option value="2">工程部</Option>
                  </Select>
                </SearchFormValue>
              </SearchFormRow>
            </SearchForm>
          );
        }

        getTotal() {
          return this.state.dataSource.total;
        }

        getOrderFieldValue() {
          return 'height';
        }

        renderSearchFooterItems() {
          return null;
        }

        showLoading() {
          return this.state.loading;
        }

        // eslint-disable-next-line no-unused-vars
        onSubTableChange(pagination, filters, sorter) {}

        fetchDataExecute(searchParams) {
          return new Promise((resolve) => {
            this.setState(
              {
                loading: true,
              },
              () => {
                setTimeout(() => {
                  this.request
                    .get({
                      mock: true,
                      // eslint-disable-next-line global-require
                      path: require('./mock.js').default.data,
                    })
                    .then((result) => {
                      this.setState(
                        {
                          dataSource: {
                            total: result.total,
                            list: result.list,
                          },
                          loading: false,
                        },
                        () => {
                          resolve();
                        },
                      );
                    });
                }, 2000);
              },
            );
          });
        }
      }

      export default TableImpl;
              `,
          },
        ],
        type: 'PlayGroundMulit',
      },
      {
        id: 'p8',
        name: '标准的RowSelected',
        cardProps: {
          description: {
            title: '标准的RowSelected',
            info: '标准的RowSelected',
          },
        },
        config: [
          {
            title: 'rowSelectedNormal.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';

      import { SearchTable } from '@baifendian/adhere';
      import Table from './table';

      const { Table: $SearchTable } = SearchTable;

      /**
       * RowSelectedContinuous
       * @classdesc
       */
      class RowSelectedContinuous extends Table {
          getRowSelectionMode() {
              return $SearchTable.ROW_SELECTION_NORMAL_MODE;
          }
      }

      export default RowSelectedContinuous;
                `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <RowSelectedNormal isShowExpandSearch defaultExpandSearchCollapse={false} />
        ),
      },
      {
        id: 'p9',
        name: '可以跨页选择的RowSelected',
        cardProps: {
          description: {
            title: '可以跨页选择的RowSelected',
            info: '可以跨页选择的RowSelected',
          },
        },
        config: [
          {
            title: 'rowSelectedContinuous.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
      import React from 'react';

      import { SearchTable } from '@baifendian/adhere';
      import Table from './table';

      const { Table: $SearchTable } = SearchTable;

      /**
       * RowSelectedContinuous
       * @classdesc
       */
      class RowSelectedContinuous extends Table {
        getRowSelectionMode() {
          return $SearchTable.ROW_SELECTION_CONTINUOUS_MODE;
        }
      }

      export default RowSelectedContinuous;
                `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <RowSelectedContinuous isShowExpandSearch defaultExpandSearchCollapse={false} />
        ),
      },
      {
        id: 'p10',
        name: '可以拖动的列',
        cardProps: {
          description: {
            title: '可以拖动的列',
            info: '可以拖动的列',
          },
        },
        config: [
          {
            title: 'columnResizeTable.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
  import React from 'react';

  import Table from './table';

  /**
   * ColumnResizeTable
   * @classdesc
   */
  class ColumnResizeTable extends Table {
    getColumns() {
      return super.getColumns().map((column) => ({
        ...column,
        resizable: true,
      }));
    }
  }

  export default ColumnResizeTable;
            `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <div style={{ display: 'flex', height: 700 }}>
            <ColumnResizeTable
              style={{ height: '100%' }}
              isShowExpandSearch
              defaultExpandSearchCollapse={false}
              fixedHeaderAutoTable
            />
          </div>
        ),
      },
      {
        id: 'p11',
        name: '列设置',
        cardProps: {
          description: {
            title: '列设置',
            info: '列设置',
          },
        },
        config: [
          {
            title: 'columnSettingTable.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
  import React from 'react';

  import Table from './table';
  import styles from './fixedTableSpaceBetweenTable.less';

  /**
   * ColumnSettingTable
   * @classdesc
   */
  class ColumnSettingTable extends Table {
    renderTableHeader() {
      return (
        <div className={styles.Header}>
          <h3>查询表格</h3>
          <div>{this.renderColumnSetting()}</div>
        </div>
      );
    }
  }

  export default ColumnSettingTable;
            `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <ColumnSettingTable isShowExpandSearch defaultExpandSearchCollapse={false} />
        ),
      },
      {
        id: 'p12',
        name: '表格密度设置',
        cardProps: {
          description: {
            title: '表格密度设置',
            info: '表格密度设置',
          },
        },
        config: [
          {
            title: 'tableDensitySetting.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
  import React from 'react';

  import Table from './table';
  import styles from './fixedTableSpaceBetweenTable.less';

  /**
   * TableDensitySetting
   * @classdesc
   */
  class TableDensitySetting extends Table {
    renderTableHeader() {
      return (
        <div className={styles.Header}>
          <h3>查询表格</h3>
          <div>{this.renderTableDensitySetting()}</div>
        </div>
      );
    }
  }

  export default TableDensitySetting;
            `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <TableDensitySetting isShowExpandSearch defaultExpandSearchCollapse={false} />
        ),
      },
      {
        id: 'p13',
        name: '查询面板两端的渲染',
        cardProps: {
          description: {
            title: '查询面板两端的渲染',
            info: '查询面板两端的渲染',
          },
        },
        config: [
          {
            title: 'renderSearchBetweenTable.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
  import { Button, Col, Row, Statistic } from 'antd';
  import React from 'react';

  import Table from './table';

  /**
   * RenderSearchBetweenTable
   * @classdesc
   */
  class RenderSearchBetweenTable extends Table {
    renderSearchFormBefore() {
      return (
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            <Button style={{ marginTop: 16 }} type="primary">
              Recharge
            </Button>
          </Col>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} loading />
          </Col>
        </Row>
      );
    }

    renderSearchFormAfter() {
      return (
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            <Button style={{ marginTop: 16 }} type="primary">
              Recharge
            </Button>
          </Col>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} loading />
          </Col>
        </Row>
      );
    }
  }

  export default RenderSearchBetweenTable;
            `,
          },
          {
            title: 'index.jsx',
            mode: 'code',
            scope: { React },
            codeText: `
  <div style={{ display: 'flex', height: 800 }}>
    <RenderSearchBetweenTable
      style={{ height: '100%' }}
      isShowExpandSearch
      defaultExpandSearchCollapse={false}
      fixedHeaderAutoTable
      pagination={pagination3}
    />
  </div>
            `,
          },
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <>
            <div style={{ display: 'flex', height: 800 }}>
              <RenderSearchBetweenTable
                style={{ height: '100%' }}
                isShowExpandSearch
                defaultExpandSearchCollapse={false}
                fixedHeaderAutoTable
                pagination={pagination3}
              />
            </div>
          </>
        ),
      },
      {
        id: `p14`,
        name: `ProSearchStateTable`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'ProSearchStateTable',
            info: 'ProSearchStateTable',
          },
        },
        codeText: ``,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ display: 'flex', height: 700 }}>
            <ProSearchStateTableImpl
              style={{ height: '100%' }}
              isShowExpandSearch
              defaultExpandSearchCollapse={false}
              fixedHeaderAutoTable
              fixedTableSpaceBetween
              pagination={pagination4}
            />
          </div>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SearchTable">
        <p>一种查询表格的通用模式(如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式)</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Table',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'tableClassName',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'tableStyle',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'searchClassName',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'searchStyle',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'reset',
                desc: '是否重置',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'firstLoading',
                desc: '是否是第一次加载',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'antdTableProps',
                desc: 'Table的antd配置',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'isShowExpandSearch',
                desc: '是否有展开和收缩的功能',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'defaultExpandSearchCollapse',
                desc: '展开和收缩的默认状态',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fitSearch',
                desc: '撑开search',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fitTable',
                desc: '撑开表格',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'autoFixed',
                desc: '是否是查询固定，表格自适应',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fixedHeaderAutoTable',
                desc: '锁定列头，表格滚动',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'fixedTableSpaceBetween',
                desc: '两端固定(表格的头始终在上方，分页始终在下方)',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'TableImplement',
            data: [
              {
                params: 'getTableWrapperInstance',
                desc: '',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'SearchForm',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
            ],
          },
          {
            border: true,
            title: 'SearchFormRow',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
            ],
          },
          {
            border: true,
            title: 'SearchFormLabel',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
            ],
          },
          {
            border: true,
            title: 'SearchFormValue',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '重写的方法',
            data: [
              {
                name: 'isShowNumber',
                desc: '表格是否显示序号',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'getTableNumberColumnWidth',
                desc: '表格序号列的宽度',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '80',
              },
              {
                name: 'getNumberGeneratorRule',
                desc: '获取符号列的生成规则',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc:
                  'NUMBER_GENERATOR_RULE_ALONE(单独模式),NUMBER_GENERATOR_RULE_CONTINUITY(连续模式)',
              },
              {
                name: 'renderTableNumberColumn',
                desc: '渲染序号列',
                modifier: 'public',
                params: [
                  {
                    name: 'number',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'params',
                    desc: '',
                    type: '{ record: object; index: number }',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'React.ReactElement',
                returnDesc: '',
              },
              {
                name: 'renderTableHeader',
                desc: '渲染表格的头',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableFooter',
                desc: '渲染表格的脚',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'getRowKey',
                desc: '获取表格的主键属性',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getData',
                desc: '获取表格数据',
                modifier: 'public',
                params: [],
                returnType: 'Array<Object>',
                returnDesc: '',
              },
              {
                name: 'getColumns',
                desc: '获取表格列的信息',
                modifier: 'public',
                params: [],
                returnType: 'Array<object>',
                returnDesc: '',
              },
              {
                name: 'getRowSelection',
                desc: '获取表格行选择对象',
                modifier: 'public',
                params: [],
                returnType: 'TableRowSelection<object>',
                returnDesc: '',
              },
              {
                name: 'renderSearchForm',
                desc: '渲染查询的UI',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableHeader',
                desc: '渲染表格的头',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableFooter',
                desc: '渲染表格的脚',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableNumberColumn',
                desc: '渲染序号列',
                modifier: 'public',
                params: [
                  {
                    name: 'number',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'React.ReactElement',
                returnDesc: '',
              },
              {
                name: 'getTotal',
                desc: '获取表格数据的总数',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getOrderFieldProp',
                desc: '获取表格的排序字段',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderProp',
                desc: '获取表格的排序属性',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'onSubTableChange',
                desc: '获取表格change句柄',
                modifier: 'public',
                params: [
                  {
                    name: 'pagination',
                    desc: '',
                    type: 'TablePaginationConfig',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'filters',
                    desc: '',
                    type: 'Record<string, FilterValue | null>',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'sorter',
                    desc: '',
                    type: 'SorterResult<object> | SorterResult<object>[]',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'extra',
                    desc: '',
                    type: 'TableCurrentDataSource<object>',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clear',
                desc: '清除操作',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'renderSearchFooterItems',
                desc: '渲染SearchFooter的按钮组',
                modifier: 'public',
                params: [],
                returnType: 'Array<React.ReactElement> | null',
                returnDesc: '',
              },
              {
                name: 'onSearch',
                desc: '进行查询',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'searchtableimplement重写的方法',
            data: [
              {
                name: 'getFetchListPropName',
                desc: '获取调用列表接口的函数名',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getFetchListPropNameToFirstUpper',
                desc: '获取调用列表接口的函数名首字母大写',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'onSelectChange',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'property',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'value',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'onInputChange',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'property',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'e',
                    desc: '',
                    type: 'object',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'onDateTimeRangeChange',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'propertys',
                    desc: '',
                    type: 'Array<string>',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'moments',
                    desc: '',
                    type: 'Array<moment>',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getParams',
                desc: '获取查询参数对象',
                modifier: 'public',
                params: [],
                returnType: 'Object',
                returnDesc: '',
              },
              {
                name: 'getServiceName',
                desc: '获取接口服务的model名称',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getFetchDataParams',
                desc: '获取调用数据接口的参数',
                modifier: 'public',
                params: [],
                returnType: 'object',
                returnDesc: '',
              },
              {
                name: 'isShowNumber',
                desc: '是否线上序号列',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'getNumberGeneratorRule',
                desc: '表格序号列的生成规则',
                modifier: 'public',
                params: [],
                returnType: 'Symbol',
                returnDesc: '',
              },
              {
                name: 'getTableNumberColumnWidth',
                desc: '表格序号列的宽度',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getRowKey',
                desc: '数据的主键',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getData',
                desc: 'Table的数据(Table的dataSource字段)',
                modifier: 'public',
                params: [],
                returnType: 'Array<object>',
                returnDesc: '',
              },
              {
                name: 'getDataKey',
                desc: '获取数据的key',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getColumns',
                desc: 'Table的列',
                modifier: 'public',
                params: [],
                returnType: 'Array<ColumnType<object>>',
                returnDesc: '',
              },
              {
                name: 'getRowSelection',
                desc: '获取表格行选择对象',
                modifier: 'public',
                params: [],
                returnType: 'TableRowSelection<object>',
                returnDesc: '',
              },
              {
                name: 'renderSearchFormBefore',
                desc: '渲染Table查询的表单之前的UI',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderSearchForm',
                desc: '渲染Table查询的表单',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderSearchFormAfter',
                desc: '渲染Table查询的表单之后的UI',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderInner',
                desc: '渲染主体',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'getTotal',
                desc: 'Table数据的总条数',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getTotalKey',
                desc: '获取total的key',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getLimit',
                desc: '获取分页条数',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getOrderFieldProp',
                desc: '获取排序字段',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderFieldValue',
                desc: '获取默认排序字段的值',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderProp',
                desc: '获取排序方式',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderPropValue',
                desc: '获取默认排序方式',
                modifier: 'public',
                params: [],
                returnType: "'descend' | 'ascend'",
                returnDesc: '',
              },
              {
                name: 'clear',
                desc: '清空查询条件',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'onClear',
                desc: '点击重置按钮',
                modifier: 'public',
                params: [],
                returnType: 'Promise<void>',
                returnDesc: '',
              },
              {
                name: 'renderSearchFooterItems',
                desc: '渲染表格的工具栏',
                modifier: 'public',
                params: [],
                returnType: 'Array<any>',
                returnDesc: '',
              },
              {
                name: 'showLoading',
                desc: '是否显示遮罩',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'fetchData',
                desc: '加载数据',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'fetchDataExecute',
                desc: '真正的执行获取列表数据的接口',
                modifier: 'public',
                params: [
                  {
                    name: 'searchParams',
                    desc: '',
                    type: 'object',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'onSearch',
                desc: '点击查询',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
